import { Address, BigInt, BigDecimal, ethereum, Bytes, dataSource, DataSourceContext, Int8, log, ByteArray } from "@graphprotocol/graph-ts"

import {
  DexStrategy,
  Deposit as DepositEvent,
  Reinvest as ReinvestEvent,
  Transfer as TransferEvent,
  UpdateAdminFee as UpdateAdminFeeEvent,
  UpdateReinvestReward as UpdateReinvestRewardEvent,
  Withdraw as WithdrawEvent
} from "../../generated/templates/DexStrategy/DexStrategy"

import {
  DexStrategyV4,
  Deposit as DepositEventV4,
  DepositsEnabled as DepositsEnabledEventV4,
  Reinvest as ReinvestEventV4,
  Transfer as TransferEventV4,
  UpdateAdminFee as UpdateAdminFeeEventV4,
  UpdateDevAddr as UpdateDevAddrEventV4,
  UpdateDevFee as UpdateDevFeeEventV4,
  UpdateFeeCollector as UpdateFeeCollectorEventV4,
  UpdateReinvestReward as UpdateReinvestRewardEventV4,
  Withdraw as WithdrawEventV4
} from "../../generated/templates/DexStrategyV4/DexStrategyV4"

import {
  ERC20SymbolDecimals
} from "../../generated/YakStrategies/ERC20SymbolDecimals"

import {
  UserStrategy,
  User,
  Strategy,
  Token,
  Deposit,
  Reinvest,
  Transfer,
  Withdraw,
  Data
} from "../../generated/schema"

import {
  yakStrategies,
  yakStrategiesV4
} from "../yakstrategies"

import {
  DexStrategy as DexStrategyTemplate,
  DexStrategyV4 as DexStrategyV4Template
} from "../../generated/templates"

export function handleOnce(block: ethereum.Block): void {
  let context = dataSource.context()
  for (let i = 0; i < yakStrategies.length; i++) {
    const address = yakStrategies[i].address
    const manualDepositTokenDecimals = yakStrategies[i].manualDepositTokenDecimals
    const manualDepositTokenSymbol = yakStrategies[i].manualDepositTokenSymbol
    let newContext = new DataSourceContext()
    newContext.setString('nativeTokenSymbol', context.getString('nativeTokenSymbol'))
    if (manualDepositTokenDecimals > 0) {
      newContext.setI32('manualDepositTokenDecimals', manualDepositTokenDecimals)
    }
    if (manualDepositTokenSymbol) {
      newContext.setString('manualDepositTokenSymbol', manualDepositTokenSymbol)
    }
    newContext.setBoolean('isDexStrategyV4', false)
    DexStrategyTemplate.createWithContext(address, newContext)
  }
  for (let i = 0; i < yakStrategiesV4.length; i++) {
    const address = yakStrategiesV4[i].address
    const manualDepositTokenDecimals = yakStrategiesV4[i].manualDepositTokenDecimals
    const manualDepositTokenSymbol = yakStrategiesV4[i].manualDepositTokenSymbol
    let newContext = new DataSourceContext()
    newContext.setString('nativeTokenSymbol', context.getString('nativeTokenSymbol'))
    if (manualDepositTokenDecimals > 0) {
      newContext.setI32('manualDepositTokenDecimals', manualDepositTokenDecimals)
    }
    if (manualDepositTokenSymbol) {
      newContext.setString('manualDepositTokenSymbol', manualDepositTokenSymbol)
    }
    newContext.setBoolean('isDexStrategyV4', true)
    DexStrategyV4Template.createWithContext(address, newContext)
  }
}

function processDeposit(event: ethereum.Event, account: Address, amount: BigInt): void {
  let user = createOrLoadUser(account)
  user.depositCount = user.depositCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.depositTokenBalance = strategy.depositTokenBalance.plus(amount)
  strategy.cumulativeDeposits = strategy.cumulativeDeposits.plus(amount)
  strategy.depositCount = strategy.depositCount.plus(BigInt.fromI32(1))
  strategy.cumulativeNetDeposits = strategy.cumulativeNetDeposits.plus(amount)
  strategy.save()

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.cumulativeDepositsOrTransfersIn = userStrategy.cumulativeDepositsOrTransfersIn.plus(amount)
  userStrategy.depositCount = userStrategy.depositCount.plus(BigInt.fromI32(1))
  userStrategy.netDeposits = userStrategy.netDeposits.plus(amount)
  userStrategy.save()

  let deposit = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  deposit.user = user.id
  deposit.strategy = strategy.id
  deposit.userStrategy = userStrategy.id
  deposit.amount = amount

  deposit.blockNumber = event.block.number
  deposit.blockTimestamp = event.block.timestamp
  deposit.transactionHash = event.transaction.hash

  deposit.save()

  let data = createNewData(event, user.id, 'Deposit', 1)
  data.depositTokenAmountFromUser = amount
  data.newTotalDeposits = strategy.depositTokenBalance
  data.newTotalSupply = strategy.totalSupply
  data.save()
}

