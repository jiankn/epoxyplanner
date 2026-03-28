const FORM_TEMPLATES = {
  general: () => `
    <div class="field-grid field-grid--three">
      ${unitToggle()}
      ${shapeSelect("Shape", "shape", [
        ["rectangle", "Rectangle"],
        ["round", "Round"]
      ])}
      ${numberField("Waste buffer (%)", "wastePct", "8", "0.1")}
    </div>
    <div class="field-grid field-grid--three" data-group="rectangle">
      ${numberField("Length", "length", "48", "0.1")}
      ${numberField("Width", "width", "18", "0.1")}
      ${numberField("Depth", "depth", "1.25", "0.01")}
    </div>
    <div class="field-grid field-grid--two is-hidden" data-group="round">
      ${numberField("Diameter", "diameter", "24", "0.1")}
      ${numberField("Depth", "depthRound", "0.5", "0.01")}
    </div>
    ${priceField()}
  `,
  coverage: () => `
    <div class="field-grid field-grid--three">
      ${unitToggle()}
      ${numberField("Waste buffer (%)", "wastePct", "10", "0.1")}
      ${numberField("Thickness", "depth", "0.125", "0.001")}
    </div>
    <div class="field-grid field-grid--two">
      ${numberField("Length", "length", "72", "0.1")}
      ${numberField("Width", "width", "30", "0.1")}
    </div>
    ${priceField()}
  `,
  volume: () => `
    <div class="field-grid field-grid--three">
      ${unitToggle()}
      ${shapeSelect("Shape", "shape", [
        ["rectangle", "Rectangle"],
        ["round", "Round"]
      ])}
      ${numberField("Waste buffer (%)", "wastePct", "8", "0.1")}
    </div>
    <div class="field-grid field-grid--three" data-group="rectangle">
      ${numberField("Length", "length", "30", "0.1")}
      ${numberField("Width", "width", "12", "0.1")}
      ${numberField("Depth", "depth", "2", "0.01")}
    </div>
    <div class="field-grid field-grid--two is-hidden" data-group="round">
      ${numberField("Diameter", "diameter", "18", "0.1")}
      ${numberField("Depth", "depthRound", "1.25", "0.01")}
    </div>
    ${priceField()}
  `,
  river: () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${shapeSelect("Mode", "riverMode", [
        ["quick", "Quick"],
        ["segment", "Segment"]
      ])}
      ${numberField("Waste buffer (%)", "wastePct", "12", "0.1")}
      ${numberField("Price / gallon", "pricePerGallon", "95", "0.01")}
    </div>
    <div class="field-grid field-grid--three">
      ${numberField("Length", "length", "72", "0.1")}
      ${numberField("Target depth", "depth", "1.5", "0.01")}
      ${numberField("Average width", "avgWidth", "6", "0.1")}
    </div>
    <div class="field-grid field-grid--two checkbox-row">
      ${checkboxField("Add seepage buffer", "includeSeepage", true)}
      ${checkboxField("Add seal-coat buffer", "includeSeal", true)}
    </div>
    <div class="segment-block is-hidden" data-segment-block>
      <div class="segment-block__head">
        <h3>Segment widths</h3>
        <button class="button button--quiet" type="button" data-add-segment>Add segment</button>
      </div>
      <div class="segment-list" data-segment-list>
        ${segmentField(1, "4.5")}
        ${segmentField(2, "6.0")}
        ${segmentField(3, "7.5")}
      </div>
    </div>
  `,
  "deep-pour": () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${numberField("Waste buffer (%)", "wastePct", "10", "0.1")}
      ${numberField("Max layer depth", "maxDepth", "2", "0.01")}
      ${numberField("Price / gallon", "pricePerGallon", "105", "0.01")}
    </div>
    <div class="field-grid field-grid--three">
      ${numberField("Length", "length", "48", "0.1")}
      ${numberField("Width", "width", "14", "0.1")}
      ${numberField("Total depth", "depth", "2.5", "0.01")}
    </div>
  `,
  surface: () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${numberField("Waste buffer (%)", "wastePct", "8", "0.1")}
      ${numberField("Thickness", "depth", "0.125", "0.001")}
      ${numberField("Price / gallon", "pricePerGallon", "78", "0.01")}
    </div>
    <div class="field-grid field-grid--two">
      ${numberField("Length", "length", "72", "0.1")}
      ${numberField("Width", "width", "24", "0.1")}
    </div>
  `,
  "garage-floor": () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${numberField("Coats", "coats", "2", "1")}
      ${numberField("Coverage / gallon (sq ft)", "coverageRate", "160", "1")}
      ${numberField("Waste buffer (%)", "wastePct", "7", "0.1")}
    </div>
    <div class="field-grid field-grid--three">
      ${numberField("Length", "length", "22", "0.1")}
      ${numberField("Width", "width", "20", "0.1")}
      ${numberField("Price / gallon", "pricePerGallon", "62", "0.01")}
    </div>
  `,
  "void-fill": () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${numberField("Length", "length", "6", "0.1")}
      ${numberField("Width", "width", "2.5", "0.1")}
      ${numberField("Depth", "depth", "1", "0.01")}
    </div>
    <div class="field-grid field-grid--three">
      ${numberField("Waste buffer (%)", "wastePct", "15", "0.1")}
      ${numberField("Price / gallon", "pricePerGallon", "88", "0.01")}
      ${checkboxField("Overfill for sanding", "includeSeal", true)}
    </div>
  `,
  round: () => `
    <div class="field-grid field-grid--four">
      ${unitToggle()}
      ${numberField("Diameter", "diameter", "28", "0.1")}
      ${numberField("Depth", "depth", "0.75", "0.01")}
      ${numberField("Waste buffer (%)", "wastePct", "8", "0.1")}
    </div>
    ${priceField()}
  `,
  cost: () => `
    <div class="field-grid field-grid--four">
      ${shapeSelect("Quantity unit", "costUnit", [
        ["gallons", "Gallons"],
        ["liters", "Liters"]
      ])}
      ${numberField("Quantity needed", "quantity", "3", "0.01")}
      ${numberField("Waste buffer (%)", "wastePct", "8", "0.1")}
      ${numberField("Price / gallon", "pricePerGallon", "95", "0.01")}
    </div>
  `,
  converter: () => `
    <div class="field-grid field-grid--four">
      ${numberField("Value", "quantity", "231", "0.01")}
      ${shapeSelect("From unit", "fromUnit", [
        ["cubicInches", "Cubic inches"],
        ["gallons", "Gallons"],
        ["quarts", "Quarts"],
        ["fluidOunces", "Fluid ounces"],
        ["liters", "Liters"],
        ["milliliters", "Milliliters"]
      ])}
      ${shapeSelect("To unit", "toUnit", [
        ["gallons", "Gallons"],
        ["quarts", "Quarts"],
        ["fluidOunces", "Fluid ounces"],
        ["liters", "Liters"],
        ["milliliters", "Milliliters"],
        ["cubicInches", "Cubic inches"]
      ])}
      ${shapeSelect("Display system", "unit", [
        ["imperial", "Imperial"],
        ["metric", "Metric"]
      ])}
    </div>
  `
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function hrefFor(slug) {
  return slug ? `/${slug}/` : "/";
}

function shapeSelect(label, name, options) {
  if (options.length <= 3) {
    const buttons = options
      .map(([value, text], i) =>
        `<button type="button" class="pill-toggle__btn${i === 0 ? " is-active" : ""}" data-value="${escapeHtml(value)}">${escapeHtml(text)}</button>`
      )
      .join("");
    return `
      <div class="field">
        <span>${escapeHtml(label)}</span>
        <div class="pill-toggle" data-pill-toggle data-pill-name="${escapeHtml(name)}">
          <input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(options[0][0])}" />
          ${buttons}
        </div>
      </div>
    `;
  }

  const opts = options
    .map(([value, text]) => `<option value="${escapeHtml(value)}">${escapeHtml(text)}</option>`)
    .join("");
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <select class="custom-select" name="${escapeHtml(name)}">
        ${opts}
      </select>
    </label>
  `;
}

