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
    "revision": "7aa1563ad93e7ebd767934831a6212f2"
  },
  {
    "url": "api/rest/authentication.html",
    "revision": "7cb6514896a05ea860bf94d092fbba7a"
  },
  {
    "url": "api/rest/crud.html",
    "revision": "c45ff345d6a9a0337520d11dd370bdfd"
  },
  {
    "url": "api/rest/getting-started.html",
    "revision": "dc8d7b8dae8a84e2bf77e8807ff2ff36"
  },
  {
    "url": "api/rest/profile.html",
    "revision": "2c46e876f2717ce791f2f81a467fa703"
  },
  {
    "url": "assets/css/0.styles.c1ed1f1e.css",
    "revision": "a41f509afcd56356df8af25132fde0d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ac8e6ccb.js",
    "revision": "78942cbb54dac0ea61192a41ecf7ddf2"
  },
  {
    "url": "assets/js/11.bd3e98c9.js",
    "revision": "afba7dffc83612191d1aa5d7c7b7cda1"
  },
  {
    "url": "assets/js/12.f7dccc19.js",
    "revision": "f4b3295f473c0136813b3eff8700cceb"
  },
  {
    "url": "assets/js/13.e1b23040.js",
    "revision": "96dc1068b2e2ed63fad4d23e8ba9163d"
  },
  {
    "url": "assets/js/14.d7ffec7f.js",
    "revision": "45eca88ab81204680869aa75e4baa354"
  },
  {
    "url": "assets/js/15.b1893d5f.js",
    "revision": "6dfcbfabbf21a5c2aa6c73de195afccc"
  },
  {
    "url": "assets/js/16.1c6f5b38.js",
    "revision": "fc2f1c4da5c5a2163b93ab9cfcf6fb25"
  },
  {
    "url": "assets/js/17.1df8e41c.js",
    "revision": "5e3f1bd5225c399ef9c7ed58c94f3d01"
  },
  {
    "url": "assets/js/18.58615aed.js",
    "revision": "ffa7e8af4c9a0e227b9d6a897300d47a"
  },
  {
    "url": "assets/js/19.9ae959d4.js",
    "revision": "a0e2098103eebc8d1526e38bac9cc399"
  },
  {
    "url": "assets/js/2.d857820f.js",
    "revision": "2ba5751dae321f3bd48827a89f72daf9"
  },
  {
    "url": "assets/js/20.d73ca08e.js",
    "revision": "6ebe382308277606bdfc6fd866449a46"
  },
  {
    "url": "assets/js/21.747204d4.js",
    "revision": "203ac9bc882fe8bf2b80db7cf4be459a"
  },
  {
    "url": "assets/js/22.b984d67c.js",
    "revision": "6e9f327cbc1d07d9e3869c1bb89d7fe4"
  },
  {
    "url": "assets/js/23.389593f2.js",
    "revision": "5261fc54e684fa539304defec74f5e3e"
  },
  {
    "url": "assets/js/24.b9d92eda.js",
    "revision": "3decdd9d78c1b0902bfe6ebabc96d629"
  },
  {
    "url": "assets/js/25.702503a0.js",
    "revision": "f289ab01228dea9c75e008e00e9bbf3b"
  },
  {
    "url": "assets/js/26.9d73c154.js",
    "revision": "7bf3e068ab52c8fb786003791a5368b9"
  },
  {
    "url": "assets/js/27.a19a3bd2.js",
    "revision": "f708b73e473ae07d89c7dd2de4e263ee"
  },
  {
    "url": "assets/js/28.525e63d0.js",
    "revision": "8d517b9a90422980847c8299343bfce7"
  },
  {
    "url": "assets/js/29.00565752.js",
    "revision": "ea5946f61d0ea22774708309369f7a10"
  },
  {
    "url": "assets/js/3.671cf3ab.js",
    "revision": "98599d03da66bea33344a7da3a8a4099"
  },
  {
    "url": "assets/js/30.bd95ca7c.js",
    "revision": "2adf035b4099de21e81e7c326e849411"
  },
  {
    "url": "assets/js/31.021d8e80.js",
    "revision": "ba3827472791c9b76fbb852020afb402"
  },
  {
    "url": "assets/js/4.6dff0605.js",
    "revision": "51f560e2f7ebe12dfb8eb7e992339808"
  },
  {
    "url": "assets/js/5.e6e4a6cd.js",
    "revision": "3e9bc2a5b9953f091c47ce64cd2e91be"
  },
  {
    "url": "assets/js/6.032fb6a5.js",
    "revision": "1447490efad0955dbeaeaa78bf6be237"
  },
  {
    "url": "assets/js/7.07737635.js",
    "revision": "2c0570b68c5c3f57a1b378a15fa3f177"
  },
  {
    "url": "assets/js/8.d3c3637a.js",
    "revision": "21a3ab8eff1486245d33f83775263896"
  },
  {
    "url": "assets/js/9.6dabe581.js",
    "revision": "aceee2d1954dbd82d28e76b78c1c6d95"
  },
  {
    "url": "assets/js/app.44eb79fc.js",
    "revision": "396b7f2dc7af60c9b4f0612540c46037"
  },
  {
    "url": "guide/components/app.html",
    "revision": "e0ef76c44448d1f492b60cf6fb4cde94"
  },
  {
    "url": "guide/components/auth.html",
    "revision": "baca876f5667871c96d01f178ac9b850"
  },
  {
    "url": "guide/components/crud.html",
    "revision": "377ff13950ce7cf89d3f9112ab8fd3b1"
  },
  {
    "url": "guide/cookbook/application-layout.html",
    "revision": "7b28d97c59ab603ab9ae31db54904f90"
  },
  {
    "url": "guide/cookbook/authentication.html",
    "revision": "da24b8b3716a7183f038cc163aec75f8"
  },
  {
    "url": "guide/cookbook/getting-started.html",
    "revision": "c916e1f272d250bb8f748deb213949e2"
  },
  {
    "url": "guide/cookbook/modules.html",
    "revision": "8924b081b72048b4b05421535546934f"
  },
  {
    "url": "guide/cookbook/routing.html",
    "revision": "cc240691821e2fe87fa7ae10a4638606"
  },
  {
    "url": "guide/crud/basics.html",
    "revision": "53ac1d1d6e125ae4cdd048181cfddc20"
  },
  {
    "url": "guide/crud/custom-configuration.html",
    "revision": "f570e4ab2c63c3989f2646f8b6590cc6"
  },
  {
    "url": "guide/crud/extended-details.html",
    "revision": "37dfc8ffc31540b92d4b49a1d83fe155"
  },
  {
    "url": "guide/crud/field-options.html",
    "revision": "c2d24b59240cf90e2f4c3dcf14e1cca6"
  },
  {
    "url": "guide/crud/item-elements.html",
    "revision": "279b7f1e4a23d9b0ebdaee4cbe5acf36"
  },
  {
    "url": "guide/essentials/configuration.html",
    "revision": "0d29ff5148de94255f260d53f812c119"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "83baa0295a0f3f0a8b465a2417c6a68a"
  },
  {
    "url": "guide/essentials/introduction.html",
    "revision": "19cd38c00be5c37be3c554866ace504f"
  },
  {
    "url": "guide/modules/admin-module.html",
    "revision": "f721934ed7239f43a48c70571c7ec2cd"
  },
  {
    "url": "guide/modules/creating-own-modules.html",
    "revision": "bdb3bca696644dfd3f6fb24b04c4ddad"
  },
  {
    "url": "guide/modules/home-page.html",
    "revision": "a4a82e5c277fdb5d26a6170d4aadf05f"
  },
  {
    "url": "guide/modules/router.html",
    "revision": "0c5e0fe381d9e1cafb112f5f153147a8"
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
    "revision": "ea39cd657852c490ef142a0652f725bd"
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