export function handleDeposit(event: DepositEvent): void {
  processDeposit(event, event.params.account, event.params.amount)
}

export function handleDepositV4(event: DepositEventV4): void {
  processDeposit(event, event.params.account, event.params.amount)
}

export function handleDepositsEnabledV4(event: DepositsEnabledEventV4): void {
  let strategy = createOrLoadStrategy(event)
  strategy.depositsEnabled = event.params.newValue
  strategy.save()
}

function processReinvest(event: ethereum.Event, newTotalDeposits: BigInt, newTotalSupply: BigInt): void {
  let user = createOrLoadUser(event.transaction.from)
  user.reinvestCount = user.reinvestCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.depositTokenBalance = newTotalDeposits
  strategy.totalSupply = newTotalSupply
  strategy.reinvestCount = strategy.reinvestCount.plus(BigInt.fromI32(1))

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.reinvestCount = userStrategy.reinvestCount.plus(BigInt.fromI32(1))

  let reinvest = new Reinvest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  reinvest.user = user.id
  reinvest.strategy = strategy.id
  reinvest.userStrategy = userStrategy.id
  reinvest.newTotalDeposits = newTotalDeposits
  reinvest.newTotalSupply = newTotalSupply
  reinvest.reinvestCount = strategy.reinvestCount
  if (reinvest.newTotalDeposits.equals(BigInt.fromI32(0)) || reinvest.newTotalSupply.equals(BigInt.fromI32(0))) {
    reinvest.ratio = BigDecimal.fromString("1")
  } else {
    reinvest.ratio = reinvest.newTotalDeposits.divDecimal(BigDecimal.fromString(reinvest.newTotalSupply.toString()))
  }

  // Here we get the transfers to the devAddr or feeCollector in the rewardToken
  reinvest.transferAmountToDevAddrOrFeeCollector = BigInt.fromI32(0)
  reinvest.transferAmountToReinvestAddr = BigInt.fromI32(0)
  const receipt = event.receipt
  if (receipt != null) {
    for (let i = 0; i < receipt.logs.length; i++) {
      let receiptLog = receipt.logs[i]
      let logData = receiptLog.data
      let value = BigInt.fromUnsignedBytes(Bytes.fromUint8Array(logData.reverse()))
      if (
        receiptLog.address == strategy.rewardToken &&
        receiptLog.topics[0].toHexString() == "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" && // keccak256 hash of "Transfer(address,address,uint256)"
        ("0x" + receiptLog.topics[1].toHexString().slice(26)) == event.address.toHexString() && // "from" the strategy address
        (
          ("0x" + receiptLog.topics[2].toHexString().slice(26)) == strategy.devAddr.toHexString() || // "to" the devAddr of the strategy
          ("0x" + receiptLog.topics[2].toHexString().slice(26)) == strategy.feeCollector.toHexString() // "to" the feeCollector of the strategy
        )
      ) {
        reinvest.transferAmountToDevAddrOrFeeCollector = reinvest.transferAmountToDevAddrOrFeeCollector.plus(value)
      }
      if (
        receiptLog.address == strategy.rewardToken &&
        receiptLog.topics[0].toHexString() == "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" && // keccak256 hash of "Transfer(address,address,uint256)"
        "0x" + receiptLog.topics[1].toHexString().slice(26) == event.address.toHexString() && // "from" the strategy address
        "0x" + receiptLog.topics[2].toHexString().slice(26) == event.transaction.from.toHexString() // "to" the address which triggered the transaction
      ) {
        reinvest.transferAmountToReinvestAddr = reinvest.transferAmountToReinvestAddr.plus(value)
      }
    }
  }
  reinvest.gasPrice = event.transaction.gasPrice
  reinvest.gasUsed = receipt != null ? receipt.gasUsed : BigInt.fromI32(0)

  reinvest.blockNumber = event.block.number
  reinvest.blockTimestamp = event.block.timestamp
  reinvest.transactionHash = event.transaction.hash

  reinvest.save()

  strategy.cumulativeTransferAmountToDevAddrOrFeeCollector = strategy.cumulativeTransferAmountToDevAddrOrFeeCollector.plus(reinvest.transferAmountToDevAddrOrFeeCollector)
  strategy.cumulativeTransferAmountToReinvestAddr = strategy.cumulativeTransferAmountToReinvestAddr.plus(reinvest.transferAmountToReinvestAddr)
  strategy.cumulativeReinvestGasCost = strategy.cumulativeReinvestGasCost.plus(reinvest.gasPrice.times(reinvest.gasUsed))
  strategy.save()

  userStrategy.cumulativeTransferAmountToReinvestAddr = userStrategy.cumulativeTransferAmountToReinvestAddr.plus(reinvest.transferAmountToReinvestAddr)
  userStrategy.cumulativeReinvestGasCost = userStrategy.cumulativeReinvestGasCost.plus(reinvest.gasPrice.times(reinvest.gasUsed))
  userStrategy.save()

  let data = createNewData(event, user.id, 'Reinvest', 4)
  data.newTotalDeposits = newTotalDeposits
  data.newTotalSupply = newTotalSupply
  data.transferAmountToDevAddrOrFeeCollector = reinvest.transferAmountToDevAddrOrFeeCollector
  data.transferAmountToReinvestAddr = reinvest.transferAmountToReinvestAddr
  data.reinvestGasPrice = reinvest.gasPrice
  data.reinvestGasUsed = reinvest.gasUsed
  data.save()
}

