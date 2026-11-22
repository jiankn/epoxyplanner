const searchCopy = {
  en: {
    label: "Search tools & guides", close: "Close search", loading: "Loading search…",
    empty: "No results. Try a project or tool name.", error: "Search couldn’t load.", retry: "Try again", results: "Results shown: {count}"
  },
  de: {
    label: "Rechner & Ratgeber suchen", placeholder: "Rechner und Ratgeber", close: "Suche schließen", loading: "Suche wird geladen…",
    empty: "Keine Treffer. Suche nach einem Projekt oder Rechner.", error: "Die Suche konnte nicht geladen werden.", retry: "Erneut versuchen", results: "Angezeigte Treffer: {count}"
  },
  fr: {
    label: "Rechercher un outil ou un guide", placeholder: "Outils et guides", close: "Fermer la recherche", loading: "Chargement de la recherche…",
    empty: "Aucun résultat. Essayez un nom de projet ou d’outil.", error: "Impossible de charger la recherche.", retry: "Réessayer", results: "Résultats affichés : {count}"
  },
  "pt-BR": {
    label: "Buscar ferramentas e guias", placeholder: "Ferramentas e guias", close: "Fechar busca", loading: "Carregando a busca…",
    empty: "Nenhum resultado. Tente o nome de um projeto ou ferramenta.", error: "Não foi possível carregar a busca.", retry: "Tentar novamente", results: "Resultados exibidos: {count}"
  },
  es: {
    label: "Buscar herramientas y guías", placeholder: "Herramientas y guías", close: "Cerrar búsqueda", loading: "Cargando la búsqueda…",
    empty: "Sin resultados. Prueba con el nombre de un proyecto o una herramienta.", error: "No se pudo cargar la búsqueda.", retry: "Volver a intentar", results: "Resultados mostrados: {count}"
  },
  it: {
    label: "Cerca strumenti e guide", placeholder: "Strumenti e guide", close: "Chiudi ricerca", loading: "Caricamento della ricerca…",
    empty: "Nessun risultato. Prova con il nome di un progetto o uno strumento.", error: "Impossibile caricare la ricerca.", retry: "Riprova", results: "Risultati mostrati: {count}"
  }
};

export function siteSearchCopy(locale) {
  return searchCopy[locale] ?? searchCopy.en;
}

