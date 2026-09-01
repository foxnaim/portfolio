"use strict";

if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener("load", () => {
    const script = document.currentScript || [...document.scripts].find(item => item.src.includes("/pwa.js"));
    const workerUrl = new URL("sw.js", script?.src || location.href);
    navigator.serviceWorker.register(workerUrl.href, { scope: new URL("./", workerUrl).pathname }).catch(() => {
      // Offline support is progressive enhancement; the site remains usable without it.
    });
  }, { once: true });
}
