"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5f6d8cd463e3308ad07ed4a49bbb76f3"],["/static/css/main.b187f143.css","8b45ef25b43c79f876a1964b34039489"],["/static/js/main.04739d48.js","ea5077129297e7ca9ca919e8c8f682dd"],["/static/media/Flowers.659acc54.jpg","659acc54d25c69857406bbe5690a5fa9"],["/static/media/Jeni_pic.935e2d59.jpg","935e2d599d7f146ffdefad24b0e1ff82"],["/static/media/Kathy_pic.fd9fbbb8.jpg","fd9fbbb8271245e85308f7ca136d3951"],["/static/media/Mary_pic.841e6823.jpg","841e6823c1959eceed9793c5663fe86a"],["/static/media/Ministry_Script.79abb8b2.ttf","79abb8b2690969d404b5ca8bf731b49f"],["/static/media/candle_holders.1319bf5b.jpg","1319bf5bc809980fc2b18f98caaab1e1"],["/static/media/candle_holders.d91d9291.jpg","d91d92917bfb3b7e1106e6f5907c49f3"],["/static/media/deliver_items.b419ded7.png","b419ded70d885b258631edbc743b3835"],["/static/media/door.2b99377a.JPG","2b99377aeeef0b434a0ec84679c54c00"],["/static/media/frame.39fda2b8.jpg","39fda2b8a7d9ab15ce229aee5ede5324"],["/static/media/frame.5f2f3ad8.jpg","5f2f3ad8db1932a1bb68c71136d0a9d7"],["/static/media/frame_dog_accent.60667bce.JPG","60667bce55f53488a6822a49a1651d90"],["/static/media/frames.5f2f3ad8.jpg","5f2f3ad8db1932a1bb68c71136d0a9d7"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/home_interior1.7f4a4040.JPG","7f4a40406ca54cef503a63f0619fa365"],["/static/media/home_interior2.a3a9493f.JPG","a3a9493fba70d9c7a0eb3b09923eb208"],["/static/media/home_interior3.f4824d6f.JPG","f4824d6f819992146dfb99aa4bfda91f"],["/static/media/initial_necklaces.6759ba88.JPG","6759ba88f742c6e3a87545cd1e59b7bc"],["/static/media/interiors10.37c81c87.jpg","37c81c8768ebaa3f82e71a253556ffea"],["/static/media/interiors11.609f3bee.jpg","609f3bee2b83df195729c2e0c34d0182"],["/static/media/interiors12.2234dc1e.jpg","2234dc1e63ce21225adf5f330cc07e0f"],["/static/media/interiors14.1ce6f250.jpg","1ce6f250a89cab3b688c1610c5fc0005"],["/static/media/interiors15.1d45b037.jpg","1d45b03764ac567d3e22880dbb612514"],["/static/media/interiors16.cc8569de.jpg","cc8569dea92e8b583c4b949771d4986d"],["/static/media/interiors17.4ff28f48.jpg","4ff28f48bb2abb62e8451c30222800fa"],["/static/media/interiors17.dce5ebb5.jpg","dce5ebb5b4c912b7b6c94ccb527edd88"],["/static/media/interiors18.0f430ef2.jpg","0f430ef2a66d9342234f5e1717e2bf6c"],["/static/media/interiors20.cefe3f9e.jpg","cefe3f9e04238ae180a5bf87638f11a8"],["/static/media/interiors4.95691c43.jpg","95691c43155243716a0f93a279a374c1"],["/static/media/interiors5.8aabce4f.jpg","8aabce4fb91648f38b390efb89416ba0"],["/static/media/interiors6.7863d64d.jpg","7863d64ddccc55efdf4713af36b106aa"],["/static/media/interiors7.9d2a9f1c.jpg","9d2a9f1c03daa317a92dc2d4b012f957"],["/static/media/interiors8.c26f4553.jpg","c26f45535ca2e414aa39411dd451754a"],["/static/media/interiors9.d58e87a9.jpg","d58e87a9984ca90ae62f2d24bdf9d076"],["/static/media/lantern4.419858d3.jpg","419858d36b0a32cd7c2b95107e0e7ecf"],["/static/media/lantern5.1aa5c4f4.jpg","1aa5c4f4ec8f9bff25048ada2195e8e4"],["/static/media/lantern5.d2a217ca.jpg","d2a217caa0f21f1cd54c7890def1d9c8"],["/static/media/lantern6.92f850b8.jpg","92f850b8e49803f16825b20e5f4fa681"],["/static/media/lantern6.d9ca6053.jpg","d9ca60530d49debcd1123e6e948afbe0"],["/static/media/lantern8.119e00bb.JPG","119e00bbfee8cfab4773a3de4c8b69f1"],["/static/media/milk_can.38196d9c.jpg","38196d9c9e3fc1d8b361452ca3ae5c1c"],["/static/media/new_grand_reopening.00914435.png","009144352a2c79fa3736e89381790640"],["/static/media/new_new_background.1d7ddce7.png","1d7ddce76f9e7d492e6788d3f1dd7fa9"],["/static/media/seasonal1.b7490a1e.jpg","b7490a1e44a68a41c549155782d61f3f"],["/static/media/seasonal11.c26f4553.jpg","c26f45535ca2e414aa39411dd451754a"],["/static/media/seasonal2.0f430ef2.jpg","0f430ef2a66d9342234f5e1717e2bf6c"],["/static/media/seasonal3.dce5ebb5.jpg","dce5ebb5b4c912b7b6c94ccb527edd88"],["/static/media/seasonal4.cc8569de.jpg","cc8569dea92e8b583c4b949771d4986d"],["/static/media/seasonal5.7c5d9d17.jpg","7c5d9d17d99c91fb3de96bca9f198ff0"],["/static/media/seasonal6.1ce6f250.jpg","1ce6f250a89cab3b688c1610c5fc0005"],["/static/media/seasonal7.c66664a2.jpg","c66664a26c6b87d6337ecd9fa9ab9073"],["/static/media/seasonal8.2234dc1e.jpg","2234dc1e63ce21225adf5f330cc07e0f"],["/static/media/seasonal9.37c81c87.jpg","37c81c8768ebaa3f82e71a253556ffea"],["/static/media/short_banner.6565ae0c.png","6565ae0cd2edd1613d8414278c3837f4"],["/static/media/small_frame.f66626e4.JPG","f66626e4df5800a92dac8b6f3188dcc5"],["/static/media/tea_towel_happily.4d34f4a4.JPG","4d34f4a46e1dd1a2491e822c0b93c21c"],["/static/media/tea_towel_looking_good.afb86e55.JPG","afb86e555a6725ae311bafe482f7763f"],["/static/media/tea_towel_mon_tues.100e79d2.jpg","100e79d2a85ca2d46f08bf17672d07a0"],["/static/media/tea_towel_outdoorsy.d6732db5.JPG","d6732db557bd65143d01c7ab83c101c4"],["/static/media/tea_towel_pilates.884f3389.JPG","884f3389137e972d7be825b866f18658"],["/static/media/tea_towel_teaching.263f4398.JPG","263f4398fd0386b54944421b75f9303d"],["/static/media/tins.b4d4beed.JPG","b4d4beed4127aedf7d2db6f2c61ab659"],["/static/media/tins1.0ab41bc3.jpg","0ab41bc36d4e0391924f9fb0689df2f1"],["/static/media/tins2.498a96d2.jpg","498a96d2314ee7b1c5320ed888a53483"],["/static/media/vase.b89c19fb.jpg","b89c19fbf5c8c1d8419b3e93cee4dfa8"],["/static/media/vase.e5182c3f.jpg","e5182c3fffb0e18d79788c7ac8ee0d7e"],["/static/media/wall_hanging.7fc3dc81.JPG","7fc3dc81c5e8eafb530d8d9f959ff4b0"],["/static/media/welcome_metal_sign1.cade9a43.JPG","cade9a43c7cfd66fb9437635930b4305"],["/static/media/welcome_metal_sign2.ae8a3414.JPG","ae8a34148bbfde7f99835547f1f41c12"],["/static/media/wreath.eaf1dec0.jpg","eaf1dec0c289313d81fc3aed3d1a8727"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});