"use strict";

(() => {
  const config = window.FoxnaimAnalyticsConfig || {};
  const allowedProperties = new Set(["location", "offer", "goal", "timeline", "flow", "language", "path"]);
  const clean = value => String(value ?? "").slice(0, 80).replace(/[\n\r<>]/g, " ");
  const safeProperties = properties => Object.fromEntries(
    Object.entries(properties || {})
      .filter(([key, value]) => allowedProperties.has(key) && value !== undefined && value !== "")
      .map(([key, value]) => [key, clean(value)])
  );

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  function loadScript(src, attributes = {}) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
    document.head.append(script);
  }

  if (/^G-[A-Z0-9]+$/i.test(config.ga4MeasurementId || "")) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId)}`);
    gtag("js", new Date());
    gtag("config", config.ga4MeasurementId, { anonymize_ip: true, allow_google_signals: false });
  }

  if (/^[a-z0-9]+$/i.test(config.clarityProjectId || "")) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(config.clarityProjectId)}`);
  }

  if (/^[a-z0-9_-]{16,}$/i.test(config.cloudflareToken || "")) {
    loadScript("https://static.cloudflareinsights.com/beacon.min.js", {
      defer: "",
      "data-cf-beacon": JSON.stringify({ token: config.cloudflareToken })
    });
  }

  function track(name, properties = {}) {
    if (!/^[a-z][a-z0-9_]{1,39}$/i.test(name)) return;
    const payload = { ...safeProperties(properties), path: location.pathname };
    window.dataLayer.push({ event: name, ...payload });
    if (/^G-[A-Z0-9]+$/i.test(config.ga4MeasurementId || "")) gtag("event", name, payload);
    if (typeof window.clarity === "function" && config.clarityProjectId) window.clarity("event", name);
    document.dispatchEvent(new CustomEvent("foxnaim:analytics", { detail: { name, properties: payload } }));
  }

  window.FoxnaimAnalytics = Object.freeze({ track, enabled: Object.values(config).some(Boolean) });

  document.addEventListener("click", event => {
    const target = event.target.closest("[data-analytics]");
    if (!target) return;
    track(target.dataset.analytics, {
      location: target.dataset.location,
      offer: target.dataset.offer,
      language: document.documentElement.lang
    });
  });

  document.addEventListener("DOMContentLoaded", () => track("page_viewed", { language: document.documentElement.lang }));
  window.addEventListener("portfolio:language", event => track("language_changed", { language: event.detail?.language }));
})();
