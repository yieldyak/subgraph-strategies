import { Address, BigInt, BigDecimal, ethereum, ByteArray, Bytes, dataSource } from "@graphprotocol/graph-ts"
import {
  DexStrategyV4,
  Deposit as DepositEvent,
  DepositsEnabled as DepositsEnabledEvent,
  Reinvest as ReinvestEvent,
  Transfer as TransferEvent,
  UpdateAdminFee as UpdateAdminFeeEvent,
  UpdateDevAddr as UpdateDevAddrEvent,
  UpdateDevFee as UpdateDevFeeEvent,
  UpdateReinvestReward as UpdateReinvestRewardEvent,
  Withdraw as WithdrawEvent
} from "../../generated/DexStrategyV4/DexStrategyV4"
import {
  ERC20SymbolDecimals
} from "../../generated/DexStrategyV4/ERC20SymbolDecimals"
import {
  UserStrategy,
  User,
  Strategy,
  Token,
  Deposit,
  Reinvest,
  Transfer,
  Withdraw
} from "../../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let user = createOrLoadUser(event.params.account)
  user.depositCount = user.depositCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.depositCount = strategy.depositCount.plus(BigInt.fromI32(1))
  strategy.depositTokenBalance = strategy.depositTokenBalance.plus(event.params.amount)
  strategy.save()

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.depositCount = userStrategy.depositCount.plus(BigInt.fromI32(1))
  userStrategy.netDeposits = userStrategy.netDeposits.plus(event.params.amount)
  userStrategy.save()

  let deposit = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  deposit.user = user.id
  deposit.strategy = strategy.id
  deposit.userStrategy = userStrategy.id
  deposit.amount = event.params.amount

  deposit.blockNumber = event.block.number
  deposit.blockTimestamp = event.block.timestamp
  deposit.transactionHash = event.transaction.hash

  deposit.save()
}

export function handleDepositsEnabled(event: DepositsEnabledEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.depositsEnabled = event.params.newValue
  strategy.save()
}

export function handleReinvest(event: ReinvestEvent): void {
  let user = createOrLoadUser(event.transaction.from)
  user.reinvestCount = user.reinvestCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.reinvestCount = strategy.reinvestCount.plus(BigInt.fromI32(1))
  strategy.depositTokenBalance = event.params.newTotalDeposits
  strategy.totalSupply = event.params.newTotalSupply
  strategy.save()

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.reinvestCount = userStrategy.reinvestCount.plus(BigInt.fromI32(1))
  userStrategy.save()

  let reinvest = new Reinvest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  reinvest.user = user.id
  reinvest.strategy = strategy.id
  reinvest.userStrategy = userStrategy.id
  reinvest.newTotalDeposits = event.params.newTotalDeposits
  reinvest.newTotalSupply = event.params.newTotalSupply
  reinvest.reinvestCount = strategy.reinvestCount
  if (reinvest.newTotalDeposits.equals(BigInt.fromI32(0)) || reinvest.newTotalSupply.equals(BigInt.fromI32(0))) {
    reinvest.ratio = BigDecimal.fromString("1")
  } else {
    reinvest.ratio = reinvest.newTotalDeposits.divDecimal(BigDecimal.fromString(reinvest.newTotalSupply.toString()))
  }

  // Here we get the transfers to the devAddr in the rewardToken
  reinvest.transferAmountToDevAddr = BigInt.fromI32(0)
  const receipt = event.receipt
  if (receipt != null) {
    for (let i = 0; i < receipt.logs.length; i++) {
      let log = receipt.logs[i]
      if (
        log.address == strategy.rewardToken &&
        log.topics[0].toHexString() == "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" && // keccak256 hash of "Transfer(address,address,uint256)"
        log.topics[1] == event.address && // "from" the strategy address
        log.topics[2] == strategy.devAddr // "to" the devAddr of the strategy
      ) {
        reinvest.transferAmountToDevAddr = reinvest.transferAmountToDevAddr.plus(BigInt.fromUnsignedBytes(log.data))
      }
    }
  }

  reinvest.blockNumber = event.block.number
  reinvest.blockTimestamp = event.block.timestamp
  reinvest.transactionHash = event.transaction.hash

  reinvest.save()
}

