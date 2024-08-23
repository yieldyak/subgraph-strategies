import { dataSource, DataSourceContext, ethereum } from "@graphprotocol/graph-ts";
import { yakStrategies, yakStrategiesV4 } from "../yakstrategies";
import { DexStrategy, DexStrategyV4 } from "../../generated/templates";

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
    DexStrategy.createWithContext(address, newContext)
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
    DexStrategyV4.createWithContext(address, newContext)
  }
}