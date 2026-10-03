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

const privacyModal = document.querySelector("[data-cookie-modal]");
const privacyPanel = privacyModal?.querySelector(".cookie-modal__panel") || null;
const googlePrivacyButton = privacyModal?.querySelector("[data-google-privacy]") || null;
let privacyTrigger = null;

function openPrivacyChoices() {
  if (!privacyModal || !privacyPanel) return;
  privacyTrigger = document.activeElement;
  privacyModal.hidden = false;
  document.body.dataset.cookieModal = "open";
  privacyPanel.focus();
}

function closePrivacyChoices() {
  if (!privacyModal || privacyModal.hidden) return;
  privacyModal.hidden = true;
  delete document.body.dataset.cookieModal;
  privacyTrigger?.focus();
}

document.querySelectorAll("[data-cookie-open]").forEach((button) => {
  button.addEventListener("click", openPrivacyChoices);
});
document.querySelectorAll("[data-cookie-close]").forEach((button) => {
  button.addEventListener("click", closePrivacyChoices);
});

// Google owns advertising consent. Local preferences are not a TCF consent record.
window.googlefc = window.googlefc || {};
window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
window.googlefc.callbackQueue.push({
  CONSENT_API_READY: () => {
    if (!googlePrivacyButton || typeof window.__tcfapi !== "function") return;
    window.__tcfapi("addEventListener", 0, (data, success) => {
      googlePrivacyButton.hidden = !(success && data?.gdprApplies &&
        typeof window.googlefc.showRevocationMessage === "function");
    });
  }
});
googlePrivacyButton?.addEventListener("click", () => {
  if (typeof window.googlefc.showRevocationMessage !== "function") return;
  closePrivacyChoices();
  window.googlefc.callbackQueue.push(() => window.googlefc.showRevocationMessage());
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageSwitchers();
    closeNavMoreMenus();
    closePrivacyChoices();
  }
  if (event.key !== "Tab" || !privacyModal || privacyModal.hidden) return;
  const controls = Array.from(privacyPanel.querySelectorAll("a[href], button, [tabindex='0']"))
    .filter((element) => !element.disabled && !element.closest("[hidden]"));
  if (!controls.length) return;
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && (document.activeElement === first || document.activeElement === privacyPanel)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === privacyPanel)) {
    event.preventDefault();
    first.focus();
  }
});

if (window.location.hash === "#privacy-choices") openPrivacyChoices();

// 嵌入代码一键复制
document.querySelectorAll("[data-copy-embed]").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.closest(".embed-promo")?.querySelector("[data-embed-code]");
    if (!code) return;
    const label = button.textContent;
    try {
      await navigator.clipboard.writeText(code.value);
    } catch {
      code.select();
      document.execCommand("copy");
    }
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = label; }, 2000);
  });
});
