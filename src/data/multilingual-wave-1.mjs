const waveLastmod = "2026-10-03";

export const wave1LocaleOrder = ["de", "fr", "pt-BR", "es", "it"];

const locales = {
  de: {
    code: "de",
    prefix: "de",
    htmlLang: "de",
    name: "Deutsch",
    numberLocale: "de-DE",
    currency: "EUR",
    priceUnit: "liter",
    defaultUnit: "metric",
    brandTagline: "Harzmenge, Kosten und Beschichtung planen",
    nav: [
      { label: "Rechner", slug: "de" },
      { label: "Verbrauch", slug: "de/epoxidharz-verbrauch-pro-m2" },
      { label: "Kosten", slug: "de/epoxidharz-kosten-pro-m2" },
      { label: "Epoxidboden", slug: "de/epoxidboden-rechner" }
    ],
    footerNav: [
      { label: "Deutsch", slug: "de" },
      { label: "Verbrauch pro m²", slug: "de/epoxidharz-verbrauch-pro-m2" },
      { label: "Kosten", slug: "de/epoxidharz-kosten-pro-m2" },
      { label: "Epoxidboden", slug: "de/epoxidboden-rechner" },
      { label: "Methodik", slug: "methodology" }
    ],
    ui: {
      openPage: "Seite öffnen",
      home: "Start",
      site: "Website",
      calculators: "Rechner",
      guides: "Ratgeber",
      menu: "Menü",
      faqEyebrow: "FAQ",
      faqHeading: "Fragen vor dem Kauf von Epoxidharz",
      relatedEyebrow: "Verwandte Seiten",
      relatedHeading: "Weiter im gleichen Suchthema",
      whyTitle: "Was der Rechner berücksichtigt",
      howToTitle: "So misst du die Eingaben",
      mistakesTitle: "Häufige Fehler, die Material kosten",
      checklistTitle: "Checkliste vor dem Kauf",
      calculatorEyebrow: "Rechner",
      calculatorHeading: "Projekt in einem Durchgang planen",
      fieldNote:
        "Die Werte aktualisieren sich während der Eingabe. Nutze die Aufschlüsselung, um Rohvolumen, Reserve und Bestellmenge zu vergleichen.",
      resultEyebrow: "Empfohlene Bestellmenge",
      resultFallback: "Gib Maße ein, um eine bestellbare Schätzung zu erhalten.",
      rawVolume: "Rohvolumen",
      split: "Teil A / Teil B",
      cost: "Geschätzte Kosten",
      layers: "Schichtplanung",
      whyChangedEyebrow: "Warum sich die Menge ändert",
      whyChangedHeading: "Was die Schätzung beeinflusst",
      breakdownFallback: "Gib Werte ein, um Rohvolumen, Reserve und Empfehlung zu sehen.",
      compareEyebrow: "Szenarien vergleichen",
      standard: "Standard",
      conservative: "Konservativ",
      productFit: "Produkttyp",
      nextStepEyebrow: "Nächster Schritt",
      nextStepHeading: "Ergebnis mit dem passenden Harztyp abgleichen",
      nextStepCopy:
        "Nutze die Schätzung zuerst für die Harzklasse. Prüfe danach Datenblatt, maximale Schichtdicke und Mischverhältnis.",
      compareResinTypes: "Harztypen vergleichen",
      seeMethodology: "Methodik ansehen",
      currentRecommendation: "Aktuelle Empfehlung",
      estimatedCost: "Kosten",
      viewDetails: "Details ansehen",
      languageEyebrow: "Sprachversionen",
      formReplacements: {
        "Unit system": "Einheiten",
        Imperial: "US / Zoll",
        Metric: "Metrisch",
        Shape: "Form",
        Rectangle: "Rechteck",
        Round: "Rund",
        "Waste buffer (%)": "Reserve (%)",
        Length: "Länge",
        Width: "Breite",
        Depth: "Tiefe",
        Diameter: "Durchmesser",
        Thickness: "Schichtdicke",
        "Price / gallon": "Preis / L",
        Coats: "Schichten",
        "Coverage / gallon (sq ft)": "Reichweite pro L (m²)",
        "Quantity unit": "Mengeneinheit",
        Gallons: "Gallonen",
        Liters: "Liter",
        "Quantity needed": "Benötigte Menge"
      }
    },
    generalFaq: [
      {
        q: "Wie genau ist ein Epoxidharz-Rechner?",
        a: "Er ist für Einkauf und Planung gedacht. Entscheidend sind Innenmaße, passende Reserve und die Frage, ob du eine Beschichtung, einen Guss oder einen Boden planst."
      },
      {
        q: "Warum ist die empfohlene Menge höher als das Rohvolumen?",
        a: "Becherreste, Kanten, Poren, kleine Undichtigkeiten und Messfehler verbrauchen Material. Das Rohvolumen ist nur der geometrische Mindestwert."
      },
      {
        q: "Muss ich trotzdem das Datenblatt prüfen?",
        a: "Ja. Maximale Schichtdicke, Topfzeit, Mischverhältnis und Verarbeitungstemperatur müssen vom konkreten Produkt kommen."
      }
    ],
    checklist: [
      "Innenmaße oder echte Beschichtungsfläche messen.",
      "Schichtdicke und Harztyp vor dem Kauf prüfen.",
      "Reserve für Becher, Kanten, Poren und Verluste einplanen.",
      "Bei Böden die Herstellerangabe zur Reichweite verwenden.",
      "Mischverhältnis und maximale Schichtdicke im Datenblatt prüfen."
    ],
    hub: {
      title: "Epoxidharz Rechner: Menge in Litern berechnen",
      h1: "Epoxidharz Rechner für Menge, Volumen und Kosten",
      description:
        "Kostenloser Epoxidharz-Rechner: Maße eingeben und sehen, wie viele Liter Harz du inklusive Reserve kaufen musst. Faustregel: 1 Liter pro m² und mm Schichtdicke.",
      intro:
        "Gib Länge, Breite und Tiefe ein: Der Rechner zeigt Rohvolumen, Kaufmenge mit Reserve, die Aufteilung in Harz und Härter und die ungefähren Kosten. Für Verbrauch pro m², Kosten pro m² und Epoxidböden gibt es eigene Rechner weiter unten."
    }
  },
  fr: {
    code: "fr",
    prefix: "fr",
    htmlLang: "fr",
    name: "Français",
    numberLocale: "fr-FR",
    currency: "EUR",
    priceUnit: "liter",
    defaultUnit: "metric",
    brandTagline: "Calculer la résine, le volume et le prix",
    nav: [
      { label: "Calculateur", slug: "fr" },
      { label: "m²", slug: "fr/quantite-resine-epoxy-par-m2" },
      { label: "Prix", slug: "fr/prix-resine-epoxy-m2" },
      { label: "Sol époxy", slug: "fr/calculateur-sol-epoxy" }
    ],
    footerNav: [
      { label: "Français", slug: "fr" },
      { label: "Quantité par m²", slug: "fr/quantite-resine-epoxy-par-m2" },
      { label: "Prix au m²", slug: "fr/prix-resine-epoxy-m2" },
      { label: "Sol époxy", slug: "fr/calculateur-sol-epoxy" },
      { label: "Méthode", slug: "methodology" }
    ],
    ui: {
      openPage: "Ouvrir la page",
      home: "Accueil",
      site: "Site",
      calculators: "Calculateurs",
      guides: "Guides",
      menu: "Menu",
      faqEyebrow: "FAQ",
      faqHeading: "Questions avant d’acheter la résine",
      relatedEyebrow: "Pages liées",
      relatedHeading: "Continuer dans la même intention",
      whyTitle: "Ce que le calculateur prend en compte",
      howToTitle: "Comment mesurer les valeurs",
      mistakesTitle: "Erreurs fréquentes qui faussent la quantité",
      checklistTitle: "Vérifications avant achat",
      calculatorEyebrow: "Calculateur",
      calculatorHeading: "Planifier le projet en une seule estimation",
      fieldNote:
        "Les résultats se mettent à jour pendant la saisie. Comparez le volume brut, la marge et la quantité à acheter.",
      resultEyebrow: "Quantité recommandée",
      resultFallback: "Saisissez les mesures pour obtenir une estimation exploitable.",
      rawVolume: "Volume brut",
      split: "Partie A / Partie B",
      cost: "Coût estimé",
      layers: "Couches",
      whyChangedEyebrow: "Pourquoi le résultat change",
      whyChangedHeading: "Ce qui influence la quantité",
      breakdownFallback: "Saisissez les valeurs pour voir volume brut, marge et recommandation.",
      compareEyebrow: "Comparer les scénarios",
      standard: "Standard",
      conservative: "Prudent",
      productFit: "Type de résine",
      nextStepEyebrow: "Étape suivante",
      nextStepHeading: "Comparer le résultat au bon type de résine",
      nextStepCopy:
        "Utilisez l’estimation pour choisir la famille de résine, puis vérifiez la fiche technique, l’épaisseur maximale et le ratio de mélange.",
      compareResinTypes: "Comparer les résines",
      seeMethodology: "Voir la méthode",
      currentRecommendation: "Recommandation actuelle",
      estimatedCost: "Coût",
      viewDetails: "Voir le détail",
      languageEyebrow: "Versions linguistiques",
      formReplacements: {
        "Unit system": "Unités",
        Imperial: "Impérial",
        Metric: "Métrique",
        Shape: "Forme",
        Rectangle: "Rectangle",
        Round: "Rond",
        "Waste buffer (%)": "Marge (%)",
        Length: "Longueur",
        Width: "Largeur",
        Depth: "Profondeur",
        Diameter: "Diamètre",
        Thickness: "Épaisseur",
        "Price / gallon": "Prix / L",
        Coats: "Couches",
        "Coverage / gallon (sq ft)": "Rendement par L (m²)",
        "Quantity unit": "Unité",
        Gallons: "Gallons",
        Liters: "Litres",
        "Quantity needed": "Quantité nécessaire"
      }
    },
    generalFaq: [
      {
        q: "Ce calculateur remplace-t-il la fiche technique ?",
        a: "Non. Il sert à estimer la quantité et le budget. La profondeur maximale, le temps de travail et le ratio doivent venir du produit choisi."
      },
      {
        q: "Pourquoi ajouter une marge ?",
        a: "La résine se perd dans les gobelets, les bords, les pores du support et les petites erreurs de mesure. Sans marge, l’achat est souvent trop court."
      },
      {
        q: "Quelle unité utiliser ?",
        a: "Pour les pages françaises, partez des centimètres, mètres carrés, litres et euros. Convertissez seulement si un fournisseur affiche une autre unité."
      }
    ],
    checklist: [
      "Mesurer les dimensions intérieures ou la surface réelle.",
      "Définir l’épaisseur finale avant de calculer.",
      "Ajouter une marge pour pertes, bords et absorption.",
      "Utiliser le rendement du fabricant pour les sols.",
      "Vérifier ratio, profondeur maximale et conditions de cure."
    ],
    hub: {
      title: "Calculateur de résine époxy : quelle quantité acheter en litres",
      h1: "Calculateur de résine époxy : quantité, volume et prix",
      description:
        "Calculateur gratuit : entrez les dimensions et obtenez les litres de résine époxy à acheter, marge comprise. Repère rapide : 1 litre par m² et par mm d’épaisseur.",
      intro:
        "Saisissez longueur, largeur et profondeur : le calculateur affiche le volume brut, la quantité à acheter avec marge, la répartition résine/durcisseur et le coût estimé. Pour la quantité au m², le prix au m² ou un sol époxy, utilisez les calculateurs dédiés plus bas."
    }
  },
  "pt-BR": {
    code: "pt-BR",
    prefix: "pt-br",
    htmlLang: "pt-BR",
    name: "Português do Brasil",
    numberLocale: "pt-BR",
    currency: "BRL",
    priceUnit: "liter",
    defaultUnit: "metric",
    brandTagline: "Calcule resina, piso epóxi e custo",
    nav: [
      { label: "Calculadora", slug: "pt-br" },
      { label: "Quantidade", slug: "pt-br/quanta-resina-epoxi-preciso" },
      { label: "Consumo", slug: "pt-br/consumo-resina-epoxi-por-m2" },
      { label: "Preço", slug: "pt-br/preco-piso-epoxi-m2" },
      { label: "Piso", slug: "pt-br/calculadora-piso-epoxi" }
    ],
    footerNav: [
      { label: "Português", slug: "pt-br" },
      { label: "Consumo por m²", slug: "pt-br/consumo-resina-epoxi-por-m2" },
      { label: "Preço m²", slug: "pt-br/preco-piso-epoxi-m2" },
      { label: "Piso epóxi", slug: "pt-br/calculadora-piso-epoxi" },
      { label: "Metodologia", slug: "methodology" }
    ],
    ui: {
      openPage: "Abrir página",
      home: "Início",
      site: "Site",
      calculators: "Calculadoras",
      guides: "Guias",
      menu: "Menu",
      faqEyebrow: "FAQ",
      faqHeading: "Perguntas antes de comprar resina",
      relatedEyebrow: "Páginas relacionadas",
      relatedHeading: "Continue no mesmo tipo de busca",
      whyTitle: "O que a calculadora considera",
      howToTitle: "Como medir os dados",
      mistakesTitle: "Erros comuns que fazem faltar material",
      checklistTitle: "Checklist antes de comprar",
      calculatorEyebrow: "Calculadora",
      calculatorHeading: "Planeje o projeto em uma estimativa",
      fieldNote:
        "Os resultados mudam conforme você digita. Compare volume bruto, sobra de segurança e quantidade para comprar.",
      resultEyebrow: "Quantidade recomendada",
      resultFallback: "Digite as medidas para gerar uma estimativa de compra.",
      rawVolume: "Volume bruto",
      split: "Parte A / Parte B",
      cost: "Custo estimado",
      layers: "Camadas",
      whyChangedEyebrow: "Por que a estimativa muda",
      whyChangedHeading: "O que mexe no número",
      breakdownFallback: "Digite os valores para ver volume bruto, sobra e recomendação.",
      compareEyebrow: "Comparar cenários",
      standard: "Padrão",
      conservative: "Conservador",
      productFit: "Tipo de produto",
      nextStepEyebrow: "Próximo passo",
      nextStepHeading: "Compare o resultado com o tipo certo de resina",
      nextStepCopy:
        "Use a estimativa para escolher a classe de resina. Depois confira ficha técnica, espessura máxima e proporção de mistura.",
      compareResinTypes: "Comparar tipos de resina",
      seeMethodology: "Ver metodologia",
      currentRecommendation: "Recomendação atual",
      estimatedCost: "Custo",
      viewDetails: "Ver detalhes",
      languageEyebrow: "Versões por idioma",
      formReplacements: {
        "Unit system": "Unidades",
        Imperial: "Imperial",
        Metric: "Métrico",
        Shape: "Formato",
        Rectangle: "Retângulo",
        Round: "Redondo",
        "Waste buffer (%)": "Sobra (%)",
        Length: "Comprimento",
        Width: "Largura",
        Depth: "Profundidade",
        Diameter: "Diâmetro",
        Thickness: "Espessura",
        "Price / gallon": "Preço / L",
        Coats: "Demãos",
        "Coverage / gallon (sq ft)": "Rendimento por L (m²)",
        "Quantity unit": "Unidade",
        Gallons: "Galões",
        Liters: "Litros",
        "Quantity needed": "Quantidade necessária"
      }
    },
    generalFaq: [
      {
        q: "A calculadora serve para piso epóxi e peças de resina?",
        a: "Serve como ponto de partida, mas a página certa muda. Piso usa área e rendimento; moldes e peças usam volume."
      },
      {
        q: "Por que comprar mais do que o volume exato?",
        a: "Sempre há perda em copos, bordas, vazamentos pequenos, absorção e nivelamento. A sobra reduz o risco de faltar no meio do trabalho."
      },
      {
        q: "Posso usar qualquer resina epóxi?",
        a: "Não. Verifique se o produto é para piso, revestimento fino, moldes ou derramamento profundo antes de comprar."
      }
    ],
    checklist: [
      "Medir a área real ou o volume interno.",
      "Usar centímetros, metros quadrados e litros como base.",
      "Adicionar sobra para perdas e absorção.",
      "Para piso, usar o rendimento informado pelo fabricante.",
      "Conferir proporção, cura e espessura máxima do produto."
    ],
    hub: {
      title: "Calculadora de resina epóxi: quantos litros comprar com sobra",
      h1: "Calculadora de resina epóxi: quantidade, volume e custo",
      description:
        "Informe as medidas da peça, mesa ou superfície e veja na hora quantos litros de resina epóxi comprar, já com sobra, a divisão A/B do kit e o custo em reais.",
      intro:
        "Digite comprimento, largura e profundidade: a calculadora mostra o volume bruto, a quantidade para comprar com sobra, a divisão parte A/parte B e o custo em reais. Para consumo por m², preço do piso ou piso epóxi, use as calculadoras específicas abaixo."
    }
  },
  es: {
    code: "es",
    prefix: "es",
    htmlLang: "es",
    name: "Español",
    numberLocale: "es-ES",
    currency: "EUR",
    priceUnit: "liter",
    defaultUnit: "metric",
    brandTagline: "Calcula resina, suelo epoxi y coste",
    nav: [
      { label: "Calculadora", slug: "es" },
      { label: "m²", slug: "es/consumo-resina-epoxi-por-m2" },
      { label: "Precio", slug: "es/precio-suelo-epoxi-m2" },
      { label: "Suelo", slug: "es/calculadora-suelo-epoxi" }
    ],
    footerNav: [
      { label: "Español", slug: "es" },
      { label: "Consumo por m²", slug: "es/consumo-resina-epoxi-por-m2" },
      { label: "Precio m²", slug: "es/precio-suelo-epoxi-m2" },
      { label: "Suelo epoxi", slug: "es/calculadora-suelo-epoxi" },
      { label: "Método", slug: "methodology" }
    ],
    ui: {
      openPage: "Abrir página",
      home: "Inicio",
      site: "Sitio",
      calculators: "Calculadoras",
      guides: "Guías",
      menu: "Menú",
      faqEyebrow: "FAQ",
      faqHeading: "Preguntas antes de comprar resina",
      relatedEyebrow: "Páginas relacionadas",
      relatedHeading: "Seguir con la misma intención",
      whyTitle: "Qué tiene en cuenta la calculadora",
      howToTitle: "Cómo medir los datos",
      mistakesTitle: "Errores comunes que hacen faltar material",
      checklistTitle: "Lista antes de comprar",
      calculatorEyebrow: "Calculadora",
      calculatorHeading: "Planifica el proyecto en una estimación",
      fieldNote:
        "Los resultados cambian mientras escribes. Compara volumen bruto, margen y cantidad de compra.",
      resultEyebrow: "Cantidad recomendada",
      resultFallback: "Introduce las medidas para generar una estimación de compra.",
      rawVolume: "Volumen bruto",
      split: "Parte A / Parte B",
      cost: "Coste estimado",
      layers: "Capas",
      whyChangedEyebrow: "Por qué cambia la estimación",
      whyChangedHeading: "Qué mueve el número",
      breakdownFallback: "Introduce valores para ver volumen bruto, margen y recomendación.",
      compareEyebrow: "Comparar escenarios",
      standard: "Estándar",
      conservative: "Conservador",
      productFit: "Tipo de producto",
      nextStepEyebrow: "Siguiente paso",
      nextStepHeading: "Compara el resultado con el tipo correcto de resina",
      nextStepCopy:
        "Usa la estimación para elegir la clase de resina. Después revisa ficha técnica, grosor máximo y proporción de mezcla.",
      compareResinTypes: "Comparar tipos de resina",
      seeMethodology: "Ver método",
      currentRecommendation: "Recomendación actual",
      estimatedCost: "Coste",
      viewDetails: "Ver detalles",
      languageEyebrow: "Versiones por idioma",
      formReplacements: {
        "Unit system": "Unidades",
        Imperial: "Imperial",
        Metric: "Métrico",
        Shape: "Forma",
        Rectangle: "Rectángulo",
        Round: "Redondo",
        "Waste buffer (%)": "Margen (%)",
        Length: "Largo",
        Width: "Ancho",
        Depth: "Profundidad",
        Diameter: "Diámetro",
        Thickness: "Espesor",
        "Price / gallon": "Precio / L",
        Coats: "Capas",
        "Coverage / gallon (sq ft)": "Rendimiento por L (m²)",
        "Quantity unit": "Unidad",
        Gallons: "Galones",
        Liters: "Litros",
        "Quantity needed": "Cantidad necesaria"
      }
    },
    generalFaq: [
      {
        q: "¿Sirve para resina epoxi y resina epóxica?",
        a: "Sí. La página usa resina epoxi como término principal y también cubre la intención de resina epóxica en el contenido."
      },
      {
        q: "¿Por qué añadir margen?",
        a: "Porque siempre hay pérdida en vasos, bordes, absorción, goteo y pequeñas diferencias de medición."
      },
      {
        q: "¿Puedo usar la misma resina para suelo y moldes?",
        a: "No siempre. Suelo, recubrimiento fino, moldes y vertidos profundos usan productos y límites diferentes."
      }
    ],
    checklist: [
      "Medir dimensiones interiores o superficie real.",
      "Usar centímetros, metros cuadrados y litros como base.",
      "Añadir margen por pérdidas y absorción.",
      "Para suelos, usar el rendimiento del fabricante.",
      "Comprobar mezcla, curado y grosor máximo del producto."
    ],
    hub: {
      title: "Calculadora de resina epoxi: cuántos litros necesitas",
      h1: "Calculadora de resina epoxi: cantidad, volumen y coste",
      description:
        "Calculadora gratis: introduce las medidas y obtén los litros de resina epoxi que debes comprar, con margen incluido. Regla rápida: 1 litro por m² y por mm de espesor.",
      intro:
        "Introduce largo, ancho y profundidad: la calculadora muestra el volumen bruto, la cantidad a comprar con margen, la proporción resina/endurecedor y el coste estimado. Para consumo por m², precio del suelo o suelo epoxi, usa las calculadoras específicas de abajo."
    }
  },
  it: {
    code: "it",
    prefix: "it",
    htmlLang: "it",
    name: "Italiano",
    numberLocale: "it-IT",
    currency: "EUR",
    priceUnit: "liter",
    defaultUnit: "metric",
    brandTagline: "Calcola resina, pavimento e costo",
    nav: [
      { label: "Calcolatore", slug: "it" },
      { label: "m²", slug: "it/consumo-resina-epossidica-m2" },
      { label: "Prezzo", slug: "it/prezzo-pavimento-resina-epossidica-m2" },
      { label: "Pavimento", slug: "it/calcolatore-pavimento-epossidico" }
    ],
    footerNav: [
      { label: "Italiano", slug: "it" },
      { label: "Consumo al m²", slug: "it/consumo-resina-epossidica-m2" },
      { label: "Prezzo m²", slug: "it/prezzo-pavimento-resina-epossidica-m2" },
      { label: "Pavimento", slug: "it/calcolatore-pavimento-epossidico" },
      { label: "Metodo", slug: "methodology" }
    ],
    ui: {
      openPage: "Apri pagina",
      home: "Home",
      site: "Sito",
      calculators: "Calcolatori",
      guides: "Guide",
      menu: "Menu",
      faqEyebrow: "FAQ",
      faqHeading: "Domande prima di comprare resina",
      relatedEyebrow: "Pagine correlate",
      relatedHeading: "Continua nello stesso intento di ricerca",
      whyTitle: "Cosa considera il calcolatore",
      howToTitle: "Come misurare i dati",
      mistakesTitle: "Errori comuni che fanno mancare materiale",
      checklistTitle: "Controlli prima dell’acquisto",
      calculatorEyebrow: "Calcolatore",
      calculatorHeading: "Pianifica il progetto in una stima",
      fieldNote:
        "I risultati si aggiornano mentre inserisci i dati. Confronta volume grezzo, margine e quantità da acquistare.",
      resultEyebrow: "Quantità consigliata",
      resultFallback: "Inserisci le misure per ottenere una stima acquistabile.",
      rawVolume: "Volume grezzo",
      split: "Parte A / Parte B",
      cost: "Costo stimato",
      layers: "Strati",
      whyChangedEyebrow: "Perché cambia la stima",
      whyChangedHeading: "Cosa influenza il numero",
      breakdownFallback: "Inserisci i valori per vedere volume grezzo, margine e raccomandazione.",
      compareEyebrow: "Confronta scenari",
      standard: "Standard",
      conservative: "Prudente",
      productFit: "Tipo di prodotto",
      nextStepEyebrow: "Passo successivo",
      nextStepHeading: "Abbina il risultato al tipo corretto di resina",
      nextStepCopy:
        "Usa la stima per scegliere la classe di resina. Poi verifica scheda tecnica, spessore massimo e rapporto di miscelazione.",
      compareResinTypes: "Confronta resine",
      seeMethodology: "Vedi metodo",
      currentRecommendation: "Raccomandazione attuale",
      estimatedCost: "Costo",
      viewDetails: "Vedi dettagli",
      languageEyebrow: "Versioni lingua",
      formReplacements: {
        "Unit system": "Unità",
        Imperial: "Imperiale",
        Metric: "Metrico",
        Shape: "Forma",
        Rectangle: "Rettangolo",
        Round: "Tondo",
        "Waste buffer (%)": "Margine (%)",
        Length: "Lunghezza",
        Width: "Larghezza",
        Depth: "Profondità",
        Diameter: "Diametro",
        Thickness: "Spessore",
        "Price / gallon": "Prezzo / L",
        Coats: "Strati",
        "Coverage / gallon (sq ft)": "Resa per L (m²)",
        "Quantity unit": "Unità",
        Gallons: "Galloni",
        Liters: "Litri",
        "Quantity needed": "Quantità necessaria"
      }
    },
    generalFaq: [
      {
        q: "Il calcolatore vale per tutti i tipi di resina?",
        a: "Il volume è un punto di partenza, ma pavimento, rivestimento, stampo e colata profonda richiedono prodotti diversi."
      },
      {
        q: "Perché la quantità consigliata è più alta?",
        a: "Perché ci sono perdite in bicchieri, bordi, assorbimento, colature e piccole imprecisioni di misura."
      },
      {
        q: "Devo controllare la scheda tecnica?",
        a: "Sì. Rapporto, tempo di lavorazione, temperatura e spessore massimo dipendono dal prodotto scelto."
      }
    ],
    checklist: [
      "Misurare dimensioni interne o superficie reale.",
      "Usare centimetri, metri quadrati e litri come base.",
      "Aggiungere margine per perdite e assorbimento.",
      "Per pavimenti, usare la resa dichiarata dal produttore.",
      "Verificare rapporto, cura e spessore massimo del prodotto."
    ],
    hub: {
      title: "Calcolatore resina epossidica: quanti litri servono",
      h1: "Calcolatore resina epossidica: quantità, volume e costo",
      description:
        "Calcolatore gratuito: inserisci le misure e scopri quanti litri di resina epossidica comprare, margine incluso. Regola rapida: 1 litro per m² e per mm di spessore.",
      intro:
        "Inserisci lunghezza, larghezza e profondità: il calcolatore mostra il volume grezzo, la quantità da comprare con margine, la divisione resina/indurente e il costo stimato. Per consumo al m², prezzo al m² o pavimento epossidico usa i calcolatori dedicati qui sotto."
    }
  }
};

