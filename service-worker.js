"use strict";var precacheConfig=[["/Portfolio-React/index.html","e356cedc1b5b2c952707ced5b3f4ffb7"],["/Portfolio-React/static/css/main.26756fbf.css","ff6010e356e6b3965adacf2b3d5075ec"],["/Portfolio-React/static/js/main.7d3c21dd.js","cf3e6aea6e65e3a290ee069a2f6d2c61"],["/Portfolio-React/static/media/close-icon.66c09504.svg","66c09504ad4e8a8fc6cf67f97ab1db8b"],["/Portfolio-React/static/media/logo-icon.a8dd2b00.svg","a8dd2b002c96aa15e6e1be578f80a787"],["/Portfolio-React/static/media/magnifier-icon.6a183870.svg","6a183870fac7d9c431773472ee7d3b33"],["/Portfolio-React/static/media/omega-watch-ad01.b544761a.jpg","b544761acfe36fdb21ca9e144a6a7fa5"],["/Portfolio-React/static/media/omega-watch-youtube03.238b98e8.jpg","238b98e8c980a099b1ade4c5755c9d02"],["/Portfolio-React/static/media/sns-icon-facebook.a11aed31.svg","a11aed31de755b0300f2980ebdf5e213"],["/Portfolio-React/static/media/sns-icon-instagram.fbfbb200.svg","fbfbb200b81caaa94522d34b4d233111"],["/Portfolio-React/static/media/sns-icon-twitter.c4610964.svg","c4610964a0a950bb059004ffc78d11dc"],["/Portfolio-React/static/media/sns-icon-youtube.cf92f60d.svg","cf92f60df410ee0bc6813a8511b9055b"],["/Portfolio-React/static/media/youtube-icon.37e077f9.svg","37e077f9ee8adc13eb04ec1bc8b8f117"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio-React/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});