export function handleTransfer(event: TransferEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.transferCount = strategy.transferCount.plus(BigInt.fromI32(1))
  const depositTokenValue = strategy.totalSupply == BigInt.fromI32(0) ? event.params.value : strategy.depositTokenBalance.times(event.params.value).div(strategy.totalSupply)

  let transfer = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  transfer.strategy = strategy.id
  transfer.value = event.params.value
  transfer.depositTokenValue = depositTokenValue

  transfer.blockNumber = event.block.number
  transfer.blockTimestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash

  if (event.params.from == Address.zero()) {  // Minting new YRT (Deposit)

    let toUser = createOrLoadUser(event.params.to)
    toUser.transferInCount = toUser.transferInCount.plus(BigInt.fromI32(1))
    toUser.save()

    let userStrategyTo = createOrLoadUserStrategy(toUser.id, strategy.id)
    userStrategyTo.transferInCount = userStrategyTo.transferInCount.plus(BigInt.fromI32(1))
    userStrategyTo.yrtBalance = userStrategyTo.yrtBalance.plus(event.params.value)
    userStrategyTo.save()

    strategy.totalSupply = strategy.totalSupply.plus(event.params.value)
    strategy.save()

    transfer.toUser = toUser.id
    transfer.userStrategyTo = userStrategyTo.id
    transfer.save()
  } else if (event.params.to == Address.zero()) {  // Burning YRT (Withdraw)

    let fromUser = createOrLoadUser(event.params.from)
    fromUser.transferOutCount = fromUser.transferOutCount.plus(BigInt.fromI32(1))
    fromUser.save()

    let userStrategyFrom = createOrLoadUserStrategy(fromUser.id, strategy.id)
    userStrategyFrom.transferOutCount = userStrategyFrom.transferOutCount.plus(BigInt.fromI32(1))
    userStrategyFrom.yrtBalance = userStrategyFrom.yrtBalance.minus(event.params.value)
    userStrategyFrom.save()

    strategy.totalSupply = strategy.totalSupply.minus(event.params.value)
    strategy.save()

    transfer.fromUser = fromUser.id
    transfer.userStrategyFrom = userStrategyFrom.id
    transfer.save()
  } else {  // Transfers between two addresses (no changes to strategy totalSupply in this case but we do change the userStrategy netDeposits)

    strategy.save()

    let toUser = createOrLoadUser(event.params.to)
    toUser.transferInCount = toUser.transferInCount.plus(BigInt.fromI32(1))
    toUser.save()

    let userStrategyTo = createOrLoadUserStrategy(toUser.id, strategy.id)
    userStrategyTo.transferInCount = userStrategyTo.transferInCount.plus(BigInt.fromI32(1))
    userStrategyTo.yrtBalance = userStrategyTo.yrtBalance.plus(event.params.value)
    userStrategyTo.netDeposits = userStrategyTo.netDeposits.plus(depositTokenValue)
    userStrategyTo.save()

    let fromUser = createOrLoadUser(event.params.from)
    fromUser.transferOutCount = fromUser.transferOutCount.plus(BigInt.fromI32(1))
    fromUser.save()

    let userStrategyFrom = createOrLoadUserStrategy(fromUser.id, strategy.id)
    userStrategyFrom.transferOutCount = userStrategyFrom.transferOutCount.plus(BigInt.fromI32(1))
    userStrategyFrom.yrtBalance = userStrategyFrom.yrtBalance.minus(event.params.value)
    userStrategyFrom.netDeposits = userStrategyFrom.netDeposits.minus(depositTokenValue)
    userStrategyFrom.save()

    transfer.toUser = toUser.id
    transfer.fromUser = fromUser.id
    transfer.userStrategyTo = userStrategyTo.id
    transfer.userStrategyFrom = userStrategyFrom.id
    transfer.save()
  }
}

export function handleUpdateAdminFee(event: UpdateAdminFeeEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.adminFee = event.params.newValue
  strategy.save()
}

export function handleUpdateDevAddr(event: UpdateDevAddrEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.devAddr = event.params.newValue
  strategy.save()
}

export function handleUpdateDevFee(event: UpdateDevFeeEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.devFee = event.params.newValue
  strategy.save()
}