export function handleReinvest(event: ReinvestEvent): void {
  processReinvest(event, event.params.newTotalDeposits, event.params.newTotalSupply)
}

export function handleReinvestV4(event: ReinvestEventV4): void {
  processReinvest(event, event.params.newTotalDeposits, event.params.newTotalSupply)
}

function processTransfer(event: ethereum.Event, from: Address, to: Address, value: BigInt): void {
  let strategy = createOrLoadStrategy(event)
  strategy.transferCount = strategy.transferCount.plus(BigInt.fromI32(1))
  const depositTokenValue = strategy.totalSupply == BigInt.fromI32(0) ? value : strategy.depositTokenBalance.times(value).div(strategy.totalSupply)

  let transfer = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  transfer.strategy = strategy.id
  transfer.value = value
  transfer.depositTokenValue = depositTokenValue

  transfer.blockNumber = event.block.number
  transfer.blockTimestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash

  if (from == Address.zero()) {  // Minting new YRT (Deposit)

    let toUser = createOrLoadUser(to)
    toUser.transferInCount = toUser.transferInCount.plus(BigInt.fromI32(1))
    toUser.save()

    let userStrategyTo = createOrLoadUserStrategy(toUser.id, strategy.id)
    userStrategyTo.transferInCount = userStrategyTo.transferInCount.plus(BigInt.fromI32(1))
    userStrategyTo.yrtBalance = userStrategyTo.yrtBalance.plus(value)
    userStrategyTo.save()

    strategy.totalSupply = strategy.totalSupply.plus(value)
    strategy.save()

    transfer.toUser = toUser.id
    transfer.userStrategyTo = userStrategyTo.id
    transfer.save()

    let dataTo = createNewData(event, toUser.id, 'Transfer', 3)
    dataTo.yrtAmountToUser = value
    dataTo.newTotalDeposits = strategy.depositTokenBalance
    dataTo.newTotalSupply = strategy.totalSupply
    dataTo.save()
  } else if (to == Address.zero()) {  // Burning YRT (Withdraw)

    let fromUser = createOrLoadUser(from)
    fromUser.transferOutCount = fromUser.transferOutCount.plus(BigInt.fromI32(1))
    fromUser.save()

    let userStrategyFrom = createOrLoadUserStrategy(fromUser.id, strategy.id)
    userStrategyFrom.transferOutCount = userStrategyFrom.transferOutCount.plus(BigInt.fromI32(1))
    userStrategyFrom.yrtBalance = userStrategyFrom.yrtBalance.minus(value)
    userStrategyFrom.save()

    strategy.totalSupply = strategy.totalSupply.minus(value)
    strategy.save()

    transfer.fromUser = fromUser.id
    transfer.userStrategyFrom = userStrategyFrom.id
    transfer.save()

    let dataFrom = createNewData(event, fromUser.id, 'Transfer', 3)
    dataFrom.yrtAmountFromUser = value
    dataFrom.newTotalDeposits = strategy.depositTokenBalance
    dataFrom.newTotalSupply = strategy.totalSupply
    dataFrom.save()
  } else {  // Transfers between two addresses (no changes to strategy totalSupply in this case but we do change the userStrategy netDeposits)

    strategy.save()

    let toUser = createOrLoadUser(to)
    toUser.transferInCount = toUser.transferInCount.plus(BigInt.fromI32(1))
    toUser.save()

    let userStrategyTo = createOrLoadUserStrategy(toUser.id, strategy.id)
    userStrategyTo.netDeposits = userStrategyTo.netDeposits.plus(depositTokenValue)
    userStrategyTo.yrtBalance = userStrategyTo.yrtBalance.plus(value)
    userStrategyTo.cumulativeDepositsOrTransfersIn = userStrategyTo.cumulativeDepositsOrTransfersIn.plus(depositTokenValue)
    userStrategyTo.transferInCount = userStrategyTo.transferInCount.plus(BigInt.fromI32(1))
    userStrategyTo.save()

    let dataTo = createNewData(event, toUser.id, 'Transfer', 3)
    dataTo.yrtAmountToUser = value
    dataTo.depositTokenAmountFromUser = depositTokenValue
    dataTo.newTotalDeposits = strategy.depositTokenBalance
    dataTo.newTotalSupply = strategy.totalSupply
    dataTo.save()

    let fromUser = createOrLoadUser(from)
    fromUser.transferOutCount = fromUser.transferOutCount.plus(BigInt.fromI32(1))
    fromUser.save()

    let userStrategyFrom = createOrLoadUserStrategy(fromUser.id, strategy.id)
    userStrategyFrom.netDeposits = userStrategyFrom.netDeposits.minus(depositTokenValue)
    userStrategyFrom.yrtBalance = userStrategyFrom.yrtBalance.minus(value)
    userStrategyFrom.cumulativeWithdrawsOrTransfersOut = userStrategyFrom.cumulativeWithdrawsOrTransfersOut.plus(depositTokenValue)
    userStrategyFrom.transferOutCount = userStrategyFrom.transferOutCount.plus(BigInt.fromI32(1))
    userStrategyFrom.save()

    let dataFrom = createNewData(event, fromUser.id, 'Transfer', 3)
    dataFrom.yrtAmountFromUser = value
    dataFrom.depositTokenAmountToUser = depositTokenValue
    dataFrom.newTotalDeposits = strategy.depositTokenBalance
    dataFrom.newTotalSupply = strategy.totalSupply
    dataFrom.save()

    transfer.toUser = toUser.id
    transfer.fromUser = fromUser.id
    transfer.userStrategyTo = userStrategyTo.id
    transfer.userStrategyFrom = userStrategyFrom.id
    transfer.save()
  }
}

