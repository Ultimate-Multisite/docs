---
title: Design System Ästhetik-Fähigkeit
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Design System Ästhetik-Skill

Der **Design System Ästhetik-Skill** ist ein geführter Ansatz, um die visuelle Identität Ihrer Website zu verfeinern. Er hilft Ihnen, konsistente Entscheidungen bezüglich Typografie, Farbe, Abstände und Bewegungselemente (Motion Tokens) zu treffen, die Ihr Design System definieren.

## Was ist Design System Ästhetik?

Design System Ästhetik ist ein strukturiertes Skill, das folgende Bereiche abdeckt:

- **Typografie**: Schriftfamilien, Größen, Stärken und Zeilenabstände
- **Farbe**: Primär-, Sekundär-, Akzent- und Neutralpaletten
- **Abstände**: Padding-, Margin- und Gap-Skalen
- **Bordüren**: Radius- und Breiten-Tokens
- **Schatten**: Höhen- und Tiefen-Tokens
- **Bewegung (Motion)**: Animationen und Übergänge

Diese Entscheidungen werden in der `theme.json` Ihres Themes gespeichert und schaffen so ein zusammenhängendes visuelles System.

## Warum Design System Ästhetik nutzen?

### Konsistenz

Ein Design System gewährleistet:

- Dass für allen Text dieselbe Typografie-Skala verwendet wird
- Dass Farben über die gesamte Website hinweg konsistent eingesetzt werden
- Dass Abstände einem vorhersehbaren Muster folgen
- Dass Animationen einheitlich wirken

### Effizienz

Anstatt Designentscheidungen Seite für Seite zu treffen, können Sie:

- Tokens einmal definieren
- Sie überall anwenden
- Global aktualisieren, indem Sie einen Wert ändern

### Flexibilität

Sie können:

- Ihr gesamtes Design System schnell anpassen
- Mit verschiedenen Ästhetiken experimentieren
- Die Markenkonsistenz wahren und gleichzeitig weiterentwickeln

## Auslösen des Design System Ästhetik Skills

### Manuelle Aktivierung

Sie können den Skill jederzeit starten:

```
"Hilf mir, mein Design System zu verfeinern"
```

oder

```
"Lass uns die Ästhetik meiner Website verbessern"
```

oder

```
"Führe mich durch die Design System Entscheidungen"
```

### Automatische Vorschläge

Agents können den Skill vorschlagen, wenn Sie:

- Nach Designänderungen fragen
- Ein „modernes“ oder „professionelles“ Redesign wünschen
- Die visuelle Konsistenz verbessern möchten
- Sich auf den Launch Ihrer Website vorbereiten

## Der Design System Ästhetik Prozess

### Schritt 1: Typografie

Der Agent fragt nach Ihren Schriftwahlpräferenzen:

```
Was ist Ihr bevorzugter Typografie-Stil?
- Serif (traditionell, elegant)
- Sans-serif (modern, klar)
- Monospace (technisch, Code-fokussiert)

Für Ihre Überschriftenschrift:
- Möchten Sie eine eigene, abgesetzte Überschriftenschrift, oder dieselbe wie für den Fließtext?
- Präferenz: fett, elegant, verspielt, minimal?

Für Ihre Fließtextschrift:
- Die Lesbarkeit ist entscheidend. Bevorzugen Sie:
  - Größerer, luftigerer Text
  - Kompakter, effizienter Text
  - Standardgröße
```

Der Agent definiert dann:

- **Überschriftenschrift (Heading font)**: Primäre Schrift für Titel und Überschriften
- **Fließtextschrift (Body font)**: Schrift für Absätze und Fließtext
- **Monospace-Schrift (Monospace font)**: Schrift für Code und technische Inhalte
- **Größen-Skala (Size scale)**: Vordefinierte Größen (klein, Basis, groß, XL usw.)
- **Stärken-Skala (Weight scale)**: Schriftstärken (regular, medium, bold usw.)
- **Zeilenhöhe (Line height)**: Abstand zwischen den Zeilen zur Verbesserung der Lesbarkeit

