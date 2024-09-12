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
    "0x254fC17A3b515be70A94cdf7E18adc3a3DA1ABa2",
    BigInt.fromI32(47999541)
  ),
  new YakStrategy(
    "0xCa7667108f99967483cb062614e40BBb3Fe7D068",
    BigInt.fromI32(47751154)
  ),
  new YakStrategy(
    "0x4f8Cbde5bDDFc8746fcD57B6410694FEB15A2161",
    BigInt.fromI32(47750900)
  ),
  new YakStrategy(
    "0x6ACA4256fe3E9cB24F85ef80b503Eb9c9D110514",
    BigInt.fromI32(47750781)
  ),
  new YakStrategy(
    "0x8Fcce95f517b1992d0ea72b2B05A071327b0E6c7",
    BigInt.fromI32(47750432)
  ),
  new YakStrategy(
    "0xC099B1664e0b2e3AcC432D321a8043Ca99c5055A",
    BigInt.fromI32(46063202)
  ),
  new YakStrategy(
    "0x101e6E7C6BaDcD46A2cd688382Fab5f049544B96",
    BigInt.fromI32(46045053)
  ),
  new YakStrategy(
    "0x670CA61C11eD53D6b9ea55ce043de94eE973b39A",
    BigInt.fromI32(43363128)
  ),
  new YakStrategy(
    "0x69EE1Ef3dDb686F7130A28541AB6691b7A7Cd285",
    BigInt.fromI32(43363004)
  ),
  new YakStrategy(
    "0x91f90F006a6821CAd0B7a04153ECf0a75b9146ce",
    BigInt.fromI32(43321131)
  ),
  new YakStrategy(
    "0x13404B1C715aF60869fc658d6D99c117e3543592",
    BigInt.fromI32(43309215)
  ),
  new YakStrategy(
    "0x7f0eB376eabF4b2B4290D09EFb2f4da99B3ea311",
    BigInt.fromI32(43309085)
  ),
  new YakStrategy(
    "0x9B5d890d563EE4c9255bB500a790Ca6B1FB9dB6b",
    BigInt.fromI32(43306967)
  ),
  new YakStrategy(
    "0x9980aA9C91eFC185a2b5742Be8234C3670b9d4Ff",
    BigInt.fromI32(43265561)
  ),
  new YakStrategy(
    "0x0Eb29153F76e2934f3F964EDdC973681634D3dC5",
    BigInt.fromI32(43263107)
  ),
  new YakStrategy(
    "0xC6125f8f9D8D9587CC1309E5c578e39e41284356",
    BigInt.fromI32(43229532)
  ),
  new YakStrategy(
    "0x253B79CD4C7A9364FF5197A80Fa87cb8D1EE4cc8",
    BigInt.fromI32(43229400)
  ),
  new YakStrategy(
    "0xe508822C6445346e8D4dd724d3c42E4a98A4dbcA",
    BigInt.fromI32(43229367)
  ),
  new YakStrategy(
    "0xE71b06f4550F9C9015D1b67d2E1fDC326A0F8BdC",
    BigInt.fromI32(43229335)
  ),
  new YakStrategy(
    "0xf929eD9E6a5B031ecc10e98DDE8fE9f4C5f0c6C1",
    BigInt.fromI32(43229251)
  ),
  new YakStrategy(
    "0x47A3b8c8Bb902dCd98BcEcC906D482FEFb66c243",
    BigInt.fromI32(43229148)
  ),
  new YakStrategy(
    "0x513f97405b6548F9DBE829b3b4d4Ee9346cBa625",
    BigInt.fromI32(43228774)
  ),
  new YakStrategy(
    "0xb9B93f876172614E2Fdf5ed2d7DF85E753DF2e05",
    BigInt.fromI32(43204577)
  ),
  new YakStrategy(
    "0xb45F81905393461A333B04b6933f56c3B17Da83F",
    BigInt.fromI32(43204374)
  ),
  new YakStrategy(
    "0xD5170d6E9a1B6EF641490Ce95CD86F9B2088ff16",
    BigInt.fromI32(43204211)
  ),
  new YakStrategy(
    "0xD5aF122207d495E2EF1ac43FdEe5221BF0757b07",
    BigInt.fromI32(43203703)
  ),
  new YakStrategy(
    "0x3441D5B446e303cB8Fe79187D9D0F620f67e4670",
    BigInt.fromI32(43201887)
  ),
  new YakStrategy(
    "0xa84D83787eA216F616C6Bd02C6edC6D6d63f042f",
    BigInt.fromI32(41891168)
  ),
  new YakStrategy(
    "0xb670562E149Df0206e39afE6Cb50d6c370A29B78",
    BigInt.fromI32(41584106)
  ),
  new YakStrategy(
    "0xce5760FAa3D428eA46108B16dafEB0DA64e344B7",
    BigInt.fromI32(41583734)
  ),
  new YakStrategy(
    "0x41968d7d9f6Bf70A614724Fd03DcEDbE070366A5",
    BigInt.fromI32(40264125)
  ),
  new YakStrategy(
    "0xFE55D3eF39A25E55818e1A3900D41F561a75f4ea",
    BigInt.fromI32(40264082)
  ),
  new YakStrategy(
    "0xb97D7C44cA03abA8d41FDaC81683312e4ACbba00",
    BigInt.fromI32(40263763)
  ),
  new YakStrategy(
    "0x701792A64Cea365a2cBd8e3F2e544654dc3307eF",
    BigInt.fromI32(40263331)
  ),
  new YakStrategy(
    "0x68D8108f6FB797e7eb0C8d9524ba08D98BF27Bcb",
    BigInt.fromI32(40261939)
  ),
  new YakStrategy(
    "0xDea8843f3DF355A2f24c6e36525075b6990C525D",
    BigInt.fromI32(39325581)
  ),
  new YakStrategy(
    "0xC6B2a17Ca7527c382e8f49DfC5A1a4Eb8B872262",
    BigInt.fromI32(39325505)
  ),
  new YakStrategy(
    "0xe7FaD724fa5D5552cD9887F707063f1687aa9C46",
    BigInt.fromI32(39325461)
  ),
  new YakStrategy(
    "0x942CcdE2E68e9e4EC942ef4f34492D74D4E03Fec",
    BigInt.fromI32(39203957)
  ),
  new YakStrategy(
    "0x8ba359fB22101B38A751D135C22145C5fdEaC1c3",
    BigInt.fromI32(38045058)
  ),
  new YakStrategy(
    "0x5262D653274C87c6193129E2BD131Be06113d2e6",
    BigInt.fromI32(38045023)
  ),
  new YakStrategy(
    "0x206F460DEF7e6453DffA868Aea758B8051Cc1971",
    BigInt.fromI32(35187198)
  ),
  new YakStrategy(
    "0xeA7dF94f2fB98B0FE8398a00d78c0f8351005d65",
    BigInt.fromI32(35049583)
  ),
  new YakStrategy(
    "0x981e557839C6795E71E645975c8d665e20A57e00",
    BigInt.fromI32(34589665)
  ),
  new YakStrategy(
    "0x10FF508e462C3d5555e7bB78b77268558a3D83AA",
    BigInt.fromI32(34556777)
  ),
  new YakStrategy(
    "0x8F4577EBF00D0c287A16E0898ab27c486340103E",
    BigInt.fromI32(34556693)
  ),
  new YakStrategy(
    "0x5837e55846ed2b098A7436B40fBCF47BbD721A2F",
    BigInt.fromI32(34549203)
  ),
  new YakStrategy(
    "0x671675805456D04165f6e03F71ab2b92f63E01B8",
    BigInt.fromI32(34149656)
  ),
  new YakStrategy(
    "0x4763afDbA5dEe9358ACC9C5C7fdFB09a34b9A7db",
    BigInt.fromI32(31987353)
  ),
  new YakStrategy(
    "0x70D494FFce379f8cfe417300ccF136eD39f46a22",
    BigInt.fromI32(30809613)
  ),
  new YakStrategy(
    "0x738397522A6a24dFe85DDfB1b04E31aD8629D19C",
    BigInt.fromI32(30763002)
  ),
  new YakStrategy(
    "0x5489E0B19bf95b375BDC12C7399177B2668eBe8A",
    BigInt.fromI32(29368593)
  ),
  new YakStrategy(
    "0x68464A456B4EBDbf7DD93e871a50FC41313cdc40",
    BigInt.fromI32(29367552)
  ),
  new YakStrategy(
    "0xcb355a1d25bBe6E51BE4880414d5eBA20a3d0F6c",
    BigInt.fromI32(29367448)
  ),
  new YakStrategy(
    "0x3ccc0770230c5f3dD8088832cB41D234789a5855",
    BigInt.fromI32(28575250)
  ),
  new YakStrategy(
    "0x0Ddc2def55663E0e5b2E2Cf39bc4b4384980C8B7",
    BigInt.fromI32(28571643)
  ),
  new YakStrategy(
    "0xaCd4428f8c183edA30d102Da3646C070bC7469Eb",
    BigInt.fromI32(28563240)
  ),
  new YakStrategy(
    "0xfA081CBecd37321cCf76F78Cb5aadD228BC27F67",
    BigInt.fromI32(26769572)
  ),
  new YakStrategy(
    "0x09f66CA1D7fD893C4005af567F41Ac7541b247af",
    BigInt.fromI32(25915036)
  ),
  new YakStrategy(
    "0x63aeF346E5797740D44f2382De5e115853AeAac3",
    BigInt.fromI32(25423413)
  ),
  new YakStrategy(
    "0x8DCFe74CA846489b36af4e95EFDaE02CB3f558cB",
    BigInt.fromI32(22617422)
  ),
  new YakStrategy(
    "0x2A368EcFf594616a18EDa1307E45808dE36598ee",
    BigInt.fromI32(22617253)
  ),
  new YakStrategy(
    "0x9414B6D2E0cAa55ddF727551C9Bd6304d7e7F6F3",
    BigInt.fromI32(22616959)
  ),
  new YakStrategy(
    "0xe9D4fBF09Fb002FA52f844d5506e1666102AfEf5",
    BigInt.fromI32(22616842)
  ),
  new YakStrategy(
    "0xEa831AE8B824545b4bE654FB3c3DC06ac9acFbb8",
    BigInt.fromI32(22616759)
  ),
  new YakStrategy(
    "0xD57dDbCFD0EdeC396009C4e891bc84210Aa23F8D",
    BigInt.fromI32(22417965)
  ),
  new YakStrategy(
    "0x98c90014222F09f5BfFf66F1d206DCC52049cf7F",
    BigInt.fromI32(21915569)
  ),
  new YakStrategy(
    "0xD4031359eE22aa53f341BbFA89c1dD6A9451ed3a",
    BigInt.fromI32(21914914)
  ),
  new YakStrategy(
    "0xe9Af42093bB43904441563c0E06bCee209fCccd8",
    BigInt.fromI32(20921098)
  ),
  new YakStrategy(
    "0x269f87C9888c4E69160f279d71D4253f1286Ff2D",
    BigInt.fromI32(20920693)
  ),
  new YakStrategy(
    "0x9FD64182D07f742Af1e16Cb2BD98e7F1AD939641",
    BigInt.fromI32(20437520)
  ),
  new YakStrategy(
    "0x4d9134777801b4b582Af82791439F2f0108BDAf6",
    BigInt.fromI32(20436075)
  ),
  new YakStrategy(
    "0x67165052d842662EFD917874c1878512d6B0b4Fe",
    BigInt.fromI32(20434876)
  ),
  new YakStrategy(
    "0x2ff789abd1765130081CE069B6EB0BAB4df86642",
    BigInt.fromI32(20434537)
  ),
  new YakStrategy(
    "0x4FB84317F1b8D14414B52d2Aa2dA097017960049",
    BigInt.fromI32(20381274)
  ),
  new YakStrategy(
    "0xefAd178aCb3E88182eFF848F5A466C1D47A70D79",
    BigInt.fromI32(19635434)
  ),
  new YakStrategy(
    "0xD390f59705f3F6d164d3C4b2C77d17224FCB033f",
    BigInt.fromI32(19634941)
  ),
  new YakStrategy(
    "0xc3A5b60d1d985e99de292125B8E75164B417B41A",
    BigInt.fromI32(18731567)
  ),
  new YakStrategy(
    "0xc929cf71D6dF4e150e294a994cA67932095076C4",
    BigInt.fromI32(18718288)
  ),
  new YakStrategy(
    "0x2a3A08d3a7db1e58423Be5FDcaB873C4E8cE6508",
    BigInt.fromI32(18585991)
  ),
  new YakStrategy(
    "0x59c350ebcf89a7cF0e4dd383a32E2773533C595e",
    BigInt.fromI32(18583759)
  ),
  new YakStrategy(
    "0x730959635B605000aB4B1dFbBb9Dfaf09B678480",
    BigInt.fromI32(17089300)
  ),
  new YakStrategy(
    "0xf9cD4Db17a3FB8bc9ec0CbB34780C91cE13ce767",
    BigInt.fromI32(17089210)
  ),
  new YakStrategy(
    "0xbEe226c7676E7B2b034aD365faC81683FF34C012",
    BigInt.fromI32(17009163)
  ),
  new YakStrategy(
    "0xFf90ac288D9eE050b46a0dA00021fFe9a8EAdB4a",
    BigInt.fromI32(16663254)
  ),
  new YakStrategy(
    "0x58dA190fB57789f1E00ae0Caa688804291EEc99b",
    BigInt.fromI32(16663205)
  ),
  new YakStrategy(
    "0x1fD1AB832C49E22Fa0A66Aa8bdF1F668F2FE2427",
    BigInt.fromI32(16663122)
  ),
  new YakStrategy(
    "0x8889Da43CeE581068C695A2c256Ba2D514608F4A",
    BigInt.fromI32(16661291)
  ),
  new YakStrategy(
    "0x1A43031783b7E042fa971092843fb4D75620df63",
    BigInt.fromI32(16440728)
  ),
  new YakStrategy(
    "0x3F38377173d30C04FdfDE5E92c7cCF00e052AdC3",
    BigInt.fromI32(16055192)
  ),
  new YakStrategy(
    "0x681E6a68350004f49a629Ed1970F8E00f44C977D",
    BigInt.fromI32(15838435)
  ),
  new YakStrategy(
    "0x388963a195292277510BB0B276f1AEAC414893Dd",
    BigInt.fromI32(15538213)
  ),
  new YakStrategy(
    "0xC0cd58661b68e10b49D3Bec4bC5E44e7A7c20656",
    BigInt.fromI32(14973371)
  ),
  new YakStrategy(
    "0xc0901a64ac98f18EDb1bFbb66155edA3A8EcE74e",
    BigInt.fromI32(14973306)
  ),
  new YakStrategy(
    "0x18426989f3BA9a8674Af33FBdc651cFAa185252E",
    BigInt.fromI32(14894630)
  ),
  new YakStrategy(
    "0xd0F41b1C9338eB9d374c83cC76b684ba3BB71557",
    BigInt.fromI32(14886249)
  ),
  new YakStrategy(
    "0x4C11142dD4aA2755c2FcC7Edb7E4649deEeE25fe",
    BigInt.fromI32(14858604)
  ),
  new YakStrategy(
    "0xaD56d683Dedda370393144b307Cc794cd17d13C4",
    BigInt.fromI32(14510406)
  ),
  new YakStrategy(
    "0xA00999FB267bFc96CB14aBEcfA40B3A9006516BA",
    BigInt.fromI32(14510314)
  ),
  new YakStrategy(
    "0xaaCdf900e038Db081cE94FB5fDB7ED2D59637a51",
    BigInt.fromI32(14509823)
  ),
  new YakStrategy(
    "0xFA17fb53da4c837594127b73fFd09fdb15f42C49",
    BigInt.fromI32(14509603)
  ),
  new YakStrategy(
    "0x6604aDCB29f2B032F625a545e5f1a5e35e0a44e1",
    BigInt.fromI32(14509498)
  ),
  new YakStrategy(
    "0xFB692D03BBEA21D8665035779dd3082c2B1622d0",
    BigInt.fromI32(14509076)
  ),
  new YakStrategy(
    "0xDE3CE91b336C611A350209EB7fc3f238d8ebFdC0",
    BigInt.fromI32(14508523)
  ),
  new YakStrategy(
    "0xa45B0A446B91eBDBbB041f491e7244AAeB7f557A",
    BigInt.fromI32(14506107)
  ),
  new YakStrategy(
    "0xCFb41b7f2C09DF5a736de64B007F946807E1c7B2",
    BigInt.fromI32(14503727)
  ),
  new YakStrategy(
    "0xE51c08E7dC0aA552cc3D3544dd1C967fa7Bc8E42",
    BigInt.fromI32(14342975)
  ),
  new YakStrategy(
    "0x4D8AeCb10249bde5D840CCaB7B13755Fd799138C",
    BigInt.fromI32(14342956)
  ),
  new YakStrategy(
    "0xf951aB02F69faA9F2212715B152366Be1Ad69991",
    BigInt.fromI32(14340780)
  ),
  new YakStrategy(
    "0x2bC2340C65f677eA05DC722b8A062a2f9F55D19B",
    BigInt.fromI32(14340738)
  ),
  new YakStrategy(
    "0xF5a01E04dEc215ddcc711cA92Ef12ECA1188140E",
    BigInt.fromI32(14339970)
  ),
  new YakStrategy(
    "0xAA63F0d272981a098EC3db497f7FA8B7F00EeA0a",
    BigInt.fromI32(14339696)
  ),
  new YakStrategy(
    "0x0D84f6D810D1aacD2e6526e642F9ad78844D7DA1",
    BigInt.fromI32(14257243)
  ),
  new YakStrategy(
    "0xc8cEeA18c2E168C6e767422c8d144c55545D23e9",
    BigInt.fromI32(14219043)
  ),
  new YakStrategy(
    "0xfBDBBcDAABF4dcb761fDfF95a69Ebf1bF10f2cB5",
    BigInt.fromI32(14166528)
  ),
  new YakStrategy(
    "0x40FCf077eE6eD55a7316EF656aF1c95d8c464111",
    BigInt.fromI32(14166455)
  ),
  new YakStrategy(
    "0x6314c275A16D6A65D6e4d5541eAD8DABD7bEfc7a",
    BigInt.fromI32(14165717)
  ),
  new YakStrategy(
    "0x24863f64E8422D230687548F9Db35716c6E87e7F",
    BigInt.fromI32(14165706)
  ),
  new YakStrategy(
    "0x2121f306B5865Bb2c5729A8Caa1c9b6Ca47EF725",
    BigInt.fromI32(14080393)
  ),
  new YakStrategy(
    "0xc43523B0AF7673d4fDb27158AE233b2c5d6387a8",
    BigInt.fromI32(14053344)
  ),
  new YakStrategy(
    "0x455fEE389954B5289681CDa21237982F3Dc9D792",
    BigInt.fromI32(14053241)
  ),
  new YakStrategy(
    "0x85d6646574d5478f711F95F1Ee039504ff565476",
    BigInt.fromI32(14053160)
  ),
  new YakStrategy(
    "0xbF6097b3F0eccdBcd6b60Bd048F31f5D28259336",
    BigInt.fromI32(14053031)
  ),
  new YakStrategy(
    "0xfF2C8a2a90B12A507446bF08d216f9ba0e539616",
    BigInt.fromI32(14052804)
  ),
  new YakStrategy(
    "0x1a6b4b6C1Cde4C7092173214472961E30ce23971",
    BigInt.fromI32(14052397)
  ),
  new YakStrategy(
    "0xb8f531c0d3c53B1760bcb7F57d87762Fd25c4977",
    BigInt.fromI32(13968821)
  ),
  new YakStrategy(
    "0x5bc7B7950E02D6260440Ef3F1442849a8700C2ac",
    BigInt.fromI32(13923003)
  ),
  new YakStrategy(
    "0x7659CaC3DaF8444B43428707C8EE3364D5107845",
    BigInt.fromI32(13921819)
  ),
  new YakStrategy(
    "0xC9CD28b6be1F9da72570305b78843da2DCbE7b36",
    BigInt.fromI32(13850941)
  ),
  new YakStrategy(
    "0x9cF6D0AaB2Db4685a10B368686A5eAbe5B425440",
    BigInt.fromI32(13760993)
  ),
  new YakStrategy(
    "0xaAc0F2d0630d1D09ab2B5A400412a4840B866d95",
    BigInt.fromI32(13754056)
  ),
  new YakStrategy(
    "0xbbcED92AC9B958F88A501725f080c0360007e858",
    BigInt.fromI32(13725173)
  ),
  new YakStrategy(
    "0x4FfF86B1B64449ba0933aE2861A87532cA3feD8d",
    BigInt.fromI32(13725054)
  ),
  new YakStrategy(
    "0x9480C1154046D4c50D92a32B9dA1e26539c63D39",
    BigInt.fromI32(13724876)
  ),
  new YakStrategy(
    "0xE005883f6c7Db66265d0B8eEaA7009645e0A9f76",
    BigInt.fromI32(13724329)
  ),
  new YakStrategy(
    "0x3e5e33b714193f88FcBdbc3dCbf31f453d26e3A6",
    BigInt.fromI32(13723895)
  ),
  new YakStrategy(
    "0xf0BaE816853D71EFbC3634559E9a570876EcdE89",
    BigInt.fromI32(13721855)
  ),
  new YakStrategy(
    "0xD7C20C19a1E154F1D7b49374aF5E4b78bC035374",
    BigInt.fromI32(13680899)
  ),
  new YakStrategy(
    "0x96452F40222Ba4D5e3c28EABE2f6F48066A29980",
    BigInt.fromI32(13593013)
  ),
  new YakStrategy(
    "0x35d28992E408Ee1Ea36561dA91f682396e7be80b",
    BigInt.fromI32(13592519)
  ),
  new YakStrategy(
    "0x04F075532F07410C705e2a3D1CE679f3a8929B06",
    BigInt.fromI32(13576534)
  ),
  new YakStrategy(
    "0x7070312FEd290f88D82aaEDcaB5075e71C9854AD",
    BigInt.fromI32(13500961)
  ),
  new YakStrategy(
    "0x71A048dBE2d53AC8a6D34A3e5E1571bf28567166",
    BigInt.fromI32(13500923)
  ),
  new YakStrategy(
    "0xC4ea31839d83Ae30846f30CC2BBE44aB5b59A9d7",
    BigInt.fromI32(13500775)
  ),
  new YakStrategy(
    "0x918dE58A4C0D98A3a7c34AF539eB3Ca4e6fAA146",
    BigInt.fromI32(13422910)
  ),
  new YakStrategy(
    "0x806Fb612565780396Dd1015b2286eA081eDFd7be",
    BigInt.fromI32(13422807)
  ),
  new YakStrategy(
    "0xFf9322bfC6DfDe3daC3C9332d7B1331B11b37F12",
    BigInt.fromI32(13410121)
  ),
  new YakStrategy(
    "0x62C7aA047eBa942b8c256362674C196F4068b0e5",
    BigInt.fromI32(13409504)
  ),
  new YakStrategy(
    "0xdEF941c1e567C7289f63164BB3464db54C4F76c4",
    BigInt.fromI32(13353183)
  ),
  new YakStrategy(
    "0xE2EAF94D50C4e746deEA06F86c55C9144d98363b",
    BigInt.fromI32(13353179)
  ),
  new YakStrategy(
    "0x2c4d5908256C5CcC36c870434B9B1680D3075799",
    BigInt.fromI32(13337675)
  ),
  new YakStrategy(
    "0x3Ea4ef084474736893F4F23F9899930f7cD0488f",
    BigInt.fromI32(13322619)
  ),
  new YakStrategy(
    "0x1834Bf3a07D2A616F1FE6F2B1fFfB8E3769852C0",
    BigInt.fromI32(13312187)
  ),
  new YakStrategy(
    "0x2229959f3d4a7f440dBbd4a6FA7E8b7dcCB59827",
    BigInt.fromI32(13231188)
  ),
  new YakStrategy(
    "0x83f08aF8b9C112635272EaE522A855316b162637",
    BigInt.fromI32(13231136)
  ),
  new YakStrategy(
    "0xeFA9abcCb9d2CD37837fd87eC95E6DDe1Af76677",
    BigInt.fromI32(13231069)
  ),
  new YakStrategy(
    "0xED93069166fB397673b363d381147BDf2C473BE5",
    BigInt.fromI32(13194510)
  ),
  new YakStrategy(
    "0x0A28a176E5C4aA56e3bEa57dd4792267bA521239",
    BigInt.fromI32(13194410)
  ),
  new YakStrategy(
    "0xb126FfC190D0fEBcFD7ca73e0dCB60405caabc90",
    BigInt.fromI32(13194346)
  ),
  new YakStrategy(
    "0x9E01722325C1e51D0bCf4128A1EEB57D3033352E",
    BigInt.fromI32(13194291)
  ),
  new YakStrategy(
    "0x719FC002B2eD7c544f7F681D7A27566c47fc766c",
    BigInt.fromI32(13193629)
  ),
  new YakStrategy(
    "0x359a27bB39f3B2E180bf4eFBcE1CE6De18F41b89",
    BigInt.fromI32(13080621)
  ),
  new YakStrategy(
    "0xCCc6a774042ec206D359eC1E722FebBC2f72F0E1",
    BigInt.fromI32(13038994)
  ),
  new YakStrategy(
    "0xd10C18eA051e42074fD1A9F8f7daD852148dAd58",
    BigInt.fromI32(12892515)
  ),
  new YakStrategy(
    "0x0D729Cc75C87a8C18b331a16d4189944cD8e4Ba0",
    BigInt.fromI32(12892446)
  ),
  new YakStrategy(
    "0x51b8d771eAD0911337033ff2Abb74E30fC54c4EC",
    BigInt.fromI32(12892337)
  ),
  new YakStrategy(
    "0xeC6cCE7B9262048f656539330754216cC9481321",
    BigInt.fromI32(12891240)
  ),
  new YakStrategy(
    "0x1A34712e734E1A8C084D50e0EdE9FDE2568b1B6C",
    BigInt.fromI32(12891220)
  ),
  new YakStrategy(
    "0xDEf94a13fF31FB6363f1e03bF18fe0F59Db83BBC",
    BigInt.fromI32(12812575)
  ),
  new YakStrategy(
    "0x5219558ee591b030E075892acc41334A1694fd8A",
    BigInt.fromI32(12812476)
  ),
  new YakStrategy(
    "0x302d1596BB53fa64229bA5BdAA198f3c42Cd34e3",
    BigInt.fromI32(12812415)
  ),
  new YakStrategy(
    "0xDc48D11e449343B2D9d75FACCcef361DF34739B1",
    BigInt.fromI32(12812383)
  ),
  new YakStrategy(
    "0x832893747a3788e5e1aBEBE544C85b9dA631625c",
    BigInt.fromI32(12812295)
  ),
  new YakStrategy(
    "0x921A0e014A8a268e9c0DE402Ea9c28121C79cb15",
    BigInt.fromI32(12812227)
  ),
  new YakStrategy(
    "0x377DeD7fDD91a94bc360831DcE398ebEdB82cabA",
    BigInt.fromI32(12812138)
  ),
  new YakStrategy(
    "0x77B15CF785F7a3bf8952Bb37CAB1d6B7BA69E232",
    BigInt.fromI32(12808558)
  ),
  new YakStrategy(
    "0x3Ec7d66042609B04628CB6d8F92f831dFdAe33d4",
    BigInt.fromI32(12807454)
  ),
  new YakStrategy(
    "0xCB3Ce54f941F0c5e146a9d7164b14a3e9642658e",
    BigInt.fromI32(12807287)
  ),
  new YakStrategy(
    "0xcb6693Ef17738c561340e228994bcbb7EF3C3E24",
    BigInt.fromI32(12806826)
  ),
  new YakStrategy(
    "0xafF218949a8b9e5c491c0C64ad24E1CFaD07f631",
    BigInt.fromI32(12806747)
  ),
  new YakStrategy(
    "0x842109089f4cD7962138932A6Ef0863a59927964",
    BigInt.fromI32(12806614)
  ),
  new YakStrategy(
    "0x5a135CcCf86F0F9b9227B294cD6c92dE06589FB3",
    BigInt.fromI32(12719752)
  ),
  new YakStrategy(
    "0xcd8C19F6858eaa5B5130cCB1b5665C8C675A667d",
    BigInt.fromI32(12698836)
  ),
  new YakStrategy(
    "0x9114FD77213ebaCa6B74D9E81d26f421F1f14c61",
    BigInt.fromI32(12676514)
  ),
  new YakStrategy(
    "0xCc35dc6e9B7fc57d834ef62AD89DD4032c6174Ee",
    BigInt.fromI32(12643219)
  ),
  new YakStrategy(
    "0x7A1a50ad50f297F01E354074AF384E5B4001090D",
    BigInt.fromI32(12643138)
  ),
  new YakStrategy(
    "0xf7a06BcCD2d36C23587DbB6436DF8816D93EAb71",
    BigInt.fromI32(12257905)
  ),
  new YakStrategy(
    "0x1018bDeaC1b8637b885df8980d6e70a659A14916",
    BigInt.fromI32(12257135)
  ),
  new YakStrategy(
    "0x5f1e08D31D22bfE9aa414a48de583A998e10C8e2",
    BigInt.fromI32(12256430)
  ),
  new YakStrategy(
    "0x6F742f950aa105eE26b45467106d4ccD19B12275",
    BigInt.fromI32(12174629)
  ),
  new YakStrategy(
    "0xb58d38F6D71CDFbC7ACE55E094e2c0E1aB6CCF52",
    BigInt.fromI32(12140144)
  ),
  new YakStrategy(
    "0x45b38A633073A3336c47D9506344B6D3d5BFCBd7",
    BigInt.fromI32(11975242)
  ),
  new YakStrategy(
    "0xD8551156d3f67b2c77358536dF74e58b461Ae738",
    BigInt.fromI32(11975061)
  ),
  new YakStrategy(
    "0x14E3F75375543be5D6E1c0f6fFEa01B1120D0cBA",
    BigInt.fromI32(11935925)
  ),
  new YakStrategy(
    "0x55949D0d66a5D9eE9Cd15600c0108347aD57bde2",
    BigInt.fromI32(11846919)
  ),
  new YakStrategy(
    "0xf0Ddf8e875C88D0b8fE4FB2F3Ae6d07EA5CD1B3A",
    BigInt.fromI32(11846418)
  ),
  new YakStrategy(
    "0x02Bf621777371A974D3EbC040fF8a0C41Dfc85b6",
    BigInt.fromI32(11846287)
  ),
  new YakStrategy(
    "0x714e06410B4960D3C1FC033bCd53ad9EB2d1f874",
    BigInt.fromI32(11724749)
  ),
  new YakStrategy(
    "0x38D54902c23D3bEE6543F2Ab7c2Ba8a831F237c0",
    BigInt.fromI32(11473580)
  ),
  new YakStrategy(
    "0xF16f83464C5173Da05d4fc2752A4A530001C8AAE",
    BigInt.fromI32(11473297)
  ),
  new YakStrategy(
    "0x76b52BBeA7A468b42F646B7E9B956dd15Cfc5fAf",
    BigInt.fromI32(11473261)
  ),
  new YakStrategy(
    "0xa158589712Bd5ce4C40ffC0a48eF49d43bDE3Bf3",
    BigInt.fromI32(11472875)
  ),
  new YakStrategy(
    "0x5664d1020C4a59574DF66088813C4F5ED2EB6E2E",
    BigInt.fromI32(11471296)
  ),
  new YakStrategy(
    "0xD409169306f201ba9872Ce7cB3d263C3704e568E",
    BigInt.fromI32(11380284)
  ),
  new YakStrategy(
    "0x9f637540149f922145c06e1aa3f38dcDc32Aff5C",
    BigInt.fromI32(11373769),
    "fsGLP",
    18
  ),
  new YakStrategy(
    "0xC64D9F6e0E060a68967e7b5F330d6208168BD47D",
    BigInt.fromI32(11347454)
  ),
  new YakStrategy(
    "0x38F6b5099a427A88f80F6EF089B7ee517527aED5",
    BigInt.fromI32(11342657)
  ),
  new YakStrategy(
    "0x9e5cA9eF65F3F2eBAcADC99bf7d6c75937C567f7",
    BigInt.fromI32(11333686)
  ),
  new YakStrategy(
    "0x6882F0DB112488e235096D02d296d9D9aa6f844D",
    BigInt.fromI32(11333646)
  ),
  new YakStrategy(
    "0x2d7F473AE9e917A9190E6a6BA42F4Aaf1b70006c",
    BigInt.fromI32(11131136)
  ),
  new YakStrategy(
    "0x2CE5463E160147DB74C804161FD2B838145468ED",
    BigInt.fromI32(11130787)
  ),
  new YakStrategy(
    "0xA7E122eAad2e81BF36b2641d78FD47967c656226",
    BigInt.fromI32(11130663)
  ),
  new YakStrategy(
    "0x9E5D0E209A55DE88B890d7DB9f427A066144A7C4",
    BigInt.fromI32(11016192)
  ),
  new YakStrategy(
    "0x22EDe03f1115666CF05a4bAfafaEe8F43D42cD56",
    BigInt.fromI32(11005862)
  ),
  new YakStrategy(
    "0x0B1BD40d04ff233DD4D6D3374B6F6C2Ea1f024c3",
    BigInt.fromI32(10868244)
  ),
  new YakStrategy(
    "0x2855917F094f902c1F6Ae3A6e849E95cf61495DC",
    BigInt.fromI32(10868068)
  ),
  new YakStrategy(
    "0xcad07469876c54fcd12a4f597f25287c1dc8A3d6",
    BigInt.fromI32(10867993)
  ),
  new YakStrategy(
    "0x607783b00B0b150e779626E35cDB10cb555AF76C",
    BigInt.fromI32(10866763)
  ),
  new YakStrategy(
    "0xE7Eb93c2B2dfeAd391d7A2435FA58f2e292e72bf",
    BigInt.fromI32(10866734)
  ),
  new YakStrategy(
    "0x2C31A23B4eb8Da2cde6F13d29Be05A4EF055C4A6",
    BigInt.fromI32(10866509)
  ),
  new YakStrategy(
    "0xd475dDb954d9F187Cc3647EF47Dc15B899B85C00",
    BigInt.fromI32(10866257)
  ),
  new YakStrategy(
    "0xA91e1374f211Cbf37bd5Fae42CE37Fffea1Ef99e",
    BigInt.fromI32(10865337)
  ),
  new YakStrategy(
    "0xD828F65f055d9454C2B67476dB66327B0f2D65Ac",
    BigInt.fromI32(10865209)
  ),
  new YakStrategy(
    "0xA1bFdA7485bd76aca5D0755330F7F392DFA7BAd9",
    BigInt.fromI32(10865103)
  ),
  new YakStrategy(
    "0xF42F4113217dB26f65Ef0FE1eA9d782425400DB3",
    BigInt.fromI32(10865047)
  ),
  new YakStrategy(
    "0xB804617035A017e73Cd1AD26a3aF672cC4bF575e",
    BigInt.fromI32(10773295)
  ),
  new YakStrategy(
    "0x2FAf9384Be36087aD8Cf82b033c9EabB8698186F",
    BigInt.fromI32(10773258)
  ),
  new YakStrategy(
    "0x0817cA2186A596281C290af3c29224505E2c738C",
    BigInt.fromI32(10773109)
  ),
  new YakStrategy(
    "0xB00D5EB2aAA4713440C451c38eDe3E2451c20104",
    BigInt.fromI32(10772896)
  ),
  new YakStrategy(
    "0x9D681f2cfB3af3279b040069ba08f526F5334a8e",
    BigInt.fromI32(10732959)
  ),
  new YakStrategy(
    "0x8eb1b4e726B15341C3be0eebDf13BFFc05E57787",
    BigInt.fromI32(10727494)
  ),
  new YakStrategy(
    "0x8bBfA331484dC47E6F951b0acA7F5d1a1AB6730c",
    BigInt.fromI32(10727224)
  ),
  new YakStrategy(
    "0xe16198613295E6bD339703043D05C33C3b24B333",
    BigInt.fromI32(10727059)
  ),
  new YakStrategy(
    "0x28a92325Dbb43EE1955389C9507D350Fd043DF75",
    BigInt.fromI32(10661794)
  ),
  new YakStrategy(
    "0x291cf692552bca17f75C40B6B89d74E9c4cB60D9",
    BigInt.fromI32(10643977)
  ),
  new YakStrategy(
    "0x0B572e6D0CC3c3803AEb4eEDECe81f71d357Ec96",
    BigInt.fromI32(10642636)
  ),
  new YakStrategy(
    "0xa49E753c3217acCCBbE339Bf72671B2a8B2E6821",
    BigInt.fromI32(10621992)
  ),
  new YakStrategy(
    "0x480345F79D6C26fb8D6C12F1A9bF9Af6663CEC48",
    BigInt.fromI32(10601610)
  ),
  new YakStrategy(
    "0xA84722a0d7361C74584716eBB8FF66f0e24C0057",
    BigInt.fromI32(10557823)
  ),
  new YakStrategy(
    "0x47c5c66BE853CC973b64c9487303d69eB146328f",
    BigInt.fromI32(10556865)
  ),
  new YakStrategy(
    "0x23bD5CD8e62369e80EB30F6D182AD4331048a246",
    BigInt.fromI32(10555896)
  ),
  new YakStrategy(
    "0x5C5B83bf3B6b8f0BaD8DE8421b84A7cf0F865e2b",
    BigInt.fromI32(10469738)
  ),
  new YakStrategy(
    "0x88565bfD112Fd516306A93D6ddF7d760b6C87E61",
    BigInt.fromI32(10469085)
  ),
  new YakStrategy(
    "0xe801d9913d495942d5aFD2f5eAEf338aDd39981B",
    BigInt.fromI32(10468818)
  ),
  new YakStrategy(
    "0x4E2c03Dd35D765ef704379fD0f192B4B8DE650A5",
    BigInt.fromI32(10468573)
  ),
  new YakStrategy(
    "0xA5eAaD5783748c5D1eEae9927f47e0A63c7EE7bB",
    BigInt.fromI32(10468316)
  ),
  new YakStrategy(
    "0x8Baec13682C722069F693dE435743a82e5a6d62E",
    BigInt.fromI32(10468134)
  ),
  new YakStrategy(
    "0x519756fDd1F9A506AFb5C3aF6D34E131C8D06C5e",
    BigInt.fromI32(10467916)
  ),
  new YakStrategy(
    "0xC2E683F04F1304cA71263a0d324bbf78Aa632A9A",
    BigInt.fromI32(10467265)
  ),
  new YakStrategy(
    "0x4211729aC97690533a36e533f40d8E42E25F8c23",
    BigInt.fromI32(10383590)
  ),
  new YakStrategy(
    "0x779Cd89462b1C05c45b1CD33F6a20373B1d76ab8",
    BigInt.fromI32(10033424)
  ),
  new YakStrategy(
    "0xfe443769eD242c9333C44f8187075Ca12A961b33",
    BigInt.fromI32(10033415)
  ),
  new YakStrategy(
    "0x8d807a3A6a785E5169B8cF84e8399563f63F6313",
    BigInt.fromI32(10033287)
  ),
  new YakStrategy(
    "0x252a9cFdb981F7e676466bA6687BA4Ba2cb45805",
    BigInt.fromI32(9789275)
  ),
  new YakStrategy(
    "0x6819127C2ee3743c99a7fc015Af8f1E9C492537C",
    BigInt.fromI32(9789212)
  ),
  new YakStrategy(
    "0xC6141aE687a0a33E6014315021CFE7e0D1235597",
    BigInt.fromI32(9788833)
  ),
  new YakStrategy(
    "0x1A7F12E489B13836c039fe2C2128D6C26dd3E970",
    BigInt.fromI32(9788672)
  ),
  new YakStrategy(
    "0xf1B08496BEfE7488efD694C7308E029BF7EAdCaD",
    BigInt.fromI32(9788303)
  ),
  new YakStrategy(
    "0xd416b63b644A12A42DeDF1Ab28B30255601A6B2a",
    BigInt.fromI32(9788171)
  ),
  new YakStrategy(
    "0x1A3dC6554a4b7EE2FDa0fb9e8544D99Cb1371098",
    BigInt.fromI32(9787917)
  ),
  new YakStrategy(
    "0x3E1613cB07918B444997BE4f601AF1F35A50376A",
    BigInt.fromI32(9787334)
  ),
  new YakStrategy(
    "0x8E422988f2099eeBd03E5e97d8d15C84cA8cB828",
    BigInt.fromI32(9786993)
  ),
  new YakStrategy(
    "0x8131e744214902EbD2215c4b9654b8c542C686f9",
    BigInt.fromI32(9784747)
  ),
  new YakStrategy(
    "0x4611799A374307C357b07d36Ee7648F3B42983CB",
    BigInt.fromI32(9343219)
  ),
  new YakStrategy(
    "0x03D4847864DAF569ae308D4777A119062129E819",
    BigInt.fromI32(9342996)
  ),
  new YakStrategy(
    "0xb7f0311D59de5920a71AD6D04ED49Ea189E52D4A",
    BigInt.fromI32(9342416)
  ),
  new YakStrategy(
    "0x86f70733c53E5b1E0bE1800910E5eD659bdB6C30",
    BigInt.fromI32(9342284)
  ),
  new YakStrategy(
    "0x99dbA70334053C00e3F45096fC09A9b4f63db5D1",
    BigInt.fromI32(8925227)
  ),
  new YakStrategy(
    "0x48552FbC886aD7D705367252FCA5EE3CDB3b9280",
    BigInt.fromI32(8902826)
  ),
  new YakStrategy(
    "0xb000D29Dc9De315eCFCC6232F25fa8d2156817f7",
    BigInt.fromI32(8622593)
  ),
  new YakStrategy(
    "0x63a1A49D8abFAeaAF9E64666eA00A4784F9E85bF",
    BigInt.fromI32(8444061)
  ),
  new YakStrategy(
    "0xdA91e834D9614B4D3BC109aBfbedFF7021719C36",
    BigInt.fromI32(8443522)
  ),
  new YakStrategy(
    "0xc0c11965a7e7c3b2b6D5c2607Ab4492B00C05051",
    BigInt.fromI32(8443275)
  ),
  new YakStrategy(
    "0x26d9234B8409df2f2967D6AF06A268b87909f5a0",
    BigInt.fromI32(8443084)
  ),
  new YakStrategy(
    "0xA220FCD3580CEa2616f31CC4252E0D6c0B632aFe",
    BigInt.fromI32(8442783)
  ),
  new YakStrategy(
    "0x4f9d79d6900e68090e1589e88C06b99ED5Ae5572",
    BigInt.fromI32(8441580)
  ),
  new YakStrategy(
    "0x440d69bd8a4770AbC18bBB7d0d190f579Fa53C76",
    BigInt.fromI32(8010686)
  ),
  new YakStrategy(
    "0xb91473EeF6e9a58AdE3c88c140D3F4bb527821a8",
    BigInt.fromI32(8009559)
  ),
  new YakStrategy(
    "0x85F932e5A89317C21B54D078a4Df5cbd502a53Aa",
    BigInt.fromI32(8009389)
  ),
  new YakStrategy(
    "0x0BBcaD9077B03B3de52aC77e82C64BDB0F08eC00",
    BigInt.fromI32(8008892)
  ),
  new YakStrategy(
    "0xBdB93b47ED45Ea178C289d5Fe4eC7489b7a668AF",
    BigInt.fromI32(8005465)
  ),
  new YakStrategy(
    "0x205504839513d6410f85B9f8C5B29cAd10Fc34A3",
    BigInt.fromI32(8005340)
  ),
  new YakStrategy(
    "0xcD1ed5e39178d2E4f9Ac11B424f243AE7e220C8E",
    BigInt.fromI32(8005215)
  ),
  new YakStrategy(
    "0x48dC5fb39e05e9E06069AEd3d7fA58532bEc1498",
    BigInt.fromI32(8004880)
  ),
  new YakStrategy(
    "0xc3a8e1acD34E6AE424b8579497FbBDbfeD4E14a8",
    BigInt.fromI32(8004767)
  ),
  new YakStrategy(
    "0xecC449da8723321941AB793F8440723f68c8fE4C",
    BigInt.fromI32(8004476)
  ),
  new YakStrategy(
    "0x2385de633b8f0DB36Fe3647F8Fd656508BA8195f",
    BigInt.fromI32(8004394)
  ),
  new YakStrategy(
    "0x304f1185a3568110b6298e07fD40968400fEfD8D",
    BigInt.fromI32(8004232)
  ),
  new YakStrategy(
    "0x4d60F81559bd73565fBd5cA35D31CEb43d6cBcf3",
    BigInt.fromI32(8004130)
  ),
  new YakStrategy(
    "0x19707F26050Dfe7eb3C1b36E49276A088cE98752",
    BigInt.fromI32(7961767)
  ),
  new YakStrategy(
    "0xE946d5abCD7aef872c0662d61f6c92D87Bb68504",
    BigInt.fromI32(7811558)
  ),
  new YakStrategy(
    "0x9F94B323B9802C776Cab9680355E3eAb6f5ADc3C",
    BigInt.fromI32(7754180)
  ),
  new YakStrategy(
    "0x9D6Db77690cE222687DD1c79FF0BeCcFeaE15aC9",
    BigInt.fromI32(7752550)
  ),
  new YakStrategy(
    "0xC8a12C45871dE1c10Cc3ECC36a2fFf694a48651d",
    BigInt.fromI32(7556965)
  ),
  new YakStrategy(
    "0xC4b7cF6329b78ed0B2D15c2b31e498871EEB51b0",
    BigInt.fromI32(7556959)
  ),
  new YakStrategy(
    "0x6Cca7c9a279b423D1cB232a7e96aC488Da09f592",
    BigInt.fromI32(7556956)
  ),
  new YakStrategy(
    "0x31fe1Bd8ca7eA36d4771CE9dd0d086767390E904",
    BigInt.fromI32(7556951)
  ),
  new YakStrategy(
    "0x13286BbE38425d7BCBD269d67a6792c947D3e37F",
    BigInt.fromI32(7553601)
  ),
  new YakStrategy(
    "0x1AfE0E716EF531C8580B16b3CDA157B9Ab4D60C5",
    BigInt.fromI32(7553552)
  ),
  new YakStrategy(
    "0x56665c1D44A068a8ffAC4Dac6222B6210EDE7d90",
    BigInt.fromI32(7553500)
  ),
  new YakStrategy(
    "0xaEF5799ea18c0c6E6234783f5b94FEA2de42d8C2",
    BigInt.fromI32(7543344)
  ),
  new YakStrategy(
    "0xC2206f055CECd32dBA5E8ab5E3b5eC62dbEf0f73",
    BigInt.fromI32(7331917)
  ),
  new YakStrategy(
    "0x969BC610C2237B2131595C1ED0e96233Fc5e1832",
    BigInt.fromI32(7331726)
  ),
  new YakStrategy(
    "0xfF2d8F27A71A50e8A5bD26706f10133a7291Cc58",
    BigInt.fromI32(7331629)
  ),
  new YakStrategy(
    "0xD312070210376f46ff735E00f03558800B8F64Af",
    BigInt.fromI32(7331454)
  ),
  new YakStrategy(
    "0x259724e24C2FBe90e7585aC117C36afd6c57588c",
    BigInt.fromI32(7331373)
  ),
  new YakStrategy(
    "0x344E1A50E70dbF2c74f8EF5cB1426086b46D7B1b",
    BigInt.fromI32(7331244)
  ),
  new YakStrategy(
    "0x985da3723E194c004678803fB5e620224e513dEa",
    BigInt.fromI32(7331157)
  ),
  new YakStrategy(
    "0x02CFe646ce0c18d64F1b9F94896d4Da55b3eA631",
    BigInt.fromI32(7330930)
  ),
  new YakStrategy(
    "0xB2a24c7C1080A4aCE06f30173E16410F8D88DC4F",
    BigInt.fromI32(7330077)
  ),
  new YakStrategy(
    "0xFCD2050E213cC54db2c9c99632AC870574FbC261",
    BigInt.fromI32(7329914)
  ),
  new YakStrategy(
    "0xF45fFABA4F800f7a6F5eA784f28f41AdDF3911a7",
    BigInt.fromI32(7329711)
  ),
  new YakStrategy(
    "0x6e574d538FF42325847A5F5dEB2Dbf716c432175",
    BigInt.fromI32(7329515)
  ),
  new YakStrategy(
    "0x1a30141051258Abd414854C31eAb0a2D0a658cb0",
    BigInt.fromI32(7329316)
  ),
  new YakStrategy(
    "0x96ed1fb75741347643Afb6ba803F62266e0a3475",
    BigInt.fromI32(7329069)
  ),
  new YakStrategy(
    "0x942F08674169fBb4373b42025377Dd9A4bDaBe47",
    BigInt.fromI32(7326405)
  ),
  new YakStrategy(
    "0x1E041E7b99aD7F1c09158EeA68DC472f9523790B",
    BigInt.fromI32(7325647)
  ),
  new YakStrategy(
    "0xCCEE4A9218a88C7C735813dCf23D4ECc14209042",
    BigInt.fromI32(7325487)
  ),
  new YakStrategy(
    "0xF72A7728627FF5caa6080532228a418b27b21AaB",
    BigInt.fromI32(7325216)
  ),
  new YakStrategy(
    "0x01435466f844Fa957b48C41ea1d429b9BFAbd97d",
    BigInt.fromI32(7324692)
  ),
  new YakStrategy(
    "0x37958d91606D155d4C11Af638773653Bd8D690DA",
    BigInt.fromI32(7109962)
  ),
  new YakStrategy(
    "0xFebBa6cdaA250108C7678bAC01D6E5cf81532799",
    BigInt.fromI32(7075545)
  ),
  new YakStrategy(
    "0xaa5E49824CFF7ED2fB2759BD2f87FF11fccbdeBe",
    BigInt.fromI32(7030588)
  ),
  new YakStrategy(
    "0x3021f41b770035d972ddf86cDa09c6EA87F5ea3d",
    BigInt.fromI32(7023992)
  ),
  new YakStrategy(
    "0x517f63325Ac6502C730fB66d5C456baaf72Dc1a9",
    BigInt.fromI32(7023671)
  ),
  new YakStrategy(
    "0x1B8DE14ABAb751fEd2358C069597e1aD5EC0e29b",
    BigInt.fromI32(6945540)
  ),
  new YakStrategy(
    "0xd069942536210e79042E5cE7641B71fcE0140628",
    BigInt.fromI32(6945534)
  ),
  new YakStrategy(
    "0xE7bA0F8b053d31C52374007452b5828866745f5a",
    BigInt.fromI32(6810873)
  ),
  new YakStrategy(
    "0x123F4921E3b112911A7A203D6613da7093c5fF8d",
    BigInt.fromI32(6810864)
  ),
  new YakStrategy(
    "0x8c571111fc30F921774F3CaA3E1a20E464173C9d",
    BigInt.fromI32(6810396)
  ),
  new YakStrategy(
    "0xA5ad811c4B2Bd8161090e97C946e1A2003989599",
    BigInt.fromI32(6810391)
  ),
  new YakStrategy(
    "0x2623d3523F0779127C40519475e361F216D6a14E",
    BigInt.fromI32(6808161)
  ),
  new YakStrategy(
    "0x3A91a592A06390ca7884c4D9dd4CBA2B4B7F36D1",
    BigInt.fromI32(6766096)
  ),
  new YakStrategy(
    "0x0eaC97A78a93B75549D49145dF41DbE9CD520874",
    BigInt.fromI32(6765535)
  ),
  new YakStrategy(
    "0xeB503Ef43FB6650f4C62D1323082B0583B984Ca2",
    BigInt.fromI32(6736976)
  ),
  new YakStrategy(
    "0x9E38ea57c6f5F77407286F061E5364ef762ADA28",
    BigInt.fromI32(6736915)
  ),
  new YakStrategy(
    "0x7478a0A07976D66cB8F84a5181FBcE84b18C844a",
    BigInt.fromI32(6736848)
  ),
  new YakStrategy(
    "0xd323d1980a29C2cd350466371142bA0BD7D5b8CC",
    BigInt.fromI32(6724357)
  ),
  new YakStrategy(
    "0x07B0E11D80Ccf75CB390c9Be6c27f329c119095A",
    BigInt.fromI32(6721902)
  ),
  new YakStrategy(
    "0x330cC45c8f60FEF7F9D271a7512542B3d201A48D",
    BigInt.fromI32(6682906)
  ),
  new YakStrategy(
    "0x144574DFD520cb102005b1d395c72E6c5Dc42E32",
    BigInt.fromI32(6592549)
  ),
  new YakStrategy(
    "0x80370DF7a633b9968f4B0C6523e2B2B731264691",
    BigInt.fromI32(6481829)
  ),
  new YakStrategy(
    "0x0C28742A434c241A0205A87322d9F0d333663937",
    BigInt.fromI32(6385879)
  ),
  new YakStrategy(
    "0x90a97C7a1ff2ea06f1A656EaFca0b5cbC43297B9",
    BigInt.fromI32(6385875)
  ),
  new YakStrategy(
    "0xf2A9073ac86bc245f5FB9dA2484C05ACC1430c5C",
    BigInt.fromI32(6379714)
  ),
  new YakStrategy(
    "0x904A9b8747f43cd65Dc8d7B6A33C73EcBAcF6168",
    BigInt.fromI32(6204480)
  ),
  new YakStrategy(
    "0x796BE5344E7076f363c7B6cb76Df11C9b1e91156",
    BigInt.fromI32(6379630)
  ),
  new YakStrategy(
    "0x788D737b256fecAb64fAb77e9f27495e25b73dB3",
    BigInt.fromI32(6169481)
  ),
  new YakStrategy(
    "0xff6Cda38382a615bf1B2Ba3fcF22DdcDea405d80",
    BigInt.fromI32(6169477)
  ),
  new YakStrategy(
    "0x8Fa0A2cbC7CF70C5DF92Ca0908D89a8f5E4aaE7b",
    BigInt.fromI32(6167341)
  ),
  new YakStrategy(
    "0xDb53f20C666D27BAD03aBA8C0f57639ecab235DB",
    BigInt.fromI32(6135943)
  ),
  new YakStrategy(
    "0x7103f6399bC401C57Ad2c4305C03D9e6645628B6",
    BigInt.fromI32(6130096)
  ),
  new YakStrategy(
    "0x450C5582DB7827ccd79440F3ec0DCc09FAd23CB3",
    BigInt.fromI32(6129960)
  ),
  new YakStrategy(
    "0xE04d693E454EBa8E9799E48fc0fd9ADcA3b4aB4F",
    BigInt.fromI32(6129659)
  ),
  new YakStrategy(
    "0x56454e27580caEAFFAA3EC25102218CD8d87fEB2",
    BigInt.fromI32(5972691)
  ),
  new YakStrategy(
    "0xf6cCf601bd024612aAF85440153c2df0524E4607",
    BigInt.fromI32(5602552)
  ),
  new YakStrategy(
    "0xa17946282a8fD1e1C0F2E484393F318D14C6A72F",
    BigInt.fromI32(5599523)
  ),
  new YakStrategy(
    "0xeeD4385af3C876E51CA3AB76AD2cFCa1422AC747",
    BigInt.fromI32(5593107)
  ),
  new YakStrategy(
    "0xf9Dd606743D169E3D5Be68F8C0d4c361765C949D",
    BigInt.fromI32(5593077)
  ),
  new YakStrategy(
    "0x4fD1CF1E437dbFad5dFfE1DD5e16bF96A24C382c",
    BigInt.fromI32(5593072)
  ),
  new YakStrategy(
    "0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E",
    BigInt.fromI32(5593067)
  ),
  new YakStrategy(
    "0xCbC3aBE18086A84bA21DC4059e155C070FC6B673",
    BigInt.fromI32(5593061)
  ),
  new YakStrategy(
    "0x964555644E067c560A4C144360507E80c1104784",
    BigInt.fromI32(5593056)
  ),
  new YakStrategy(
    "0x213bF32Ed7d000ccFE60872EaAa2Df5B331F058B",
    BigInt.fromI32(4477735)
  ),
  new YakStrategy(
    "0x88dcF090E3445C5B8360637E7aacef0248DaD2E1",
    BigInt.fromI32(5416810)
  ),
  new YakStrategy(
    "0x0e3E8297F745A98262288C60a42F65e9F9aF2444",
    BigInt.fromI32(5416747)
  ),
  new YakStrategy(
    "0xA85591eC02eF3c4057E671ed9057c34E24C3c872",
    BigInt.fromI32(5416425)
  ),
  new YakStrategy(
    "0x0aBD79f5144a70bFA3E3Aeed183f9e1A4d80A34F",
    BigInt.fromI32(5414722)
  ),
  new YakStrategy(
    "0x35886426A37cA6BdDb94F256553749c49b44Bf25",
    BigInt.fromI32(5403429)
  ),
  new YakStrategy(
    "0x9cdBd99D1392489d472BD672b2023739667e7215",
    BigInt.fromI32(5403138)
  ),
  new YakStrategy(
    "0x0f7F48d4b66bF5a53d4f21fA6Ffca45f70Cef770",
    BigInt.fromI32(5403134)
  ),
  new YakStrategy(
    "0x3769ceDB9dcD3D012a24f89ff8e28e6B74243D17",
    BigInt.fromI32(5403125)
  ),
  new YakStrategy(
    "0xA914FEb3C4B580fF6933CEa4f39988Cd10Aa2985",
    BigInt.fromI32(5403121)
  ),
  new YakStrategy(
    "0xb634a71a54d3382Ff6896eB22244B4a4e54C0a82",
    BigInt.fromI32(5403113)
  ),
  new YakStrategy(
    "0xf5Ac502C3662c07489662dE5f0e127799D715E1E",
    BigInt.fromI32(5403109)
  ),
  new YakStrategy(
    "0x957Ca4a4aA7CDc866cf430bb140753F04e273bC0",
    BigInt.fromI32(5403102)
  ),
  new YakStrategy(
    "0x1713c6a19E4C02C401325c9a6db2A5827A783c15",
    BigInt.fromI32(5349512)
  ),
  new YakStrategy(
    "0xba5509472B7125fFc9c4421ff757cb013b543D5d",
    BigInt.fromI32(5349243)
  ),
  new YakStrategy(
    "0x86dbC2C301dD243d2B9FFC74880E7Ec35A9B4E2b",
    BigInt.fromI32(5349105)
  ),
  new YakStrategy(
    "0x372d5A1612F0B50619DE321814Ba5F63f9680823",
    BigInt.fromI32(5348611)
  ),
  new YakStrategy(
    "0x13e13C0b949Ca9A65471D82324dD41ccc7C96BBb",
    BigInt.fromI32(5348206)
  ),
  new YakStrategy(
    "0x8240861857A0BB2C59CE50197eB6cE80E8F446Bd",
    BigInt.fromI32(5347506)
  ),
  new YakStrategy(
    "0xAB17D37c7a05A0edf62d89E891c3333EFe5E2876",
    BigInt.fromI32(5342929)
  ),
  new YakStrategy(
    "0x0835269bb6943779765937ebEF17e5dC37d68775",
    BigInt.fromI32(5238234)
  ),
  new YakStrategy(
    "0xb3B7414CFD0C31747e982B5104325A57025eC78A",
    BigInt.fromI32(4960506)
  ),
  new YakStrategy(
    "0x15c74Dae3afd158C24759FddA8a27e644C9368eF",
    BigInt.fromI32(4960319)
  ),
  new YakStrategy(
    "0x7E534F582C79e5c1368185bed8faBB0343E127Ef",
    BigInt.fromI32(4949790)
  ),
  new YakStrategy(
    "0xb9977F7a1780feFFc0388bC5EB0C7661cd8e5185",
    BigInt.fromI32(4949724)
  ),
  new YakStrategy(
    "0x4f0fbA90E25995291E2e848dC1a556B3F59D83cF",
    BigInt.fromI32(4949481)
  ),
  new YakStrategy(
    "0x4dcEA1238Ac823Bb3018A96fC374C360A23e29cc",
    BigInt.fromI32(4886334)
  ),
  new YakStrategy(
    "0xfcbC7dF02448b6CE83498AEC2162Da95d105A026",
    BigInt.fromI32(4886007)
  ),
  new YakStrategy(
    "0x6DBF865f19cd0AACA9550bdDD3b92f4f4E239468",
    BigInt.fromI32(4666162)
  ),
  new YakStrategy(
    "0x75912BF4454e7f7EA21B83BD1313974b69d8C63a",
    BigInt.fromI32(4616334)
  ),
  new YakStrategy(
    "0x69d8EbE4A431D51ef6720b7e4aEd213615d2e614",
    BigInt.fromI32(4616048)
  ),
  new YakStrategy(
    "0x9CFe241015D21c3D8290a1b59205E5d0c2F7f421",
    BigInt.fromI32(4529953)
  ),
  new YakStrategy(
    "0x56E2492A926E419C6711e257b6be5E4491220b92",
    BigInt.fromI32(4526067)
  ),
  new YakStrategy(
    "0x0B3f8eFa73B40AB006b99867D9abFc76dCf699C4",
    BigInt.fromI32(4518678)
  ),
  new YakStrategy(
    "0x459f0Df3D59554dcd82A26C0373789D7ED3e0C53",
    BigInt.fromI32(4479870)
  ),
  new YakStrategy(
    "0xF7A0D4E27F1A7663A10851710f0285afEf3467F7",
    BigInt.fromI32(4479847)
  ),
  new YakStrategy(
    "0x1498d43FC704DEC72fD86B5f535Da65603aA466A",
    BigInt.fromI32(4438501)
  ),
  new YakStrategy(
    "0x28Cd1849acbE189805BBc06f2E192b81189cE3E5",
    BigInt.fromI32(4438495)
  ),
  new YakStrategy(
    "0x07f11f5903Af3Bb24E27Af0f794Ef120726E76BB",
    BigInt.fromI32(4438476)
  ),
  new YakStrategy(
    "0xbF5bFFbf7D94D3B29aBE6eb20089b8a9E3D229f7",
    BigInt.fromI32(4436785)
  ),
  new YakStrategy(
    "0x46CE405ee945B2D2cC494c62105D8284fb04B8Ba",
    BigInt.fromI32(4431403)
  ),
  new YakStrategy(
    "0x048db6C50fFd46DF3bBD8332BB65c062F8D961a8",
    BigInt.fromI32(4431377)
  ),
  new YakStrategy(
    "0xDdddDfEb2dB092a84f27893a040b2BfedE8BE074",
    BigInt.fromI32(4012321)
  ),
  new YakStrategy(
    "0xAcA969fb39FF5d572a219838411F218DE96615Fb",
    BigInt.fromI32(4008573)
  ),
  new YakStrategy(
    "0x23576f938a7923E3f4e419831b35489Adb0494e4",
    BigInt.fromI32(3978266)
  ),
  new YakStrategy(
    "0x92984CE5878Ce56f65218cBC1957c99b2573Ec3B",
    BigInt.fromI32(3920317)
  ),
  new YakStrategy(
    "0x51132860F3c6947aeb3cB8139121F4D5Ff6AA6d4",
    BigInt.fromI32(3920274)
  ),
  new YakStrategy(
    "0xE40Dd09cBe02419d2Be363f55200c72bcA617404",
    BigInt.fromI32(3920254)
  ),
  new YakStrategy(
    "0xAB4f4a38bc4F74116259174835f67035e973B885",
    BigInt.fromI32(3920158)
  ),
  new YakStrategy(
    "0xDd1C67481A12C8314aA834D6c96A6530ccfb9dA9",
    BigInt.fromI32(3920106)
  ),
  new YakStrategy(
    "0x19D579dfA6a41C9215f1a55B810D59F254F6A8fC",
    BigInt.fromI32(3915921)
  ),
  new YakStrategy(
    "0x16a97496D7F7b8E2D38a0788d0a811bb08FAA484",
    BigInt.fromI32(3915917)
  ),
  new YakStrategy(
    "0xFf40Eb068d35bB24f1e43CDB38fd342e2aA58af7",
    BigInt.fromI32(3920046)
  ),
  new YakStrategy(
    "0x32e4F703d6eB770f4e1fD8AbC4daE35f1a420291",
    BigInt.fromI32(3919934)
  ),
  new YakStrategy(
    "0x5f02327Fc088f8Db5fa8F5A9992Aebdc33450d1F",
    BigInt.fromI32(3919931)
  ),
  new YakStrategy(
    "0xf8571832675F27a26E7d152394fC07246Bd33b91",
    BigInt.fromI32(3915161)
  ),
  new YakStrategy(
    "0xbb0841e1b782E001aF08cDD5097A7a09162B9ec6",
    BigInt.fromI32(3915077)
  ),
  new YakStrategy(
    "0xe84BC4114f38D7259D04cE53DF8aaA784dd6680d",
    BigInt.fromI32(3915073)
  ),
  new YakStrategy(
    "0x0f12DC66F750d95fe7612dC757D7f352521bB61D",
    BigInt.fromI32(3887550)
  ),
  new YakStrategy(
    "0x117A18E4f7514Ba89e5a1BDF92E2202EdAeD90E1",
    BigInt.fromI32(3887213)
  ),
  new YakStrategy(
    "0x19d6C1acd4DdA69b54BBe5dA8c45D8261A0E47FB",
    BigInt.fromI32(3873249)
  ),
  new YakStrategy(
    "0x11303d1552C95f96CaD65A3c0797f20d043e1AB5",
    BigInt.fromI32(3873245)
  ),
  new YakStrategy(
    "0xE8917E088FFaF180b061f6EAAc061bcf20f0Ab70",
    BigInt.fromI32(3873241)
  ),
  new YakStrategy(
    "0x87099fDE786144b554Af66Fb8cbE3130c8cb6470",
    BigInt.fromI32(3754208)
  ),
  new YakStrategy(
    "0x1933133cFab7Fd8908E776e63095aC58c0fAEaE3",
    BigInt.fromI32(3752961)
  ),
  new YakStrategy(
    "0xb9D554fee84Fa97fEee3525a162602860aE554c5",
    BigInt.fromI32(3752900)
  ),
  new YakStrategy(
    "0x211654525dC64A7f74F6361D6F3Dc0710108ae43",
    BigInt.fromI32(3674296)
  ),
  new YakStrategy(
    "0x9EE89F3a3Dfd596bb6F53696E2ed1D09C738f8c8",
    BigInt.fromI32(3674291)
  ),
  new YakStrategy(
    "0x1B53500677cB1B042b12081a8661a6f08781D58c",
    BigInt.fromI32(3674283)
  ),
  new YakStrategy(
    "0x142b4e2c9234aFC3dC07e12d24493a4Ef26c537C",
    BigInt.fromI32(3674264)
  ),
  new YakStrategy(
    "0x3ca2cfd8E17C40ac6F4Aa6c1A4b1723F0Bf59dD8",
    BigInt.fromI32(3674259)
  ),
  new YakStrategy(
    "0xb940DA8b71791c1F42cc612d1af427878ec1A369",
    BigInt.fromI32(3674256)
  ),
  new YakStrategy(
    "0xFbDc6e63CF250E2843ffAef75717993b3D7CA89E",
    BigInt.fromI32(3628698)
  ),
  new YakStrategy(
    "0x150f6526De9b55E126870A118D47DC4Fd0F8Ac48",
    BigInt.fromI32(3583911)
  ),
  new YakStrategy(
    "0x4d94796EEe7694E5c60cd850eF47D9E536D3Ad8b",
    BigInt.fromI32(3583879)
  ),
  new YakStrategy(
    "0xCFD132761c41f66A188A478a282121b0Fb6d99bF",
    BigInt.fromI32(3583648)
  ),
  new YakStrategy(
    "0x3E63F20Cdd82A9Fec2Bbe48ca820589AFCb85194",
    BigInt.fromI32(3583605)
  ),
  new YakStrategy(
    "0x0280988155EdB58210Fe30be5d429C0f1B91BcE6",
    BigInt.fromI32(3582631)
  ),
  new YakStrategy(
    "0xD3F113CFC44A5E28a6683A2D0424d3ea6CCc2aC0",
    BigInt.fromI32(3582606)
  ),
  new YakStrategy(
    "0x68E7DD061b068eA476E979215e3C08a235BD0CeE",
    BigInt.fromI32(3582504)
  ),
  new YakStrategy(
    "0x38056B8AD79256cECf7a2Ab6103A9c00AbE61214",
    BigInt.fromI32(3582488)
  ),
  new YakStrategy(
    "0x14d35e27D1381C73AA748f39eCa82c6E6f759392",
    BigInt.fromI32(3581032)
  ),
  new YakStrategy(
    "0x4647247005A15594D16a226867812F509C4557ED",
    BigInt.fromI32(3580990)
  ),
  new YakStrategy(
    "0x8B414448de8B609e96bd63Dcf2A8aDbd5ddf7fdd",
    BigInt.fromI32(3574217)
  ),
  new YakStrategy(
    "0x67F8190A37aA1F3516713F849bdF3B7b9E3dF3a0",
    BigInt.fromI32(3560874)
  ),
  new YakStrategy(
    "0xa13ADB03619835E6e59ED0eD440bE765017D8715",
    BigInt.fromI32(3560719)
  ),
  new YakStrategy(
    "0x8a39f38b783857fd128A8bC3354f981160D750A7",
    BigInt.fromI32(3560050)
  ),
  new YakStrategy(
    "0xB6Bf27B1b3E0ce30A91533F2Fc251aFbda53E187",
    BigInt.fromI32(3560018)
  ),
  new YakStrategy(
    "0xFB503e8CC1657aDEb1A7ed40A0D7aE77ECeCaAfd",
    BigInt.fromI32(3559977)
  ),
  new YakStrategy(
    "0x7873238A924C6f00bE150b8CfDc3C233a8D5758B",
    BigInt.fromI32(3501569)
  ),
  new YakStrategy(
    "0x73d835325637FAF11Ae1838428510D9566E1a465",
    BigInt.fromI32(3501418)
  ),
  new YakStrategy(
    "0x942B94A79fBe8Ae12594ee4510619B5209D4a6D4",
    BigInt.fromI32(3499458)
  ),
  new YakStrategy(
    "0x2eC16d231f4001153dD84Da477455D0BcB7d5c71",
    BigInt.fromI32(3498384)
  ),
  new YakStrategy(
    "0x1fEb96Ef9B166859280B6992d4d6c4cdC5b694f6",
    BigInt.fromI32(3476539)
  ),
  new YakStrategy(
    "0x816D5441C47d6d8fa62b28b6CB32aE7e72fB0E7a",
    BigInt.fromI32(3461705)
  ),
  new YakStrategy(
    "0x81514F9533753137E9F8842fe4BDefFFa3E3Dced",
    BigInt.fromI32(3456293)
  ),
  new YakStrategy(
    "0x316AD32f61eb06d537D1b545C5d4c5c2168Baf6a",
    BigInt.fromI32(3428584)
  ),
  new YakStrategy(
    "0x99D6aCaCA55ffcA5fE47755D17865d394E59c891",
    BigInt.fromI32(3420905)
  ),
  new YakStrategy(
    "0x8DbDD4A46ABE939a98b5876702bFF56EA4Cd33Ad",
    BigInt.fromI32(3410796)
  ),
  new YakStrategy(
    "0xb7e864cB98896b8E348d31Bda03C3524dc709041",
    BigInt.fromI32(3410770)
  ),
  new YakStrategy(
    "0x7d2dA0917500AFb3df94a09e24a34790A386B208",
    BigInt.fromI32(3408628)
  ),
  new YakStrategy(
    "0x3129FB69d734AeBeeeF7E40D33b5093f4284767c",
    BigInt.fromI32(3399644)
  ),
  new YakStrategy(
    "0x7257F259c17226C5B09048308403757a6680f2C1",
    BigInt.fromI32(3352222)
  ),
  new YakStrategy(
    "0xA1801f4FFD40b192A13A54614E66d3625d5C422e",
    BigInt.fromI32(3352191)
  ),
  new YakStrategy(
    "0x481480FCEECA146743D75bFDa581946efBc74261",
    BigInt.fromI32(3301375)
  ),
  new YakStrategy(
    "0xc8410344FDa4F4A348492a19b099B389494ED668",
    BigInt.fromI32(3301366)
  ),
  new YakStrategy(
    "0x755c78D3bC25e297e8E010A2D1FCf49Cc43ADa21",
    BigInt.fromI32(3256682)
  ),
  new YakStrategy(
    "0x5bD57DFC6Bc4FC322da4a4A4dA9a0a05482644C2",
    BigInt.fromI32(3256606)
  ),
  new YakStrategy(
    "0x4084F32A91F4D8636Ca08386EFE70c6E302F1d84",
    BigInt.fromI32(3251698)
  ),
  new YakStrategy(
    "0x698bceeE246934FbFFDbe222CC4444Ae7585C3cb",
    BigInt.fromI32(3245514)
  ),
  new YakStrategy(
    "0x8dc3cf91D0118121b5F152556E8E33804c1Ae1CD",
    BigInt.fromI32(3245361)
  ),
  new YakStrategy(
    "0x976C480A2838EB668C502F9087765eD93E3CF892",
    BigInt.fromI32(3243800)
  ),
  new YakStrategy(
    "0x7D2d076000611E44740d636843384412399e31b9",
    BigInt.fromI32(3237454)
  ),
  new YakStrategy(
    "0x9669Fe1ea0d8883661289461b90a10B71Ae400Ee",
    BigInt.fromI32(3234234)
  ),
  new YakStrategy(
    "0x5adcc735654Bfa472e8c47a639b08292913eD773",
    BigInt.fromI32(3165911)
  ),
  new YakStrategy(
    "0x8E2DCd0F79C024c02A8d88A9c8C366E64bD8feA9",
    BigInt.fromI32(3165878)
  ),
  new YakStrategy(
    "0xC6eBfB1199fCa2841ac8A30c5Ac2D28Ced2ee204",
    BigInt.fromI32(3165106)
  ),
  new YakStrategy(
    "0x8FFeAc711b0F7dff69228eb40f33034b5fB822A2",
    BigInt.fromI32(3165043)
  ),
  new YakStrategy(
    "0x622bE93c63Fa148EC78fdb508Ac1AF1BA8BC0Dd4",
    BigInt.fromI32(3157736)
  ),
  new YakStrategy(
    "0x4934D7C4F22829432BE73bB29E7882B39F5E5C31",
    BigInt.fromI32(3157694)
  ),
  new YakStrategy(
    "0x87Cb748dCc4E22c0e6928b0BE738d958FEe4F304",
    BigInt.fromI32(3157656)
  ),
  new YakStrategy(
    "0x9d2935dcb0225cD79169cB71F45157cfFC6cDD42",
    BigInt.fromI32(3157634)
  ),
  new YakStrategy(
    "0xecd3C537399D9DC65786a5ACcce94e48BD4988fF",
    BigInt.fromI32(3043482)
  ),
  new YakStrategy(
    "0x6296043F1cE18a94eE61A9d6dA99281197d73a00",
    BigInt.fromI32(3041928)
  ),
  new YakStrategy(
    "0x07d392a242a4E62919C316fF8EEe210e4034ed20",
    BigInt.fromI32(3041911)
  ),
  new YakStrategy(
    "0x5Be841f804Be8f9825c85e728f9b7c8EE55da507",
    BigInt.fromI32(3041896)
  ),
  new YakStrategy(
    "0x54ee73D619D332E360bB3895Ee1647E18dCD21F7",
    BigInt.fromI32(3041879)
  ),
  new YakStrategy(
    "0x972CCEF781feB87450D52d929685B162E9d305C4",
    BigInt.fromI32(3021683)
  ),
  new YakStrategy(
    "0x16aeb10777f1315fc28084fe35a45F377c161cD3",
    BigInt.fromI32(3021668)
  ),
  new YakStrategy(
    "0xCb3257195A3Cec8f97d2375B7AA4939ce3e125E9",
    BigInt.fromI32(3021648)
  ),
  new YakStrategy(
    "0x90148b6A79253c67131DdDf58EcB39B11663E40c",
    BigInt.fromI32(3021633)
  ),
  new YakStrategy(
    "0x3b2464afCDCCAca302357736df4B1d552e239fee",
    BigInt.fromI32(3021431)
  ),
  new YakStrategy(
    "0x1227a55a86ACa0331e450BA6A3750054Da35347D",
    BigInt.fromI32(3021359)
  ),
  new YakStrategy(
    "0xdD65Bb46A7C4a9ccB8d3Dd7caA40D75e0622e445",
    BigInt.fromI32(3021323)
  ),
  new YakStrategy(
    "0xF3B07e79E1F18315006642E9E5c1484d2C97A9E4",
    BigInt.fromI32(3021316)
  ),
  new YakStrategy(
    "0x45AF056a757D6649c24D74c2E4fE449682F6A2dB",
    BigInt.fromI32(3021301)
  ),
  new YakStrategy(
    "0x0C4684086914D5B1525bf16c62a0FF8010AB991A",
    BigInt.fromI32(2982764)
  ),
  new YakStrategy(
    "0xC5D0efF84fF61A8A6b6CcF6852506AFb51fe803F",
    BigInt.fromI32(2982498)
  ),
  new YakStrategy(
    "0x3683B47E3FE0A37e624Fb82D60D593042b1920f1",
    BigInt.fromI32(2973080)
  ),
  new YakStrategy(
    "0x59280E53ac2202563Ad3Dd6FfdC5Ee954C540501",
    BigInt.fromI32(2973078)
  ),
  new YakStrategy(
    "0x093Dcad3a5257457746de4c614F983b23B982602",
    BigInt.fromI32(2971459)
  ),
  new YakStrategy(
    "0xF3072d053EAcFAB3adcA9edde5913610566D82D6",
    BigInt.fromI32(2971446)
  ),
  new YakStrategy(
    "0xE8326E606793bf60a7A9Ee13AAEe1C06b3D4e491",
    BigInt.fromI32(2952151)
  ),
  new YakStrategy(
    "0x0e3AAE51740325E41351103Ad4A0594900100b43",
    BigInt.fromI32(2952148)
  ),
  new YakStrategy(
    "0xF32309A6C21C1C27b0a6b87E607B9862d67Be21f",
    BigInt.fromI32(2942804)
  ),
  new YakStrategy(
    "0x468EBa06c845205Fb79098EF3b95c0b319DC0541",
    BigInt.fromI32(2942688)
  ),
  new YakStrategy(
    "0x2D5c943ee961b7DC605CA192a19Fd0Fe9258aC5F",
    BigInt.fromI32(2935580)
  ),
  new YakStrategy(
    "0x6d0B40B7b1e5f68132E7faD3a4A6Bc06F165f560",
    BigInt.fromI32(2897971)
  ),
  new YakStrategy(
    "0x1154831d66afe2e825c0B400A0780B9756CC3240",
    BigInt.fromI32(2788530)
  ),
  new YakStrategy(
    "0xA4d9aE5F2338e561182F030751654c2F4c00DE8F",
    BigInt.fromI32(2788508)
  ),
  new YakStrategy(
    "0xE0A322B728275ACeD0323c9264b41184a75762f2",
    BigInt.fromI32(2788497)
  ),
  new YakStrategy(
    "0xD3C3d0F3c745295c3cf727e3dA0c33f6296C16b1",
    BigInt.fromI32(2788471)
  ),
  new YakStrategy(
    "0x08337a1549166dCc463279B68f0028b2f0515B0B",
    BigInt.fromI32(2778976)
  ),
  new YakStrategy(
    "0x551E9E18b2D292C3189f47ac129a5179db6eBC30",
    BigInt.fromI32(2749816)
  ),
  new YakStrategy(
    "0x1026733BBC59EDb627bf194b49f913A7A466466f",
    BigInt.fromI32(2712396)
  ),
  new YakStrategy(
    "0x92752C1d6912A12cd9Cf71093b8812c29E8Ef7F4",
    BigInt.fromI32(2712303)
  ),
  new YakStrategy(
    "0xCA400EbC7632A1a9346851A72Fd41A7Ef234077C",
    BigInt.fromI32(2712261)
  ),
  new YakStrategy(
    "0x3335faf35C489A0872Bb6e4ADb274074b778c59A",
    BigInt.fromI32(2712177)
  ),
  new YakStrategy(
    "0x3d964716c98e732F84542FE38bDC3d21D1c7a9B1",
    BigInt.fromI32(2711824)
  ),
  new YakStrategy(
    "0x75Cc908305b385ec1ff3646Bf84718780F95f20B",
    BigInt.fromI32(2711790)
  ),
  new YakStrategy(
    "0xf6A7B70641bC02eBE9e57F347AC8Aa7197872e94",
    BigInt.fromI32(2711343)
  ),
  new YakStrategy(
    "0x964A0c4f0C03a3d307dF4266e3A73a33FC804dbF",
    BigInt.fromI32(2625963)
  ),
  new YakStrategy(
    "0xeD8c2af5c9F7A0fa5AAa0D8F8E78DDCa28eef3D6",
    BigInt.fromI32(2625787)
  ),
  new YakStrategy(
    "0x85D6F430f30B24F5e933cB3F5E52487dEF8F4e75",
    BigInt.fromI32(2562871)
  ),
  new YakStrategy(
    "0x77c26728465277510c4E33820a4D3b686F44Ab7E",
    BigInt.fromI32(2562864)
  ),
  new YakStrategy(
    "0x5EA465E27F76B084F864addC47F04df8012B376a",
    BigInt.fromI32(2562859)
  ),
  new YakStrategy(
    "0xB5B9CE35E6b3d5f8C800F19be5d8a76D9901f6B5",
    BigInt.fromI32(2562618)
  ),
  new YakStrategy(
    "0xD3D10b328c6cEe9FD599B11ea1272Fe829409bba",
    BigInt.fromI32(2559279)
  ),
  new YakStrategy(
    "0xB18BfB17859C6B90dC0E374fe763A8AfCe25d80c",
    BigInt.fromI32(2559245)
  ),
  new YakStrategy(
    "0x0d33E9982B3418064FCCe9115d04c63b2D0ad101",
    BigInt.fromI32(2551054)
  ),
  new YakStrategy(
    "0x2f153095049C112dF748c2D2dd8Ede0fA92F6CB7",
    BigInt.fromI32(2550271)
  ),
  new YakStrategy(
    "0xfAeD69427E2444263b4C62c630a872A289a54865",
    BigInt.fromI32(2357836)
  ),
  new YakStrategy(
    "0x7832928758afD045cE857aFe5b6320466b5c05ed",
    BigInt.fromI32(2347506)
  ),
  new YakStrategy(
    "0x7be1a6637D753B16e5FF4E00F917Bb921617d805",
    BigInt.fromI32(2346239)
  ),
  new YakStrategy(
    "0xE285a5Cb85297a10fB65EB8FEdbf3900eC242dB8",
    BigInt.fromI32(2284825)
  ),
  new YakStrategy(
    "0x6094637C7A1B98Ee136fA1AaFaBd59E7b0B514be",
    BigInt.fromI32(2278759)
  ),
  new YakStrategy(
    "0x7175a0271375283bD3DD363018A4db9eD73639E4",
    BigInt.fromI32(2278728)
  ),
  new YakStrategy(
    "0xb74dE62EEf4EBb0d02e60BAf280F3C58080ec3C4",
    BigInt.fromI32(2278711)
  ),
  new YakStrategy(
    "0x5Da33bCD38FbC3e9632F9F6a198F4f0eF13746b6",
    BigInt.fromI32(2278678)
  ),
  new YakStrategy(
    "0x779A387e67aF939A6E8E9cF664f69590763f9b06",
    BigInt.fromI32(2278666)
  ),
  new YakStrategy(
    "0x258Ed410926b57dc45915A479F4cefA130e5378B",
    BigInt.fromI32(2273879)
  ),
  new YakStrategy(
    "0x1f257A6E8e4873cc32ae4E69d8436Fe70C663fb7",
    BigInt.fromI32(2273781)
  ),
  new YakStrategy(
    "0xc0c50aB019d256Ec32023aFdca6868C022977da2",
    BigInt.fromI32(2273762)
  ),
  new YakStrategy(
    "0x5F349aF20f87ec815301979fC9C434e2333641bF",
    BigInt.fromI32(2273481)
  ),
  new YakStrategy(
    "0x998DB5870F83Fc6a1908125E3d7B85D58C9fA806",
    BigInt.fromI32(2249239)
  ),
  new YakStrategy(
    "0x1fc1f7A0943c589EDFf4A3650E40C0821B41901d",
    BigInt.fromI32(2248493)
  ),
  new YakStrategy(
    "0x58887009A412Ad52a4FB746D0846585346d83BC0",
    BigInt.fromI32(2248353)
  ),
  new YakStrategy(
    "0xb34fE8A87DFEbD5Ab0a03DB73F2d49b903E63DB6",
    BigInt.fromI32(2226894)
  ),
  new YakStrategy(
    "0x8c325C11e06619Ba0825010feD6D565b4FddC887",
    BigInt.fromI32(2211877)
  ),
  new YakStrategy(
    "0xf1854dCe74e2e354ce6Acb5dAAa77A93690820D4",
    BigInt.fromI32(2211839)
  ),
  new YakStrategy(
    "0xB9C5AE872E946bB2b39f1CFBEb2749830cCf20fa",
    BigInt.fromI32(2211821)
  ),
  new YakStrategy(
    "0xe867eC0fa1969380960fE544F2A8d5758A26E254",
    BigInt.fromI32(2210845)
  ),
  new YakStrategy(
    "0xbd8B2bC5CaAb6843365084b529905964d0626248",
    BigInt.fromI32(2177386)
  ),
  new YakStrategy(
    "0x562ACEA3c03dBDDc25e2F24bb2685D17Bdb4e62f",
    BigInt.fromI32(2151994)
  ),
  new YakStrategy(
    "0xf487044eD85F2d47A8eAD6b86c834976B8c31736",
    BigInt.fromI32(2151891)
  ),
  new YakStrategy(
    "0xb667121B4D4b6ea5DE4bb61bd3a02E53529BfcCA",
    BigInt.fromI32(2149532)
  ),
  new YakStrategy(
    "0x39F7fCB3aF11B0a274514C581d468739e75f64EC",
    BigInt.fromI32(2149512)
  ),
  new YakStrategy(
    "0xC1F14E9D2b7B88B62e33772b3D14BC6d360d7Cdb",
    BigInt.fromI32(2144408)
  ),
  new YakStrategy(
    "0x8d9153c1976769E2C8774f88648E75C897D1e4B0",
    BigInt.fromI32(2139315)
  ),
  new YakStrategy(
    "0x7867C7a94eF30E26ae855af5d271fB9E52f26c36",
    BigInt.fromI32(2123043)
  ),
  new YakStrategy(
    "0x9B3365CF1927c29Fa6C1d9bbD214A6bf7b893a06",
    BigInt.fromI32(2123034)
  ),
  new YakStrategy(
    "0x2cFB60bD96B5215437c3e9D2cAB218fcE29F096C",
    BigInt.fromI32(2062806)
  ),
  new YakStrategy(
    "0xbFBbEB1Bde34C53533A38cFBb07c37fFA06502a5",
    BigInt.fromI32(2062802)
  ),
  new YakStrategy(
    "0xe97e85a8cc54980e0370faA196DAE25E43b2aef0",
    BigInt.fromI32(2027322)
  ),
  new YakStrategy(
    "0x8DF0790E9b9f06AdD676b53136Bd9734e4916D59",
    BigInt.fromI32(2026680)
  ),
  new YakStrategy(
    "0x86D919752822Fcf060307201808e8f206Ad10324",
    BigInt.fromI32(2009923)
  ),
  new YakStrategy(
    "0xb2dA66e3245d47b67Ea0d98B8789C614e2e3A76D",
    BigInt.fromI32(2008721)
  ),
  new YakStrategy(
    "0x7924612c49084b71eaA383C3aeB8A7e7EEb1A63e",
    BigInt.fromI32(1690330)
  ),
  new YakStrategy(
    "0xC92fAc369925f6f6e88384c2A6f3678977dC6213",
    BigInt.fromI32(1690160)
  ),
  new YakStrategy(
    "0x81dBdb246Fa1bB98a85C59eAF9face97403b6C19",
    BigInt.fromI32(1690032)
  ),
  new YakStrategy(
    "0x4e42c97EFae0777643938262f43c247b702Ad7c6",
    BigInt.fromI32(1655590)
  ),
  new YakStrategy(
    "0x43C1d15C34D73eb6dFD2bf39BC53C0a0b5724b17",
    BigInt.fromI32(1655588)
  ),
  new YakStrategy(
    "0xF0c2d1D6A3D7Fb3d1Ddc2468fCF1d3B1AB648DaC",
    BigInt.fromI32(1655585)
  ),
  new YakStrategy(
    "0xB42cD0bea11ad9eC610F2bd5826463Bb93396538",
    BigInt.fromI32(1654864)
  ),
  new YakStrategy(
    "0x9968f0c68B9D812C226F3d6eb3cd3c958979E1af",
    BigInt.fromI32(1608214)
  ),
  new YakStrategy(
    "0x0cAAA919FEeb50029f99b288e43a73c66178C976",
    BigInt.fromI32(1608184)
  ),
  new YakStrategy(
    "0x57A6E0CEF1E32BeE5407BDcaB57dE10eEb383aA6",
    BigInt.fromI32(1592028)
  ),
  new YakStrategy(
    "0x0Bd7cdDB6B76eeAA8AAaEC124e7Ffe0d26496D3e",
    BigInt.fromI32(1548220)
  ),
  new YakStrategy(
    "0xc474e6cAE8b7c7E43b3c69125A7226A4A08a4229",
    BigInt.fromI32(1547996)
  ),
  new YakStrategy(
    "0x3b23E8a535B2a9e4C73f617c1c5A36299b3C57B2",
    BigInt.fromI32(1521818)
  ),
  new YakStrategy(
    "0x9550593eA20359A4EfeB914C1FFf2d123EC9C091",
    BigInt.fromI32(1521812)
  ),
  new YakStrategy(
    "0xF947758148e056Cd8096eFD07f536B59f3247206",
    BigInt.fromI32(1520602)
  ),
  new YakStrategy(
    "0xDf98Af02258E7F32A4fEb77c159A42Bd64D204d3",
    BigInt.fromI32(1476231)
  ),
  new YakStrategy(
    "0xfdd8B1444B3A929979d84E2255Ab52cb9F7B5a4C",
    BigInt.fromI32(1475902)
  ),
  new YakStrategy(
    "0x1AD92f75C2740efD143ED666f8dE3eD963b22AD3",
    BigInt.fromI32(1099669)
  ),
  new YakStrategy(
    "0x72E332cc6bf00EC48861C51df104770EDf7890B6",
    BigInt.fromI32(1099740)
  ),
  new YakStrategy(
    "0x0345f2b85d238a963965Ef8163ccB93efF81Ff5E",
    BigInt.fromI32(1099520)
  ),
  new YakStrategy(
    "0x2409E04F96E71Fc931E18196509F130dFE0959a6",
    BigInt.fromI32(1099894)
  ),
  new YakStrategy(
    "0xC53DC280dc14F24B21370919d757cF7b296BFd31",
    BigInt.fromI32(1100025)
  ),
  new YakStrategy(
    "0xaf985c13836b753445487c99448dA38Bd7774A17",
    BigInt.fromI32(1099986)
  ),
  new YakStrategy(
    "0xfDffdf6Dc4FB30BeDE8af0f78D42c5468F37324B",
    BigInt.fromI32(989166)
  ),
  new YakStrategy(
    "0x4DD36b27e038E5c479d8BEC440c8f4eE89B6dF5D",
    BigInt.fromI32(1030559)
  ),
  new YakStrategy(
    "0x89a806347b0814a265Dc17aFc343866b2214dD0F",
    BigInt.fromI32(989386)
  ),
  new YakStrategy(
    "0x212dF67Bf1243eE57686883C9222637136bb65E4",
    BigInt.fromI32(989432)
  ),
  new YakStrategy(
    "0x3a8D3FBaB8b87473b9B2D78393200B099fA98497",
    BigInt.fromI32(997784)
  ),
  new YakStrategy(
    "0xa019F49464FCD206d080060CBbCB1A089441a732",
    BigInt.fromI32(997786)
  ),
  new YakStrategy(
    "0x9C36eca9309f0CeB5818da889E47D3c3E2ba9F32",
    BigInt.fromI32(997788)
  ),
  new YakStrategy(
    "0xec2258cC4B75aD0a013C7346c07f7470AEa7F0e4",
    BigInt.fromI32(997790)
  ),
  new YakStrategy(
    "0xC82ad2Eab7EE0B9226aE884255ca9c1cB33D9E2C",
    BigInt.fromI32(1005158)
  ),
  new YakStrategy(
    "0xeec2d8bD006e189A0e53819C670b9c08Ee098EB0",
    BigInt.fromI32(618518)
  ),
  new YakStrategy(
    "0x829a96AFAcB3f39f740b39fDF575658f88B153f1",
    BigInt.fromI32(864704)
  ),
  new YakStrategy(
    "0xA75AF2E0ea2BBDa6Dc6921B4Ee3bb051309d28C9",
    BigInt.fromI32(646862)
  ),
  new YakStrategy(
    "0x1E3808e065280E5D773e7D1e9D1f8421C4543b27",
    BigInt.fromI32(757374)
  ),
  new YakStrategy(
    "0x855f76F69826b41D663dA8587C199e5Ff4C55325",
    BigInt.fromI32(757449)
  ),
  new YakStrategy(
    "0x37A83906a69d6236DBcB4d8257D8f62d1f3BBcD5",
    BigInt.fromI32(883582)
  ),
  new YakStrategy(
    "0x0b4a63943e96463b432ec79E7287E63d830BEC51",
    BigInt.fromI32(883586)
  ),
  new YakStrategy(
    "0x4a79206B5e1aF8ff4e62183f2f2ff2B4Efb0A9B9",
    BigInt.fromI32(891878)
  ),
  new YakStrategy(
    "0xDEfC4b949EA970533FE6F5A75248d4Da534F8873",
    BigInt.fromI32(883588)
  ),
  new YakStrategy(
    "0x6BbeA2dbA0Ea15F17C92F84765ae1c3Ab651dF58",
    BigInt.fromI32(733991)
  ),
  new YakStrategy(
    "0xfE0521F000d20f0bb9bB2cBa51dC9066468671f9",
    BigInt.fromI32(733992)
  ),
  new YakStrategy(
    "0x141bE6e009a0D9a5c0d4e557c0636e97B3de2a7B",
    BigInt.fromI32(701099)
  ),
  new YakStrategy(
    "0x485240Fd6e73EC6afd32A7C64707F7AAc11EE151",
    BigInt.fromI32(707881)
  ),
  new YakStrategy(
    "0x882b1F5C8f5438e1C47Ef464A6199C70f20cCeDa",
    BigInt.fromI32(1008335)
  ),
  new YakStrategy(
    "0xd661a38708E6544F2D32e302e6E893A97Be7314c",
    BigInt.fromI32(707879)
  ),
  new YakStrategy(
    "0x50F91f231F8eEca4ff6e0D4f2dABe7d22228D34d",
    BigInt.fromI32(734003)
  ),
  new YakStrategy(
    "0xD8399D3db7da1E1Db132DE4E5D3cCF8620dfa2e6",
    BigInt.fromI32(1113929)
  ),
  new YakStrategy(
    "0x411b1F257E84394A60C7Fb8fbdA9C53A0C441057",
    BigInt.fromI32(1113930)
  ),
  new YakStrategy(
    "0x18DF163393c6DA3285C2888461b8fD736272E245",
    BigInt.fromI32(1124233)
  ),
  new YakStrategy(
    "0xded4e24C158b973D4cD309b19295954DD0ad5A23",
    BigInt.fromI32(1151941)
  ),
  new YakStrategy(
    "0x4CAceCe41645Ae3A78655cdC33320beD00f72437",
    BigInt.fromI32(1151943)
  ),
  new YakStrategy(
    "0x579cF87201C82B21ba9ae29678B812E07fccf14C",
    BigInt.fromI32(1153912)
  ),
  new YakStrategy(
    "0xbD42169E094CD8b95513cB3640e9D37418258E17",
    BigInt.fromI32(1154305)
  ),
  new YakStrategy(
    "0x6b128f920813dF43Ac91D83ed8A79b08C99a41db",
    BigInt.fromI32(1154306)
  ),
  new YakStrategy(
    "0x7346502437C9F09AB040855f756EdeA2A2aC0912",
    BigInt.fromI32(1171822)
  ),
  new YakStrategy(
    "0x069E889D729D4D96Dae10C86a4D1F629ad81adEf",
    BigInt.fromI32(1171877)
  ),
  new YakStrategy(
    "0xFfbE3f2b1fF3f595e3059CCa8a7FcD3eB4D71949",
    BigInt.fromI32(1171888)
  ),
  new YakStrategy(
    "0x104a9f8C3a1f3bF0814105E1fD457CD7775979cE",
    BigInt.fromI32(1171902)
  ),
  new YakStrategy(
    "0x1Ad3bE171A6be9f6b9a60C30c5373185bD9c0B6e",
    BigInt.fromI32(1161175)
  ),
  new YakStrategy(
    "0x2eE33e53eBD75222c7c62F1e9FEB0bc9766136ba",
    BigInt.fromI32(1212921)
  ),
  new YakStrategy(
    "0xf752325D33f748115660B8661ab7DE10cfd1997C",
    BigInt.fromI32(1212922)
  ),
  new YakStrategy(
    "0x197e2AE97a783b9a7958eafd01e2467B875989d7",
    BigInt.fromI32(1212924)
  ),
  new YakStrategy(
    "0x2521597A67DbA56932358F0a67f196BA0cD33053",
    BigInt.fromI32(1145411)
  ),
  new YakStrategy(
    "0x6d76d0a8AD4F2325C6f4286DD3a40c1cd3B817dE",
    BigInt.fromI32(1124234)
  ),
  new YakStrategy(
    "0xaa22703AF4a6575fEB316f078bdc584A94FdE108",
    BigInt.fromI32(1124235)
  ),
  new YakStrategy(
    "0x1a7d36D12e12ABfA91e8da437bDa4c86657163e5",
    BigInt.fromI32(707880)
  ),
  new YakStrategy(
    "0x06404FC9C69F8333DC24D4C856E2c8Db7983EB8a",
    BigInt.fromI32(1145406)
  ),
  new YakStrategy(
    "0x00508fD84E2aCA19B8aF38C2c59171971D97495b",
    BigInt.fromI32(843115)
  ),
  new YakStrategy(
    "0xA544b965C2a05b97C44f3126cec916332aFb3175",
    BigInt.fromI32(1145410)
  ),
  new YakStrategy(
    "0x06Fd3eceE685cA5717c814dc7a790641E98aD9c7",
    BigInt.fromI32(842602)
  ),
  new YakStrategy(
    "0x69293F1f9F4ad45ef9295f94ccaED0C045466214",
    BigInt.fromI32(883584)
  ),
  new YakStrategy(
    "0x007A0f7C4CAe14415dbCAC83da92d4c01f7601ED",
    BigInt.fromI32(748080)
  ),
  new YakStrategy(
    "0x8054fABa5fC1b8523A0c2fb54845C2Ec3326B347",
    BigInt.fromI32(748081)
  ),
  new YakStrategy(
    "0xb373a54f7F773a99feBe49F2C5dB11756574f0CE",
    BigInt.fromI32(1145423)
  ),
  new YakStrategy(
    "0xe51d794d7822e5A78bA681A69294a31BF2117b94",
    BigInt.fromI32(1145421)
  ),
  new YakStrategy(
    "0x206D15CB7DA413C0E662f284e00f907f51999a40",
    BigInt.fromI32(1145413)
  ),
  new YakStrategy(
    "0x9800F6189EE6849361d8bF4c0cD7a75a3074550d",
    BigInt.fromI32(1113928)
  ),
  new YakStrategy(
    "0x303DfF9550a1E959A7E6731809A587acc195fD21",
    BigInt.fromI32(707882)
  ),
  new YakStrategy(
    "0x7A43D565837274eA2f6E6d95F4020871669C13C9",
    BigInt.fromI32(1369619)
  ),
  new YakStrategy(
    "0x976EEea238514fd13A4aB3E4cB45EfA17F9426A7",
    BigInt.fromI32(1369859)
  ),
  new YakStrategy(
    "0x8D325d788140c391Fcb55A45E19bB4c66Ef87529",
    BigInt.fromI32(1369960)
  ),
  new YakStrategy(
    "0x908698B561eA14f153dDD1Ee02f99EBE0A4cea0f",
    BigInt.fromI32(1400932)
  ),
  new YakStrategy(
    "0xFC47515433eE291E692958a2D15F99896FAFC0BC",
    BigInt.fromI32(1400934)
  ),
  new YakStrategy(
    "0x8C3C86bEA8eD5ACbCE4944deF6731291Eb193C26",
    BigInt.fromI32(1400936)
  ),
  new YakStrategy(
    "0xfb5Aa7660fDe5013996FD72a193ACCF00212Af32",
    BigInt.fromI32(1404673)
  ),
  new YakStrategy(
    "0xA004785b6a53dd1f523d5519b5EFDC619B6b92c5",
    BigInt.fromI32(1404676)
  ),
  new YakStrategy(
    "0xFD1F86448b56942C32B954092F2fDBCE91E37Bf6",
    BigInt.fromI32(1404678)
  ),
  new YakStrategy(
    "0x90E24A2dfd80F02D01c7B630E8e3199C8A0388D3",
    BigInt.fromI32(1413019)
  ),
  new YakStrategy(
    "0x165FA1023429E266Cd767845E8dE419Ce3abd379",
    BigInt.fromI32(1413017)
  ),
  new YakStrategy(
    "0xBD9f16EeE869808bF22823427D1f4a1E7A440E8D",
    BigInt.fromI32(1413014)
  ),
  new YakStrategy(
    "0x8Bf6402AfcfE11519947829Af44770Fa44A01949",
    BigInt.fromI32(1413011)
  ),
  new YakStrategy(
    "0x8F871D05d7AfB9dAffA5Df13A91c74e870e6c31E",
    BigInt.fromI32(1413014)
  ),
  new YakStrategy(
    "0x20afdEf84D1E87D9BfD8086F7269183E12C712E2",
    BigInt.fromI32(1150431)
  ),
  new YakStrategy(
    "0xaa21128578043C10c5C50BFF1011879c5188dDB2",
    BigInt.fromI32(1150433)
  ),
  new YakStrategy(
    "0xC2387b6AB5B75aacD6A4A94e44f8402f1E8AFdc2",
    BigInt.fromI32(1150434)
  ),
  new YakStrategy(
    "0xBA78660BCa43b5a692c632c2A02ff329701DcbF1",
    BigInt.fromI32(1150436)
  ),
  new YakStrategy(
    "0x0bc2Fb2d9Ba486cBF9e6192f982023f72E80f96F",
    BigInt.fromI32(1145417)
  ),
  new YakStrategy(
    "0x1817fE376740b53CAe73224B7F0a57F23DD4C9b5",
    BigInt.fromI32(1145419)
  ),
  new YakStrategy(
    "0xF0BDE208A05CC0a056B5FAE1a78212Adf7A4AFfe",
    BigInt.fromI32(804966)
  ),
  new YakStrategy(
    "0xaa9e134D3f9C802f099c53A0C0195373e34d92F7",
    BigInt.fromI32(842070)
  ),
  new YakStrategy(
    "0xC0787Fd12249451763be576cf73621f3aF61ebBD",
    BigInt.fromI32(842601)
  ),
  new YakStrategy(
    "0x43801E030AFbdFD9A30dA3E5321DD6B609083BCB",
    BigInt.fromI32(843112)
  ),
  new YakStrategy(
    "0xca0803B898F64E3a990998a79Ad874c1880bA346",
    BigInt.fromI32(1113467)
  ),
]