export function handleTransfer(event: TransferEvent): void {
  processTransfer(event, event.params.from, event.params.to, event.params.value)
}

export function handleTransferV4(event: TransferEventV4): void {
  processTransfer(event, event.params.from, event.params.to, event.params.value)
}

export function processUpdateAdminFee(event: ethereum.Event, newValue: BigInt): void {
  let strategy = createOrLoadStrategy(event)
  strategy.adminFee = newValue
  strategy.save()
}

export function handleUpdateAdminFee(event: UpdateAdminFeeEvent): void {
  processUpdateAdminFee(event, event.params.newValue)
}

export function handleUpdateAdminFeeV4(event: UpdateAdminFeeEventV4): void {
  processUpdateAdminFee(event, event.params.newValue)
}

export function handleUpdateDevAddrV4(event: UpdateDevAddrEventV4): void {
  let strategy = createOrLoadStrategy(event)
  strategy.devAddr = event.params.newValue
  strategy.save()
}

export function handleUpdateDevFeeV4(event: UpdateDevFeeEventV4): void {
  let strategy = createOrLoadStrategy(event)
  strategy.devFee = event.params.newValue
  strategy.save()
}

export function handleUpdateFeeCollectorV4(event: UpdateFeeCollectorEventV4): void {
  let strategy = createOrLoadStrategy(event)
  strategy.feeCollector = event.params.newValue
  strategy.save()
}

export function processUpdateReinvestReward(event: ethereum.Event, newValue: BigInt): void {
  let strategy = createOrLoadStrategy(event)
  strategy.reinvestFee = newValue
  strategy.save()
}

export function handleUpdateReinvestReward(event: UpdateReinvestRewardEvent): void {
  processUpdateReinvestReward(event, event.params.newValue)
}

