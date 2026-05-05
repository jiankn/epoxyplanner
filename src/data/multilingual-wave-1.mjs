const waveLastmod = "2026-05-05";

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
      { label: "Rechner", slug: "de/epoxidharz-rechner" },
      { label: "Menge", slug: "de/wie-viel-epoxidharz-brauche-ich" },
      { label: "Verbrauch", slug: "de/epoxidharz-verbrauch-pro-m2" },
      { label: "Kosten", slug: "de/epoxidharz-kosten-pro-m2" },
      { label: "Garagenboden", slug: "de/garagenboden-epoxidharz-kosten" }
    ],
    footerNav: [
      { label: "Deutsch", slug: "de" },
      { label: "Rechner", slug: "de/epoxidharz-rechner" },
      { label: "Kosten", slug: "de/epoxidharz-kosten-pro-m2" },
      { label: "Garagenboden", slug: "de/garagenboden-epoxidharz-kosten" },
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
      whyTitle: "Warum diese Seite existiert",
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
      title: "Epoxidharz Rechner, Verbrauch und Kosten",
      h1: "Epoxidharz Rechner für Menge, m² und Garagenboden",
      description:
        "Deutschsprachige Epoxidharz-Rechner für Menge, Verbrauch pro m², Kosten und Garagenboden-Beschichtung mit metrischen Einheiten.",
      intro:
        "Starte mit dem Rechner, der zu deiner Aufgabe passt: Volumen, Verbrauch pro m², Kosten oder Garagenboden. Die Seiten verwenden metrische Maße, Liter und Euro als Planungslogik."
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
      { label: "Calculateur", slug: "fr/calculateur-resine-epoxy" },
      { label: "Quantité", slug: "fr/combien-de-resine-epoxy-faut-il" },
      { label: "m²", slug: "fr/quantite-resine-epoxy-par-m2" },
      { label: "Prix", slug: "fr/prix-resine-epoxy-m2" },
      { label: "Garage", slug: "fr/prix-sol-garage-epoxy" }
    ],
    footerNav: [
      { label: "Français", slug: "fr" },
      { label: "Calculateur", slug: "fr/calculateur-resine-epoxy" },
      { label: "Prix au m²", slug: "fr/prix-resine-epoxy-m2" },
      { label: "Sol garage", slug: "fr/prix-sol-garage-epoxy" },
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
      whyTitle: "Pourquoi cette page existe",
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
      title: "Calculateur de résine époxy, quantité et prix au m²",
      h1: "Calculateur de résine époxy pour volume, m² et garage",
      description:
        "Calculateurs français pour estimer la quantité de résine époxy, le volume, le prix au m² et un sol de garage en unités métriques.",
      intro:
        "Choisissez le calculateur selon le projet réel : volume, quantité au m², prix ou sol de garage. Les pages utilisent les centimètres, mètres carrés, litres et euros."
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
      { label: "Calculadora", slug: "pt-br/calculadora-resina-epoxi" },
      { label: "Quantidade", slug: "pt-br/quanta-resina-epoxi-preciso" },
      { label: "Consumo", slug: "pt-br/consumo-resina-epoxi-por-m2" },
      { label: "Preço", slug: "pt-br/preco-piso-epoxi-m2" },
      { label: "Garagem", slug: "pt-br/piso-epoxi-garagem-preco" }
    ],
    footerNav: [
      { label: "Português", slug: "pt-br" },
      { label: "Calculadora", slug: "pt-br/calculadora-resina-epoxi" },
      { label: "Preço m²", slug: "pt-br/preco-piso-epoxi-m2" },
      { label: "Garagem", slug: "pt-br/piso-epoxi-garagem-preco" },
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
      whyTitle: "Por que esta página existe",
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
      title: "Calculadora de resina epóxi, piso e preço por m²",
      h1: "Calculadora de resina epóxi para quantidade, m² e garagem",
      description:
        "Calculadoras em português do Brasil para estimar resina epóxi, consumo por m², piso epóxi, garagem e preço com litros e reais.",
      intro:
        "Escolha a calculadora conforme o projeto: peça de resina, consumo por metro quadrado, preço ou piso de garagem. As páginas usam medidas métricas, litros e reais."
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
      { label: "Calculadora", slug: "es/calculadora-resina-epoxi" },
      { label: "Cantidad", slug: "es/cuanta-resina-epoxi-necesito" },
      { label: "m²", slug: "es/consumo-resina-epoxi-por-m2" },
      { label: "Precio", slug: "es/precio-suelo-epoxi-m2" },
      { label: "Garaje", slug: "es/precio-epoxi-garaje" }
    ],
    footerNav: [
      { label: "Español", slug: "es" },
      { label: "Calculadora", slug: "es/calculadora-resina-epoxi" },
      { label: "Precio m²", slug: "es/precio-suelo-epoxi-m2" },
      { label: "Garaje", slug: "es/precio-epoxi-garaje" },
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
      whyTitle: "Por qué existe esta página",
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
      title: "Calculadora de resina epoxi, cantidad y precio por m²",
      h1: "Calculadora de resina epoxi para cantidad, m² y garaje",
      description:
        "Calculadoras en español para estimar cantidad de resina epoxi, consumo por m², precio de suelo epoxi y garaje con unidades métricas.",
      intro:
        "Elige la calculadora según la tarea real: volumen, consumo por m², precio o suelo de garaje. Las páginas usan medidas métricas, litros y euros."
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
      { label: "Calcolatore", slug: "it/calcolatore-resina-epossidica" },
      { label: "Quantità", slug: "it/quanta-resina-epossidica-serve" },
      { label: "m²", slug: "it/consumo-resina-epossidica-m2" },
      { label: "Prezzo", slug: "it/prezzo-pavimento-resina-epossidica-m2" },
      { label: "Garage", slug: "it/costo-pavimento-epossidico-garage" }
    ],
    footerNav: [
      { label: "Italiano", slug: "it" },
      { label: "Calcolatore", slug: "it/calcolatore-resina-epossidica" },
      { label: "Prezzo m²", slug: "it/prezzo-pavimento-resina-epossidica-m2" },
      { label: "Garage", slug: "it/costo-pavimento-epossidico-garage" },
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
      whyTitle: "Perché esiste questa pagina",
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
      title: "Calcolatore resina epossidica, quantità e prezzo al m²",
      h1: "Calcolatore resina epossidica per quantità, m² e garage",
      description:
        "Calcolatori in italiano per stimare resina epossidica, consumo al m², prezzo pavimento in resina e garage con unità metriche.",
      intro:
        "Scegli il calcolatore in base al progetto reale: volume, consumo al metro quadrato, prezzo o pavimento del garage. Le pagine usano centimetri, metri quadrati, litri ed euro."
    }
  }
};

