---
title: Menü erstellen
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menü erstellen

D'Fäegkeet **Menü erstellen** erstellt WordPress-Navigatiounsmenüe mat Ënnerstëtzung fir ënnerschiddlech Navigatiounslabelen, déi getrennt vu Säitentitele sinn.

## Iwwersiicht {#overview}

Dës Fäegkeet erweidert déi standardméisseg Funktionalitéit fir Menüs ze erstellen ëm d'Méiglechkeet, e Parameter `navigation_label` unzeginn. Dat erlaabt Iech Menüs ze erstellen, bei deenen de Label, deen an der Navigatioun ugewise gëtt, sech vum Säitentitel ënnerscheet, a bitt méi Flexibilitéit bei der Struktur vum Site an der Benotzererfarung.

## Parameteren {#parameters}

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|-----------|------|----------|-------------|
| `name` | string | Jo | Menüsnumm, z. B. `Primary Navigation` |
| `location` | string | Nee | Theme-Plaz, där dëse Menü zougewise gëtt, z. B. `primary` |
| `navigation_label` | string | Nee | Label, deen an der Navigatioun ugewise gëtt (ënnerschiddlech vum Säitentitel) |

## Réckgabewäert {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigatiounslabel vs. Säitentitel {#navigation-label-vs-page-title}

De Parameter `navigation_label` erlaabt Iech, den interne Menüsnumm vum Label ze trennen, deen de Benotzer ugewise gëtt:

- **`name`** — Interne Menü-Identifizéierer, dee vu WordPress benotzt gëtt (z. B. "Primary Navigation")
- **`navigation_label`** — De Label, deen de Site-Besicher an der Navigatioun ugewise gëtt (z. B. "Main Menu")

Dat ass nëtzlech wann:
- Är intern Benennungskonventioun sech vun de Labelen ënnerscheet, déi de Benotzer ugewise ginn
- Dir méi kuerz Labelen an der Navigatioun wëllt wéi am Admin-Panel
- Dir méi Sprooche mat ënnerschiddleche Labellängte ënnerstëtze musst
- Dir Menüs fir spezifesch Regiounen oder Benotzergruppen opbaut

## Benotzungsbeispiller {#usage-examples}

### Beispill 1: Einfache Menü mat Navigatiounslabel {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Erstell e primäre Navigatiounsmenü mam Numm "Main Navigation" mam Navigatiounslabel "Menu".
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Beispill 2: Menü fir spezifesch Theme-Plaz {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Erstell e Footer-Menü mam Numm "Footer Links" mam Navigatiounslabel "Quick Links" a weis en der Footer-Plaz zou.
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integratioun mat Theme Builder {#integration-with-theme-builder}

Wann Dir Theme Builder benotzt, mécht d'Fäegkeet Menü erstellen Folgendes:

1. Erkennt automatesch verfügbar Theme-Menüplazen
2. Erstellt Menüs mat passenden Navigatiounslabelen fir Ären Design
3. Weist Menüs de richtege Theme-Plazen zou
4. Ënnerstëtzt d'Dobäisetze vu Menüelementer no der Erstellung

## Verbonnen Fäegkeeten {#related-abilities}

- **`add_menu_item`** — Elementer zu engem existente Menü derbäisetzen
- **`update_menu`** — E Menü ëmbenennen oder en enger Theme-Plaz nei zouweisen
- **`delete_menu`** — E Menü vun Ärem Site ewechhuelen

## Beschte Praktiken {#best-practices}

- **Benotzt kloer Navigatiounslabelen** — haalt Labelen kuerz a beschreiwend fir Benotzer
- **Passt Theme-Plazen un** — weist Menüs der richteger Theme-Plaz zou, fir eng korrekt Uweisung
- **Plangt d'Menüstruktur** — decidéiert iwwer Är Menühierarchie, ier Dir Elementer erstellt
- **Test d'Reaktiounsfäegkeet** — iwwerpréift, datt Menüs op mobilen Apparater richteg ugewise ginn
- **Lokaliséiert Labelen** — benotzt ënnerschiddlech Navigatiounslabelen fir ënnerschiddlech Sproochversiounen

## Aschränkungen {#limitations}

- Navigatiounslabelen sinn nëmme fir d'Uweisung; den interne `name` gëtt nach ëmmer fir d'WordPress-Identifikatioun benotzt
- Theme-Ënnerstëtzung variéiert; net all Theme ënnerstëtzen all Menüplazen
- Menüelementer mussen no der Menüerstellung separat derbäigesat ginn
- D'Ännere vun engem Navigatiounslabel erfuerdert d'Aktualiséiere vum Menü

## Verbonnen Fäegkeeten {#related-abilities-1}

- [Logo SVG generéieren](./generate-logo-svg.md) — Logoen fir Äre Site-Header erstellen
- [Palette-Kontrast validéieren](./validate-palette-contrast.md) — zougänglech Faarfschemaen assuréieren
