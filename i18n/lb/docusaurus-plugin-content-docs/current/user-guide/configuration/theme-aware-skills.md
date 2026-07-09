---
title: Thema-bewusst Fähigkeite
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills {#theme-aware-skills}

Superdav AI Agent v1.10.0 schieft vier neui theme-aware built-in skills us, wo sich automatisch aapasst an dini aktivi WordPress-Theme. Die Skills biete spezialisierti Orientierig und Fähigkeite, wo uf d'Architektur und d'Funktione vo dim Theme zugeschnitte sind.

## Was sind Theme-Aware Skills? {#what-are-theme-aware-skills}

Theme-aware skills sind vorekonfigurierte Wissensbasis und Toolsets, wo de AI-Assistent automatisch wählt, basierend uf em WordPress-Theme, wo aktuell uf dinere Site aktiv isch. Wenn du Themes wechselst, aktualisiere sich d'verfügbare Skills vom Assistent automatisch – kei manuelli Konfiguration nötig.

Jede Skill beinhaltet:

- **Theme-spezifischi Dokumentation** — Orientierig zum Verwende und Ufstelle vom Theme
- **Block- und Muster-Referenze** — verfügbari Blocks, Muster und Designoptionen
- **Ufstelligsbeispil** — Code-Schnipsel und Konfigurationsmuster für übliche Ufgabe
- **Best Practices** — Empfehlige für d'Architektur und de Workflow vom Theme

## Verfügbari Theme-Aware Skills {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Gilt für:** Themes, wo d'WordPress block-basierti (Full Site Editing) Architektur bruche.

D'Block Themes Skill biete Orientierig zu:

- Erstelle und bearbeite vo Templates mit em Block Editor
- Arbet mit Block Patterns und wiederverwendbare Blocks
- Ufstelle vo globale Styles und theme.json Settings
- Verwände vo Theme Blocks und Variatione
- Ufbau vo eigene Block Patterns für dini Site

**Automatisch aktiviert, wenn:** Din aktives Theme es Block Theme isch (unterstützt d'Feature `block-templates`).

### Classic Themes {#classic-themes}

**Gilt für:** Traditionelli WordPress Themes, wo PHP Templates und de klassischi Editor bruche.

D'Classic Themes Skill biete Orientierig zu:

Arba mit PHP template files und hooks
Customizing vom Theme-Ufschau via de Customizer
Verwende Widget Areas und Sidebars
Ändere CSS und Child Theme Entwicklung
Verständnis vo de Theme-Hierarchie und Template Tags

**Automatisch aktiviert, wenn:** Ihr aktives Theme en klassisches (non-block) Theme isch.

### Kadence Blocks {#kadence-blocks}

**Gilt für:** Sites mit em Kadence Blocks Plugin für fortgschritteni Block-basierti Gestaltung.

D'Kadence Blocks Fähigkeit git Ihne Orientierig über:

- De Ufschau vo de Kadence advanced block library (Hero, Testimonials, Pricing usw.)
- D'Konfigurierig vo Kadence block settings und responsive Optionene
- De Aufbau vo custom layouts mit Kadence's grid und container blocks
- D'Integration vo Kadence blocks mit Ihrem Theme
- De Ufschau vo Kadence's design system und presets

**Automatisch aktiviert, wenn:** S'Kadence Blocks Plugin uf Ihrer Site aktiv isch.

### Kadence Theme {#kadence-theme}

**Gilt für:** Sites mit em Kadence Theme für block-basierti Gestaltung und Customizing.

D'Kadence Theme Fähigkeit git Ihne Orientierig über:

- D'Customizing vom Kadence Theme via global styles und theme.json
- De Ufschau vo Kadence's integrierte block patterns und templates
- D'Konfigurierig vo Kadence theme settings und Optionene
- De Aufbau vo custom designs mit Kadence's design system
- D'Integration vo Kadence mit beliebte Plugins und Tools

**Automatisch aktiviert, wenn:** S'Kadence Theme Ihr aktives Theme isch.

## Wie Skills ausgewählt werde {#how-skills-are-selected}

De Assistent erkennt automatisch Ihr aktuells Theme und d'installierte Plugins bi jede Nachricht. Wenn e passendi theme-aware Skill verfügbar isch, wird sie automatisch in de Kontext vom Assistent gelade. Sie müend kei Skills manuell aktivieren oder umschalte.

### Mehreri Skills {#multiple-skills}

Wenn mehri Fähigkeite uf Ihrer Site aawende sind (zum Bischpil, wenn Sie sowohl Kadence Blocks als au de Kadence Theme aktiv händ), het de Assistent Zuegang zu allne anwendbare Fähigkeite und chan Ufleitige us jede davon zitierä.

### Thema wechsle {#switching-themes}

Wenn Sie s'aktivi Thema ändere, aktualisiere sich d'verfüegbare Fähigkeite vom Assistent automatisch bi de nöchste Nachricht. Zum Bischpil:

1. Sie bruche es Block-Theme mit de Fähigkeit **Block Themes** aktiv.
2. Sie wechsle zu eme klassische Theme.
3. Bi Ihrer nöchste Nachricht wird d'Fähigkeit **Classic Themes** automatisch gelade, und d'Fähigkeit **Block Themes** isch nümme verfügbar.

## Thema-sensiti Fähigkeite bruche {#using-theme-aware-skills}

Um e thema-sensiti Fähigkeit z'nutze, beschribet Sie eifach im Chat, was Sie mache wend. De Assistent wird automatisch uf d'Ufleitige vo de passendi Fähigkeit verwiise.

### Bispil-Prompts {#example-prompts}

**Für Block Themes:**
> "Erstelle en Hero-Abschnitt mit eme Hintergrundbild und zentriertem Text mit Block-Patterns."

**Für Classic Themes:**
> "Füeg e benutzerdefini Area für Widgets i d'Sidebar mit eme Child Theme hinzu."

**Für Kadence Blocks:**
> "Baue en Testimonials-Abschnitt mit em Kadence Testimonials Block uf."

**Für Kadence Theme:**
> "Passi de Header-Layout und s'Styling vom Navigationsmenü an."

De Assistent wird thema-spezifischi Ufleitige und Code-Bispil bietä, wo uf Ihr aktives Theme und d'Plugins abgstimmt sind.

:::note
Thema-sensiti Fähigkeite sind automatisch in Superdav AI Agent v1.10.0 und spöter verfügbar. Es brucht kei zusätzlechi Iistellig oder Konfiguration.
:::