const intentGroups = [
  {
    key: "hub",
    enSlug: "epoxy-calculator",
    byLocale: {
      de: "de",
      fr: "fr",
      "pt-BR": "pt-br",
      es: "es",
      it: "it"
    }
  },
  {
    key: "core",
    enSlug: null,
    byLocale: {
      de: "de/epoxidharz-rechner",
      fr: "fr/calculateur-resine-epoxy",
      "pt-BR": "pt-br/calculadora-resina-epoxi",
      es: "es/calculadora-resina-epoxi",
      it: "it/calcolatore-resina-epossidica"
    }
  },
  {
    key: "volume",
    enSlug: null,
    byLocale: {
      de: "de/epoxidharz-volumen-rechner",
      fr: "fr/calculateur-volume-resine-epoxy",
      "pt-BR": "pt-br/calculadora-volume-resina-epoxi",
      es: "es/calculadora-volumen-resina-epoxi",
      it: "it/calcolatore-volume-resina-epossidica"
    }
  },
  {
    key: "amount",
    enSlug: null,
    byLocale: {
      de: "de/wie-viel-epoxidharz-brauche-ich",
      fr: "fr/combien-de-resine-epoxy-faut-il",
      "pt-BR": "pt-br/quanta-resina-epoxi-preciso",
      es: "es/cuanta-resina-epoxi-necesito",
      it: "it/quanta-resina-epossidica-serve"
    }
  },
  {
    key: "coverage",
    enSlug: "epoxy-coverage-calculator",
    byLocale: {
      de: "de/epoxidharz-verbrauch-pro-m2",
      fr: "fr/quantite-resine-epoxy-par-m2",
      "pt-BR": "pt-br/consumo-resina-epoxi-por-m2",
      es: "es/consumo-resina-epoxi-por-m2",
      it: "it/consumo-resina-epossidica-m2"
    }
  },
  {
    key: "costM2",
    enSlug: "epoxy-cost-per-square-foot",
    byLocale: {
      de: "de/epoxidharz-kosten-pro-m2",
      fr: "fr/prix-resine-epoxy-m2",
      "pt-BR": "pt-br/preco-piso-epoxi-m2",
      es: "es/precio-suelo-epoxi-m2",
      it: "it/prezzo-pavimento-resina-epossidica-m2"
    }
  },
  {
    key: "floor",
    enSlug: "epoxy-floor-coverage-calculator",
    byLocale: {
      de: "de/epoxidboden-rechner",
      fr: "fr/calculateur-sol-epoxy",
      "pt-BR": "pt-br/calculadora-piso-epoxi",
      es: "es/calculadora-suelo-epoxi",
      it: "it/calcolatore-pavimento-epossidico"
    }
  },
  {
    key: "garageCost",
    enSlug: null,
    byLocale: {
      de: "de/garagenboden-epoxidharz-kosten",
      fr: "fr/prix-sol-garage-epoxy",
      "pt-BR": "pt-br/piso-epoxi-garagem-preco",
      es: "es/precio-epoxi-garaje",
      it: "it/costo-pavimento-epossidico-garage"
    }
  },
  {
    key: "garageAmount",
    enSlug: null,
    byLocale: {
      de: "de/wie-viel-epoxidharz-fuer-garage",
      fr: "fr/combien-de-resine-epoxy-pour-un-garage",
      "pt-BR": "pt-br/quanta-resina-epoxi-para-garagem",
      es: "es/cuanta-resina-epoxi-para-garaje",
      it: "it/quanta-resina-epossidica-per-garage"
    }
  }
];