function numberField(label, name, value, step) {
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <input type="number" name="${escapeHtml(name)}" value="${escapeHtml(value)}" step="${escapeHtml(step)}" inputmode="decimal" />
    </label>
  `;
}

function checkboxField(label, name, checked = false) {
  return `
    <label class="check">
      <input type="checkbox" name="${escapeHtml(name)}" ${checked ? "checked" : ""} />
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function unitToggle() {
  return shapeSelect("Unit system", "unit", [
    ["imperial", "Imperial"],
    ["metric", "Metric"]
  ]);
}

function priceField() {
  return `
    <div class="field-grid field-grid--one">
      ${numberField("Price / gallon", "pricePerGallon", "85", "0.01")}
    </div>
  `;
}

function segmentField(index, value) {
  return `
    <label class="field field--segment">
      <span>Segment ${index} width</span>
      <input type="number" name="segmentWidth${index}" value="${escapeHtml(value)}" step="0.1" inputmode="decimal" />
    </label>
  `;
}

function renderFaqs(faqs = []) {
  if (!faqs.length) return "";
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Questions people ask before buying epoxy</h2>
      </div>
      <div class="faq-list">
        ${faqs
          .map(
            (item) => `
            <details class="faq">
              <summary>${escapeHtml(item.q)}</summary>
              <p>${escapeHtml(item.a)}</p>
            </details>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCards(cards = []) {
  if (!cards?.length) return "";
  return `
    <div class="card-grid">
      ${cards
        .map((card) => {
          const href = card.slug ? hrefFor(card.slug) : "#";
          const primaryClass = card.primary ? " mini-card--primary" : "";
          const icon = card.icon ? `<span class="hero-action__icon">${card.icon}</span>` : "";
          return `
            <article class="mini-card${primaryClass}">
              <div class="mini-card__header">
                <h3>${icon}${escapeHtml(card.title)}</h3>
              </div>
              <div class="mini-card__body">
                <p>${escapeHtml(card.text)}</p>
                ${card.slug ? `<a class="text-link" href="${href}">Open page</a>` : ""}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRelated(page, pageMap) {
  const relatedPages = (page.related || [])
    .map((slug) => pageMap.get(slug))
    .filter(Boolean);

  if (!relatedPages.length) return "";

  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Related Pages</p>
        <h2>Keep moving through the same intent cluster</h2>
      </div>
      <div class="card-grid">
        ${relatedPages
          .map(
            (relatedPage) => `
            <article class="mini-card">
              <div class="mini-card__header">
                <h3>${escapeHtml(relatedPage.h1)}</h3>
              </div>
              <div class="mini-card__body">
                <p>${escapeHtml(relatedPage.description)}</p>
                <a class="text-link" href="${hrefFor(relatedPage.slug)}">Open page</a>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderBullets(title, bullets = [], className = "") {
  if (!bullets.length) return "";
  return `
    <section class="section ${className}">
      <div class="section-heading">
        <h2>${escapeHtml(title)}</h2>
      </div>
      <ul class="bullet-list">
        ${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderGuideSections(sections = []) {
  return sections
    .map((section) => `
      <section class="section">
        <div class="section-heading">
          <h2>${escapeHtml(section.title)}</h2>
        </div>
        ${section.body ? `<p class="lead">${escapeHtml(section.body)}</p>` : ""}
        ${section.points ? `<ul class="bullet-list">${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}
        ${section.faqs ? renderFaqs(section.faqs) : ""}
        ${section.cards ? renderCards(section.cards) : ""}
        ${section.contactEmail ? `<p><a class="text-link" href="mailto:${escapeHtml(section.contactEmail)}">${escapeHtml(section.contactEmail)}</a></p>` : ""}
      </section>
    `)
    .join("");
}

function renderHeroActions(page) {
  if (!page.heroActions?.length) return "";
  return `
    <div class="hero-actions">
      ${page.heroActions.map((action) => `
        <a class="hero-action" href="${hrefFor(action.slug)}">
          <span class="hero-action__icon">${action.icon || ""}</span>
          <span>${escapeHtml(action.label)}</span>
        </a>
      `).join("")}
    </div>
  `;
}

function renderHero(page) {
  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">${escapeHtml(page.eyebrow || "Epoxy Planner")}</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p class="hero__intro">${escapeHtml(page.intro || page.description)}</p>
        ${renderHeroActions(page)}
      </div>
    </section>
  `;
}

function renderCalculator(page) {
  const formMarkup = FORM_TEMPLATES[page.calculatorType] ? FORM_TEMPLATES[page.calculatorType]({ page }) : "";
  return `
    <section class="section">
      <div class="calculator-shell">
        <div class="calculator-panel">
          <div class="section-heading section-heading--compact">
            <p class="eyebrow">Calculator</p>
            <h2>Plan the project in one pass</h2>
          </div>
          <form class="calculator-root" data-calculator-type="${escapeHtml(page.calculatorType)}" novalidate>
            ${formMarkup}
            <p class="field-note">${escapeHtml(page.note || "Results update as you type. Use the breakdown to compare raw math, planning buffers, and the order-ready recommendation.")}</p>
            <p class="form-error" role="alert" aria-live="polite" data-form-error></p>
          </form>
          <div class="scroll-to-result">
            <a href="#result-panel">↓ View result</a>
          </div>
        </div>
        <div class="result-panel" id="result-panel" data-result-panel>
          <div class="result-panel__hero">
            <p class="eyebrow">${escapeHtml(page.resultEyebrow || "Recommended order")}</p>
            <div class="result-big" data-result-primary>--</div>
            <p class="result-caption" data-result-secondary>Start with the inputs to generate an order-ready estimate.</p>
          </div>
          <div class="stat-grid">
            <article class="stat-card">
              <p>${escapeHtml(page.statLabels?.raw || "Raw volume")}</p>
              <strong data-stat-raw>--</strong>
            </article>
            <article class="stat-card">
              <p>${escapeHtml(page.statLabels?.split || "Part A / Part B")}</p>
              <strong data-stat-split>--</strong>
            </article>
            <article class="stat-card">
              <p>${escapeHtml(page.statLabels?.cost || "Projected cost")}</p>
              <strong data-stat-cost>--</strong>
            </article>
            <article class="stat-card">
              <p>${escapeHtml(page.statLabels?.layers || "Layer guidance")}</p>
              <strong data-stat-layers>--</strong>
            </article>
          </div>
          <div class="result-panel__why">
            <div class="section-heading section-heading--compact">
              <p class="eyebrow">Why This Estimate Changed</p>
              <h3>What moved the number</h3>
            </div>
            <ul class="stack-list" data-breakdown-list>
              <li>Enter the form values to see raw volume, buffer, and recommendation.</li>
            </ul>
          </div>
          <div class="result-panel__compare">
            <div class="section-heading section-heading--compact">
              <p class="eyebrow">Compare Scenarios</p>
              <h3>${escapeHtml(page.compareLabel || "Baseline vs conservative")}</h3>
            </div>
            <div class="compare-grid">
              <article class="compare-card">
                <p>Standard</p>
                <strong data-compare-standard>--</strong>
              </article>
              <article class="compare-card">
                <p>Conservative</p>
                <strong data-compare-conservative>--</strong>
              </article>
              <article class="compare-card">
                <p>Product fit</p>
                <strong data-compare-product>--</strong>
              </article>
            </div>
          </div>
          <div class="buy-box" id="next-step">
            <div class="section-heading section-heading--compact">
              <p class="eyebrow">Next Step</p>
              <h3 data-product-heading>Match the result to the right resin class</h3>
            </div>
            <p data-product-copy>Use the estimate to narrow the resin class first. Then confirm product limits, cure behavior, and measurement assumptions before you make a buying decision.</p>
            <div class="button-row">
              <a class="button" href="/deep-pour-vs-table-top-epoxy/">Compare Resin Types</a>
              <a class="button button--ghost" href="/methodology/">See Methodology</a>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-summary" data-sticky-summary>
        <div>
          <p class="sticky-summary__label">Current recommendation</p>
          <strong data-sticky-primary>--</strong>
        </div>
        <p class="sticky-summary__cost" data-sticky-cost><span class="sticky-summary__cost-label">Est. cost</span><strong data-sticky-cost-value></strong></p>
        <a class="button button--small" href="#result-panel">View details</a>
      </div>
    </section>
  `;
}

function renderInfoSections(page) {
  return page.sections.map((section) => `
    <section class="section">
      <div class="section-heading">
        <h2>${escapeHtml(section.title)}</h2>
      </div>
      ${section.body ? `<p class="lead">${escapeHtml(section.body)}</p>` : ""}
      ${section.points ? `
        <ul class="bullet-list">
          ${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>
      ` : ""}
      ${section.cards ? renderCards(section.cards) : ""}
      ${section.faqs ? renderFaqs(section.faqs) : ""}
      ${section.contactEmail ? `<p><a class="text-link" href="mailto:${escapeHtml(section.contactEmail)}">${escapeHtml(section.contactEmail)}</a></p>` : ""}
    </section>
  `).join("");
}

function breadcrumb(page) {
  const current = page.pageType === "guide" ? "Guides" : page.pageType === "calculator" ? "Calculators" : "Site";
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>/</span>
      <span>${escapeHtml(current)}</span>
      ${page.slug ? `<span>/</span><span aria-current="page">${escapeHtml(page.h1)}</span>` : ""}
    </nav>
  `;
}

function jsonLd(page, { site, urlForPath }) {
  const graph = [];
  const currentUrl = urlForPath(page.slug);

  graph.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: currentUrl,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.origin + "/"
    }
  });

  graph.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.origin + "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: page.pageType === "guide" ? "Guides" : page.pageType === "calculator" ? "Calculators" : "Site",
        item: currentUrl
      }
    ]
  });

  if (page.pageType === "guide") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      author: {
        "@type": "Organization",
        name: site.name
      },
      publisher: {
        "@type": "Organization",
        name: site.name
      },
      mainEntityOfPage: currentUrl
    });
  }

  if (page.slug === "") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      alternateName: site.shortName,
      url: site.origin + "/",
      description: site.description
    });
  }

  if (page.faq?.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a
        }
      }))
    });
  }

  return graph.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n");
}

