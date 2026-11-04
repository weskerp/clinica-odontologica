const GA_ID = import.meta.env.VITE_GA4_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let analyticsLoaded = false;
let marketingLoaded = false;

export function trackEvent(eventName, parameters = {}) {
  const allowedEvents = [
    "whatsapp_click",
    "phone_click",
    "form_submit",
  ];

  if (!allowedEvents.includes(eventName)) return;

  if (window.gtag) {
    window.gtag("event", eventName, parameters);
  }

  if (window.fbq) {
    window.fbq("trackCustom", eventName, parameters);
  }
}

function loadGoogleAnalytics() {
  if (analyticsLoaded || !GA_ID) return;

  analyticsLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

function loadMetaPixel() {
  if (marketingLoaded || !META_PIXEL_ID) return;

  marketingLoaded = true;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;

    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e);
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export function applyConsent(preferences) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  });

  if (preferences.analytics) loadGoogleAnalytics();
  if (preferences.marketing) loadMetaPixel();

  window.dispatchEvent(
    new CustomEvent("cookie-preferences-updated", {
      detail: preferences,
    })
  );
}