export function handleUpdateReinvestRewardV4(event: UpdateReinvestRewardEventV4): void {
  processUpdateReinvestReward(event, event.params.newValue)
}

export function processWithdraw(event: ethereum.Event, account: Address, amount: BigInt): void {
  let user = createOrLoadUser(account)
  user.withdrawCount = user.withdrawCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.depositTokenBalance = strategy.depositTokenBalance.minus(amount)
  strategy.cumulativeWithdraws = strategy.cumulativeWithdraws.plus(amount)
  strategy.withdrawCount = strategy.withdrawCount.plus(BigInt.fromI32(1))
  strategy.cumulativeNetDeposits = strategy.cumulativeNetDeposits.minus(amount)
  strategy.save()

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.cumulativeWithdrawsOrTransfersOut = userStrategy.cumulativeWithdrawsOrTransfersOut.plus(amount)
  userStrategy.withdrawCount = userStrategy.withdrawCount.plus(BigInt.fromI32(1))
  userStrategy.netDeposits = userStrategy.netDeposits.minus(amount)
  userStrategy.save()

  let withdraw = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  withdraw.user = user.id
  withdraw.strategy = strategy.id
  withdraw.userStrategy = userStrategy.id
  withdraw.amount = amount

  withdraw.blockNumber = event.block.number
  withdraw.blockTimestamp = event.block.timestamp
  withdraw.transactionHash = event.transaction.hash

  withdraw.save()

  let data = createNewData(event, user.id, 'Withdraw', 2)
  data.depositTokenAmountToUser = amount
  data.newTotalDeposits = strategy.depositTokenBalance
  data.newTotalSupply = strategy.totalSupply
  data.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  processWithdraw(event, event.params.account, event.params.amount)
}

export function handleWithdrawV4(event: WithdrawEventV4): void {
  processWithdraw(event, event.params.account, event.params.amount)
}

function createOrLoadStrategy(event: ethereum.Event): Strategy {
  let id = event.address
  let strategy = Strategy.load(id)
  if (strategy == null) {
    strategy = new Strategy(id)
    let context = dataSource.context()
    let isDexStrategyV4 = context.getBoolean('isDexStrategyV4')

    if (isDexStrategyV4) {
      let strategyContract = DexStrategyV4.bind(event.address)
      strategy.name = strategyContract.name()
      strategy.depositToken = createOrLoadToken(strategyContract.depositToken()).id
      strategy.rewardToken = createOrLoadToken(strategyContract.rewardToken()).id
      let devAddrResult = strategyContract.try_devAddr()
      strategy.devAddr = devAddrResult.reverted ? Address.zero() : devAddrResult.value

      let feeCollectorResult = strategyContract.try_feeCollector()
      strategy.feeCollector = feeCollectorResult.reverted ? Address.zero() : feeCollectorResult.value

      let adminFeeResult = strategyContract.try_ADMIN_FEE_BIPS()
      strategy.adminFee = adminFeeResult.reverted ? BigInt.fromI32(0) : adminFeeResult.value

      let devFeeResult = strategyContract.try_DEV_FEE_BIPS()
      strategy.devFee = devFeeResult.reverted ? BigInt.fromI32(0) : devFeeResult.value

      strategy.reinvestFee = strategyContract.REINVEST_REWARD_BIPS()

      let depositsEnabledResult = strategyContract.try_DEPOSITS_ENABLED()
      if (!depositsEnabledResult.reverted) {
        strategy.depositsEnabled = depositsEnabledResult.value
      }
    } else {
      let strategyContract = DexStrategy.bind(event.address)
      strategy.name = strategyContract.name()
      strategy.depositToken = createOrLoadToken(strategyContract.lpToken()).id
      strategy.rewardToken = createOrLoadToken(strategyContract.rewardToken()).id
      strategy.adminFee = strategyContract.ADMIN_FEE_BIPS()
      strategy.devFee = BigInt.fromI32(0)
      strategy.devAddr = Address.zero()
      strategy.feeCollector = Address.zero()
      strategy.reinvestFee = strategyContract.REINVEST_REWARD_BIPS()
    }

    strategy.depositTokenBalance = BigInt.fromI32(0)
    strategy.totalSupply = BigInt.fromI32(0)
    strategy.cumulativeDeposits = BigInt.fromI32(0)
    strategy.depositCount = BigInt.fromI32(0)
    strategy.cumulativeWithdraws = BigInt.fromI32(0)
    strategy.withdrawCount = BigInt.fromI32(0)
    strategy.cumulativeNetDeposits = BigInt.fromI32(0)
    strategy.transferCount = BigInt.fromI32(0)
    strategy.reinvestCount = BigInt.fromI32(0)
    strategy.cumulativeTransferAmountToDevAddrOrFeeCollector = BigInt.fromI32(0)
    strategy.cumulativeTransferAmountToReinvestAddr = BigInt.fromI32(0)
    strategy.cumulativeReinvestGasCost = BigInt.fromI32(0)
  }
  strategy.save()
  return strategy
}