export function handleUpdateReinvestReward(event: UpdateReinvestRewardEvent): void {
  let strategy = createOrLoadStrategy(event)
  strategy.reinvestFee = event.params.newValue
  strategy.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let user = createOrLoadUser(event.params.account)
  user.withdrawCount = user.withdrawCount.plus(BigInt.fromI32(1))
  user.save()

  let strategy = createOrLoadStrategy(event)
  strategy.withdrawCount = strategy.withdrawCount.plus(BigInt.fromI32(1))
  strategy.depositTokenBalance = strategy.depositTokenBalance.minus(event.params.amount)
  strategy.save()

  let userStrategy = createOrLoadUserStrategy(user.id, strategy.id)
  userStrategy.withdrawCount = userStrategy.withdrawCount.plus(BigInt.fromI32(1))
  userStrategy.netDeposits = userStrategy.netDeposits.minus(event.params.amount)
  userStrategy.save()

  let withdraw = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  withdraw.user = user.id
  withdraw.strategy = strategy.id
  withdraw.userStrategy = userStrategy.id
  withdraw.amount = event.params.amount

  withdraw.blockNumber = event.block.number
  withdraw.blockTimestamp = event.block.timestamp
  withdraw.transactionHash = event.transaction.hash

  withdraw.save()
}

function createOrLoadStrategy(event: ethereum.Event): Strategy {
  let id = event.address
  let strategy = Strategy.load(id)
  if (strategy == null) {
    strategy = new Strategy(id)

    let strategyContract = DexStrategyV4.bind(event.address)
    strategy.name = strategyContract.name()
    strategy.depositToken = createOrLoadToken(strategyContract.depositToken()).id
    strategy.rewardToken = createOrLoadToken(strategyContract.rewardToken()).id
    let devAddrResult = strategyContract.try_devAddr()
    strategy.devAddr = devAddrResult.reverted ? Address.zero() : devAddrResult.value

    let adminFeeResult = strategyContract.try_ADMIN_FEE_BIPS()
    strategy.adminFee = adminFeeResult.reverted ? BigInt.fromI32(0) : adminFeeResult.value

    let devFeeResult = strategyContract.try_DEV_FEE_BIPS()
    strategy.devFee = devFeeResult.reverted ? BigInt.fromI32(0) : devFeeResult.value

    strategy.reinvestFee = strategyContract.REINVEST_REWARD_BIPS()

    let depositsEnabledResult = strategyContract.try_DEPOSITS_ENABLED()
    if (!depositsEnabledResult.reverted) {
      strategy.depositsEnabled = depositsEnabledResult.value
    }

    strategy.reinvestCount = BigInt.fromI32(0)
    strategy.depositCount = BigInt.fromI32(0)
    strategy.withdrawCount = BigInt.fromI32(0)
    strategy.transferCount = BigInt.fromI32(0)
    strategy.depositTokenBalance = BigInt.fromI32(0)
    strategy.totalSupply = BigInt.fromI32(0)
  }
  strategy.save()
  return strategy
}

function createOrLoadToken(id: Address): Token {
  let token = Token.load(id)
  if (token == null) {
    token = new Token(id)
    if (id == Address.zero()) {
      token.decimals = BigInt.fromI32(18)
      let context = dataSource.context()
      token.symbol = context.getString('nativeTokenSymbol')
    } else {
      let tokenContract = ERC20SymbolDecimals.bind(id)
      token.decimals = BigInt.fromI32(tokenContract.decimals())
      token.symbol = tokenContract.symbol()
    }
  }
  token.save()
  return token
}

function createOrLoadUser(id: Address): User {
  let user = User.load(id)
  if (user == null) {
    user = new User(id)
    user.reinvestCount = BigInt.fromI32(0)
    user.depositCount = BigInt.fromI32(0)
    user.withdrawCount = BigInt.fromI32(0)
    user.transferInCount = BigInt.fromI32(0)
    user.transferOutCount = BigInt.fromI32(0)
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
    userStrategy.reinvestCount = BigInt.fromI32(0)
    userStrategy.depositCount = BigInt.fromI32(0)
    userStrategy.withdrawCount = BigInt.fromI32(0)
    userStrategy.transferInCount = BigInt.fromI32(0)
    userStrategy.transferOutCount = BigInt.fromI32(0)
  }
  userStrategy.save()
  return userStrategy
}