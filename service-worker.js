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
    "revision": "e3e1d5e35d0703a4ca4842ba5cf3cac0"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "2c25b5838b2d12fddce179c35e952bca"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "e4fcb3e480062715fc00d41afab462c1"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "ed47607b04fb895590418ee8b23decda"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "53e0bb920d029231edda0c489785c329"
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
    "url": "assets/js/10.1485f223.js",
    "revision": "09e5a4d0f0be36d87eef22c6f0bc5b52"
  },
  {
    "url": "assets/js/11.aedb42b1.js",
    "revision": "e47e737dda8e4a382660c9068f52d93a"
  },
  {
    "url": "assets/js/12.0d043621.js",
    "revision": "3485df3383c4a215cb3de130ed4ff016"
  },
  {
    "url": "assets/js/13.69c81fd2.js",
    "revision": "4081f61bd15deb3cf7bde976ab7477e3"
  },
  {
    "url": "assets/js/14.5dd34ec2.js",
    "revision": "b7ee3cc61d663a1f0efc8c017f8bbc71"
  },
  {
    "url": "assets/js/15.dce38b6e.js",
    "revision": "229339cfe266439a60626c2e611817d6"
  },
  {
    "url": "assets/js/16.0be6393f.js",
    "revision": "1a9781f42a1ba21cf18a1b35a0dc87e6"
  },
  {
    "url": "assets/js/17.e458d4b1.js",
    "revision": "0f1eb53dbc2cd3ef529b853f61267d4e"
  },
  {
    "url": "assets/js/18.235cb263.js",
    "revision": "e69bfb2c7d5dde1a3505e1704c679d9a"
  },
  {
    "url": "assets/js/19.5141b48e.js",
    "revision": "f62f418d56e394bd1e2adce8e09decaf"
  },
  {
    "url": "assets/js/2.cd29c94b.js",
    "revision": "8408222ec0c869fada2ec9379d5e8723"
  },
  {
    "url": "assets/js/20.0ad2e7a6.js",
    "revision": "fe6b1a002c301649c9731084875575ee"
  },
  {
    "url": "assets/js/21.55bd6685.js",
    "revision": "4816f4d781a7ca58a749d8b93c63d9fa"
  },
  {
    "url": "assets/js/22.b21bf536.js",
    "revision": "7a49c5b5d5e48d856b903bbe01928429"
  },
  {
    "url": "assets/js/23.6ecb98f8.js",
    "revision": "577b06d3edbe2d8cc82f314c405e2256"
  },
  {
    "url": "assets/js/24.78eb3d5e.js",
    "revision": "18a0a33bbe09b837fe928b679f1e475c"
  },
  {
    "url": "assets/js/25.8549cb65.js",
    "revision": "545a58423cd8ef21775753a5e2e28dcc"
  },
  {
    "url": "assets/js/26.36535f97.js",
    "revision": "f32d08c8696196f8ecca08f69a9c8a2f"
  },
  {
    "url": "assets/js/27.c29e208b.js",
    "revision": "d755939e38d90ca42cd0ed2b82803886"
  },
  {
    "url": "assets/js/28.9c2a8628.js",
    "revision": "97942ae67c349ff11bb747f2f57b99d0"
  },
  {
    "url": "assets/js/29.9360230b.js",
    "revision": "a16bbd92f58cd4cd57f111ef1df398a4"
  },
  {
    "url": "assets/js/3.83885445.js",
    "revision": "ad20fbca6533dc56159a3c137aca02c1"
  },
  {
    "url": "assets/js/30.d36f8308.js",
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
    "url": "assets/js/5.9893f741.js",
    "revision": "d26b4f63e9175c4e8f279e3fb1879f9f"
  },
  {
    "url": "assets/js/6.adbd3c57.js",
    "revision": "c94442dcd38f0a01e9b59ebe2b6a4884"
  },
  {
    "url": "assets/js/7.94053f61.js",
    "revision": "5fd58bdfd1c3b80204a8e89e5ee877ca"
  },
  {
    "url": "assets/js/8.acf538ac.js",
    "revision": "1d3745bb65e37a15bd93965b067d4bb9"
  },
  {
    "url": "assets/js/9.4cc4b22d.js",
    "revision": "2da0261e51bdfc4f89467fa58b25b312"
  },
  {
    "url": "assets/js/app.609d0d4c.js",
    "revision": "3a76fe632f186922049b1ea2f4bcc8ad"
  },
  {
    "url": "guide/components/app.html",
    "revision": "89f562a74f51dac56d81738187de2788"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "4609c6d64f6b99941abc886899fd4de3"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "65a1575d6ee14efba86dcf345a44bc1a"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "d469f510d12597fa96a785cb8acbd90f"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "fbf80592bd0c350aedb5bca95e378e14"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "36c943125e6914d10123ac98e2d9392b"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "3608464afc650fd1564e529d254103d2"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "4e135f545c3dcf289b498bccbcd5ccc4"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "49fd1b42c31d53eddd44e30b0975a3a3"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "dd0aca9349918483e88c6899e10e6d97"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "ee2de6a596a4fb2efec746f55d7f90b0"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "0ec5982fa73679ff5882e3c88e824705"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "fef48ddd8de24adc3c9e040fe9e06d33"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "9f8c02ac2a983c8fd59fb52c20c7d769"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "2ae568a22e0242e10831ca42db5e1ee1"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "6fed3d91410d2f1cb1f4ff04cb10958b"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "f7b3695b4d597cdab41f7869b5accebe"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "57df37ee8e990691e67352066eedd482"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "c5cdd3efb8aef428e3bcadb62f6bd943"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "66557fddbe1c1efe83a5afbba0ea1ee6"
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
    "revision": "18d74bd2d099214075a2d9c7efcd751f"
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