const localizedSpecs = {
  de: {
    core: ["Epoxidharz Rechner", "Epoxidharz-Rechner für Menge und Kosten", "epoxidharz rechner", "allgemeine Harzmenge"],
    volume: ["Epoxidharz Volumen Rechner", "Epoxidharz-Volumen in Litern berechnen", "epoxidharz volumen rechner", "Volumen für Formen, Kanten und einfache Güsse"],
    amount: ["Wie viel Epoxidharz brauche ich?", "Epoxidharz-Menge vor dem Kauf berechnen", "wie viel epoxidharz brauche ich", "Bestellmenge mit Reserve"],
    coverage: ["Epoxidharz Verbrauch pro m²", "Epoxidharz-Verbrauch pro m² berechnen", "epoxidharz verbrauch pro m2", "Beschichtungen nach Fläche und Schichtdicke"],
    costM2: ["Epoxidharz Kosten pro m²", "Epoxidharz-Kosten pro m² planen", "epoxidharz kosten pro m2", "Budget nach Fläche, Literpreis und Schichtdicke"],
    floor: ["Epoxidboden Rechner", "Epoxidboden nach m², Schichten und Reichweite planen", "epoxidboden rechner", "Bodenbeschichtung mit Herstellerreichweite"],
    garageCost: ["Garagenboden Epoxidharz Kosten", "Kosten für Garagenboden mit Epoxidharz berechnen", "garagenboden epoxidharz kosten", "Garagenboden-Budget"],
    garageAmount: ["Wie viel Epoxidharz für Garage?", "Harzmenge für einen Garagenboden berechnen", "wie viel epoxidharz fuer garage", "Materialmenge für Garagenboden"]
  },
  fr: {
    core: ["Calculateur de résine époxy", "Calculateur de résine époxy pour quantité et prix", "calculateur de résine époxy", "quantité générale de résine"],
    volume: ["Calculateur de volume de résine époxy", "Calculer le volume de résine époxy en litres", "calculateur volume résine époxy", "volume pour moules, cavités et coulées simples"],
    amount: ["Combien de résine époxy faut-il ?", "Calculer la quantité de résine époxy avant achat", "combien de résine époxy faut-il", "quantité à acheter avec marge"],
    coverage: ["Quantité de résine époxy par m²", "Calculer la résine époxy nécessaire par m²", "quantité résine époxy par m2", "surface, épaisseur et marge"],
    costM2: ["Prix résine époxy au m²", "Estimer le prix de résine époxy au m²", "prix résine époxy m2", "budget selon surface, litres et épaisseur"],
    floor: ["Calculateur sol époxy", "Calculer un sol époxy par surface et couches", "calculateur sol époxy", "revêtement de sol avec rendement fabricant"],
    garageCost: ["Prix sol garage époxy", "Estimer le prix d’un sol de garage en époxy", "prix sol garage epoxy", "budget garage"],
    garageAmount: ["Combien de résine époxy pour un garage ?", "Calculer la résine pour un sol de garage", "combien de résine époxy pour un garage", "quantité pour garage"]
  },
  "pt-BR": {
    core: ["Calculadora de resina epóxi", "Calculadora de resina epóxi para quantidade e custo", "calculadora de resina epóxi", "quantidade geral de resina"],
    volume: ["Calculadora de volume de resina epóxi", "Calcule o volume de resina epóxi em litros", "calculadora volume resina epóxi", "volume para moldes, cavidades e peças simples"],
    amount: ["Quanta resina epóxi preciso?", "Calcule quanta resina epóxi comprar", "quanta resina epóxi preciso", "quantidade de compra com sobra"],
    coverage: ["Consumo de resina epóxi por m²", "Calcule o consumo de resina epóxi por m²", "consumo resina epóxi por m2", "área, espessura e sobra"],
    costM2: ["Preço do piso epóxi por m²", "Estime preço de piso epóxi por m²", "preço piso epóxi m2", "custo por área e rendimento"],
    floor: ["Calculadora de piso epóxi", "Calcule piso epóxi por área, demãos e rendimento", "calculadora piso epóxi", "piso com rendimento do fabricante"],
    garageCost: ["Piso epóxi garagem preço", "Calcule preço de piso epóxi para garagem", "piso epóxi garagem preço", "orçamento de garagem"],
    garageAmount: ["Quanta resina epóxi para garagem?", "Calcule resina epóxi para piso de garagem", "quanta resina epóxi para garagem", "quantidade para garagem"]
  },
  es: {
    core: ["Calculadora de resina epoxi", "Calculadora de resina epoxi para cantidad y coste", "calculadora de resina epoxi", "cantidad general de resina"],
    volume: ["Calculadora de volumen de resina epoxi", "Calcula el volumen de resina epoxi en litros", "calculadora volumen resina epoxi", "volumen para moldes, huecos y piezas simples"],
    amount: ["Cuánta resina epoxi necesito", "Calcula cuánta resina epoxi comprar", "cuánta resina epoxi necesito", "cantidad de compra con margen"],
    coverage: ["Consumo de resina epoxi por m²", "Calcula consumo de resina epoxi por m²", "consumo resina epoxi por m2", "superficie, espesor y margen"],
    costM2: ["Precio suelo epoxi por m²", "Estima precio de suelo epoxi por m²", "precio suelo epoxi m2", "coste por superficie y rendimiento"],
    floor: ["Calculadora de suelo epoxi", "Calcula suelo epoxi por superficie, capas y rendimiento", "calculadora suelo epoxi", "suelo con rendimiento del fabricante"],
    garageCost: ["Precio epoxi garaje", "Calcula el coste de epoxi para garaje", "precio epoxi garaje", "presupuesto de garaje"],
    garageAmount: ["Cuánta resina epoxi para garaje", "Calcula resina epoxi para suelo de garaje", "cuánta resina epoxi para garaje", "cantidad para garaje"]
  },
  it: {
    core: ["Calcolatore resina epossidica", "Calcolatore resina epossidica per quantità e costo", "calcolatore resina epossidica", "quantità generale di resina"],
    volume: ["Calcolatore volume resina epossidica", "Calcola il volume di resina epossidica in litri", "calcolatore volume resina epossidica", "volume per stampi, cavità e colate semplici"],
    amount: ["Quanta resina epossidica serve", "Calcola quanta resina epossidica comprare", "quanta resina epossidica serve", "quantità da acquistare con margine"],
    coverage: ["Consumo resina epossidica al m²", "Calcola il consumo di resina epossidica al m²", "consumo resina epossidica m2", "superficie, spessore e margine"],
    costM2: ["Prezzo pavimento resina epossidica m²", "Stima il prezzo del pavimento in resina al m²", "prezzo pavimento resina epossidica m2", "costo per superficie e resa"],
    floor: ["Calcolatore pavimento epossidico", "Calcola pavimento epossidico per superficie, strati e resa", "calcolatore pavimento epossidico", "pavimento con resa del produttore"],
    garageCost: ["Costo pavimento epossidico garage", "Calcola il costo del pavimento epossidico in garage", "costo pavimento epossidico garage", "budget garage"],
    garageAmount: ["Quanta resina epossidica per garage", "Calcola la resina per pavimento garage", "quanta resina epossidica per garage", "quantità per garage"]
  }
};

