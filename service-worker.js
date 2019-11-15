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
    "revision": "909bc206ca9bcc467bd8219ffd5ae372"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "cb820ee9b5d9c91846b61b566c64c297"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "9691b252da0bf3e8a5345142075c8bb0"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "ea68fbb7ed60170c39630a193cdc2218"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "afc77c0990ed89f61b9a152448401bab"
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
    "url": "assets/js/10.df0702d8.js",
    "revision": "3636952fd08b6403496f47480d50665d"
  },
  {
    "url": "assets/js/11.91f2bfe5.js",
    "revision": "177c9452a7de320202db14bff13b2802"
  },
  {
    "url": "assets/js/12.953e004c.js",
    "revision": "0917d03743ba14bbaa4ab6546b0c4d58"
  },
  {
    "url": "assets/js/13.ef50541d.js",
    "revision": "7479a722d98cbc575de806c0d3b46432"
  },
  {
    "url": "assets/js/14.dd532830.js",
    "revision": "98cbf17790bb93bd977a2ca1cc29c085"
  },
  {
    "url": "assets/js/15.3bcae2a0.js",
    "revision": "b46def77a71f4c1999300b60935b1fa5"
  },
  {
    "url": "assets/js/16.8b155487.js",
    "revision": "64f25f71e30a6d75d80ce91f9c997208"
  },
  {
    "url": "assets/js/17.86cded7d.js",
    "revision": "2a0ef77a4f7469e492e8ad5c8f38520b"
  },
  {
    "url": "assets/js/18.951e6c93.js",
    "revision": "d2da4cdadf28e75a0379ea682ffe37ee"
  },
  {
    "url": "assets/js/19.db9ae333.js",
    "revision": "0ebacde328a6e331ebf89f078c6aea67"
  },
  {
    "url": "assets/js/2.cd29c94b.js",
    "revision": "8408222ec0c869fada2ec9379d5e8723"
  },
  {
    "url": "assets/js/20.48c1852d.js",
    "revision": "2985cf2713878337adf770366170865c"
  },
  {
    "url": "assets/js/21.050a700a.js",
    "revision": "40aae0e77054459187bda5f38c5a0295"
  },
  {
    "url": "assets/js/22.1c30aa36.js",
    "revision": "50fece9bd258334cf024b401a4402131"
  },
  {
    "url": "assets/js/23.32fecb86.js",
    "revision": "ee2af93b8d369a21dec1f4dfa97567a1"
  },
  {
    "url": "assets/js/24.54968283.js",
    "revision": "51fb4d957129d68442faadba68ac754b"
  },
  {
    "url": "assets/js/25.98b138d1.js",
    "revision": "25ed7f8e50ca11613728a17851cc5ce3"
  },
  {
    "url": "assets/js/26.6c04d0e4.js",
    "revision": "fd85096a2a5d43679c37ec25c6ad21d1"
  },
  {
    "url": "assets/js/27.dd01660d.js",
    "revision": "074de6e3dc46ad11236c232a9fcfa0ed"
  },
  {
    "url": "assets/js/28.0f24ea0b.js",
    "revision": "b6b101c69f67d035df4c02ae7976a918"
  },
  {
    "url": "assets/js/29.a52fa775.js",
    "revision": "31900422b4db92b70e7c7bc346e05cc4"
  },
  {
    "url": "assets/js/3.83885445.js",
    "revision": "ad20fbca6533dc56159a3c137aca02c1"
  },
  {
    "url": "assets/js/30.380bd927.js",
    "revision": "1d7332006146d15c0f7ade4eace00c43"
  },
  {
    "url": "assets/js/31.5192ae03.js",
    "revision": "d9bae8991010cb04233225cfa8aa403d"
  },
  {
    "url": "assets/js/32.241cf97e.js",
    "revision": "7d67d2eb247680b82e0e1764a9600746"
  },
  {
    "url": "assets/js/4.8afff7d6.js",
    "revision": "175713170e44cbd1240300e94b69c375"
  },
  {
    "url": "assets/js/5.9893f741.js",
    "revision": "d26b4f63e9175c4e8f279e3fb1879f9f"
  },
  {
    "url": "assets/js/6.aa408c6a.js",
    "revision": "06c4257c798fee47c7643a396b83c47c"
  },
  {
    "url": "assets/js/7.f3996a53.js",
    "revision": "adf27fc7e2de4072219478694822dad4"
  },
  {
    "url": "assets/js/8.dcfd1941.js",
    "revision": "e1448a95768e7d0ecd2b41c495f8eca2"
  },
  {
    "url": "assets/js/9.50fea1de.js",
    "revision": "5f8878058745155750cab12eddb9ab9f"
  },
  {
    "url": "assets/js/app.2723c3fa.js",
    "revision": "472cae3117d55a3f7f630b76cd079e92"
  },
  {
    "url": "guide/components/app.html",
    "revision": "02e1d4e0326f71bcde702f98954a5557"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "e4c6df4d0ff30ca4d04da8a16e3253e0"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "46ebd00e804eac524bde51d22be791a8"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "b09825baa1a3a014739935fa7dd6278f"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "c84c6eb1952e05b053f9dca67c6b9b14"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "a73179c79e10c4d4a69d6b2769c31a25"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "2974a4859372a5a1b528ad73d9cbfcd8"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "d65a17c5c2c5f5160612edfa91f554d9"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "6d720d7e4b32db0f46a31d926e082dbb"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "02cccc11fee7277a52f382686e8fb5b0"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "6fff2fd2fb0c3c4a39346d4c3157cf18"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "8b5cfce1338b93febe148f61f82301b2"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "e51a372e9d34d4c34b2811f0f5b714c6"
  },
  {
    "url": "guide/crud/items-view.html",
    "revision": "3a3c57877bbe7699cc3d59a3b47cc445"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "974c75c3aeb44907559cceb93bbb6a33"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "c3bd60a67fdf96a21251c15c6d797c7e"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "45325d0eb72ab4b52e7af297bfe073f7"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "651627cc3fa068a369ff097ea1bb1a00"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "ab80b6fd219a743a773931cee974a747"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "a9cb3fe0ed0d7299d87c2bb0ceda74c0"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "57f6681afd8923240f511a3b436a733a"
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
    "revision": "c9fd0874963dca2ef06ba3f7a9575d9f"
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