export const yakStrategies: YakStrategy[] = [
  new YakStrategy(
    "0x449Ee12de33E45c5A5BaCBbE0f9DDd276e0ef417",
    BigInt.fromI32(674144)
  ),
  new YakStrategy(
    "0x75E302c0F29f75813a1DBEB9fCADfdeE48ebE362",
    BigInt.fromI32(536364)
  ),
  new YakStrategy(
    "0x6eDA40218604b9aBE4DC40d68a23A86f1F50B66C",
    BigInt.fromI32(469748)
  ),
  new YakStrategy(
    "0x241f66d7aE5053b63367BB083BA7d6c364ff4987",
    BigInt.fromI32(469747)
  ),
  new YakStrategy(
    "0xB58535A99e2D615df6Ff00AD091D01310Daabda3",
    BigInt.fromI32(536365)
  ),
  new YakStrategy(
    "0xC9cD088fD5C17d5cbFd1ff331fa6A48F2f5D9Cb1",
    BigInt.fromI32(580307)
  ),
  new YakStrategy(
    "0xC47c5050E1f8e45a6741613E29a303D7cc106afF",
    BigInt.fromI32(469749)
  ),
  new YakStrategy(
    "0x49e01Ade31690D286C5E820a8DAA4412125c7E7a",
    BigInt.fromI32(469926)
  ),
  new YakStrategy(
    "0x7f3BB8dB336ff50120E290e5C8eC78B20f619D01",
    BigInt.fromI32(545083)
  ),
  new YakStrategy(
    "0xfd410034f88B99E4BeE8Bd7B51Fa323B6678Bf73",
    BigInt.fromI32(544073)
  ),
  new YakStrategy(
    "0x8b3df85620180bd6446fB295f29C62aF0C3054C5",
    BigInt.fromI32(472285)
  ),
  new YakStrategy(
    "0x8D35BEB9e8750959c3520d202b589aB78C366D59",
    BigInt.fromI32(571589)
  ),
  new YakStrategy(
    "0x6ea142f55aE733eeaEef5fEA34d4312478c762e5",
    BigInt.fromI32(571586)
  ),
  new YakStrategy(
    "0x456A68EeC203a35A8fa1D9c7Bf5797909D1cee04",
    BigInt.fromI32(571588)
  ),
]