const calculatorTypes = {
  core: "general",
  volume: "volume",
  amount: "general",
  coverage: "coverage",
  costM2: "coverage",
  floor: "garage-floor",
  garageCost: "garage-floor",
  garageAmount: "garage-floor"
};

// GSC 数据显示同一语言里多个意图重叠的页面在抢同一批搜索词，这里把它们并到一个主页面。
// 值是合并目标的意图 key，被合并的旧地址会生成 301 跳转。
// pt-BR 的 volume / amount 页已排在第 8 名左右，暂时保留。
const mergedIntents = {
  core: { de: "hub", fr: "hub", "pt-BR": "hub", es: "hub", it: "hub" },
  volume: { de: "hub", fr: "hub", es: "hub", it: "hub" },
  amount: { de: "hub", fr: "hub", es: "hub", it: "hub" },
  garageCost: { de: "costM2", fr: "costM2", "pt-BR": "costM2", es: "costM2", it: "costM2" },
  garageAmount: { de: "floor", fr: "floor", "pt-BR": "floor", es: "floor", it: "floor" }
};

function isActiveIntent(localeCode, key) {
  return !mergedIntents[key]?.[localeCode];
}

function slugFor(localeCode, key) {
  return intentGroups.find((group) => group.key === key).byLocale[localeCode];
}

