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
    "revision": "034afdb981776f9fef233ab1c3f83a4f"
  },
  {
    "url": "api/authentication.html",
    "revision": "3515406e3a435fc64495d58d91b99112"
  },
  {
    "url": "api/crud.html",
    "revision": "772d933bb20c3bef6236bd5d6eb4b517"
  },
  {
    "url": "api/getting-started.html",
    "revision": "cc10e56956266eb174b6e5f6a10484d3"
  },
  {
    "url": "api/profile.html",
    "revision": "c5654b7c4f655d005a6b8f21eedd309e"
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
    "url": "assets/js/4.52fec645.js",
    "revision": "64ce9e3a6c88a7a36f2ee70329e064b8"
  },
  {
    "url": "assets/js/5.a132bf90.js",
    "revision": "e41393e516aa954236dfa791a01666d7"
  },
  {
    "url": "assets/js/6.f5dd8b7b.js",
    "revision": "b160ff73b658b75431604c2b2c182ae8"
  },
  {
    "url": "assets/js/7.d4355b5c.js",
    "revision": "aad7f3995ed0eac28a05399c35b5a04b"
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
    "url": "assets/js/app.dc155183.js",
    "revision": "b2bd20fbe24337c954a581d211de2049"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "23859413c72904113985f34fdadbfd7c"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "1d3ac974b5edccf40596d2addadda420"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "dfbe9e65a95378887dd4f8d1b2b21a83"
  },
  {
    "url": "guide/essentials/quick-start.html",
    "revision": "ae5a05c9159efd8246413a6665228c29"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "5375f00962fc771e652e4f0fe3ca14d6"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "2015416a939ec358c0b6f7f9652fdb4f"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "442acdc4b7e3c132e6cfe7a5d4e9effd"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "f8bb8077cfe2542cfdc46b1366344367"
  },
  {
    "url": "guide/table-management/basics.html",
    "revision": "8e4f0ef3594159175ac0b32e71912e26"
  },
  {
    "url": "guide/table-management/custom-configuration.html",
    "revision": "700e4f933fd41040a216a21676318774"
  },
  {
    "url": "guide/table-management/extended-details.html",
    "revision": "57651671f4ef004ef684f1fc04d4ff05"
  },
  {
    "url": "guide/table-management/field-options.html",
    "revision": "13b6ea356222d59c5fe494eb33a46a8d"
  },
  {
    "url": "guide/table-management/item-elements.html",
    "revision": "66c3e66a898c93d00b0192cc57db111f"
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
    "revision": "201182988768ec85b1ae57cae140e152"
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
