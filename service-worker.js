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
    "revision": "c6ae5db46a316ba35a27b586cf7e71df"
  },
  {
    "url": "assets/css/0.styles.e5540d57.css",
    "revision": "e729f58409d31d673e611e91b2acca4d"
  },
  {
    "url": "assets/img/badreq.5dac6e01.png",
    "revision": "5dac6e013e437c1c37896f5a746ca7b4"
  },
  {
    "url": "assets/img/db.5d87811b.png",
    "revision": "5d87811b0a8090eaf9d19ed31e37ded7"
  },
  {
    "url": "assets/img/del.291413dc.png",
    "revision": "291413dc990557f13d545b6c9bfc5604"
  },
  {
    "url": "assets/img/delres.f85fb828.png",
    "revision": "f85fb8284fb5be27cd471b83094cbfd4"
  },
  {
    "url": "assets/img/getall.ee80bfbf.png",
    "revision": "ee80bfbfeea45dddaf13c181dfafc78e"
  },
  {
    "url": "assets/img/getallansw.c49cb6cf.png",
    "revision": "c49cb6cffcf1cf134781a98890cfc4d0"
  },
  {
    "url": "assets/img/getid.a8255533.png",
    "revision": "a8255533a28c16d9e91d2958c8822187"
  },
  {
    "url": "assets/img/getidans.3ad4d159.png",
    "revision": "3ad4d1593d1187c5779b618a6cd3292a"
  },
  {
    "url": "assets/img/postreq.6402a3f7.png",
    "revision": "6402a3f77ba4ce132489e3dbaf46b90c"
  },
  {
    "url": "assets/img/postres.b2976e05.png",
    "revision": "b2976e0545126709e204b802fb609945"
  },
  {
    "url": "assets/img/put.1d96ef95.png",
    "revision": "1d96ef95158d77956165ae7b91100606"
  },
  {
    "url": "assets/img/putres.8363299d.png",
    "revision": "8363299d66cff732f7b991d905e42005"
  },
  {
    "url": "assets/img/rel_scheme.aa1ccce9.png",
    "revision": "aa1ccce90d0880d0a3215ed919ec1cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c8fc8c3d.js",
    "revision": "595fafbd99729524b5ee286fcca26d3b"
  },
  {
    "url": "assets/js/11.1578bdc6.js",
    "revision": "0c7860de2c6c317829485623bc2b1d4c"
  },
  {
    "url": "assets/js/12.d0832235.js",
    "revision": "239e4de6ced7a31e75b550cf25127de6"
  },
  {
    "url": "assets/js/13.9379c93e.js",
    "revision": "8dbc30cc3473bc272aabafe729bb21e6"
  },
  {
    "url": "assets/js/14.2eae7a84.js",
    "revision": "152b17d45ccbb099a5d7b8255f2e7bd0"
  },
  {
    "url": "assets/js/15.119f68fd.js",
    "revision": "b68402f834bd29bf00f8460bb2d84c1e"
  },
  {
    "url": "assets/js/16.bf5bfb9a.js",
    "revision": "9ceb9128c15c72cb6087f00287e1786f"
  },
  {
    "url": "assets/js/17.ad6559c7.js",
    "revision": "f37ed979faae1f49bff8cd7ca316988f"
  },
  {
    "url": "assets/js/18.7d69dbd8.js",
    "revision": "1cff11e1d38b6774b4e1999fbecba891"
  },
  {
    "url": "assets/js/19.b0096d63.js",
    "revision": "92ea86818dee8d083660081f057c28e5"
  },
  {
    "url": "assets/js/2.43b24b3c.js",
    "revision": "6e31e87f4cf7f1bd67fd94d5e1a5fc7d"
  },
  {
    "url": "assets/js/20.bad8472f.js",
    "revision": "0098fb4b4a74473afac06e452ffb675e"
  },
  {
    "url": "assets/js/21.29095ca9.js",
    "revision": "c0c8da54c8907d35403709fea2f9df6d"
  },
  {
    "url": "assets/js/22.cf51a23a.js",
    "revision": "8af04e4e3dacdbe11f16b6cd4c218e61"
  },
  {
    "url": "assets/js/23.0af0e556.js",
    "revision": "315c341084dd9ee8b13af4e968585f7b"
  },
  {
    "url": "assets/js/24.09912b92.js",
    "revision": "df2edaf0d32300b2f635fddb482d4df2"
  },
  {
    "url": "assets/js/26.41b6aec7.js",
    "revision": "3aef0aff4a34db0cfe21fb13287a21f8"
  },
  {
    "url": "assets/js/3.ace681d3.js",
    "revision": "4635d08b6d2204eac71341e5c5b34515"
  },
  {
    "url": "assets/js/4.8d2e1845.js",
    "revision": "b5de18d5642fe05d16ea35d2a8f0f25c"
  },
  {
    "url": "assets/js/5.90c49cf2.js",
    "revision": "568b81df264a3827395580e3fed22884"
  },
  {
    "url": "assets/js/6.02e50f58.js",
    "revision": "50c1e7cf2ea71abff20379c5e5aba67e"
  },
  {
    "url": "assets/js/7.ab130570.js",
    "revision": "19fcbf0f1d0dfbdcde96e0cc0e3d866b"
  },
  {
    "url": "assets/js/8.09afab8e.js",
    "revision": "10838f501bf31cf58b98e2751519f1f8"
  },
  {
    "url": "assets/js/9.f9e1ddde.js",
    "revision": "52a81030d67c1b6a7ee2b1af35eed3d8"
  },
  {
    "url": "assets/js/app.e23eaf18.js",
    "revision": "7be91b9eefcf620626fbd1234bfabc85"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3f87c9b6df5e446ff60eeb0b5e954de0"
  },
  {
    "url": "design/index.html",
    "revision": "7361d56c4dcdf97b3ccc1f4d72e70cf6"
  },
  {
    "url": "index.html",
    "revision": "0be655a9bc78382fca9ef890fb2983d4"
  },
  {
    "url": "intro/index.html",
    "revision": "318c4c6139dd01e6aadd80eb5f16dd7a"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "fef2e4bff3836b2f9d16c7ef33b282bd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a5b7e71245e85656285a6212926296da"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4d601f305c59c3634e6b2aefc123c9f7"
  },
  {
    "url": "software/index.html",
    "revision": "9b0d8412a76af385c2155d011944692a"
  },
  {
    "url": "test/index.html",
    "revision": "8bfcfd499c683f65da4fde28301ffe45"
  },
  {
    "url": "use cases/index.html",
    "revision": "29d15c6466c5f955dd06d659a628d40d"
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