export function createMultilingualRedirects() {
  const redirects = {};
  for (const [key, targets] of Object.entries(mergedIntents)) {
    for (const [localeCode, targetKey] of Object.entries(targets)) {
      redirects[slugFor(localeCode, key)] = slugFor(localeCode, targetKey);
    }
  }
  return redirects;
}

// 用量（每 m²）页的直接答案：1 m² × 1 mm = 1 L，按常见密度 1.1 kg/L 换算重量。
const coverageThicknesses = [0.5, 1, 2, 3];
const coverageAnswers = {
  de: {
    title: "Epoxidharz Verbrauch pro m²: ca. 1,1 kg je mm Schichtdicke",
    description:
      "Epoxidharz-Verbrauch: 1 Liter (ca. 1,1 kg) pro m² und mm Schichtdicke. Tabelle nach Schichtdicke plus Rechner für Liter, Reserve und Kosten deiner Fläche.",
    answerHeading: "Wie viel Epoxidharz braucht man pro m²?",
    answer:
      "Pro Millimeter Schichtdicke braucht man 1 Liter Epoxidharz je Quadratmeter, also etwa 1,1 kg, weil die Dichte meist bei 1,1 bis 1,2 kg/L liegt. 1 Liter reicht damit für etwa 2 m² bei 0,5 mm, 1 m² bei 1 mm und 0,5 m² bei 2 mm. Plane 10–15 % Reserve für Verluste und Saugfähigkeit ein.",
    headers: ["Schichtdicke", "Liter pro m²", "kg pro m² (≈1,1 kg/L)", "m² pro Liter"],
    note: "Rohwerte ohne Reserve. Bei Bodenbeschichtungen und Epoxidfarben gilt der Verbrauch aus dem technischen Datenblatt des Herstellers."
  },
  fr: {
    title: "Quantité de résine époxy par m² : 1 litre par mm d’épaisseur",
    description:
      "Consommation de résine époxy : 1 litre (≈1,1 kg) par m² et par mm d’épaisseur. Tableau par épaisseur et calculateur des litres, de la marge et du prix pour votre surface.",
    answerHeading: "Quelle quantité de résine époxy par m² ?",
    answer:
      "Chaque millimètre d’épaisseur consomme 1 litre de résine époxy par mètre carré, soit environ 1,1 kg, car la densité se situe généralement entre 1,1 et 1,2 kg/L. 1 litre couvre donc environ 2 m² à 0,5 mm, 1 m² à 1 mm et 0,5 m² à 2 mm. Ajoutez 10 à 15 % de marge pour les pertes et l’absorption.",
    headers: ["Épaisseur", "Litres par m²", "kg par m² (≈1,1 kg/L)", "m² par litre"],
    note: "Valeurs brutes, sans marge. Pour les peintures et revêtements de sol époxy, suivez la consommation indiquée sur la fiche technique du fabricant."
  },
  "pt-BR": {
    title: "Quantos litros de resina epóxi por m²? Tabela de 0,5 a 3 mm",
    description:
      "1 litro rende 1 m² a 1 mm. Veja a tabela em litros e kg por espessura, quantos m² rende 1 kg e calcule o total com sobra para a sua área.",
    answerHeading: "Quantos litros de resina epóxi por m²?",
    answer:
      "Cada milímetro de espessura consome 1 litro de resina epóxi por metro quadrado, ou cerca de 1,1 kg, porque a densidade costuma ficar entre 1,1 e 1,2 kg/L. Assim, 1 litro rende cerca de 2 m² a 0,5 mm, 1 m² a 1 mm e 0,5 m² a 2 mm. Some 10–15% de sobra para perdas e absorção.",
    headers: ["Espessura", "Litros por m²", "Kg por m² (≈1,1 kg/L)", "m² por litro"],
    note: "Valores brutos, sem sobra. Tintas e revestimentos epóxi para piso seguem o rendimento da ficha técnica do fabricante."
  },
  es: {
    title: "Consumo y rendimiento de resina epoxi por m² (1 litro por mm)",
    description:
      "Rendimiento de la resina epoxi: 1 litro cubre 1 m² con 1 mm de espesor (≈1,1 kg). Consulta la tabla por espesor y calcula litros, margen y coste para tu superficie.",
    answerHeading: "¿Cuánta resina epoxi se necesita por m²?",
    answer:
      "Cada milímetro de espesor consume 1 litro de resina epoxi por metro cuadrado, unos 1,1 kg, porque su densidad suele estar entre 1,1 y 1,2 kg/L. Por tanto, 1 litro rinde unos 2 m² a 0,5 mm, 1 m² a 1 mm y 0,5 m² a 2 mm. Añade un 10–15 % de margen para pérdidas y absorción.",
    headers: ["Espesor", "Litros por m²", "Kg por m² (≈1,1 kg/L)", "m² por litro"],
    note: "Valores brutos, sin margen. Las pinturas y recubrimientos epoxi para suelos se calculan con el rendimiento de la ficha técnica del fabricante."
  },
  it: {
    title: "Consumo resina epossidica al m²: 1,1 kg per mm di spessore",
    description:
      "Consumo della resina epossidica: 1 litro (≈1,1 kg) al m² per ogni mm di spessore. Tabella per spessore e calcolatore di litri, margine e costo per la tua superficie.",
    answerHeading: "Quanta resina epossidica serve al m²?",
    answer:
      "Ogni millimetro di spessore richiede 1 litro di resina epossidica per metro quadrato, cioè circa 1,1 kg, perché la densità è in genere tra 1,1 e 1,2 kg/L. 1 litro copre quindi circa 2 m² a 0,5 mm, 1 m² a 1 mm e 0,5 m² a 2 mm. Aggiungi un margine del 10–15% per perdite e assorbimento.",
    headers: ["Spessore", "Litri al m²", "kg al m² (≈1,1 kg/L)", "m² per litro"],
    note: "Valori grezzi, senza margine. Per pitture e rivestimenti epossidici per pavimenti vale il consumo indicato nella scheda tecnica del produttore."
  }
};

