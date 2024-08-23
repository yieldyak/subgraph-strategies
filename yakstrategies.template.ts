import { Address, BigInt } from "@graphprotocol/graph-ts";

class YakStrategy {
  address: Address;
  startBlock: BigInt;
  manualDepositTokenSymbol: string | null;
  manualDepositTokenDecimals: i32;
  
  constructor(
    address: string,
    startBlock: BigInt,
    manualDepositTokenSymbol: string | null = null,
    manualDepositTokenDecimals: i32 = -1,
  ) {
    this.address = Address.fromString(address);
    this.startBlock = startBlock
    this.manualDepositTokenSymbol = manualDepositTokenSymbol;
    this.manualDepositTokenDecimals = manualDepositTokenDecimals;
  }
}

export const yakStrategiesV4: YakStrategy[] = [
  {{#strategiesV4}}
  new YakStrategy(
    "{{address}}",
    BigInt.fromI32({{startBlock}}){{#manualDepositTokenSymbol}},
    "{{manualDepositTokenSymbol}}",
    {{manualDepositTokenDecimals}}{{/manualDepositTokenSymbol}}
  ){{^last}},{{/last}}
  {{/strategiesV4}}
]

export const yakStrategies: YakStrategy[] = [
  {{#strategies}}
  new YakStrategy(
    "{{address}}",
    {{startBlock}}{{#manualDepositTokenSymbol}},
    "{{manualDepositTokenSymbol}}",
    {{manualDepositTokenDecimals}}{{/manualDepositTokenSymbol}}
  ){{^last}},{{/last}}
  {{/strategies}}
]