function renderPageBody(page, context) {
  const { pageMap } = context;

  if (page.pageType === "calculator") {
    return [
      renderHero(page),
      renderCalculator(page),
      renderBullets("Why this page exists", page.bullets),
      renderBullets("How to measure or set the inputs", page.howTo),
      renderBullets("Common mistakes that cost money", page.mistakes),
      renderBullets("Project checklist before you buy", page.checklist),
      renderFaqs(page.faq),
      renderRelated(page, pageMap)
    ].join("");
  }

  if (page.pageType === "guide") {
    return `
      ${renderHero(page)}
      <section class="section answer-section">
        <div class="answer-grid">
          <article class="answer-card answer-card--lead">
            <p class="eyebrow">Direct Answer</p>
            <h2>Start with the shortest correct answer</h2>
            <p class="lead">${escapeHtml(page.answer)}</p>
          </article>
          <article class="answer-card">
            <p class="eyebrow">Takeaways</p>
            <ul class="bullet-list">
              ${(page.takeaways || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>
      ${renderGuideSections(page.sections)}
      ${renderFaqs(page.faq)}
      ${renderRelated(page, pageMap)}
    `;
  }

  return `
    ${renderHero(page)}
    ${renderInfoSections(page)}
    ${renderRelated(page, pageMap)}
  `;
}

