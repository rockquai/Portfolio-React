"use strict";var precacheConfig=[["/Portfolio-React/index.html","dfdf84cd22471e56e06ffc15fc4ca46a"],["/Portfolio-React/static/js/main.f3467781.js","bf47a7002da37e63b393e3a146869932"],["/Portfolio-React/static/media/Ad.3e99903b.sass","3e99903b2f8af8cd9ae1bb920094562c"],["/Portfolio-React/static/media/Carousel.4f2ba3e0.sass","4f2ba3e063af47784c54445818abbfe9"],["/Portfolio-React/static/media/CarouselIndicator.4d07fe7c.sass","4d07fe7c5d28d82c8413d356aa014d34"],["/Portfolio-React/static/media/CarouselNavigator.bd603195.sass","bd6031950133b729e255b6671ba9738d"],["/Portfolio-React/static/media/CarouselViewer.7b9eeea6.sass","7b9eeea665da03911e777b827242cda8"],["/Portfolio-React/static/media/Dimmed.11af9b54.sass","11af9b545186a6017cafb9247eee8461"],["/Portfolio-React/static/media/Footer.d9559f4e.sass","d9559f4e19ad3431d00a4bd212d7aaa5"],["/Portfolio-React/static/media/GnbMenu.f35fb53c.sass","f35fb53cc0e7139c0bd389f9589bd71f"],["/Portfolio-React/static/media/GnbSearch.d034ddc7.sass","d034ddc73b71c67e7dd76fbf556b73b5"],["/Portfolio-React/static/media/Header.0d0b7868.sass","0d0b78683c44f85159c4a3668b48079c"],["/Portfolio-React/static/media/ModalSearch.7355fbca.sass","7355fbca794046a345777eeb4a3fff2b"],["/Portfolio-React/static/media/ModalVideo.341a2c5c.sass","341a2c5cda591dced1645b06e64ca7e9"],["/Portfolio-React/static/media/Responsive.f170b14e.sass","f170b14ed732742838d5232ab041af98"],["/Portfolio-React/static/media/TabMenu.3d1e8405.sass","3d1e8405212eb054baf201b55cc188cb"],["/Portfolio-React/static/media/TabMenuIndicator.fcade178.sass","fcade178288d9e1585b80d842d59ccd1"],["/Portfolio-React/static/media/TabMenuViewer.9561e1c1.sass","9561e1c1cede15cad802dfaa79c663c4"],["/Portfolio-React/static/media/Video.84641421.sass","84641421823934b207473f15dba8f4b4"],["/Portfolio-React/static/media/close-icon.66c09504.svg","66c09504ad4e8a8fc6cf67f97ab1db8b"],["/Portfolio-React/static/media/index.4e00c1d0.sass","4e00c1d0f6f6dcfeddc3205948828636"],["/Portfolio-React/static/media/logo-icon.a8dd2b00.svg","a8dd2b002c96aa15e6e1be578f80a787"],["/Portfolio-React/static/media/magnifier-icon.6a183870.svg","6a183870fac7d9c431773472ee7d3b33"],["/Portfolio-React/static/media/omega-watch-ad01.b544761a.jpg","b544761acfe36fdb21ca9e144a6a7fa5"],["/Portfolio-React/static/media/omega-watch-youtube03.238b98e8.jpg","238b98e8c980a099b1ade4c5755c9d02"],["/Portfolio-React/static/media/sns-icon-facebook.a11aed31.svg","a11aed31de755b0300f2980ebdf5e213"],["/Portfolio-React/static/media/sns-icon-instagram.fbfbb200.svg","fbfbb200b81caaa94522d34b4d233111"],["/Portfolio-React/static/media/sns-icon-twitter.c4610964.svg","c4610964a0a950bb059004ffc78d11dc"],["/Portfolio-React/static/media/sns-icon-youtube.cf92f60d.svg","cf92f60df410ee0bc6813a8511b9055b"],["/Portfolio-React/static/media/youtube-icon.37e077f9.svg","37e077f9ee8adc13eb04ec1bc8b8f117"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var s="/Portfolio-React/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});