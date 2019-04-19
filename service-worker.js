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
    "revision": "4c10dc2ad6c3d20bd708b7fbe2eca313"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "3a388e123b54d1398bc225de2b45c34d"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "b844c6341b92d0bd0097a79990e1cfb6"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "4d2e0c3b7bcfae2f7d9b50a447fb6fca"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "407c2a0fc130979aed783adce3ad4814"
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
    "url": "assets/js/10.1dce168e.js",
    "revision": "0ecc1ea3fb533fa6f5b551c1098e8784"
  },
  {
    "url": "assets/js/11.5162d36e.js",
    "revision": "776fe11efac4c1b3069bfa66faf0f18d"
  },
  {
    "url": "assets/js/12.76a96e15.js",
    "revision": "4d3bc16b502d3ea3d5d809c35753a2ff"
  },
  {
    "url": "assets/js/13.6218989b.js",
    "revision": "7a9129ab27287ab94e5ee88afd5ae2a3"
  },
  {
    "url": "assets/js/14.6ce6b17a.js",
    "revision": "e9d6ddab53aeebffbde3e8cb0bc1d692"
  },
  {
    "url": "assets/js/15.1c42eba8.js",
    "revision": "a3ee83bae2c878ba60cb8a9b4df6efed"
  },
  {
    "url": "assets/js/16.90065742.js",
    "revision": "ceb72ecb56bb069df312c29301efe9a1"
  },
  {
    "url": "assets/js/17.23d95347.js",
    "revision": "18261c6d2e69792b9eeb05231ea77201"
  },
  {
    "url": "assets/js/18.bcdcd907.js",
    "revision": "78020e4ed7ac0b9aa7c589f9044f0496"
  },
  {
    "url": "assets/js/19.6ffd2fcd.js",
    "revision": "8a4b2bc22d04e6a45eac36ded244287a"
  },
  {
    "url": "assets/js/2.b158a7c3.js",
    "revision": "8dd3f10e683711934982be387176aa06"
  },
  {
    "url": "assets/js/20.2f6543e3.js",
    "revision": "dd33b7d8bb53f3ac35e56d0234eead76"
  },
  {
    "url": "assets/js/21.ffc218bd.js",
    "revision": "121b917853eef6577dc282403adfa4e9"
  },
  {
    "url": "assets/js/22.8d35b3e2.js",
    "revision": "44396634f2209e58d50e31061000e2a8"
  },
  {
    "url": "assets/js/23.f98fdd3a.js",
    "revision": "9dfc18591521383dbf75002a7c8c5c76"
  },
  {
    "url": "assets/js/24.26561dd0.js",
    "revision": "f7128f401d3d16920e3096e9c3f107e5"
  },
  {
    "url": "assets/js/25.b11fbd9d.js",
    "revision": "09720dfe3b2891812646a1789069d46a"
  },
  {
    "url": "assets/js/26.2e1afef3.js",
    "revision": "8a5858c6fd424d37df77963c40d9dc48"
  },
  {
    "url": "assets/js/27.39ff9301.js",
    "revision": "ca8c17215e1c94f3064857aa3e96421f"
  },
  {
    "url": "assets/js/28.ab104a43.js",
    "revision": "0dab60652482116570254ef558ce8628"
  },
  {
    "url": "assets/js/3.84f77157.js",
    "revision": "61d0367695a2f0db0f992039490fd861"
  },
  {
    "url": "assets/js/4.ac638f8f.js",
    "revision": "20db7e8195851451f2853bf951c4dba0"
  },
  {
    "url": "assets/js/5.b689dcf1.js",
    "revision": "87057130ec1f389214923cdcb2953da3"
  },
  {
    "url": "assets/js/6.d2ae8291.js",
    "revision": "aabcc8fb193ae5b7ff7fc01f64f0519a"
  },
  {
    "url": "assets/js/7.40692d27.js",
    "revision": "76df8895c963f4279863bb2cc2468c44"
  },
  {
    "url": "assets/js/8.ddb8d2f7.js",
    "revision": "d7bb2c7525e6d2b25d7ddcb49b2932a0"
  },
  {
    "url": "assets/js/9.f4a2559e.js",
    "revision": "e9ae094bd5f560f262dae40b84d718b4"
  },
  {
    "url": "assets/js/app.ff45a90a.js",
    "revision": "58ec4bc97e857ef6fd9f0cf66f1e3003"
  },
  {
    "url": "guide/components/app.html",
    "revision": "1cd3f3ceff1605e49881775d8fef28bb"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "61dc4064236c684a8a6bf88fea8153a6"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "1150f629b40ec54a18a35c00a47ae2ef"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "37eddad5ed10b2b55f92c02b72ac0cfb"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "edcd1f1af310acc502becab3b09d115b"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "3d141c3debb7e5af40ef45c41d4f90a7"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "002cf7c55f8e37c31d4e265266cf4a77"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "1cce7e1ecec16c1fa6f6d7695469a9c4"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "2ab6347e4ad91da3c78afa90d81670bc"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "7f27969b0dbf3c4f2af4da1e76a55fee"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "a5647e6ff8bcf4b484feb0d0346cc8cf"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "9a90b954d2a257b7b5cde0dfb51285f8"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "65a3e20ba0f65581e58726909c63870e"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "907b50df0f0b0f14cab697d6add054a6"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "ee91b07bad285d871183387d01af8017"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "23833cc7bb481cfd4f7fea6475e3a72f"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "cde6351a739716b88255eacb0dbd7dcd"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "fda310b409c13f1303d41d7c4e5330a1"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "8b45cf8a6f18092ec00102622fc37408"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "ca21d1ffbb3a2ea6d3df5d9e5f0efb16"
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
    "revision": "c9ac7dab351ebc6f04f6856faf3abd36"
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