function renderHeader(site) {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="/">
          <span class="brand__mark"><svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><defs><linearGradient id="bm" x1="0" y1="0" x2=".5" y2="1"><stop offset="0%" stop-color="#2d6e8a"/><stop offset="100%" stop-color="#1a3d4d"/></linearGradient></defs><polygon points="32,2 58,17 58,47 32,62 6,47 6,17" fill="url(#bm)"/><path d="M32,16 Q41,30 41,38 A9,9 0 1,1 23,38 Q23,30 32,16Z" fill="rgba(255,255,255,.92)"/></svg></span>
          <span class="brand__copy">
            <strong>${escapeHtml(site.shortName)}</strong>
            <small>Precision resin planning</small>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
          <span class="nav-toggle__icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="nav-toggle__text">Menu</span>
        </button>
        <nav class="site-nav" id="site-nav" data-nav>
          ${site.nav.map((item) => `<a href="${hrefFor(item.slug)}">${escapeHtml(item.label)}</a>`).join("")}
        </nav>
      </div>
    </header>
  `;
}

function renderFooter(site) {
  return `
    <footer class="site-footer">
      <div class="site-footer__grid">
        <div class="site-footer__top">
          <a class="footer-brand" href="/">
            <span class="footer-brand__mark"><svg viewBox="0 0 64 64" width="22" height="22" aria-hidden="true"><defs><linearGradient id="fm" x1="0" y1="0" x2=".5" y2="1"><stop offset="0%" stop-color="#2d6e8a"/><stop offset="100%" stop-color="#1a3d4d"/></linearGradient></defs><polygon points="32,2 58,17 58,47 32,62 6,47 6,17" fill="url(#fm)"/><path d="M32,16 Q41,30 41,38 A9,9 0 1,1 23,38 Q23,30 32,16Z" fill="rgba(255,255,255,.92)"/></svg></span>
            <span class="footer-brand__copy">
              <strong>${escapeHtml(site.shortName)}</strong>
              <small>Precision resin planning</small>
            </span>
          </a>
          <nav class="footer-links">
            ${site.footerNav.map((item) => `<a href="${hrefFor(item.slug)}">${escapeHtml(item.label)}</a>`).join("")}
          </nav>
        </div>
        <div class="site-footer__bottom">
          <p class="footer-copy">&copy; ${new Date().getFullYear()} ${escapeHtml(site.name)}. All rights reserved.</p>
          <nav class="footer-legal">
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <button type="button" class="footer-legal__button" data-cookie-open>Cookies</button>
          </nav>
        </div>
      </div>
    </footer>
  `;
}

function renderConsentBootstrap() {
  return `
    <script>
      (function () {
        var key = "epoxy_consent_v1";
        var defaultState = {
          version: 1,
          decision: "unknown",
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          updatedAt: ""
        };

        function normalizeConsent(input) {
          var state = Object.assign({}, defaultState, input || {});
          var valid = { granted: true, denied: true };

          if (!valid[state.analytics_storage]) state.analytics_storage = "denied";
          if (!valid[state.ad_storage]) state.ad_storage = "denied";
          if (!valid[state.ad_user_data]) state.ad_user_data = state.ad_storage;
          if (!valid[state.ad_personalization]) state.ad_personalization = "denied";

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

        var state = defaultState;

        try {
          var raw = window.localStorage.getItem(key);
          if (raw) state = normalizeConsent(JSON.parse(raw));
        } catch (error) {
          state = defaultState;
        }

        window.epoxyConsentKey = key;
        window.epoxyConsentState = state;
        document.documentElement.dataset.consentDecision = state.decision;
        document.documentElement.dataset.analyticsStorage = state.analytics_storage;
        document.documentElement.dataset.adStorage = state.ad_storage;
      })();
    </script>
  `;
}

function renderConsentUi() {
  const googleBusinessDataUrl = "https://business.safety.google/privacy/";

  return `
    <section class="cookie-banner" data-cookie-banner hidden aria-label="Cookie consent">
      <div class="cookie-banner__surface">
        <div class="cookie-banner__layout">
          <div class="cookie-banner__copy">
            <h2>🍪 We value your privacy</h2>
            <p>
              We use essential cookies to make this site work. With your consent, we also use analytics and advertising cookies to improve your experience.
              <a href="/privacy/">Learn more</a>
            </p>
          </div>
          <div class="button-row cookie-banner__actions">
            <button class="button button--ghost button--small" type="button" data-cookie-reject>Reject all</button>
            <button class="button button--quiet button--small" type="button" data-cookie-manage>Customize</button>
            <button class="button button--small" type="button" data-cookie-accept>Accept all</button>
          </div>
        </div>
      </div>
    </section>
    <div class="cookie-modal" data-cookie-modal hidden>
      <button class="cookie-modal__backdrop" type="button" aria-label="Close cookie preferences" data-cookie-close></button>
      <section class="cookie-modal__panel" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title" tabindex="-1">
        <div class="cookie-modal__head">
          <div>
            <p class="eyebrow">Cookie Preferences</p>
            <h2 id="cookie-preferences-title">Choose what this site can store</h2>
          </div>
          <button class="cookie-modal__close" type="button" aria-label="Close cookie preferences" data-cookie-close>&times;</button>
        </div>
        <p class="cookie-modal__intro">
          Necessary storage is always on because it keeps the calculator, navigation, and saved privacy choices working. Optional categories apply only after you opt in.
        </p>
        <div class="cookie-options">
          <label class="consent-option consent-option--locked">
            <span class="consent-option__copy">
              <strong>Necessary storage</strong>
              <small>Required for calculator behavior, navigation, and saving your consent settings.</small>
            </span>
            <span class="consent-option__status">Always on</span>
          </label>
          <label class="consent-option" for="cookie-analytics-storage">
            <span class="consent-option__copy">
              <strong>Analytics storage</strong>
              <small>Allows traffic and performance measurement to understand which pages and calculators help users most.</small>
            </span>
            <input id="cookie-analytics-storage" class="consent-option__toggle" type="checkbox" data-cookie-field="analytics_storage" />
          </label>
          <label class="consent-option" for="cookie-ad-storage">
            <span class="consent-option__copy">
              <strong>Ad storage and measurement</strong>
              <small>Allows advertising-related storage used by Google or other partners for ad delivery, frequency, and measurement.</small>
            </span>
            <input id="cookie-ad-storage" class="consent-option__toggle" type="checkbox" data-cookie-field="ad_storage" />
          </label>
          <label class="consent-option" for="cookie-ad-personalization">
            <span class="consent-option__copy">
              <strong>Ads personalization</strong>
              <small>Allows personalized advertising based on your activity, where that use is enabled and legally permitted.</small>
            </span>
            <input id="cookie-ad-personalization" class="consent-option__toggle" type="checkbox" data-cookie-field="ad_personalization" />
          </label>
        </div>
        <p class="cookie-modal__disclosure">
          If optional categories are enabled, third parties including Google may access personal data and device information in line with the choices you make here.
          See our <a href="/privacy/">Privacy Policy</a> and
          <a href="${googleBusinessDataUrl}" target="_blank" rel="noreferrer">Google Business Data Responsibility</a> page.
        </p>
        <div class="button-row cookie-modal__actions">
          <button class="button button--ghost" type="button" data-cookie-reject>Reject non-essential</button>
          <button class="button button--quiet" type="button" data-cookie-save>Save choices</button>
          <button class="button" type="button" data-cookie-accept>Accept all</button>
        </div>
      </section>
    </div>
  `;
}

export function renderPage(page, context) {
  const { site, urlForPath } = context;
  const canonical = urlForPath(page.slug);
  const pageTitle = `${page.title} | ${site.shortName}`;
  const pageBody = renderPageBody(page, context);
  const calculatorScript = page.pageType === "calculator" ? `<script type="module" src="/assets/calculator.js"></script>` : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:type" content="${page.pageType === "guide" ? "article" : "website"}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/assets/favicon-32.png" sizes="32x32" type="image/png" />
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/site.css" />
    ${renderConsentBootstrap()}
    ${jsonLd(page, context)}
  </head>
  <body data-page-type="${escapeHtml(page.pageType)}" data-page-slug="${escapeHtml(page.slug)}">
    ${renderHeader(site)}
    <main class="page-shell">
      ${breadcrumb(page)}
      ${pageBody}
    </main>
    ${renderFooter(site)}
    ${renderConsentUi()}
    <script type="module" src="/assets/site.js"></script>
    ${calculatorScript}
  </body>
</html>`;
}

export function renderRobots(site) {
  return `User-agent: *
Allow: /

Sitemap: ${site.origin}/sitemap-index.xml
`;
}

export function renderSitemapSection(pages, site) {
  const urls = pages
    .map((page) => {
      const href = page.slug ? `${site.origin}/${page.slug}/` : `${site.origin}/`;
      return `<url><loc>${href}</loc></url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function renderSitemapIndex(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <sitemap><loc>${url}</loc></sitemap>`).join("\n")}
</sitemapindex>`;
}