function createOrLoadToken(id: Address): Token {
  let token = Token.load(id)
  if (token == null) {
    token = new Token(id)
    let context = dataSource.context()
    if (id == Address.zero()) {
      token.decimals = BigInt.fromI32(18)
      token.symbol = context.getString('nativeTokenSymbol')
    } else {
      let tokenContract = ERC20SymbolDecimals.bind(id)
      // We have a couple of lines here to deal with the situation when calling decimals and symbol on the depositToken fails (e.g. GLP on Avalanche)
      let decimalsResult = tokenContract.try_decimals()
      token.decimals = decimalsResult.reverted ? BigInt.fromI32(context.getI32('manualDepositTokenDecimals')) : BigInt.fromI32(decimalsResult.value)
      let symbolResult = tokenContract.try_symbol()
      token.symbol = symbolResult.reverted ? context.getString('manualDepositTokenSymbol') : symbolResult.value
    }
  }
  token.save()
  return token
}

function createOrLoadUser(id: Address): User {
  let user = User.load(id)
  if (user == null) {
    user = new User(id)
    user.depositCount = BigInt.fromI32(0)
    user.withdrawCount = BigInt.fromI32(0)
    user.transferInCount = BigInt.fromI32(0)
    user.transferOutCount = BigInt.fromI32(0)
    user.reinvestCount = BigInt.fromI32(0)
  }
  user.save()
  return user
}

function createOrLoadUserStrategy(userId: Bytes, strategyId: Bytes): UserStrategy {
  let id = userId.concat(strategyId)
  let userStrategy = UserStrategy.load(id)
  if (userStrategy == null) {
    userStrategy = new UserStrategy(id)
    userStrategy.user = userId
    userStrategy.strategy = strategyId
    userStrategy.netDeposits = BigInt.fromI32(0)
    userStrategy.yrtBalance = BigInt.fromI32(0)
    userStrategy.cumulativeDepositsOrTransfersIn = BigInt.fromI32(0)
    userStrategy.depositCount = BigInt.fromI32(0)
    userStrategy.transferInCount = BigInt.fromI32(0)
    userStrategy.cumulativeWithdrawsOrTransfersOut = BigInt.fromI32(0)
    userStrategy.withdrawCount = BigInt.fromI32(0)
    userStrategy.transferOutCount = BigInt.fromI32(0)
    userStrategy.reinvestCount = BigInt.fromI32(0)
    userStrategy.cumulativeTransferAmountToReinvestAddr = BigInt.fromI32(0)
    userStrategy.cumulativeReinvestGasCost = BigInt.fromI32(0)
  }
  userStrategy.save()
  return userStrategy
}

function createNewData(event: ethereum.Event, userId: Bytes, eventName: string, eventNameId: Int8): Data {
  let data = new Data(1) // ID is set by the indexer
  data.user = userId
  data.strategy = createOrLoadStrategy(event).id
  data.userStrategy = createOrLoadUserStrategy(userId, event.address).id
  data.eventName = eventName
  data.eventNameId = eventNameId
  data.depositTokenAmountFromUser = BigInt.fromI32(0)
  data.depositTokenAmountToUser = BigInt.fromI32(0)
  data.yrtAmountFromUser = BigInt.fromI32(0)
  data.yrtAmountToUser = BigInt.fromI32(0)
  data.newTotalDeposits = BigInt.fromI32(0)
  data.newTotalSupply = BigInt.fromI32(0)
  data.transferAmountToDevAddrOrFeeCollector = BigInt.fromI32(0)
  data.transferAmountToReinvestAddr = BigInt.fromI32(0)
  data.reinvestGasPrice = BigInt.fromI32(0)
  data.reinvestGasUsed = BigInt.fromI32(0)
  data.blockNumber = event.block.number
  data.blockTimestamp = event.block.timestamp
  data.transactionHash = event.transaction.hash
  data.logIndex = event.logIndex
  // data.save() Specifically do NOT want this line here as it results in
  //             duplicate entities being created (blank additional ones)
  return data
}