// ---- 第 1 阶段：按 GSC 实际搜索词补充的内容（目前只有 pt-BR 和 fr）----
const numberIn = (locale) => (value, digits = 2) =>
  new Intl.NumberFormat(locale.numberLocale, { maximumFractionDigits: digits }).format(value);

// 常见透明环氧密度约 1.1 kg/L，用于“1 kg 能刷多少 m²”换算
const typicalDensity = 1.1;

function kgCoverageTable(locale, copy) {
  const format = numberIn(locale);
  return {
    headers: copy.headers,
    rows: coverageThicknesses.map((mm) => [
      `${format(mm, 1)} mm`,
      `${format(1 / (typicalDensity * mm), 2)} m²`,
      `${format(typicalDensity * mm, 2)} kg`
    ]),
    note: copy.note
  };
}

const localeExtras = {
  "pt-BR": {
    coverage: (locale) => [
      {
        title: "1 kg de resina epóxi rende quantos m²?",
        body:
          "Depende da espessura e da densidade do produto. Com a densidade típica de 1,1 kg/L, 1 kg equivale a cerca de 0,9 litro: rende perto de 1,8 m² com 0,5 mm, 0,9 m² com 1 mm e 0,45 m² com 2 mm. Se a ficha técnica indicar outra densidade, divida o peso por ela para obter os litros.",
        table: kgCoverageTable(locale, {
          headers: ["Espessura", "m² por kg (≈1,1 kg/L)", "kg por m²"],
          note: "Valores brutos, sem sobra. Resinas com carga mineral costumam ser mais densas: use a densidade da ficha técnica."
        })
      },
      {
        title: "Como a calculadora chega ao valor recomendado",
        points: [
          "Volume bruto (L) = área (m²) × espessura (mm). Exemplo: 10 m² com 1 mm = 10 L.",
          "Depois ela soma a sobra que você informar (10% por padrão) e mais 4% para bordas e escorrimento em camadas de até cerca de 3 mm, ou 6% em camadas mais grossas.",
          "No exemplo, 10 L + 10% + 4% = 11,4 L. Arredonde para o tamanho de kit imediatamente acima.",
          "Piso epóxi segue outra conta: use o rendimento por demão da ficha técnica na calculadora de piso."
        ],
        cards: [
          {
            title: "Calculadora de piso epóxi",
            text: "Para piso: quantidade por área, número de demãos e rendimento do fabricante.",
            slug: "pt-br/calculadora-piso-epoxi"
          },
          {
            title: "Calculadora de volume de resina epóxi",
            text: "Para moldes, peças e cavidades: volume em litros pelo comprimento, largura e profundidade.",
            slug: "pt-br/calculadora-volume-resina-epoxi"
          }
        ]
      }
    ],
    floor: (locale) => {
      const format = numberIn(locale);
      const rate = 8;
      const coats = 2;
      const waste = 1.07;
      return [
        {
          title: "Quanto de resina epóxi para piso por m²?",
          body:
            "No piso, o consumo vem do rendimento por demão informado pelo fabricante, e não só da espessura. Tintas e revestimentos epóxi costumam indicar entre 0,15 e 0,6 kg/m² por demão, e o primer fica em geral entre 0,15 e 0,3 kg/m². Sistemas autonivelantes de 2 a 3 mm consomem bem mais: multiplique a espessura em mm pela densidade da ficha técnica.",
          table: {
            headers: ["Área", `${coats} demãos a ${rate} m²/L`, "Com 7% de sobra"],
            rows: [18, 30, 50].map((area) => [
              `${area} m²`,
              `${format((area * coats) / rate, 1)} L`,
              `${format(((area * coats) / rate) * waste, 1)} L`
            ]),
            note: `${rate} m²/L é só um exemplo de rendimento. Troque pelo valor da ficha técnica do seu produto na calculadora acima.`
          }
        },
        {
          title: "Como calcular o investimento em piso epóxi",
          points: [
            "Quantidade = área × número de demãos ÷ rendimento por demão (m² por litro ou por kg).",
            "Custo do material = quantidade × preço do litro ou do kg. A calculadora acima faz essa conta com o preço que você informar.",
            "Some à parte o primer, o preparo do concreto (lixamento ou fresagem) e, se for contratar, a mão de obra: esses itens não entram no cálculo do material.",
            "Exemplo: 18 m², 2 demãos e rendimento de 8 m²/L dão 4,5 L; com 7% de sobra, cerca de 4,8 L."
          ],
          cards: [
            {
              title: "Preço do piso epóxi por m²",
              text: "Compare o custo por m² a partir do preço do litro e da espessura aplicada.",
              slug: "pt-br/preco-piso-epoxi-m2"
            }
          ]
        }
      ];
    }
  },
  fr: {
    coverage: (locale) => [
      {
        title: "Combien de couches de résine époxy faut-il ?",
        body:
          "Divisez l’épaisseur totale visée par l’épaisseur maximale par couche indiquée sur la fiche technique, puis arrondissez au nombre entier supérieur. Exemple : 6 mm au total avec 3 mm maximum par couche, soit 2 couches.",
        points: [
          "Plateau en bois : une fine couche de bouche-pores pour fermer le bois, puis une ou plusieurs couches de finition.",
          "Résine de revêtement : couches minces, souvent de l’ordre de 1,5 à 3 mm. Ne dépassez jamais le maximum de la fiche.",
          "Résine de coulée : couches bien plus épaisses, souvent plusieurs centimètres, limitées par l’échauffement.",
          "Le calculateur ci-dessus donne la quantité totale : répartissez-la ensuite entre les couches."
        ]
      },
      {
        title: "Quelle est la densité de la résine époxy ?",
        body:
          "La plupart des résines époxy transparentes ont une densité d’environ 1,1 à 1,2 kg/L. Pour passer des litres aux kilos, multipliez par la densité de la fiche technique : 1 kg correspond donc à environ 0,9 L, soit près de 0,9 m² à 1 mm d’épaisseur.",
        table: kgCoverageTable(locale, {
          headers: ["Épaisseur", "m² par kg (≈1,1 kg/L)", "kg par m²"],
          note: "Valeurs brutes, sans marge. Les résines chargées sont plus denses : utilisez la densité de la fiche technique."
        }),
        cards: [
          {
            title: "Tableau de dosage résine / durcisseur",
            text: "Quantités de A et de B en ml pour les rapports 1:1, 2:1 et 3:1.",
            slug: "fr"
          }
        ]
      }
    ]
  }
};

function extraSectionsFor(locale, key) {
  const build = localeExtras[locale.code]?.[key];
  return build ? { sections: build(locale) } : {};
}

const hubCardText = {
  "pt-BR": {
    volume: "Volume em litros para moldes, peças e cavidades.",
    amount: "Quanta resina comprar, já com a sobra incluída.",
    coverage: "Quantos litros por m² conforme a espessura: 1 L por m² a cada 1 mm.",
    costM2: "Quanto custa o piso epóxi por m² a partir do preço do litro.",
    floor: "Quantidade de resina para piso por área, demãos e rendimento."
  },
  fr: {
    coverage: "Litres par m² selon l’épaisseur : 1 L par m² et par mm.",
    costM2: "Prix au m² à partir du prix du litre et de l’épaisseur.",
    floor: "Sol époxy : quantité selon la surface, le nombre de couches et le rendement."
  }
};

const hubExtraSections = {
  fr: (locale) => {
    const format = numberIn(locale);
    const ratios = [[1, 1], [2, 1], [3, 1]];
    return [
      {
        title: "Tableau de dosage résine / durcisseur en ml",
        body:
          "Le rapport de mélange figure sur la fiche technique. S’il est donné en volume (1:1, 2:1, 3:1), utilisez le tableau ci-dessous. S’il est donné en poids, par exemple 100:45, pesez les deux composants : ne le convertissez pas en ml sans connaître leurs densités.",
        table: {
          headers: ["Mélange total", ...ratios.map(([a, b]) => `${a}:${b} (A + B)`)],
          rows: [100, 250, 500, 1000].map((total) => [
            `${format(total, 0)} ml`,
            ...ratios.map(([a, b]) => `${format((total * a) / (a + b), 1)} + ${format((total * b) / (a + b), 1)} ml`)
          ]),
          note: "Valeurs arrondies au dixième de ml. Mesurez A et B dans des gobelets gradués séparés, puis mélangez soigneusement."
        }
      }
    ];
  }
};

