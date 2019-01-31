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
    "revision": "5c142b59efaa348d30582326beb0d8d4"
  },
  {
    "url": "api/api/authentication.html",
    "revision": "cb536dda6460971f676fd797557b4a38"
  },
  {
    "url": "api/api/crud.html",
    "revision": "5832e16b0d7a0fae3005377afff11c2a"
  },
  {
    "url": "api/api/getting-started.html",
    "revision": "acf8e180dcd2ffa25568d73950e0314f"
  },
  {
    "url": "api/api/profile.html",
    "revision": "84104e396eb24a3e8d3fac9be7f5e918"
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
    "url": "assets/js/10.a586d08a.js",
    "revision": "245cc2f3c610529e4d82c4edaaa25793"
  },
  {
    "url": "assets/js/11.8d2cd836.js",
    "revision": "7411fa98a80846c05ec5f1826b660717"
  },
  {
    "url": "assets/js/12.b660930d.js",
    "revision": "5d54cb3cc5f36df5f694f24084d56495"
  },
  {
    "url": "assets/js/13.fae6c506.js",
    "revision": "f0c50ea57eb9bd796e56e6a9c8b20a40"
  },
  {
    "url": "assets/js/14.ed055141.js",
    "revision": "dc9f118e0ec84db5a77ac98cc45e9fbc"
  },
  {
    "url": "assets/js/15.641967f5.js",
    "revision": "397acec7e2901920f29498e2afc93439"
  },
  {
    "url": "assets/js/16.adcbbff8.js",
    "revision": "c3640e2eab7c36a087f1854c9a84fc55"
  },
  {
    "url": "assets/js/17.acabfb5f.js",
    "revision": "efdd444574fd1e96534dcf824d69b65e"
  },
  {
    "url": "assets/js/18.7f776211.js",
    "revision": "6e27e73678f6ac93a7a6719d26295baa"
  },
  {
    "url": "assets/js/19.d6e5b4e2.js",
    "revision": "dadf3250812e7ed49e65d0dc5d986edd"
  },
  {
    "url": "assets/js/2.492855a4.js",
    "revision": "a9e7f5d33e23ba61a23cf65122b6f520"
  },
  {
    "url": "assets/js/20.64aaabbd.js",
    "revision": "706992ffb859363f9bcfb7811ed9eb29"
  },
  {
    "url": "assets/js/21.ae534d20.js",
    "revision": "d614bff1de9530d2a0b8c9de180204ed"
  },
  {
    "url": "assets/js/3.8256c7f6.js",
    "revision": "a9f4cf4e4876b84d8d39f1bdb5f607a2"
  },
  {
    "url": "assets/js/4.0342a5ab.js",
    "revision": "2e0e614cf67f37e02accd373dd8c0978"
  },
  {
    "url": "assets/js/5.1d71e845.js",
    "revision": "f281de61fc4dab826480ba888504b815"
  },
  {
    "url": "assets/js/6.62deadc1.js",
    "revision": "f9284dedfd82aff105989d8dcd0b9796"
  },
  {
    "url": "assets/js/7.050958df.js",
    "revision": "afeb08f6b7ffa5afd058fbe62d74b8a0"
  },
  {
    "url": "assets/js/8.6e2cae3b.js",
    "revision": "5d3fba2b975331a9b56f3a0c608147e1"
  },
  {
    "url": "assets/js/9.e0bfdcc6.js",
    "revision": "ae7e607615cf4f69edf8077e2a5cc2ed"
  },
  {
    "url": "assets/js/app.7588cf03.js",
    "revision": "e5e5e025688104e4b43258614c6571d9"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "770d3e9805e71dd95c909028614227f2"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "d0427adfd6aa311d7913d153107f2017"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "d0e3041901b5cb1a6295b25c5a7fa5e7"
  },
  {
    "url": "guide/essentials/quick-start.html",
    "revision": "8e90caceb15b2c456226abe1c6d3d69a"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "dadfba46bcb711fb52b417de49b0da4c"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "048d2fe2b6831226943a9903d132f3e2"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "aa81f744bd577f91ed3c3979a8e64306"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "ead7f1aadde341b39dfc6f9de36a78da"
  },
  {
    "url": "guide/table-management/basics.html",
    "revision": "d9a4542b0c3d3b0315a29d4ee692dd41"
  },
  {
    "url": "guide/table-management/custom-configuration.html",
    "revision": "d6157378a4175513832a01121d25f240"
  },
  {
    "url": "guide/table-management/extended-details.html",
    "revision": "9a590452ba32427b7db5b25d60e3dc4a"
  },
  {
    "url": "guide/table-management/field-options.html",
    "revision": "73829d0091e8c88bddd6e55df1d22cab"
  },
  {
    "url": "guide/table-management/item-elements.html",
    "revision": "7dcc24c176377b1ff2b6654a471b880a"
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
    "revision": "22fc683b11ccea55ef27af26b18b5ae7"
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
