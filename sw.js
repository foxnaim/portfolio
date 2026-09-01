"use strict";

const CACHE_VERSION = "foxnaim-v3";
const CORE = [
  "./",
  "./offline.html",
  "./styles.css?v=12",
  "./seo-pages.css?v=9",
  "./main.js?v=12",
  "./i18n.js?v=2",
  "./analytics-config.js?v=1",
  "./analytics.js?v=1",
  "./pwa.js?v=1",
  "./assets/logo.svg",
  "./assets/poster.webp",
  "./fonts/InterVariable.woff2",
  "./site.webmanifest"
];

function scoped(path) {
  return new URL(path, self.registration.scope).href;
}

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(CORE.map(scoped))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
      return response;
    }).catch(async () => (await caches.match(request, { ignoreSearch: true })) || caches.match(scoped("./offline.html"))));
    return;
  }

  event.respondWith(caches.match(request, { ignoreSearch: false }).then(cached => {
    const network = fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_VERSION).then(cache => cache.put(request, response.clone()));
      return response;
    }).catch(() => cached);
    return cached || network;
  }));
});
