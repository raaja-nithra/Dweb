'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0a7b6cd7fea18a02546e8defb4ed06ed",
"index.html": "ea89286150aa2f84b74580d4f56a7db5",
"/": "ea89286150aa2f84b74580d4f56a7db5",
"main.dart.js": "cc2232f7bc057af8949c08baed1c66ad",
"README.md": "435cca18b156d62f3ce3ff52d9e4f174",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc6d8024bd6372c811c4ff5b9c8ebed8",
".git/ORIG_HEAD": "f05ff087c44fed82c5d9f675a3c16e26",
".git/config": "c3fea08050101615808d2bdf5ccab2eb",
".git/objects/61/cc50eac1db98ed5116322368a9209430d93c79": "7b8b1ed849619a374bbad42aad6561e3",
".git/objects/61/38593e1e82edb09b443db6606a83bccfbc49f3": "44986329ca2e74f72d5f378d5859c29f",
".git/objects/0d/0e808e960117887f5854c669004d058acf0f9a": "59bdc3bbd97294765b39c5ebc20416d2",
".git/objects/95/41200d5b837375c5b9ebd32343240f18537a99": "7ff37cb6e530dd1b5b9d8d29e3028113",
".git/objects/92/85e6aef85f32b531c4a8ae57a2df05b5797ce7": "95922fb4ab9a77c9b1884b419d1e1de1",
".git/objects/66/adcc5a042c376d96a815910595922eb95178f5": "397b583e8f540a6caf10ebe80cad7d52",
".git/objects/68/5e03d3c0bac4570f7651f0e0888ba2854ca300": "8cf98237c0cbf43326cc85848d9269d7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/509a670de2909aead8a4d49588280225086681": "ae2843c1a76f7e39e8114cb57e5cee54",
".git/objects/32/47cdff229fb7f718ee55262b0a08ae6bb398b7": "fe58025f7071bd8166162a29ef1f423f",
".git/objects/94/443d3d040c391e86983b392d2f46667886a926": "7af8e23fc89295c29a9a3b3138079576",
".git/objects/60/8cccba435427a500382e3800d650c00dc9b53f": "8965808decc9bd2fd51ae35477a97e43",
".git/objects/34/9beffcf7083f29897d263a87a08cea9838b262": "2794a7f51c1259322721e4567f412219",
".git/objects/5a/5be6e9c10444ca7bd15d9cae214e925d2dfb4c": "45cbc8341a7bbc2297a08064d3143e03",
".git/objects/9c/b435e20068323ed925255cc4a77782d1462aa3": "780389fd4385cdaf36e15fc31edffccd",
".git/objects/b2/e57a88d2bba8a40d393a8f3bdaa5fe5a785117": "046008c470cdf970c2c53cb427e53e96",
".git/objects/b3/76cad8a0503d7961892f3cf406409126d5c4a4": "2c36ca1842fa094ff4a88976f90233d0",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/a5/6a24010aca8c7344410d3b83969f20e8560573": "90a85efed45d0ac84cea809c91386170",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/d6/bb07e5885d4e9edd6e4749091016ad6928ede7": "86e55b463bed1561188a09439e9018c4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/c26e1a082d27cf1ca7da7211bbddb7e279fcb8": "2c68935f17d40cdfdd11a25c64a17fa4",
".git/objects/f3/7f1fba64f6c9755b7c7f5bcea3ba1672f853ba": "c3220e0373d531dea8f1ffb6067a562b",
".git/objects/c7/994c308a0cb5156affd14695c7dc2d961564e4": "b20cec7ad6d932480921c2a7a4a7ff30",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/8c0d4e528a166e0dc9df3848c4feb6641370b3": "c538cb52f21da90224b796edc86c969d",
".git/objects/cf/deb17f2e6d661fc8fa1d18b4752dd2f0c029f3": "aaabf8e7d8afc2b2a31821d1e74efdcf",
".git/objects/c8/9aff51fea7187850d0c2cf66dc083271ef2056": "9e0460c7d2d877dbde1c223d550b7688",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/a11dcf17b07549c78d70364112adfdcddac8cb": "cecf936f3f9f729b11a9b836bb6e379e",
".git/objects/1f/117e7c2f075d3dc3cbd12d2a186839858a8c0b": "aee6db36684d656c4cdb19435bc47399",
".git/objects/73/37ac1cbb57f8d5ee31ddf313f73c3698d774f6": "13199e6ea11ba6696f24fee2821186cf",
".git/objects/74/ca1b1dd2d72c5b3d4dedb5678c60120e698fb0": "843ab8d450c576ede0f017351c70e6e8",
".git/objects/1a/ec98a4cbba2284049bd22478a1ad417f8b9de0": "df00e29cc920b860abef5edd7e4a9c90",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/15dc3333397df2e22309f7e5fdcb037a554b65": "62630e6b7e259d8f6062a5fe67b0418b",
".git/objects/4d/dcb002bf88406a1cb67e1669a8bff8218a97fa": "39a56549b88de01beda29008b5440832",
".git/objects/4d/65b72bed7289767e73a32b95949ad780f0ef1a": "63571f988264831c9cc38ade538c1931",
".git/objects/75/99851f61f7baa156ec72180abb86193b7d916f": "43e16595d42484f9b39d933234d89855",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9065d95d017e8691c04ae55110dca23d1c812b": "3e590be636616a0ff9414bb6b4774f25",
".git/objects/07/593016b0a6c61339f9889a842cf9d95f5def3e": "b884b0c5b395e43ceaacf93bc9439ecd",
".git/objects/09/5f92e801b62c3c1154f896c06d6f4d87279abf": "c778611ffe6c3a830d8bc5ada29554f9",
".git/objects/62/6c2a85b639fc410185fdd30ffc8357becf8c7e": "cab5d38da90b5c3d98cf349964e1cc6c",
".git/objects/54/f1386fec2272ac3781132554dc8a8443352cfa": "c5b9a219ca111c6fb7906fefe870f5f0",
".git/objects/98/cfb162e1d3e1a0b092b924408ab91bdd9f982d": "b352fe958d8d69c9c0bf67e3936498b3",
".git/objects/98/69f6c335b72bbf33189250889f51d39682c201": "945e793797f420415152a19f08e995f9",
".git/objects/5e/9b03f1885456aa0eb8f59ca64258a5673e60f9": "9f0c27524f44961fa80dd422be843bfa",
".git/objects/08/a1b7c904111b0db4cbcafbd9a365f01af6fe5a": "28f09cd19f15549824bd184020dca2bf",
".git/objects/06/570eb91eb379620dac144ac6d17451bc5b7acf": "218fabb5da7db4cbf87e76becf593088",
".git/objects/52/55eb3e991df2e20476e12dcfdbde4c118f5e8d": "02915c8196be65cc7da44fa1cfcbe02f",
".git/objects/52/9633afd9075e8f90e8b34399f93be865ee0388": "7426ef10ddeba1f60c64bf642c18c619",
".git/objects/d3/251ca67878f71a597ce4a4474e4f1976cb7fe6": "2125beb9dbf3b62a110c33b26ef23b6f",
".git/objects/b8/247330c2b76586947828289ef97b58b4ae8019": "00053e03f0793ec09484b2131a506933",
".git/objects/b1/a139a4c654cf43173dcdff824c79c251a3ff48": "5202867f6c84f7fefb04a500c5e1c46d",
".git/objects/b1/87fbf95697399bceb30bf9abad02ce2003c959": "2bc293e9ad1ecc864578c44113eea995",
".git/objects/dc/80132ea65057da019211c3f7f1ce942beadd66": "0e99f98961497193f081ca822a18480c",
".git/objects/aa/4b689762229a76a2eae86c3f98dc05ecaa6fbe": "0caac9fbb977c2cde1c0dfb59bdad543",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/eb7127e8ac6a6427686cfa494e5339b713bd77": "72a8f9a7f64481457e318315f9f324e2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ff/fc80e474a0ef1a26f435fb701e1be097cb5a72": "c8ec9a09340332c0c38749354461544e",
".git/objects/c2/edcc3af99281eaae99b62c5cc0d86055b319ee": "4073da41068fb9edb03c4e8403d9f66f",
".git/objects/cb/3562e97f4b656fa888a1b48fa6ebae2e6ba3ac": "5ca8d8133ba8abc167312724f9aaaa1f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/c81d535509b2797fbc635e4740cebe91b0b4c3": "9c4500aa8ea018c953688e41c568311e",
".git/objects/1e/ca12bec7e0bd288932c4ef575d7d14b7a51a4e": "f8053ab71e7f6c3704203c191c9284fe",
".git/objects/24/7b826c808495a5fd01f3f901f8eabf2d1de2cf": "144a986f213769c35ed2fb9a213a3751",
".git/objects/24/16f52b2694d8c80e9f4aa6a58710f1171f624a": "a4b635ddcdf810bfbb9e0ed64cbcf297",
".git/objects/8d/2fa1e9c05073081f94aa238d12480f6a73cecb": "88eff0c27cef6df8bd959fc1deb7680e",
".git/objects/12/82ae621ac401e77ae3f0f8df9429e4ae58e5c2": "dc565cc604ab68f59b6c2e4ee82144de",
".git/objects/1d/213bcb1bcb2b7643fa3890c492f009d23aa2af": "3e1cccb26c61351fe23f79f31f35a5ca",
".git/objects/1c/c17a596c00e3bc21d3f40f14986e83cbd9436a": "6c7a36000765c971c421ec228478eb28",
".git/objects/82/e24349052f3bcd3c37fe7c48aee1231ba22635": "ebef1f71769aca2f5693d1016a04f5ab",
".git/objects/82/7958a7b05435720b1859a94d35a4c2d6bfaaaa": "b54382fc944b6f00b9e5aad21b8c88bf",
".git/objects/2b/b0867352db9e82dbcc4586696a2034fd8da0f7": "1e252329d6309da8a28e9549f6a9a6ca",
".git/objects/78/6104e04a8a0d8d21e54214cd4528c47a15dc19": "efc520c404dad125acadfb03a8373a9e",
".git/objects/13/c17a05b5f0c586fbbf5f52760d49ecc1a18e00": "6424acce2ad20b014a81ed1129496fa2",
".git/objects/13/58c3ae770efcac27e7c5cc81b93188ba1f046c": "be1275f2aabe9e45341647bf0918838a",
".git/objects/14/3f3fd8cb9af0d9a11b9f4b08c51cb3a3a00f1e": "a6d273dc4c2a6d916f048728935e1a13",
".git/objects/25/9a5bde04f11f68b2e1d0725da2a138d84b6643": "e59702bda0c9b5452bdbf56581383a83",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34fd74ed6e4b311286993666b34019ee",
".git/logs/refs/heads/main": "915f84de231639d4b7af9b49f73f94f9",
".git/logs/refs/remotes/origin/main": "beca11df69b5d2b22463b10f866eff8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "bf19cafe010fd51c62d48bd975bbab63",
".git/refs/remotes/origin/main": "bf19cafe010fd51c62d48bd975bbab63",
".git/index": "0a94929762d0e7f13d6d8076fa21a7da",
".git/COMMIT_EDITMSG": "1dcca23355272056f04fe8bf20edfce0",
".git/FETCH_HEAD": "96378a8b0c00b55c7c4eb9ebf103340c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "66c90b60db5d492b505ab6c27e623a59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