### Schritt 2: Farbpalette

```
Lassen Sie uns Ihre Farbpalette definieren.

Primärfarbe (Ihre Markenfarbe):
- Aktuell: [zeigt bestehende Farbe]
- Ändern zu: [Farbauswähler oder Hex-Code]

Sekundärfarbe (unterstützende Farbe):
- Aktuell: [zeigt bestehende Farbe]
- Ändern zu: [Farbauswähler oder Hex-Code]

Akzentfarbe (Hervorhebungen und CTAs):
- Aktuell: [zeigt bestehende Farbe]
- Ändern zu: [Farbauswähler oder Hex-Code]

Neutralpalette (Graustufen für Text, Bordüren, Hintergründe):
- Hell: [Farbe]
- Mittel: [Farbe]
- Dunkel: [Farbe]
```

Der Agent erstellt eine vollständige Palette, einschließlich:

- Primär-, Sekundär- und Akzentfarben
- Neutrale Grautöne (hell, mittel, dunkel)
- Semantische Farben (erfolg, warnung, fehler)
- Hover- und aktiven Zuständen

### Schritt 3: Abstände

```
Wie viel „Atmen“ soll Ihre Seite haben?

Abstands-Skalen-Präferenz:
- Kompakt (enge, effiziente Layouts)
- Normal (ausgewogene Abstände)
- Großzügig (reichlich Weißraum)

Dies betrifft:
- Padding in Buttons und Karten
- Margins zwischen Sektionen
- Gap zwischen Grid-Elementen
```

Der Agent definiert Abstands-Tokens:

