import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const source = fs.readFileSync(new URL("../src/assets/site.js", import.meta.url), "utf8");

function harness({ hash = "" } = {}) {
  const events = new Map();
  const document = { body: { dataset: {} } };
  function element({ hidden = false, parent = null } = {}) {
    return {
      hidden, parent, disabled: false, listeners: new Map(),
      addEventListener(name, handler) { this.listeners.set(name, handler); },
      click() { this.listeners.get("click")?.(); },
      focus() { document.activeElement = this; },
      closest() { return this.hidden ? this : this.parent?.closest() || null; }
    };
  }
  const modal = element({ hidden: true });
  const panel = element({ parent: modal });
  const googleButton = element({ hidden: true, parent: panel });
  const close = element({ parent: panel });
  const adsSettings = element({ parent: panel });
  const privacyLink = element({ parent: panel });
  const trigger = element();
  modal.querySelector = (selector) => selector === ".cookie-modal__panel" ? panel :
    selector === "[data-google-privacy]" ? googleButton : null;
  panel.querySelectorAll = () => [close, googleButton, adsSettings, privacyLink];
  document.querySelector = (selector) => selector === "[data-cookie-modal]" ? modal : null;
  document.querySelectorAll = (selector) => selector === "[data-cookie-open]" ? [trigger] :
    selector === "[data-cookie-close]" ? [close] : [];
  document.addEventListener = (name, handler) => events.set(name, handler);
  document.activeElement = trigger;
  const window = {
    location: { hash },
    // A stored choice from the old banner must never count as Google consent.
    epoxyConsentState: { ad_storage: "granted", ad_personalization: "granted" },
    localStorage: { setItem() { throw new Error("Local consent must not be written"); } }
  };
  vm.runInNewContext(source, { document, window, setTimeout });
  function ready({ gdprApplies = true, success = true } = {}) {
    const calls = [];
    window.googlefc.showRevocationMessage = () => calls.push("revoke");
    window.__tcfapi = (command, version, callback) => {
      assert.equal(command, "addEventListener");
      assert.equal(version, 0);
      callback({ gdprApplies }, success);
    };
    window.googlefc.callbackQueue[0].CONSENT_API_READY();
    window.googlefc.callbackQueue = {
      push(callback) { calls.push("queued"); callback(); }
    };
    return calls;
  }
  function key(key, shiftKey = false) {
    const event = { key, shiftKey, prevented: false, preventDefault() { this.prevented = true; } };
    events.get("keydown")(event);
    return event;
  }
  return { window, document, modal, panel, googleButton, close, trigger, privacyLink, ready, key };
}

test("without Google's API, privacy help opens without granting advertising consent", () => {
  const app = harness();
  assert.equal(app.googleButton.hidden, true);
  app.trigger.click();
  assert.equal(app.modal.hidden, false);
  assert.equal(app.document.activeElement, app.panel);
  assert.equal(app.window.googlefc.callbackQueue.length, 1);
  assert.equal(typeof app.window.googlefc.showRevocationMessage, "undefined");
  app.key("Escape");
  assert.equal(app.modal.hidden, true);
  assert.equal(app.document.activeElement, app.trigger);
  assert.equal(app.document.body.dataset.cookieModal, undefined);
});

test("late Google readiness enables the applicable control and queues revocation", () => {
  const app = harness();
  app.trigger.click();
  assert.equal(app.googleButton.hidden, true);
  const calls = app.ready();
  assert.equal(app.googleButton.hidden, false);
  app.googleButton.click();
  assert.deepEqual(calls, ["queued", "revoke"]);
  assert.equal(app.modal.hidden, true);
});

test("non-applicable or unsuccessful TCF data keeps the EU control hidden", () => {
  for (const state of [{ gdprApplies: false }, { success: false }]) {
    const app = harness();
    app.ready(state);
    assert.equal(app.googleButton.hidden, true);
  }
});

test("privacy deep link opens the dialog and Tab stays inside visible controls", () => {
  const app = harness({ hash: "#privacy-choices" });
  assert.equal(app.modal.hidden, false);
  assert.equal(app.key("Tab").prevented, true);
  assert.equal(app.document.activeElement, app.close);
  assert.equal(app.key("Tab", true).prevented, true);
  assert.equal(app.document.activeElement, app.privacyLink);
  assert.equal(app.key("Tab").prevented, true);
  assert.equal(app.document.activeElement, app.close);
});