function normalize(text) {
  return text.normalize("NFKD").toLowerCase()
    .replace(/\p{M}+/gu, "")
    .replaceAll("ß", "ss")
    .replaceAll("œ", "oe")
    .replace(/\b(m|cm|ft)\s*\^\s*([23])\b/g, "$1$2")
    .replace(/\b(\d+)(kg|g|lb|ml|mm|cm|ft|gal|oz|l)\b/g, "$1 $2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

// Edit distance with adjacent swaps, such as "tabel" → "table".
function editDistance(query, word) {
  let earlier;
  let previous = Array.from({ length: word.length + 1 }, (_, index) => index);
  for (let row = 1; row <= query.length; row++) {
    const current = [row];
    for (let col = 1; col <= word.length; col++) {
      const changed = Number(query[row - 1] !== word[col - 1]);
      current[col] = Math.min(previous[col] + 1, current[col - 1] + 1, previous[col - 1] + changed);
      if (row > 1 && col > 1 && query[row - 1] === word[col - 2] && query[row - 2] === word[col - 1]) {
        current[col] = Math.min(current[col], earlier[col - 2] + 1);
      }
    }
    earlier = previous;
    previous = current;
  }
  return previous[word.length];
}

function scoreWord(query, word) {
  if (query === word) return 60;
  if (word.startsWith(query)) return 40;

  const maxEdits = query.length >= 7 ? 2 : 1;
  if (query.length < 4 || word.length < 3 || Math.abs(query.length - word.length) > maxEdits || /\d/.test(query + word)) return 0;
  const edits = editDistance(query, word);
  return edits <= maxEdits ? 24 - 4 * edits : 0;
}

export function createSiteSearch(entries) {
  const vocabulary = new Set();
  const index = entries.map((entry) => {
    const title = normalize(entry.title);
    const keywords = entry.keywords.map(normalize);
    const words = new Map();
    for (const [text, weight] of [[normalize(entry.description), 0], [keywords.join(" "), 8], [title, 14]]) {
      for (const word of text.split(" ")) {
        if (!word) continue;
        vocabulary.add(word);
        words.set(word, weight);
      }
    }
    return { entry, title, keywords, words };
  });

  return (value, locale = "en", limit = 6) => {
    const query = normalize(value.slice(0, 120));
    if (query.length < 2) return [];

    const tokens = [...new Set(query.split(" "))];
    const matches = tokens.map((token) => {
      const scores = new Map();
      for (const word of vocabulary) {
        const score = scoreWord(token, word);
        if (score) scores.set(word, score);
      }
      return scores;
    });

    const results = [];
    for (const { entry, title, keywords, words } of index) {
      const scores = matches.map((tokenScores) => {
        let best = 0;
        for (const [word, tokenScore] of tokenScores) {
          const weight = words.get(word);
          if (weight !== undefined) best = Math.max(best, weight + tokenScore);
        }
        return best;
      });
      if (scores.includes(0)) continue;

      let score = scores.reduce((total, tokenScore) => total + tokenScore, 0);
      if (title === query) score += 90;
      else if (` ${title} `.includes(` ${query} `)) score += 45;
      if (keywords.includes(query)) score += 35;
      if (entry.locale === locale) score += 12;
      if (entry.type === "calculator" || entry.type === "converter") score += 3;
      results.push({ entry, score });
    }

    return results.sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length)
      .slice(0, limit).map(({ entry }) => entry);
  };
}

function initSiteSearch(root) {
  if (!root) return;
  const trigger = root.querySelector("[data-search-toggle]");
  const form = root.querySelector("form");
  const input = form.querySelector("input");
  const results = root.querySelector("[data-search-results]");
  const list = results.querySelector("ul");
  const message = results.querySelector("[data-search-message]");
  const retry = results.querySelector("[data-search-retry]");
  const announcer = root.querySelector("[role=status]");
  const locale = document.body.dataset.locale || "en";
  const copy = siteSearchCopy(locale);
  let matcher;
  let indexRequest;
  let searchRevision = 0;

  function loadIndex() {
    indexRequest ??= fetch(root.dataset.siteSearch)
      .then((response) => response.status === 404 ? fetch("/assets/search-index.json", { cache: "no-cache" }) : response)
      .then((response) => {
        if (!response.ok) throw new Error("Search index unavailable");
        return response.json();
      })
      .then((entries) => { matcher = createSiteSearch(entries); })
      .catch((error) => {
        indexRequest = undefined;
        throw error;
      });
    return indexRequest;
  }

  function showMessage(text, canRetry = false) {
    message.textContent = text;
    message.hidden = !text;
    retry.hidden = !canRetry;
    announcer.textContent = text;
  }

  function renderResult(entry) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const title = document.createElement("strong");
    const description = document.createElement("span");
    link.href = entry.path;
    link.lang = entry.locale;
    title.textContent = entry.title;
    description.className = "site-search__description";
    description.textContent = entry.description;
    link.append(title);
    if (entry.locale !== locale) {
      const language = document.createElement("span");
      language.className = "site-search__language";
      language.textContent = entry.locale.toUpperCase();
      link.append(language);
    }
    link.append(description);
    item.append(link);
    return item;
  }

  async function updateResults() {
    const revision = ++searchRevision;
    const query = input.value;
    results.hidden = normalize(query).length < 2;
    list.replaceChildren();
    list.scrollTop = 0;
    showMessage("");
    if (results.hidden) return;

    if (!matcher) {
      showMessage(copy.loading);
      try {
        await loadIndex();
      } catch {
        if (revision === searchRevision) showMessage(copy.error, true);
        return;
      }
      if (revision !== searchRevision) return;
      showMessage("");
    }

    const matches = matcher(query, locale);
    if (!matches.length) {
      showMessage(copy.empty);
      return;
    }
    list.append(...matches.map(renderResult));
    announcer.textContent = copy.results.replace("{count}", matches.length);
  }

  function closeSearch(restoreFocus = false) {
    if (!root.hasAttribute("data-open")) return;
    if (restoreFocus) {
      const target = trigger.getClientRects().length ? trigger : input;
      target.focus({ preventScroll: true });
    }
    root.removeAttribute("data-open");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", copy.label);
    results.hidden = true;
    announcer.textContent = "";
    searchRevision++;
  }

  function openSearch() {
    if (root.hasAttribute("data-open")) return;
    if (document.body.dataset.navOpen === "true") document.querySelector("[data-nav-toggle]")?.click();
    root.setAttribute("data-open", "");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", copy.close);
    loadIndex().catch(() => {});
    void updateResults();
  }

  trigger.addEventListener("click", () => {
    if (root.hasAttribute("data-open")) closeSearch();
    else {
      openSearch();
      input.focus();
    }
  });
  input.addEventListener("focus", openSearch);
  input.addEventListener("click", openSearch);
  input.addEventListener("input", (event) => {
    if (event.isComposing) return;
    if (root.hasAttribute("data-open")) void updateResults();
    else openSearch();
  });
  retry.addEventListener("click", () => {
    input.focus();
    void updateResults();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!root.hasAttribute("data-open")) openSearch();
    else if (!results.hidden) list.querySelector("a")?.click();
  });
  root.addEventListener("keydown", (event) => {
    if (event.isComposing) return;
    if (event.key === "Escape" && root.hasAttribute("data-open")) {
      event.preventDefault();
      closeSearch(true);
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    if (results.hidden) {
      if (event.target === input) openSearch();
      return;
    }
    const links = Array.from(list.querySelectorAll("a"));
    if (!links.length) return;
    const current = links.indexOf(event.target);
    if (current === -1 && event.target !== input) return;
    event.preventDefault();
    if (event.key === "ArrowDown") links[Math.min(current + 1, links.length - 1)].focus();
    else if (current > 0) links[current - 1].focus();
    else if (current === 0) input.focus();
    else links.at(-1).focus();
  });
  root.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !root.contains(event.relatedTarget)) closeSearch();
  });
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) closeSearch();
  });
  root.hidden = false;
}

if (typeof document !== "undefined") initSiteSearch(document.querySelector("[data-site-search]"));
