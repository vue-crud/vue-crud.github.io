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
    "revision": "f210756af46741bc14c06e6521817dd9"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "d2e91bb06e8bf8614a791cf27c38cdd4"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "e137c34452276c3710dcb054d7286204"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "dcf649a21e1cac597fe6216078f97678"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "c5495d66b466e0580fa72173552c2039"
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
    "url": "assets/js/10.13a6c584.js",
    "revision": "ffc7e11fcffa334efda9fc1b70d187f2"
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
    "url": "assets/js/16.5b9324c0.js",
    "revision": "190c76a3541e558449bfde6c62ad132b"
  },
  {
    "url": "assets/js/17.0e7fc709.js",
    "revision": "60a4d440c0ece6e2c45382732bb4710b"
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
    "url": "assets/js/8.601b8993.js",
    "revision": "78207b9746d46291c45a3b41a8fa1c0f"
  },
  {
    "url": "assets/js/9.222a9c41.js",
    "revision": "eaaf11ddf91a4d911a7fdc499706a34c"
  },
  {
    "url": "assets/js/app.e91ddfb9.js",
    "revision": "dc2b0a3a00b02f173845bf84d4f6a2d5"
  },
  {
    "url": "guide/components/app.html",
    "revision": "a2456c080ed33851ec7927178707ceec"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "ba4bdcaebbd8cf9dc8720a48a514ea20"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "d3cfebd9f809e1f72fc752dd4741b75c"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "b668ce910afa69fae2944479ab28eebb"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "346ee678acc37355352e7a2ae839ccd4"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "de3ae68a6d53d07d04c83d5baa8a81a0"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "fb35962f9ffe81cd361d3b6f57f0c890"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "03f8ba5f418c69091f3d588f12332eac"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "b5477f986a3a473244cc82af49b78dc4"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "5fc86d4acc06e70bc5780f801f9b5636"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "1d5a43c97b057927b04177f70d110c8e"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "1690a5cdec6473b48b141669c5292fbc"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "acbe3a172d86e79825a9f429ecbd7f08"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "dc95f17c05ec7892c34aae2a5aa3bf1e"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "db972524c052b4a31cf8571bc52dd400"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "2e8ab4df700b1110c04ca15aab3ce9c4"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "bcc77e0da3e5e960a9e50adaae975e3c"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "fc6b899d820b3fe6c2381efb1759d7d9"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "cbc61a66fbfa56d034fad8a45fef582b"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "14e5623d0905ccacd22a6ef7f3f17665"
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
    "revision": "886b4dcc3c9634e8e37856c49779665e"
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
