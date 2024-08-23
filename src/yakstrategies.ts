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
  new YakStrategy(
    "0x4be9D486331ae4532C32000F6DCb62F94299a1CB",
    BigInt.fromI32(218641594)
  ),
  new YakStrategy(
    "0xa03d11b8C719B8AeB5e23cF79137c3454dcf21f5",
    BigInt.fromI32(218621494)
  ),
  new YakStrategy(
    "0xa1568767975c73dc9a3BB1FFc3651Fc3cBb2EA23",
    BigInt.fromI32(218620259)
  ),
  new YakStrategy(
    "0x5e8655a76675fd92793E2F3Ad9E62418A5bca5FD",
    BigInt.fromI32(214979364)
  ),
  new YakStrategy(
    "0x97451C5428702DEAFCD27e1760f7377E3A910848",
    BigInt.fromI32(214978813)
  ),
  new YakStrategy(
    "0xcded3e597a24bAa025958Bbc7Ef28C185eB3cd7B",
    BigInt.fromI32(214917121)
  ),
  new YakStrategy(
    "0x4DE7A8fe860B85fFC643FDf4710B73114e90dC49",
    BigInt.fromI32(214915160)
  ),
  new YakStrategy(
    "0xB3a18577E81F541Cd2F09594c2773b581BA0a743",
    BigInt.fromI32(214824507)
  ),
  new YakStrategy(
    "0xC2d4B11A7a1677Ee8Eefb3Fb18C2D00d32e3731d",
    BigInt.fromI32(208028835)
  ),
  new YakStrategy(
    "0x3B85d87104091FAC2940C3d5BDA44748c5fEA946",
    BigInt.fromI32(169713320)
  ),
  new YakStrategy(
    "0xf0a020e34F3478F663c8F8fcBDD7f1B5957403EA",
    BigInt.fromI32(169713145)
  ),
  new YakStrategy(
    "0xf5802415161A7a331e44EB63D52514F365232ed8",
    BigInt.fromI32(169712728)
  ),
  new YakStrategy(
    "0x2Fc8e171b2688832b41881aAf3Da4D180bDa1F33",
    BigInt.fromI32(169710999)
  ),
  new YakStrategy(
    "0x5847EB0aC310845510880c6871E0cE6d8b0f57Fc",
    BigInt.fromI32(169696331)
  ),
  new YakStrategy(
    "0x5a7f3299E5D346576e836038cFb122fe4400C457",
    BigInt.fromI32(162208328)
  ),
  new YakStrategy(
    "0x60b8DF280F685D6d9E233e1056925B8306C42789",
    BigInt.fromI32(162207286)
  ),
  new YakStrategy(
    "0x8D6933b203Ee219ca0a1C3df7D0388AbF27aeEd9",
    BigInt.fromI32(162206671)
  ),
  new YakStrategy(
    "0xCba224402d8A313DAffcA2Be606e0F298a5cc5CA",
    BigInt.fromI32(162204937)
  ),
  new YakStrategy(
    "0x02b716F68D5a9d445C1e8ca99b5cf8c3D4882bD5",
    BigInt.fromI32(162197053)
  ),
  new YakStrategy(
    "0x325dd903eB9cd25F2103911003061a9E63745511",
    BigInt.fromI32(162196620)
  ),
  new YakStrategy(
    "0x8AC3F651080214D43F58CD6BDf98bcea08e6d0f1",
    BigInt.fromI32(162192004)
  ),
  new YakStrategy(
    "0xbe81e594556697bfC2Ac36E95D3efea944Df6Eb5",
    BigInt.fromI32(161927927)
  ),
  new YakStrategy(
    "0x0a69906424233e782f2075D8B08BaE0DFEcd5fE1",
    BigInt.fromI32(161569537)
  ),
  new YakStrategy(
    "0x86D919752822Fcf060307201808e8f206Ad10324",
    BigInt.fromI32(161569215)
  ),
  new YakStrategy(
    "0x9a4Ceae5C7dD8285a873AeCC984c2B78DE07F4e0",
    BigInt.fromI32(161566814)
  ),
  new YakStrategy(
    "0x3AD77Bf9B359166f757e62Ea129152FFDbd8d1d4",
    BigInt.fromI32(152251096)
  ),
  new YakStrategy(
    "0x5219AEAc15C1BCAaC265fE6718AB035fe75b46b6",
    BigInt.fromI32(152250220)
  ),
  new YakStrategy(
    "0x200E2A58DaEE43EF037Aaa0C0C90AA654ca772CC",
    BigInt.fromI32(152234477)
  ),
  new YakStrategy(
    "0x9D8Be978033968ac237D6ff71319F52452fC5cc2",
    BigInt.fromI32(152233388)
  ),
  new YakStrategy(
    "0x6ab61f7541968322711a6810fd71915341Aa7eB8",
    BigInt.fromI32(151559972)
  ),
  new YakStrategy(
    "0x3b23E8a535B2a9e4C73f617c1c5A36299b3C57B2",
    BigInt.fromI32(151247269)
  ),
  new YakStrategy(
    "0x9550593eA20359A4EfeB914C1FFf2d123EC9C091",
    BigInt.fromI32(151247225)
  ),
  new YakStrategy(
    "0xF947758148e056Cd8096eFD07f536B59f3247206",
    BigInt.fromI32(151246534)
  ),
  new YakStrategy(
    "0x008773BF8750c56602E04666Ff93acf110895905",
    BigInt.fromI32(151245429)
  ),
  new YakStrategy(
    "0x502537b1491065D733f3a48b6a6C287a74aa519B",
    BigInt.fromI32(150280394)
  ),
  new YakStrategy(
    "0x4719f490A20b1cC4d6ee442D5a8f3EE87fCc41f7",
    BigInt.fromI32(150280200)
  ),
  new YakStrategy(
    "0x0029C0783054c4Fe217738503440c26b10385d85",
    BigInt.fromI32(150280103)
  ),
  new YakStrategy(
    "0x15C6c5dC491b07a631bd5160E30adec451315d34",
    BigInt.fromI32(150275578)
  ),
  new YakStrategy(
    "0x1EfBeeC7eA9b014e7e1Ae0909f22226746ad2bDa",
    BigInt.fromI32(150275304)
  ),
  new YakStrategy(
    "0xE912eCa6cb65cF4929E6E18Df83c7Bd163787494",
    BigInt.fromI32(150274030)
  ),
  new YakStrategy(
    "0x0d9633942CeAA14918D7481443a4296d61F93CDf",
    BigInt.fromI32(149162878)
  ),
  new YakStrategy(
    "0x1d3B34f5e759BEFA8FC041fb27DC850146dE1f3c",
    BigInt.fromI32(149157713)
  ),
  new YakStrategy(
    "0xC3911e82fcF4cD13402D00E709cA9dd988bb53c2",
    BigInt.fromI32(148750565)
  ),
  new YakStrategy(
    "0x3737F2D0C754F7404Fdce9de4b8E52b685Deb1B3",
    BigInt.fromI32(148747662)
  ),
  new YakStrategy(
    "0x056e4f4701c7A5bfA95a36154c7135edb134E0c6",
    BigInt.fromI32(148742617)
  ),
  new YakStrategy(
    "0x5408D79bB2E54DA1De202fFF1313B2Ad6A1196AA",
    BigInt.fromI32(148741846)
  ),
  new YakStrategy(
    "0x165FA1023429E266Cd767845E8dE419Ce3abd379",
    BigInt.fromI32(148738958)
  ),
  new YakStrategy(
    "0x8Bf6402AfcfE11519947829Af44770Fa44A01949",
    BigInt.fromI32(148735864)
  ),
  new YakStrategy(
    "0xFC47515433eE291E692958a2D15F99896FAFC0BC",
    BigInt.fromI32(148714145)
  ),
  new YakStrategy(
    "0x2eE33e53eBD75222c7c62F1e9FEB0bc9766136ba",
    BigInt.fromI32(126620805)
  ),
  new YakStrategy(
    "0x3B4464d24D58DD693cD1ffb79F5b2E7d4408dB7C",
    BigInt.fromI32(126619067)
  ),
  new YakStrategy(
    "0x51fbD3162795632471DFCd8A0C9FE4E889fdE9e5",
    BigInt.fromI32(122270105)
  ),
  new YakStrategy(
    "0xE242B332B028F48b4f816E6C5cD0c95eEE2A3F7D",
    BigInt.fromI32(122265620)
  ),
  new YakStrategy(
    "0x579cF87201C82B21ba9ae29678B812E07fccf14C",
    BigInt.fromI32(122260513)
  ),
  new YakStrategy(
    "0x1817fE376740b53CAe73224B7F0a57F23DD4C9b5",
    BigInt.fromI32(120627181)
  ),
  new YakStrategy(
    "0x4649c7c3316B27C4A3DB5f3B47f87C687776Eb8C",
    BigInt.fromI32(120365523)
  ),
  new YakStrategy(
    "0x8Bc6968b7A9Eed1DD0A259eFa85dc2325B923dd2",
    BigInt.fromI32(120356426)
  ),
  new YakStrategy(
    "0xf664B5F2aBA29016bffcE3B8796CA9704fC5fe00",
    BigInt.fromI32(109379498)
  ),
  new YakStrategy(
    "0x4aBa66dAfdFdf1701F32446724fd05F4fB7811bC",
    BigInt.fromI32(109379086)
  ),
  new YakStrategy(
    "0xBb8A9270b15fe7ca75D296cCaAdB21bE01491CF5",
    BigInt.fromI32(109372693)
  ),
  new YakStrategy(
    "0xa737848C45a6e13D2953BaA15BdFbB81E5753e9D",
    BigInt.fromI32(109040974)
  ),
  new YakStrategy(
    "0x28f37fa106AA2159c91C769f7AE415952D28b6ac",
    BigInt.fromI32(107046203)
  ),
  new YakStrategy(
    "0x855f76F69826b41D663dA8587C199e5Ff4C55325",
    BigInt.fromI32(106439860)
  ),
  new YakStrategy(
    "0x393B595ad28Df5b2a87CA9A002259a946378D3Fb",
    BigInt.fromI32(97658885)
  ),
  new YakStrategy(
    "0x1a7d36D12e12ABfA91e8da437bDa4c86657163e5",
    BigInt.fromI32(97653325)
  ),
  new YakStrategy(
    "0x3dEF9c7DaD6902bDB7350E98deD6f2100D5d9A50",
    BigInt.fromI32(97615963)
  ),
  new YakStrategy(
    "0x49e01Ade31690D286C5E820a8DAA4412125c7E7a",
    BigInt.fromI32(92197030)
  ),
]

export const yakStrategies: YakStrategy[] = [
]