const intentGroups = [
  {
    key: "hub",
    enSlug: "",
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
    enSlug: "resin-calculator",
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
    enSlug: "epoxy-volume-calculator",
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
    enSlug: "epoxy-amount-calculator",
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
    enSlug: "epoxy-square-foot-calculator",
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
    enSlug: "epoxy-garage-floor-cost-calculator",
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
    enSlug: "garage-floor-epoxy-calculator",
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
  const localGroup = intentGroups.find((group) => group.key === currentKey);
  const core = intentGroups.find((group) => group.key === "core").byLocale[localeCode];
  const hub = intentGroups.find((group) => group.key === "hub").byLocale[localeCode];
  const related = intentGroups
    .filter((group) => group.key !== "hub" && group.key !== currentKey)
    .slice(0, 5)
    .map((group) => group.byLocale[localeCode]);
  return [hub, core, ...related].filter((slug, index, list) => slug && slug !== localGroup?.byLocale[localeCode] && list.indexOf(slug) === index);
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
    de: `Diese Seite richtet sich an Nutzer, die nach ${primaryKeyword} suchen und eine konkrete Menge statt einer groben Faustregel brauchen. Sie plant ${angle} mit ${unitPhrase}, Reserve und Kostenlogik.`,
    fr: `Cette page répond à la recherche ${primaryKeyword} avec une estimation utilisable, pas seulement une formule. Elle planifie ${angle} avec ${unitPhrase}, une marge et une logique de prix.`,
    "pt-BR": `Esta página atende quem procura ${primaryKeyword} e precisa de uma estimativa prática, não só uma fórmula. Ela planeja ${angle} com ${unitPhrase}, sobra e custo.`,
    es: `Esta página responde a la búsqueda ${primaryKeyword} con una estimación útil, no solo una fórmula. Planifica ${angle} con ${unitPhrase}, margen y coste.`,
    it: `Questa pagina risponde alla ricerca ${primaryKeyword} con una stima utile, non solo una formula. Pianifica ${angle} con ${unitPhrase}, margine e costo.`
  };

  const bulletsByLocale = {
    de: [
      `Für ${angle} mit metrischen Eingaben statt US-Standardwerten.`,
      isFloor ? "Plant Bodenflächen über Fläche, Schichten und Hersteller-Reichweite." : "Trennt Rohvolumen von einer realistischen Bestellmenge.",
      isCost ? "Hilft, Kosten nach Fläche und Literpreis vor dem Kauf zu prüfen." : "Zeigt Reserve, Teileplanung und Budget in einem Ablauf.",
      "Verlinkt zu verwandten Rechnern, damit ähnliche Suchanfragen nicht in dünnen Varianten enden."
    ],
    fr: [
      `Conçu pour ${angle} avec des unités métriques.`,
      isFloor ? "Planifie un sol à partir de la surface, des couches et du rendement fabricant." : "Sépare le volume brut de la quantité réellement à acheter.",
      isCost ? "Aide à estimer le prix selon la surface et le prix au litre." : "Affiche marge, estimation et budget dans le même parcours.",
      "Relie les intentions proches sans créer de pages faibles ou répétitives."
    ],
    "pt-BR": [
      `Feita para ${angle} com medidas métricas.`,
      isFloor ? "Planeja piso por área, demãos e rendimento informado pelo fabricante." : "Separa volume bruto da quantidade realista para comprar.",
      isCost ? "Ajuda a estimar preço por área e preço por litro." : "Mostra sobra, divisão do kit e custo em um único fluxo.",
      "Conecta buscas próximas sem criar páginas repetidas e fracas."
    ],
    es: [
      `Pensada para ${angle} con unidades métricas.`,
      isFloor ? "Planifica suelo por superficie, capas y rendimiento del fabricante." : "Separa volumen bruto de cantidad realista de compra.",
      isCost ? "Ayuda a estimar precio por superficie y precio por litro." : "Muestra margen, división del kit y coste en el mismo flujo.",
      "Conecta búsquedas cercanas sin convertirlas en páginas repetidas."
    ],
    it: [
      `Pensata per ${angle} con unità metriche.`,
      isFloor ? "Pianifica il pavimento con superficie, strati e resa del produttore." : "Separa volume grezzo e quantità realistica da acquistare.",
      isCost ? "Aiuta a stimare prezzo per superficie e prezzo al litro." : "Mostra margine, divisione del kit e costo nello stesso flusso.",
      "Collega intenti vicini senza creare pagine ripetitive."
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

  const faqByLocale = {
    de: [
      { q: `Wann ist ${title} die richtige Seite?`, a: `Nutze sie, wenn die Suchabsicht ${angle} ist und du metrische Eingaben mit Kaufreserve brauchst.` },
      { q: "Warum Liter statt Gallonen?", a: "Für deutschsprachige Nutzer sind Liter und m² die natürlichere Einkaufs- und Planungsbasis." }
    ],
    fr: [
      { q: `Quand utiliser ${title} ?`, a: `Utilisez cette page lorsque l’intention est ${angle} et que vous voulez une estimation métrique avec marge.` },
      { q: "Pourquoi travailler en litres ?", a: "Pour le marché francophone, litres et mètres carrés correspondent mieux aux fiches produits et aux devis." }
    ],
    "pt-BR": [
      { q: `Quando usar ${title}?`, a: `Use quando a intenção for ${angle} e você precisar de cálculo em medidas métricas com sobra.` },
      { q: "Por que usar litros?", a: "No Brasil, litros e metros quadrados combinam melhor com compra, orçamento e descrição dos produtos." }
    ],
    es: [
      { q: `Cuándo usar ${title}?`, a: `Úsala cuando la intención sea ${angle} y necesites una estimación métrica con margen.` },
      { q: "Por qué usar litros?", a: "En español, litros y metros cuadrados encajan mejor con fichas técnicas, compras y presupuestos." }
    ],
    it: [
      { q: `Quando usare ${title}?`, a: `Usala quando l’intento è ${angle} e ti serve una stima metrica con margine.` },
      { q: "Perché usare i litri?", a: "Nel mercato italiano litri e metri quadrati sono più naturali per schede prodotto, preventivi e acquisti." }
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
    faq: faqByLocale[locale.code],
    related: makeRelated(locale.code, key),
    note: locale.ui.fieldNote,
    compareLabel: title,
    resultEyebrow: locale.ui.resultEyebrow,
    ...localePageMeta(locale, key)
  };
}

function hubSections(locale) {
  const cards = intentGroups
    .filter((group) => group.key !== "hub")
    .map((group) => {
      const spec = localizedSpecs[locale.code][group.key];
      return {
        title: spec[0],
        text: spec[3],
        slug: group.byLocale[locale.code],
        primary: ["core", "coverage", "costM2", "garageCost"].includes(group.key)
      };
    });

  const sectionCopy = {
    de: {
      choose: "Wähle zuerst die echte Aufgabe",
      body:
        "Ein Garagenboden, eine dünne Beschichtung und ein Volumenguss brauchen unterschiedliche Eingaben. Diese deutschsprachige Übersicht hält die Suchpfade getrennt.",
      trust: "Metrische Planung statt US-Standardwerte",
      trustBody:
        "Die lokalen Seiten starten mit cm, m², Litern und Euro. So passen die Rechner besser zu europäischen Produktlisten und Angeboten."
    },
    fr: {
      choose: "Choisir d’abord la vraie tâche",
      body:
        "Un sol de garage, une couche fine et un volume de coulée ne se calculent pas de la même manière. Cette section française sépare les intentions.",
      trust: "Planification métrique, pas une traduction brute",
      trustBody:
        "Les pages partent des cm, m², litres et euros pour mieux correspondre aux fiches produits et aux devis locaux."
    },
    "pt-BR": {
      choose: "Escolha primeiro o trabalho real",
      body:
        "Piso de garagem, revestimento fino e volume de molde usam dados diferentes. Esta área em português separa essas intenções.",
      trust: "Planejamento métrico para compra local",
      trustBody:
        "As páginas usam cm, m², litros e reais para combinar melhor com anúncios, orçamentos e fichas de produto no Brasil."
    },
    es: {
      choose: "Elige primero la tarea real",
      body:
        "Un suelo de garaje, una capa fina y un volumen de molde no se calculan igual. Esta sección en español separa esas intenciones.",
      trust: "Planificación métrica, no traducción literal",
      trustBody:
        "Las páginas usan cm, m², litros y euros para encajar mejor con fichas técnicas, compras y presupuestos locales."
    },
    it: {
      choose: "Scegli prima il lavoro reale",
      body:
        "Un pavimento garage, un rivestimento sottile e un volume da stampo non si calcolano allo stesso modo. Questa sezione italiana separa gli intenti.",
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

function createHubPage(locale, infoPage) {
  return infoPage({
    slug: locale.prefix,
    title: locale.hub.title,
    h1: locale.hub.h1,
    description: locale.hub.description,
    eyebrow: locale.name,
    intro: locale.hub.intro,
    heroActions: intentGroups
      .filter((group) => ["core", "coverage", "costM2", "garageCost"].includes(group.key))
      .map((group) => {
        const spec = localizedSpecs[locale.code][group.key];
        return { label: spec[0], slug: group.byLocale[locale.code] };
      }),
    sections: hubSections(locale),
    related: intentGroups.filter((group) => group.key !== "hub").map((group) => group.byLocale[locale.code]),
    includeInSitemap: true,
    ...localePageMeta(locale, "hub")
  });
}

export function createMultilingualWave1Pages({ calculatorPage, infoPage }) {
  return wave1LocaleOrder.flatMap((localeCode) => {
    const locale = locales[localeCode];
    const calculatorPages = Object.entries(localizedSpecs[localeCode]).map(([key, values]) =>
      calculatorPage(localizedCalculatorSpec(locale, key, values))
    );

    return [createHubPage(locale, infoPage), ...calculatorPages];
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

function alternatesForGroup(group) {
  const alternates = { en: group.enSlug };
  for (const localeCode of wave1LocaleOrder) {
    alternates[localeCode] = group.byLocale[localeCode];
  }
  alternates["x-default"] = group.enSlug;
  return alternates;
}

export function applyMultilingualAlternates(pages) {
  const groupBySlug = new Map();

  for (const group of intentGroups) {
    const alternates = alternatesForGroup(group);
    groupBySlug.set(group.enSlug, alternates);
    for (const localeCode of wave1LocaleOrder) {
      groupBySlug.set(group.byLocale[localeCode], alternates);
    }
  }

  return pages.map((page) => {
    const alternates = groupBySlug.get(page.slug);
    if (!alternates) return page;
    return { ...page, alternates };
  });
}