// GSC（2026-09-07 至 10-04）：这些 pt-BR 页排在第 6–8 名，但几乎没有点击。
// 这里只改搜索结果里显示的标题和描述，页面上的 H1 和正文不变。
const searchSnippetOverrides = {
  "pt-BR": {
    volume: {
      title: "Volume de resina epóxi: calcule os litros para moldes e peças",
      description:
        "Informe comprimento, largura e profundidade do molde, peça ou cavidade e veja o volume em litros, a quantidade para comprar com sobra e a divisão A/B do kit."
    },
    amount: {
      title: "Quanta resina epóxi preciso? Calcule a compra com sobra",
      description:
        "Não compre resina a menos nem a mais: informe as medidas e a calculadora mostra o volume bruto, quanto comprar com sobra para perdas e bordas, e o custo."
    },
    floor: {
      title: "Calculadora de piso epóxi: quantidade e investimento por m²",
      description:
        "Calcule quantos litros de tinta ou resina epóxi o piso precisa por área, demãos e rendimento do fabricante, com sobra e custo do material. Exemplo: 18 m² ≈ 4,8 L."
    }
  }
};

function coverageAnswerFields(locale) {
  const copy = coverageAnswers[locale.code];
  const format = (value, digits) =>
    new Intl.NumberFormat(locale.numberLocale, { maximumFractionDigits: digits }).format(value);
  return {
    title: copy.title,
    description: copy.description,
    answerHeading: copy.answerHeading,
    answer: copy.answer,
    answerTable: {
      headers: copy.headers,
      rows: coverageThicknesses.map((mm) => [
        `${format(mm, 1)} mm`,
        `${format(mm, 1)} L`,
        `${format(mm * 1.1, 2)} kg`,
        `${format(1 / mm, 2)} m²`
      ]),
      note: copy.note
    }
  };
}

function localePageMeta(locale, intentKey) {
  return {
    locale: locale.code,
    htmlLang: locale.htmlLang,
    languageName: locale.name,
    defaultUnit: locale.defaultUnit,
    currency: locale.currency,
    numberLocale: locale.numberLocale,
    priceUnit: locale.priceUnit,
    ui: locale.ui,
    nav: locale.nav,
    footerNav: locale.footerNav,
    brandTagline: locale.brandTagline,
    localeRootSlug: locale.prefix,
    generalFaq: locale.generalFaq,
    checklist: locale.checklist,
    hreflangGroup: intentKey,
    lastmod: waveLastmod
  };
}

function makeRelated(localeCode, currentKey) {
  const current = slugFor(localeCode, currentKey);
  return intentGroups
    .filter((group) => group.key === "hub" || isActiveIntent(localeCode, group.key))
    .map((group) => group.byLocale[localeCode])
    .filter((slug) => slug !== current);
}

function localizedCalculatorSpec(locale, key, values) {
  const [title, h1, primaryKeyword, angle] = values;
  const isFloor = ["floor", "garageCost", "garageAmount"].includes(key);
  const isCost = key === "costM2" || key === "garageCost";
  const unitPhrase = locale.code === "de" ? "m², cm, Liter und Euro" : locale.code === "pt-BR" ? "m², cm, litros e reais" : locale.code === "es" ? "m², cm, litros y euros" : locale.code === "it" ? "m², cm, litri ed euro" : "m², cm, litres et euros";
  const slug = intentGroups.find((group) => group.key === key).byLocale[locale.code];
  const support = localizedSpecs[locale.code];
  const siblingTerms = Object.entries(support)
    .filter(([siblingKey]) => siblingKey !== key)
    .slice(0, 3)
    .map(([, sibling]) => sibling[2]);

  const introByLocale = {
    de: `Plane ${angle} mit ${unitPhrase}: Maße eingeben und sofort Rohmenge, Kaufmenge mit Reserve und Kosten sehen.`,
    fr: `Calculez ${angle} avec ${unitPhrase} : saisissez vos mesures et voyez tout de suite le volume brut, la quantité à acheter avec marge et le coût.`,
    "pt-BR": `Calcule ${angle} com ${unitPhrase}: informe as medidas e veja na hora o volume bruto, a quantidade para comprar com sobra e o custo.`,
    es: `Calcula ${angle} con ${unitPhrase}: introduce las medidas y ve al momento el volumen bruto, la cantidad a comprar con margen y el coste.`,
    it: `Calcola ${angle} con ${unitPhrase}: inserisci le misure e vedi subito il volume grezzo, la quantità da acquistare con margine e il costo.`
  };

  const bulletsByLocale = {
    de: [
      isFloor ? "Plant Bodenflächen über Fläche, Schichten und Hersteller-Reichweite." : "Trennt Rohvolumen von einer realistischen Bestellmenge.",
      isCost ? "Hilft, Kosten nach Fläche und Literpreis vor dem Kauf zu prüfen." : "Zeigt Reserve, Teileplanung und Budget in einem Ablauf.",
      "Runde die Kaufmenge auf die nächste erhältliche Packungsgröße auf, statt genau die Rohmenge zu kaufen."
    ],
    fr: [
      isFloor ? "Planifie un sol à partir de la surface, des couches et du rendement fabricant." : "Sépare le volume brut de la quantité réellement à acheter.",
      isCost ? "Aide à estimer le prix selon la surface et le prix au litre." : "Affiche marge, estimation et budget dans le même parcours.",
      "Arrondissez la quantité au format de kit disponible supérieur plutôt que d’acheter le volume brut exact."
    ],
    "pt-BR": [
      isFloor ? "Planeja piso por área, demãos e rendimento informado pelo fabricante." : "Separa volume bruto da quantidade realista para comprar.",
      isCost ? "Ajuda a estimar preço por área e preço por litro." : "Mostra sobra, divisão do kit e custo em um único fluxo.",
      "Arredonde a compra para o próximo tamanho de kit disponível, em vez de comprar o volume bruto exato."
    ],
    es: [
      isFloor ? "Planifica suelo por superficie, capas y rendimiento del fabricante." : "Separa volumen bruto de cantidad realista de compra.",
      isCost ? "Ayuda a estimar precio por superficie y precio por litro." : "Muestra margen, división del kit y coste en el mismo flujo.",
      "Redondea la compra al siguiente tamaño de kit disponible en lugar de comprar el volumen bruto exacto."
    ],
    it: [
      isFloor ? "Pianifica il pavimento con superficie, strati e resa del produttore." : "Separa volume grezzo e quantità realistica da acquistare.",
      isCost ? "Aiuta a stimare prezzo per superficie e prezzo al litro." : "Mostra margine, divisione del kit e costo nello stesso flusso.",
      "Arrotonda l’acquisto alla confezione disponibile successiva invece di comprare il volume grezzo esatto."
    ]
  };

  const howToByLocale = {
    de: [
      "Miss die Innenmaße oder die tatsächliche Beschichtungsfläche.",
      isFloor ? "Trage Schichten und Hersteller-Reichweite ein, nicht nur die Garagengröße." : "Nutze die geplante fertige Tiefe oder Schichtdicke.",
      "Lass die Reserve sichtbar, damit du Rohmenge und Kaufmenge vergleichen kannst.",
      "Prüfe am Ende Harztyp, Schichtdicke und Datenblatt des Produkts."
    ],
    fr: [
      "Mesurez les dimensions intérieures ou la surface réellement couverte.",
      isFloor ? "Saisissez les couches et le rendement fabricant, pas seulement la taille du garage." : "Utilisez la profondeur ou l’épaisseur finale prévue.",
      "Gardez la marge visible pour comparer volume brut et quantité d’achat.",
      "Vérifiez ensuite le type de résine, l’épaisseur maximale et la fiche produit."
    ],
    "pt-BR": [
      "Meça as dimensões internas ou a área real de aplicação.",
      isFloor ? "Informe demãos e rendimento do fabricante, não só o tamanho da garagem." : "Use a profundidade ou espessura final planejada.",
      "Mantenha a sobra visível para comparar volume bruto e compra real.",
      "No fim, confira tipo de resina, espessura máxima e ficha do produto."
    ],
    es: [
      "Mide dimensiones interiores o superficie real de aplicación.",
      isFloor ? "Introduce capas y rendimiento del fabricante, no solo el tamaño del garaje." : "Usa la profundidad o el espesor final previsto.",
      "Mantén visible el margen para comparar volumen bruto y compra real.",
      "Al final revisa tipo de resina, grosor máximo y ficha del producto."
    ],
    it: [
      "Misura dimensioni interne o superficie reale da coprire.",
      isFloor ? "Inserisci strati e resa del produttore, non solo la dimensione del garage." : "Usa profondità o spessore finale previsto.",
      "Mantieni visibile il margine per confrontare volume grezzo e acquisto reale.",
      "Alla fine verifica tipo di resina, spessore massimo e scheda prodotto."
    ]
  };

  const mistakesByLocale = {
    de: [
      "Außenmaße statt Innenmaße verwenden.",
      isFloor ? "Eine Bodenbeschichtung wie einen Holz-Guss berechnen." : "Die Rohmenge ohne Reserve als Einkaufsmenge behandeln.",
      "Ein Harz kaufen, bevor maximale Schichtdicke und Einsatzbereich geprüft sind."
    ],
    fr: [
      "Mesurer l’extérieur du moule au lieu du volume utile.",
      isFloor ? "Calculer un sol comme une coulée de menuiserie." : "Acheter le volume brut sans marge.",
      "Choisir une résine avant de vérifier l’épaisseur maximale et l’usage prévu."
    ],
    "pt-BR": [
      "Usar medida externa do molde em vez do volume interno.",
      isFloor ? "Calcular piso como se fosse uma peça de madeira com resina." : "Comprar só o volume bruto sem sobra.",
      "Comprar resina antes de conferir aplicação e espessura máxima."
    ],
    es: [
      "Usar medida exterior del molde en vez del volumen interior.",
      isFloor ? "Calcular un suelo como si fuera una pieza de madera con resina." : "Comprar solo el volumen bruto sin margen.",
      "Comprar resina antes de revisar uso y grosor máximo."
    ],
    it: [
      "Usare misure esterne dello stampo invece del volume interno.",
      isFloor ? "Calcolare un pavimento come una colata per legno." : "Comprare solo il volume grezzo senza margine.",
      "Comprare resina prima di verificare uso e spessore massimo."
    ]
  };


  const descriptionByLocale = {
    de: `${h1}: Menge, Verbrauch, Reserve und Kosten mit metrischen Einheiten planen, bevor du Epoxidharz kaufst.`,
    fr: `${h1} : estimez quantité, marge, volume et prix avec des unités métriques avant d’acheter la résine époxy.`,
    "pt-BR": `${h1}: estime quantidade, sobra, volume e custo com medidas métricas antes de comprar resina epóxi.`,
    es: `${h1}: estima cantidad, margen, volumen y coste con unidades métricas antes de comprar resina epoxi.`,
    it: `${h1}: stima quantità, margine, volume e costo con unità metriche prima di comprare resina epossidica.`
  };

  return {
    slug,
    title,
    h1,
    description: descriptionByLocale[locale.code],
    eyebrow: title,
    intro: introByLocale[locale.code],
    primaryKeyword,
    supportingKeywords: [angle, ...siblingTerms],
    calculatorType: calculatorTypes[key],
    bullets: bulletsByLocale[locale.code],
    howTo: howToByLocale[locale.code],
    mistakes: mistakesByLocale[locale.code],
    faq: [],
    related: makeRelated(locale.code, key),
    note: locale.ui.fieldNote,
    compareLabel: title,
    resultEyebrow: locale.ui.resultEyebrow,
    ...(key === "coverage" ? coverageAnswerFields(locale) : {}),
    ...extraSectionsFor(locale, key),
    ...searchSnippetOverrides[locale.code]?.[key],
    ...localePageMeta(locale, key)
  };
}

