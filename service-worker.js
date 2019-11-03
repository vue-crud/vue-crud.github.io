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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c74205a92f13c1187ec38d414950b34a"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "576197a1d3bb253626d83d3ac1906526"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "719f039dd5e8b6f5ab6ead5721a2874b"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "7b39cbd83a168abd5629552a4c1e20ae"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "e13b2852196ca85de6cb33b4dd6032fb"
  },
  {
    "url": "assets/css/0.styles.33303bc0.css",
    "revision": "65c9b2fdc19d37d56f021400c680a7b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0563e573.js",
    "revision": "4c4da1456f4b85354c390884ba5ebabf"
  },
  {
    "url": "assets/js/11.a2a84616.js",
    "revision": "c7b78a57a5bea6e4871912d78a75fad4"
  },
  {
    "url": "assets/js/12.d89fd4ce.js",
    "revision": "3485df3383c4a215cb3de130ed4ff016"
  },
  {
    "url": "assets/js/13.33a00fab.js",
    "revision": "4081f61bd15deb3cf7bde976ab7477e3"
  },
  {
    "url": "assets/js/14.71d7ae99.js",
    "revision": "b7ee3cc61d663a1f0efc8c017f8bbc71"
  },
  {
    "url": "assets/js/15.842659d5.js",
    "revision": "229339cfe266439a60626c2e611817d6"
  },
  {
    "url": "assets/js/16.2e32faae.js",
    "revision": "1a9781f42a1ba21cf18a1b35a0dc87e6"
  },
  {
    "url": "assets/js/17.60c7d261.js",
    "revision": "0f1eb53dbc2cd3ef529b853f61267d4e"
  },
  {
    "url": "assets/js/18.7da3dc56.js",
    "revision": "e69bfb2c7d5dde1a3505e1704c679d9a"
  },
  {
    "url": "assets/js/19.170b6c7a.js",
    "revision": "f62f418d56e394bd1e2adce8e09decaf"
  },
  {
    "url": "assets/js/2.dfdf2f2a.js",
    "revision": "8408222ec0c869fada2ec9379d5e8723"
  },
  {
    "url": "assets/js/20.cbe2e6d7.js",
    "revision": "fe6b1a002c301649c9731084875575ee"
  },
  {
    "url": "assets/js/21.4f9614ed.js",
    "revision": "4816f4d781a7ca58a749d8b93c63d9fa"
  },
  {
    "url": "assets/js/22.e31fe5ff.js",
    "revision": "ae8557ab875da083cb9d04f3626b25ce"
  },
  {
    "url": "assets/js/23.e1d252be.js",
    "revision": "577b06d3edbe2d8cc82f314c405e2256"
  },
  {
    "url": "assets/js/24.d4316969.js",
    "revision": "bfd4a6c442a6487da5ae30181fabd2d0"
  },
  {
    "url": "assets/js/25.5691854a.js",
    "revision": "545a58423cd8ef21775753a5e2e28dcc"
  },
  {
    "url": "assets/js/26.28ef713a.js",
    "revision": "f32d08c8696196f8ecca08f69a9c8a2f"
  },
  {
    "url": "assets/js/27.489091ce.js",
    "revision": "d755939e38d90ca42cd0ed2b82803886"
  },
  {
    "url": "assets/js/28.7dc69986.js",
    "revision": "97942ae67c349ff11bb747f2f57b99d0"
  },
  {
    "url": "assets/js/29.d540bbbd.js",
    "revision": "a16bbd92f58cd4cd57f111ef1df398a4"
  },
  {
    "url": "assets/js/3.ef41e1f1.js",
    "revision": "ad20fbca6533dc56159a3c137aca02c1"
  },
  {
    "url": "assets/js/30.d1404565.js",
    "revision": "860965cc2c99c13abac3ce53a713317c"
  },
  {
    "url": "assets/js/31.c576ef71.js",
    "revision": "dee7d28e3e45d6c58bdf21fd17977956"
  },
  {
    "url": "assets/js/4.b0f50f41.js",
    "revision": "1ae158a6b30cd2a4b69e0608d767ba6d"
  },
  {
    "url": "assets/js/5.34d1402a.js",
    "revision": "d26b4f63e9175c4e8f279e3fb1879f9f"
  },
  {
    "url": "assets/js/6.f82c2ee7.js",
    "revision": "c94442dcd38f0a01e9b59ebe2b6a4884"
  },
  {
    "url": "assets/js/7.7cfea40e.js",
    "revision": "5fd58bdfd1c3b80204a8e89e5ee877ca"
  },
  {
    "url": "assets/js/8.03c6ce9f.js",
    "revision": "1d3745bb65e37a15bd93965b067d4bb9"
  },
  {
    "url": "assets/js/9.5d9a9046.js",
    "revision": "2da0261e51bdfc4f89467fa58b25b312"
  },
  {
    "url": "assets/js/app.97353b18.js",
    "revision": "a4fb47b0c75c8feedee6428eeff3eddf"
  },
  {
    "url": "guide/components/app.html",
    "revision": "d367f44bb49c3cb30ba1de336632734f"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "502e9e6a999bad527d3038b70334c918"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "372973a1d79cc05a4e9b0f73a2912c78"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "a005f7016a3b3579722ec9bf2e18f509"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "06057d751d065c67ca7f14f1a4e0e3fd"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "cc6e21e6580485536adc430e650cc057"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "285cb71e653eb4dfab79661ea6a184b2"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "ca5514733052438d5a13702dccf00e56"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "28aa8867450017b4ab42014f178e190a"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "2842d74f20439349bce1693e067cca77"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "912b09f14c81dc0222bfa3e232e7e1b6"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "29967e1e6de6c633fad8492666c6edd8"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "99b46d7cb9028c910cb9a072dbefd5bc"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "0283c3b8fb1b4e7e5b8d2c690baadb3a"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "1b42880a687084218904e68ff8946e1a"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "3c6ebd9596d0cb72cfab6702ac6d4326"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "ca2ebdf8a72cc5e99fb1b53e39c4bb38"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "1d8fb253df1a6037b5849276bec9284b"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "8950eb7ad60407e819182b1cdf733522"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "aa89c4eaefa9b679073e5f92238b66d7"
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
    "url": "images/api/login.png",
    "revision": "3c843f81617ca97a541874317582b9cb"
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
    "revision": "c57ab9efab1231bc177309783d979851"
  }
].concat(self.__precacheManifest || []);
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
