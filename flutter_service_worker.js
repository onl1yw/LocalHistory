'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b72fcdb431f3b033cadabaa3ef98f60",
"version.json": "4029a32756413ffc9ac74dfde851ef6f",
"index.html": "2f5c394b4f7a72d6ba7c33d20c9303c5",
"/": "2f5c394b4f7a72d6ba7c33d20c9303c5",
"main.dart.js": "f2491a86afaaca5c53fec55538a1a110",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4db226e788469df80d48d3e85850e68d",
".git/config": "3a2860c7b587f378f290ba5246c0af46",
".git/objects/61/057c08b478733d90a0185587991b37fe545082": "cd70787141368e8e4d8d9f59c53ca843",
".git/objects/66/f20d535429a795ba597aace137b6066545f05f": "7ecf80845c2c0b25ca328214ae8a010d",
".git/objects/50/72a22853afb51cb1c829ca3cdccb740c79d4f8": "69956b61744bf96d04c1f885b01b4141",
".git/objects/50/d19eaf6674300671d35b4cd4e2a4b400127b0f": "1c53df3908bda2c4bc14cdd4e3f67296",
".git/objects/3b/af65225bfca5193db73176b423586efd1952cc": "5f018045c913aba82a4a87434fbccc3c",
".git/objects/6f/18697121ebdb00c027de21589fb4692ce55da3": "a61faea2319d851bf4a6638375a4551a",
".git/objects/9b/00f5654124fd1147c8b067ed617c776d1ffc9a": "7e5f70e69e700f05542aceeba288d11d",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/31ff5fc08af116f0a8bfee13095fa99c2f9048": "24abf0c49466311ae2aa2188f7c3d02c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/928986182bba0b6fb6df866ea22ca6fb6822d8": "e6c1b3048284443af9c1fc07da46c811",
".git/objects/b2/d22baf11ae52dfc4d8336f66fdca37c97e85eb": "04317b80746b98db8daf544fae3f49cb",
".git/objects/bb/c8099c61f0aadd428331e103208093bbd2e314": "8592cf8f185595db6d09c1e27f506f0c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/60471b97f3c8441e06f928d24dbbefb6d2bc5d": "dc065ada9dcd13120f3428c09a0f6c7f",
".git/objects/da/0754a84f7157111941c5c5dbe3e75291499ddf": "195f9ed9240cdb7bb7d5ce6aef09cd7c",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3c83d3f4bf867203bfdc42f8a8f7160e2630c5": "12dac7695cfda9717a6ef91b6974d220",
".git/objects/ae/53168520f4c714dffcc933328ae183aee75b77": "f073c5500a15eea134000c11626f88ab",
".git/objects/e5/37f5f68878ebe2a94183e521ad0ee24f3af5ae": "6290a7eef3cbbe62d0d9ded2ada1658d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8ec2e670b91e98253500145bc3458a8451113e": "b66e0199342b8d9039d1b65aced4ede7",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/a533abf641bfeff314a6f19fd4c52a6c077650": "53aef436272052a78c8382a0cfe70518",
".git/objects/ed/de801e474f48f622ffd993294768210fe6f3c7": "1dea9e34e3b830f2fe6bd61c28fddc80",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/fa0518d263b6e475b02527c803f186d1b19b96": "6628577cba04a702e91571aa433a1753",
".git/objects/4b/2ab607003fd1585e697f5ac80ba1a0115ec1ca": "4d33135ff2e5aa4613738d93c40c163c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/3b44503b416e39cdd7bf7ee54e76a419ca4cc6": "e4b9da3100343133fe45f7a0bec5e1b9",
".git/objects/1a/cb537127c67e0c3f6c25983ae907e833681c87": "ade5d67e4ab0e4ed1418d5ac7c574122",
".git/objects/1a/edf3fcf2f545db28ba26054ae6d1407725df8d": "2ac12b897c06f49596105ec80f8e3ff7",
".git/objects/7b/cf06ca8a1ea4795561e6b5de3baed34c27bee5": "1cf20e5da1aa96b47a91111fc6333b6c",
".git/objects/8a/ef7e64e5c4926f0753c7b4798f023188df1dbc": "71905c1c5523ecb10b33926fdd05125e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/89a618a719febffd8ae8a6310e1d80270a7484": "3369cbe979b97f9fd7a90b6b7e3b9e68",
".git/objects/19/0fd29ec4044f7ad20c765ac751373cf460326f": "9ff0a35e46104a0acc03877f84215b56",
".git/objects/4c/91bee710b9b5e39a6e068b2f7a90f33a588dd5": "08110dc9d75758293077f1078950bc45",
".git/objects/86/0df9c0a2b46792369150a2159890f4d450db46": "b7b59e7c85961059dd6111779275b571",
".git/objects/72/de9dfec015cf790682289eea6c12f7634a96e6": "00191ee1d1f9dec314dbd8370b2e8a84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/ced0c060887e4742bc7b8db761837a666b4f84": "c3c32e5a77b6e6eaac1422dde6d5ca78",
".git/objects/00/b5787a8bf05fee3af89f53d4562d6c65240428": "b2f6a6c12f871f83b572c2b46e5fe06f",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/09d211907a33041de34a9167651bbe1d7d62ab": "365b0693e952910f2da73d7a1a999763",
".git/objects/62/93dbc20027020182be44f89e49557a63e958ad": "cb228a8db47e64061e1f65e7b514aaac",
".git/objects/39/2aa17cebc71cb98d144c2891f937f0d2ae56fe": "3fad219a52d366319224bc17af977fd2",
".git/objects/bf/a5addd6af23d5d4f60556a85f6ed770c01e407": "8d11467e4b289743b6f9af45a7e81494",
".git/objects/d3/c102a73652128578fbf97115f5c8108e67e169": "4b60d0fb5e0db5abc5d24ce2fe4026d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/51d69aa5fc811602547d27a26b007e767c8a8c": "171382be42391548d03e8bd09b0c0b9f",
".git/objects/b1/0f929940b1c9e729db65bb162fee7cd67ea4d4": "54efb56750ac4c714d69768f0dd4e3ec",
".git/objects/d5/a41a07c82f64de89590911ba898a03e59d6e5f": "3fe92ad840a7f3816879098030de3447",
".git/objects/af/27a8c78d90eff0ff9ef4a41ef4d107bba9b5bc": "32d1a61507864c917fcef2de14e98b93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/2da285865ff3af62bc6d4028507a7b56b5788c": "5306b244b10aa37e525b1de3adebd3af",
".git/objects/ea/71312003dddb9aa376218489de6bccb32337d9": "ca9c6b6d39f38a0c4444988367b6111b",
".git/objects/cd/5adf9004d60523f535164ad77af51069e76a63": "f49623fccba351d3897172756e28f477",
".git/objects/fa/3ff81476c36f13c28eac9df14787f789ccb7af": "13faad96be841c35b25d0f020f7fc49e",
".git/objects/e7/def346ad23c42f90e93378f9379345287d2204": "2f7462a173527fe1ae50c519ec93818d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/57130a4bef2aef21edd43306b82364c5e2d07f": "14dc4c70f06dad2a1a19e2c68a46512c",
".git/objects/79/3255e3b0b1765d533f35e17734fc17ae3114bb": "4eb6c58cade0e5579424ea5466faf5b6",
".git/objects/1b/7a8198d893a55e3e255f2d9e9645c37deaf12a": "afeaf44262e81de7b68093405409f8f0",
".git/objects/70/e207ded2521aa572e8b30bef5b1d226f785416": "dc4b10a344879c594f12e9e76f7b7497",
".git/objects/1e/71715ce007086bf5bf54c8a68cf3cd5d57c991": "ad1dbc6e93139b918ed2901bb8182c45",
".git/objects/8c/88e383744bd39ae7b8de8932f755ea99096e1c": "6913ef6c276e721d79ec2db22ce42a42",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/ac200b3a28379fafa000ba591aebdceef251e5": "95c56d8ad8296a852abb9508c03b1f35",
".git/objects/1c/6952f3c208fa5ed1f71eb35180eabd1ecd626d": "fc5ed6f2ee88d23c36f8f1e1a5f2bb0c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/2b/76b24d808aa825130df9777a211453fafdfaec": "1416f90212a55f63724e42f7b373652d",
".git/objects/47/b60f8ead225dced0e935eed1a8f3efaf833dc5": "8a21eaf23201190458162de712c64f5e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/6c989ff38a2dcaf1ca0f36a0480b547e0e77c5": "e1c016933054ff2e327b3ed530971b90",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "def624c37f8d8618ad8cc7233e3ec472",
".git/logs/refs/heads/main": "def624c37f8d8618ad8cc7233e3ec472",
".git/logs/refs/remotes/origin/main": "b2ac13df20441032541df47f9887085b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "de8d8f50a06f24261c1d7e64cbee0cc8",
".git/refs/remotes/origin/main": "cf00e5bcf69fbfdd6ec6aafb5a8a5b71",
".git/index": "f6a99811de89b02d90d8d03fd3520e5b",
".git/COMMIT_EDITMSG": "9f2bdf716c88537f8fc94189067d3aca",
"assets/AssetManifest.json": "6ab69e9fe6f7e0c0ff328deb7d808742",
"assets/NOTICES": "a9c4f7ae06d21ae0407736964ac2f684",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "152b012f42e2c35c72494d2b2b0b56e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9b96d956bfccb682ad022c627791aace",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/%25D0%2593%25D0%25B0%25D1%2580%25D0%25B4%25D0%25B5%25D1%2580%25D0%25BE%25D0%25B1.jpg": "703ccbc9925027ac2e462ce763c139ed",
"assets/assets/bbb.png": "ee1dbed35a84cf72e125d222e7fc9050",
"assets/assets/%25D0%2595%25D0%259C%25D0%25A6%25D0%25A2%2520%25D0%25B1%25D1%258D%25D0%25BA%25D0%25B8.mp4": "b71596958eddfded5fa9940f33dcd0b6",
"assets/assets/%25D0%25A2%25D1%258E%25D1%2580%25D1%258C%25D0%25BC%25D0%25B0.jpg": "61cc0ce17e02647e51858bc4ca964f01",
"assets/assets/%25D0%2591%25D0%25BE%25D1%2580%25D1%2583%25D1%2585.mp4": "1cd16fad9f4a16700133a02eaaf6b4c5",
"assets/assets/Map.png": "4ad3de6937e80b03951259634b733aa7",
"assets/assets/%25D0%2590%25D0%25BB%25D0%25B5%25D1%258F.jpg": "9a3618aa4b2a072703dbe37ee1e29b9c",
"assets/assets/aaa.png": "d4b0fc35650ecfbd46fe92d5a393766d",
"assets/assets/%25D0%259C%25D0%25B0%25D0%25BD%25D1%2581%25D0%25B0%25D1%2580%25D0%25B4%25D0%25B0.webp": "1a348ae3a2645c190c4db9d486300677",
"assets/assets/%25D0%2595%25D0%259C%25D0%25A6%25D0%25A2Out.png": "b741291c7985678de8197b59eecb60dc",
"assets/assets/%25D0%259B%25D0%25B0%25D0%25B2%25D0%25BA%25D0%25B0.jpg": "49f2b223913c0b2191d66620ec6c7540",
"assets/assets/%25D0%2592%25D1%2580%25D0%25B5%25D0%25BC%25D0%25B5%25D0%25BD%25D0%25BD%25D0%25BE.jpg": "ee5a57f79153c656046242b8977493b2",
"assets/assets/%25D0%2590%25D0%25B2%25D0%25B0%25D0%25BD%25D0%25B3%25D0%25B0%25D1%2580%25D0%25B4.jpg": "e5990b3dfe09b30a92c13d74d91cbce6",
"assets/assets/mask.png": "988ffbc92112d3b7dc3b0a85a5a2cad2",
"assets/assets/%25D0%259A%25D0%25B0%25D1%2584%25D0%25B5.webp": "2c2b5d3dfb0a9c7810eec81201634d1f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