function hubSections(locale) {
  const cards = intentGroups
    .filter((group) => group.key !== "hub" && isActiveIntent(locale.code, group.key))
    .map((group) => {
      const spec = localizedSpecs[locale.code][group.key];
      return {
        title: spec[0],
        text: hubCardText[locale.code]?.[group.key] || spec[3],
        slug: group.byLocale[locale.code],
        primary: ["core", "coverage", "costM2", "garageCost"].includes(group.key)
      };
    });

  const sectionCopy = {
    de: {
      choose: "Wähle zuerst die echte Aufgabe",
      body:
        "Ein Garagenboden, eine dünne Beschichtung und ein Volumenguss brauchen unterschiedliche Eingaben. Wähle den Rechner, der zu deinem Projekt passt.",
      trust: "Metrische Planung statt US-Standardwerte",
      trustBody:
        "Die lokalen Seiten starten mit cm, m², Litern und Euro. So passen die Rechner besser zu europäischen Produktlisten und Angeboten."
    },
    fr: {
      choose: "Choisir d’abord la vraie tâche",
      body:
        "Un sol de garage, une couche fine et un volume de coulée ne se calculent pas de la même manière. Choisissez le calculateur adapté à votre projet.",
      trust: "Planification métrique, pas une traduction brute",
      trustBody:
        "Les pages partent des cm, m², litres et euros pour mieux correspondre aux fiches produits et aux devis locaux."
    },
    "pt-BR": {
      choose: "Escolha primeiro o trabalho real",
      body:
        "Piso de garagem, revestimento fino e volume de molde usam dados diferentes. Escolha a calculadora que combina com o seu projeto.",
      trust: "Planejamento métrico para compra local",
      trustBody:
        "As páginas usam cm, m², litros e reais para combinar melhor com anúncios, orçamentos e fichas de produto no Brasil."
    },
    es: {
      choose: "Elige primero la tarea real",
      body:
        "Un suelo de garaje, una capa fina y un volumen de molde no se calculan igual. Elige la calculadora que encaja con tu proyecto.",
      trust: "Planificación métrica, no traducción literal",
      trustBody:
        "Las páginas usan cm, m², litros y euros para encajar mejor con fichas técnicas, compras y presupuestos locales."
    },
    it: {
      choose: "Scegli prima il lavoro reale",
      body:
        "Un pavimento garage, un rivestimento sottile e un volume da stampo non si calcolano allo stesso modo. Scegli il calcolatore adatto al tuo progetto.",
      trust: "Pianificazione metrica, non traduzione letterale",
      trustBody:
        "Le pagine usano cm, m², litri ed euro per adattarsi meglio a schede tecniche, acquisti e preventivi locali."
    }
  };

  const copy = sectionCopy[locale.code];
  return [
    { title: copy.choose, body: copy.body, cards },
    { title: copy.trust, body: copy.trustBody, points: locale.checklist }
  ];
}

// 语言首页同时就是该语言的通用计算器（原 core 页并入这里），下面再列出其余专用计算器。
function createHubPage(locale, calculatorPage) {
  const core = localizedCalculatorSpec(locale, "core", localizedSpecs[locale.code].core);
  const [toolSection] = hubSections(locale);
  return calculatorPage({
    ...core,
    slug: locale.prefix,
    title: locale.hub.title,
    h1: locale.hub.h1,
    description: locale.hub.description,
    eyebrow: locale.name,
    intro: locale.hub.intro,
    heroActions: intentGroups
      .filter((group) => ["coverage", "costM2", "floor"].includes(group.key))
      .map((group) => ({
        label: localizedSpecs[locale.code][group.key][0],
        slug: group.byLocale[locale.code],
        icon: { coverage: "📏", costM2: "💰", floor: "🏠" }[group.key]
      })),
    sections: [toolSection, ...(hubExtraSections[locale.code]?.(locale) || [])],
    related: [],
    ...localePageMeta(locale, "hub")
  });
}

export function createMultilingualWave1Pages({ calculatorPage }) {
  return wave1LocaleOrder.flatMap((localeCode) => {
    const locale = locales[localeCode];
    const calculatorPages = Object.entries(localizedSpecs[localeCode])
      .filter(([key]) => isActiveIntent(localeCode, key))
      .map(([key, values]) => calculatorPage(localizedCalculatorSpec(locale, key, values)));

    return [createHubPage(locale, calculatorPage), ...calculatorPages];
  });
}

export function createLanguageMarketCards() {
  return wave1LocaleOrder.map((localeCode) => {
    const locale = locales[localeCode];
    return {
      title: locale.hub.title,
      text: locale.hub.description,
      slug: locale.prefix,
      primary: true
    };
  });
}

// 只给仍然存在的页面互相标注 hreflang；成员不足两个的组不输出。
function alternatesForGroup(group) {
  const alternates = {};
  if (group.enSlug !== null) alternates.en = group.enSlug;
  for (const localeCode of wave1LocaleOrder) {
    if (group.key === "hub" || isActiveIntent(localeCode, group.key)) {
      alternates[localeCode] = group.byLocale[localeCode];
    }
  }
  if (Object.keys(alternates).length < 2) return null;
  if (group.enSlug !== null) alternates["x-default"] = group.enSlug;
  return alternates;
}

export function applyMultilingualAlternates(pages) {
  const groupBySlug = new Map();

  for (const group of intentGroups) {
    const alternates = alternatesForGroup(group);
    if (!alternates) continue;
    for (const [hreflang, slug] of Object.entries(alternates)) {
      if (hreflang !== "x-default") groupBySlug.set(slug, alternates);
    }
  }

  return pages.map((page) => {
    const alternates = groupBySlug.get(page.slug);
    if (!alternates) return page;
    return { ...page, alternates };
  });
}