- Basis-Einheit (typischerweise 4px oder 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Spezifische Werte für Padding, Margin, Gap

### Schritt 4: Bordüren und Schatten

```
Visuelle Tiefe und Definition:

Border-Radius-Präferenz:
- Scharf (keine Rundung)
- Subtil (kleiner Radius)
- Gerundet (mittlerer Radius)
- Sehr gerundet (großer Radius)

Schatten-Tiefe:
- Flach (keine Schatten)
- Subtil (leichte Schatten)
- Ausgeprägt (starke Schatten)
```

Der Agent erstellt:

- Border-Radius-Tokens (für Buttons, Karten, Inputs)
- Schatten-Tokens für Höhenstufen
- Border-Breiten-Tokens

### Schritt 5: Bewegung und Animation

```
Wie soll sich Ihre Website anfühlen, wenn sie interaktiv ist?

Animations-Präferenz:
- Minimal (keine Animationen)
- Subtil (sanfte Übergänge)
- Verspielt (sichtbare Animationen)

Spezifische Animationen:
- Seitenübergänge: Fade, Slide oder keins?
- Button-Hover: Skalierung, Farbwechsel oder beides?
- Ladezustände: Spinner, Skeleton oder Fortschrittsbalken?
```

Der Agent definiert:

- Übergangsdauern (schnell, normal, langsam)
- Easing-Funktionen (ease-in, ease-out, ease-in-out)
- Animation Keyframes für gängige Interaktionen

## Design System Ästhetik anwenden

### Automatische Anwendung

Nach Abschluss des Skills:

1. Aktualisiert der Agent die `theme.json` Ihres Themes mit allen Tokens
2. Wendet das Design System auf Ihr aktives Theme an
3. Generiert Block-Styles neu, um sie an das neue System anzupassen
4. Aktiviert das aktualisierte Theme

### Manuelle Anwendung

Sie können auch direkt `theme.json` bearbeiten:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Ihr Design System ansehen

### Den Agenten fragen

```
"Zeige mir mein Design System"
```

oder

```
"Was sind meine aktuellen Design Tokens?"
```

Der Agent zeigt Ihnen Ihre Typografie, Farben, Abstände und andere Tokens an.

### theme.json ansehen

Öffnen Sie `/wp-content/themes/[theme-name]/theme.json` in einem Texteditor, um die rohen Token-Definitionen zu sehen.

## Ihr Design System aktualisieren

### Schnelle Updates

Bitten Sie den Agenten um spezifische Änderungen:

```
"Mache die Primärfarbe dunkler"
```

oder

```
"Erhöhe die Abstands-Skala um 20%"
```

oder

```
"Ändere die Überschriftenschrift auf eine Serif"
```

### Komplettes Redesign

Führen Sie den Design System Ästhetik Skill erneut aus:

```
"Lass uns mein gesamtes Design System neu gestalten"
```

Dies führt Sie erneut durch alle Entscheidungen, beginnend mit Ihren aktuellen Werten.

### Teilweise Updates

Aktualisieren Sie spezifische Aspekte:

```
"Aktualisiere nur die Farbpalette, behalte alles andere bei"
```

## Best Practices für Design Systeme

### Konsistenz

- Verwenden Sie überall dieselben Tokens
- Erstellen Sie keine einmaligen Farben oder Größen
- Verweisen Sie auf Tokens, anstatt Werte hart zu codieren

### Benennung

Verwenden Sie klare, semantische Namen:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blau`, `farbe-1`, `haupt`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalierbarkeit

Gestalten Sie Ihr System für Skalierbarkeit:

- Verwenden Sie relative Einheiten (rem, em) anstelle von Pixeln
- Erstellen Sie Skalen (xs, sm, md, lg, xl) anstelle willkürlicher Werte
- Planen Sie zukünftige Erweiterungen ein

### Dokumentation

Dokumentieren Sie Ihr Design System:

- Warum Sie bestimmte Farben gewählt haben
- Wann jeder Token zu verwenden ist
- Ausnahmen und Randfälle

## Häufige Design System Muster

### Modern Minimalistisch

- Sans-serif Typografie (Inter, Helvetica)
- Begrenzte Farbpalette (2–3 Farben)
- Großzügige Abstände
- Subtile Schatten
- Sanfte, schnelle Animationen

### Warm und Freundlich

- Mischung aus Serif und Sans-serif
- Warme Farbpalette (Orange, warme Grautöne)
- Abgerundete Ecken
- Weiche Schatten
- Verspielte Animationen

### Professionell Corporate

- Klare Sans-serif (Roboto, Open Sans)
- Neutrale Palette mit Akzentfarbe
- Strukturierte Abstände
- Minimale Schatten
- Subtile Übergänge

### Kreativ und Kühn

- Charakteristische Typografie
- Kräftige Farbpalette
- Variierte Abstände
- Starke Schatten
- Auffällige Animationen

## Fehlerbehebung (Troubleshooting)

**Meine Design System Änderungen werden nicht angezeigt**
- Löschen Sie den Browser-Cache
- Bauen Sie Ihre Website neu, falls Sie einen statischen Generator verwenden
- Überprüfen Sie, ob `theme.json` gültiges JSON ist
- Verifizieren Sie, dass das Theme aktiv ist

**Die Farben sehen auf verschiedenen Seiten anders aus**
- Überprüfen Sie auf widersprüchliches CSS in Plugins
- Verifizieren Sie, dass alle Seiten dasselbe Theme verwenden
- Löschen Sie alle Caching-Plugins

**Ich möchte zu einem früheren Design System zurückkehren**
- Fragen Sie den Agenten: "Zeige mir meine Design System Historie"
- Bearbeiten Sie `theme.json` manuell auf frühere Werte
- Führen Sie den Skill mit anderen Entscheidungen erneut aus

## Nächste Schritte

Nach der Definition Ihres Design Systems:

1. **Überprüfen Sie Ihre Website**: Besuchen Sie Ihre Seite, um das neue Design zu sehen
2. **Weiter verfeinern**: Passen Sie mit dem Skill erneut Anpassungen vor
3. **Vorlagen erstellen**: Erstellen Sie benutzerdefinierte Block-Vorlagen mithilfe Ihrer Design Tokens
4. **Dokumentieren**: Teilen Sie Ihr Design System mit Ihren Teammitgliedern
