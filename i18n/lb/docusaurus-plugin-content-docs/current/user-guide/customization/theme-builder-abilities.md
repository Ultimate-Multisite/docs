---
title: Abilte vom Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Fähigkeite: Block Themes Scaffolde und Aktivierä

Superdav AI Agent v1.12.0 bringt zwei mächtigi Fähigkeite mit, wo dir ermögliche, benutzerdefinierti block themes direkt us de Chat-Interface z'generiere und z'deploye.

## Überblick

D'Fähigkeite **scaffold-block-theme** und **activate-theme** erlauben es Agenten:
- Kompletti, produktionsbereiti block themes uf Basis vo dine Spezifikationen z'generiere
- Themes automatisch uf dinere Site z'aktivierä ohni manuelli Iigriff
- Kohäsi visuelli Identitäte dur gfüehrti Designentschede z'schaffe

## Block Theme Scaffolde

D'Fähigkeit **scaffold-block-theme** generiert e neui WordPress block theme mit ere komplette Theme-Struktur, inklusiv:

- `theme.json` Konfigurationsdatei mit design tokens
- Block template dateie für übliche Layouts
- Benutzerdefinierti Block-Styles und Variatione
- Theme-Metadate und Support-Deklaratione

### Wie bruche ich das?

In dim Chat mit em Superdav AI Agent chasch du d'Theme-Generierig aafroge:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

De Agent wird:
1. Dini Designpräferenze dur de Gspräch sammle
2. D'kompletti Theme-Struktur generiere
3. Alli nötige Theme-Dateie erstelle
4. D'Theme für d'Aktivierig vorbereite

### Erwarteti Usgab

Wenn d'Fähigkeit erfolgreich usgfüehrt wird, gsehsch du:

- E Bestätigung, dass d'Theme scaffoldet worde isch
- De Theme-Name und de Standort
- E Zämmefassig vo de design tokens (Farbe, Typografie, Abstände)
- Status "Ready to activate" (Bereit zur Aktivierig)

Beispilsusgab:
```
✓ Theme "Modern Agency" erfolgreich scaffoldet
  Standort: /wp-content/themes/modern-agency/
  Farbe: Primär #0066CC, Sekundär #FFFFFF
  Typografie: Inter (sans-serif)
  Status: Ready to activate
```

## Theme Aktivierä

D'**activate-theme** Fähigkeit wechselt dini Site zu eme neu ufgebautem oder bestehendem Block Theme.

### Wie mer's ufwendet

Nachdem du es Theme ufgebaut hesch, chasch es sofort aktiviere:

```
"Aktiviere s Modern Agency theme"
```

Oder jedes bestehendi Theme aktiviere:

```
"Wechsle zum Twentytwentyfour theme"
```

### Erwarteti Usgab

Wenn d'Aktivierig erfolgreich isch:

- Bestätigung vom aktive Theme
- Name vom vorherige Theme (für Referenz)
- Site URL, wo s Theme jetz live isch
- Alli theme-spezifischi Iistelligsnote

Beispilsusgab:
```
✓ Theme erfolgreich aktiviert
  Aktives Theme: Modern Agency
  Vorherigs Theme: Twentytwentyfour
  Live uf: https://yoursite.com
  Note: Prüef dini Homepage, um s Layout z'bestätige
```

## Workflow: Ufbau und Aktivierig

E typische Workflow kombiniert beidi Fähigkeite:

1. **Theme-Generierigsuforderig**: "Erstelle es Block Theme für mini SaaS Landing Page"
2. **Agent baut s Theme uf**: Generiert Datefile und Design Tokens
3. **Überprüefe und verfeinere**: Bespräche vo Designänderige, falls nötig
4. **Aktivierä**: "Aktiviere das Theme jetzt"
5. **Verifiziere**: Bsuech dini Site, um z'bestätige, dass s neui Design live isch

## Design Tokens und Anpassig

Ufbaui Theme bruche WordPress design tokens (via `theme.json`) für:

- **Farbe**: Primär-, Sekundär-, Akzent- und neutrale Palette
- **Typografie**: Schriftfamilie, Grössene, Gewichte, Zeilenhöche
- **Abstand**: Padding, Margin, Gap Scales
- **Ränder**: Radius- und Breite-Tokens
- **Schatte**: Elevation Levels

Die Tokens sind zentral in `theme.json` gsammlt, was es eifach macht, dini ganz Designsystem us eme File z'passe.

## Begränzige und Notize

## Problembehebig

**Theme erscheint nöd nach dem Scaffolding**
- Prüef, ob de Theme-Ordner existiert und d'richtige Berechtigunge het.
- Überprüef, ob `theme.json` gültigs JSON isch.
- Stell sicher, dass de Theme-Name nöd mit bestehende Themes kollidiert.

**Aktivierig schlägt fehl**
- Bestätig, dass du Administratorberechtigunge hesch.
- Prüef, ob WordPress de Theme-Ordner läse cha.
- Läs d'WordPress Fehlerprotokoll für meh Details.

**Design Tokens wend nöd a**
- Überprüef, ob d'Syntax vo `theme.json` korrekt isch.
- Lösch alli Caching Plugins.
- Prüef, ob dini WordPress-Version die Tokens unterstützt, wo du bruchsch.

## Nächsti Schritt

Nachdem du din Theme aktiviert hesch, chasch du:
- D **Design System Aesthetics Fähigkeit** bruche, um d'Typografie, Farbe und de Abstand z'verfeinere.
- Individuelli Blockstile über de WordPress Block Editor benutzerdefiniert a passe.
- Custom CSS in de `style.css` Datei vom Theme dezuefüege.
- Custom Block Templates für spezifischi Seitentype erstelle.
