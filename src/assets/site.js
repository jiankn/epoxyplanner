const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.body.dataset.navOpen = String(!expanded);
  });
}

const languageSwitchers = Array.from(document.querySelectorAll(".language-switcher"));
const navMoreMenus = Array.from(document.querySelectorAll(".nav-more"));

function closeLanguageSwitchers(except = null) {
  languageSwitchers.forEach((switcher) => {
    if (switcher !== except) {
      switcher.removeAttribute("open");
    }
  });
}

function closeNavMoreMenus(except = null) {
  navMoreMenus.forEach((menu) => {
    if (menu !== except) {
      menu.removeAttribute("open");
    }
  });
}

if (languageSwitchers.length) {
  languageSwitchers.forEach((switcher) => {
    switcher.addEventListener("toggle", () => {
      if (switcher.open) {
        closeLanguageSwitchers(switcher);
        closeNavMoreMenus();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (languageSwitchers.some((switcher) => switcher.contains(event.target))) {
      return;
    }

    closeLanguageSwitchers();
  });
}

if (navMoreMenus.length) {
  navMoreMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (menu.open) {
        closeNavMoreMenus(menu);
        closeLanguageSwitchers();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (navMoreMenus.some((menu) => menu.contains(event.target))) {
      return;
    }

    closeNavMoreMenus();
  });
}

const CONSENT_KEY = window.epoxyConsentKey || "epoxy_consent_v1";
const banner = document.querySelector("[data-cookie-banner]");
const modal = document.querySelector("[data-cookie-modal]");
const modalPanel = modal?.querySelector(".cookie-modal__panel") || null;
const cookieOpenButtons = document.querySelectorAll("[data-cookie-open], [data-cookie-manage]");
const cookieCloseButtons = document.querySelectorAll("[data-cookie-close]");
const cookieAcceptButtons = document.querySelectorAll("[data-cookie-accept]");
const cookieRejectButtons = document.querySelectorAll("[data-cookie-reject]");
const cookieSaveButtons = document.querySelectorAll("[data-cookie-save]");
const analyticsField = modal?.querySelector('[data-cookie-field="analytics_storage"]') || null;
const adStorageField = modal?.querySelector('[data-cookie-field="ad_storage"]') || null;
const adPersonalizationField = modal?.querySelector('[data-cookie-field="ad_personalization"]') || null;

function normalizeConsent(input = {}) {
  const state = {
    version: 1,
    decision: "unknown",
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    updatedAt: "",
    ...input
  };

  const normalizeFlag = (value) => (value === "granted" ? "granted" : "denied");

  state.analytics_storage = normalizeFlag(state.analytics_storage);
  state.ad_storage = normalizeFlag(state.ad_storage);
  state.ad_user_data = normalizeFlag(state.ad_user_data || state.ad_storage);
  state.ad_personalization = normalizeFlag(state.ad_personalization);

  if (state.ad_personalization === "granted") {
    state.ad_storage = "granted";
    state.ad_user_data = "granted";
  }

  if (state.ad_storage === "denied") {
    state.ad_user_data = "denied";
    state.ad_personalization = "denied";
  }

  return state;
}

function readStoredConsent() {
  if (window.epoxyConsentState) {
    return normalizeConsent(window.epoxyConsentState);
  }

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? normalizeConsent(JSON.parse(raw)) : normalizeConsent();
  } catch (error) {
    return normalizeConsent();
  }
}

function writeStoredConsent(state) {
  const normalized = normalizeConsent(state);

  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(normalized));
  } catch (error) {
    // Ignore storage failures and keep the in-memory state.
  }

  window.epoxyConsentState = normalized;
  return normalized;
}

function reflectConsentState(state) {
  const normalized = normalizeConsent(state);
  const hasDecision = normalized.decision !== "unknown";

  document.documentElement.dataset.consentDecision = normalized.decision;
  document.documentElement.dataset.analyticsStorage = normalized.analytics_storage;
  document.documentElement.dataset.adStorage = normalized.ad_storage;
  document.body.dataset.cookieBanner = hasDecision ? "hidden" : "visible";

  if (banner) {
    banner.hidden = hasDecision;
  }

  if (analyticsField) {
    analyticsField.checked = normalized.analytics_storage === "granted";
  }

  if (adStorageField) {
    adStorageField.checked = normalized.ad_storage === "granted";
  }

  if (adPersonalizationField) {
    adPersonalizationField.checked = normalized.ad_personalization === "granted";
  }
}

function emitConsentChange(state) {
  window.dispatchEvent(
    new CustomEvent("epoxy:consent-changed", {
      detail: normalizeConsent(state)
    })
  );
}

function openCookieModal() {
  if (!modal || !modalPanel) return;

  modal.hidden = false;
  document.body.dataset.cookieModal = "open";
  reflectConsentState(readStoredConsent());
  modalPanel.focus();
}

function closeCookieModal() {
  if (!modal) return;

  modal.hidden = true;
  delete document.body.dataset.cookieModal;
}

function buildConsentState(decision) {
  const analyticsGranted = analyticsField?.checked ? "granted" : "denied";
  const adStorageGranted = adStorageField?.checked ? "granted" : "denied";
  const adPersonalizationGranted = adPersonalizationField?.checked ? "granted" : "denied";

  return normalizeConsent({
    version: 1,
    decision,
    analytics_storage: analyticsGranted,
    ad_storage: adPersonalizationGranted === "granted" ? "granted" : adStorageGranted,
    ad_user_data: adPersonalizationGranted === "granted" ? "granted" : adStorageGranted,
    ad_personalization: adPersonalizationGranted,
    updatedAt: new Date().toISOString()
  });
}

function saveConsent(state) {
  const saved = writeStoredConsent(state);
  reflectConsentState(saved);
  closeCookieModal();
  emitConsentChange(saved);
}

function acceptAllConsent() {
  saveConsent({
    version: 1,
    decision: "accepted_all",
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    updatedAt: new Date().toISOString()
  });
}

function rejectNonEssentialConsent() {
  saveConsent({
    version: 1,
    decision: "rejected_non_essential",
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    updatedAt: new Date().toISOString()
  });
}

if (adStorageField && adPersonalizationField) {
  adPersonalizationField.addEventListener("change", () => {
    if (adPersonalizationField.checked) {
      adStorageField.checked = true;
    }
  });

  adStorageField.addEventListener("change", () => {
    if (!adStorageField.checked) {
      adPersonalizationField.checked = false;
    }
  });
}

cookieOpenButtons.forEach((button) => {
  button.addEventListener("click", openCookieModal);
});

cookieCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCookieModal);
});

cookieAcceptButtons.forEach((button) => {
  button.addEventListener("click", acceptAllConsent);
});

cookieRejectButtons.forEach((button) => {
  button.addEventListener("click", rejectNonEssentialConsent);
});

cookieSaveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    saveConsent(buildConsentState("customized"));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageSwitchers();
    closeNavMoreMenus();
  }

  if (event.key === "Escape" && modal && !modal.hidden) {
    closeCookieModal();
  }
});

reflectConsentState(readStoredConsent());
