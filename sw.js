"use strict";

const CACHE_VERSION = "foxnaim-v4";
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

async function fetchAndCache(request) {
  const response = await fetch(request);
  if (response.ok) {
    // Clone before the response is returned to the page. Delaying clone() until
    // caches.open() resolves can race with the browser consuming the body.
    const copy = response.clone();
    try {
      const cache = await caches.open(CACHE_VERSION);
      await cache.put(request, copy);
    } catch (_) {
      // A cache write must never turn a successful network response into an error.
    }
  }
  return response;
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
    event.respondWith(fetchAndCache(request).catch(async () => (await caches.match(request, { ignoreSearch: true })) || caches.match(scoped("./offline.html"))));
    return;
  }

  event.respondWith(caches.match(request, { ignoreSearch: false }).then(cached => cached || fetchAndCache(request)));
});
