/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68447665f8cfa2d08b1f6b42aa859286"
  },
  {
    "url": "api/api/getting-started.html",
    "revision": "266a9fa1ddf4cae491ec4bbd4955c018"
  },
  {
    "url": "assets/css/0.styles.e001c901.css",
    "revision": "a6f004526a60351bb5e01269933a79cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.faca97e1.js",
    "revision": "4505e52b91981cd168120d77e0e3a736"
  },
  {
    "url": "assets/js/11.4f3815b9.js",
    "revision": "e7884d022eda3eaf94f59f37ce1a7f23"
  },
  {
    "url": "assets/js/12.42189af7.js",
    "revision": "4bc8083f924cd19fdf80e023f6021dc4"
  },
  {
    "url": "assets/js/13.10c7be45.js",
    "revision": "f3aacffcda4cbe5e8810069543dfa2fe"
  },
  {
    "url": "assets/js/14.d73b258b.js",
    "revision": "afa1cb5d749bb7261fa2f0148490028c"
  },
  {
    "url": "assets/js/15.94441936.js",
    "revision": "195b490ea4dc8c88fad4c42e4cf52879"
  },
  {
    "url": "assets/js/16.132b3593.js",
    "revision": "f6365fdbc48a611d5baf811ce67182fd"
  },
  {
    "url": "assets/js/17.d3a1e775.js",
    "revision": "02b2a8210d4e97745460b507f487886f"
  },
  {
    "url": "assets/js/2.ba071deb.js",
    "revision": "fd5306df7fb54e9cd6b5090afea26b4a"
  },
  {
    "url": "assets/js/3.05dd2b9c.js",
    "revision": "3920006c689fddae3ec7a3050751d79d"
  },
  {
    "url": "assets/js/4.c132d418.js",
    "revision": "08d298a59ba355290bc625c19f7bfa5d"
  },
  {
    "url": "assets/js/5.f7408826.js",
    "revision": "3261bc1f9f45832271f72243b06f07d7"
  },
  {
    "url": "assets/js/6.b69d7263.js",
    "revision": "95e878fdd3c2b403c565512110e33386"
  },
  {
    "url": "assets/js/7.373beb35.js",
    "revision": "5eb02bcba26e14a3c763751f7f9cdeb7"
  },
  {
    "url": "assets/js/8.9684de79.js",
    "revision": "cefa64c75d07af942e420f3f6534fcb7"
  },
  {
    "url": "assets/js/9.89642925.js",
    "revision": "ac9e94930abe4bb88b4507b35d40fc92"
  },
  {
    "url": "assets/js/app.14d26d46.js",
    "revision": "406c446e62be00644fc28a91ee0b985e"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "998526c7098cf1db3337529e99f98a7f"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "ba40d20e1068c6f9406b628e2548d040"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "5bbde5eee1f64c8aecbde361a7b553aa"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "108b727175c3ef7e8120980193d93468"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "97835726a2081672752429a3a111e5c4"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "4114191b51d62b2daaed982616a2e207"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "2f978142673519dc2e9a79ba1ff618d6"
  },
  {
    "url": "guide/table-management/basics.html",
    "revision": "8cf3f4adf5cbed9a04d50725961ee4e0"
  },
  {
    "url": "guide/table-management/custom-configuration.html",
    "revision": "f84d5fc9ba7bade4f3ddc3b2fda20fb5"
  },
  {
    "url": "guide/table-management/extended-details.html",
    "revision": "8cb81ed98dc3365e285d22165227b164"
  },
  {
    "url": "guide/table-management/field-options.html",
    "revision": "919ec31b956f0de39547d053a0b234fe"
  },
  {
    "url": "guide/table-management/item-elements.html",
    "revision": "1416f7510794a4dae9c8ac8c546a0afa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e6086bec79594bce5b31835ca38b793f"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b12cce6475b9f03c70df29a03bda0fb4"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/demo/crud-table.jpg",
    "revision": "44a7f44428ca5c84b2643f498ffe01d7"
  },
  {
    "url": "images/demo/extended-details.jpg",
    "revision": "c0d2f73b047bb7f7738f4afdae4b6121"
  },
  {
    "url": "images/demo/home-page.jpg",
    "revision": "c7d7a9e1eb6a212f8098e27be9e1ab25"
  },
  {
    "url": "images/demo/item-details.jpg",
    "revision": "f0c1b76ae70207128b74c450e5c84c55"
  },
  {
    "url": "images/demo/login-page.jpg",
    "revision": "84cae500dc8fe85c25efc09bb115014c"
  },
  {
    "url": "images/demo/sidebar.jpg",
    "revision": "9587299fdf0c9cb3b91209150bd18de0"
  },
  {
    "url": "images/icon/favicon.png",
    "revision": "548bc7f9c3b3a56d570009340f53f376"
  },
  {
    "url": "images/logo/vue-crud-lg.png",
    "revision": "6287cf88b67100edb35e0f9f26e6dde4"
  },
  {
    "url": "images/logo/vue-crud-md.png",
    "revision": "ee509a0d6f96ca6260f1bf6ce61f3338"
  },
  {
    "url": "images/logo/vue-crud-sm.png",
    "revision": "b14f5b5e9e3c614dd52052ce801bba04"
  },
  {
    "url": "index.html",
    "revision": "44ef6e320e2ec691b12cf1ca813ab7ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
