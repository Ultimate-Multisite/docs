---
title: Palette-Kontrast validieren
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palette-Kontrast validieren {#validate-palette-contrast}

Die **Palette-Kontrast-Validierung** prüft Farbkombinationen in Ihrer Designpalette auf WCAG-Konformität (Web Content Accessibility Guidelines), bevor Sie diese auf Ihr Theme anwenden.

## Überblick {#overview}

Diese Funktion stellt sicher, dass das Farbschema Ihrer Website die Barrierefreiheitsstandards erfüllt, indem sie das Kontrastverhältnis zwischen Text- und Hintergrundfarben überprüft. Sie hilft, Farbkombinationen zu vermeiden, die für Benutzer mit Sehbehinderungen schwer lesbar sein könnten.

## Eingabeformat {#input-format}

Die Funktion erwartet eine Farbpalette als Eingabe:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parameter {#parameters}

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|----------|-------------|
| `colors` | array | Ja | Array von Farbobjekten mit den Eigenschaften `name` und `hex` |
| `wcag_level` | string | Nein | WCAG-Konformitätsstufe: "A", "AA" (Standard) oder "AAA" |
| `pairs_to_check` | array | Nein | Spezifische Farbkombinationen zur Validierung (z. B. `["primary-text", "background-text"]`) |

## Überprüfte WCAG-Stufen {#wcag-levels-checked}

Die Funktion validiert das Kontrastverhältnis gemäß den WCAG-Standards:

| Stufe | Normaler Text | Großer Text | Mindestverhältnis |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normaler Text** — Text kleiner als 18pt (oder 14pt fett)
- **Großer Text** — Text von 18pt oder größer (oder 14pt fett oder größer)

## Ausgabe-Schema {#output-schema}

Die Funktion gibt einen detaillierten Validierungsbericht zurück:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Ausgabe-Felder {#output-fields}

| Feld | Typ | Beschreibung |
|-------|------|-------------|
| `compliant` | boolean | Ob die gesamte Palette die festgelegte WCAG-Stufe erfüllt |
| `wcag_level` | string | Die überprüfte WCAG-Stufe |
| `pairs` | array | Detaillierte Ergebnisse für jedes Farbkombination |
| `contrast_ratio` | number | Das berechnete Kontrastverhältnis (1:1 bis 21:1) |
| `status` | string | "pass" oder "fail" für jedes Paar |
| `recommendations` | array | Vorschläge zur Verbesserung fehlgeschlagener Paare |

## Anwendungsbeispiel {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Ergebnis:**
Die Funktion validiert alle Farbkombinationen und gibt zurück:
- ✅ Primary + Text: 5.2:1 Verhältnis (bestanden WCAG AA)
- ✅ Background + Text: 12.1:1 Verhältnis (bestanden WCAG AAA)
- Insgesamt: Konform mit WCAG AA

## Integration mit Theme Builder {#integration-with-theme-builder}

Wenn Sie bei der Auswahl der Designrichtung im Theme Builder sind, analysiert die Palette-Kontrast-Validierung:

1. Ihre ausgewählte Farbpalette
2. Alle Text-Hintergrund-Kombinationen
3. Validiert anhand Ihrer gewählten WCAG-Stufe
4. Gibt Empfehlungen für nicht konforme Paare
5. Verhindert die Anwendung nicht zugänglicher Farbschemata

## Best Practices {#best-practices}

- **Beginnen Sie mit AA** — WCAG AA ist der Standard für die meisten Websites
- **Vor der Anwendung testen** — Validieren Sie Ihre Palette, bevor Sie sich auf ein Design festlegen
- **Alle Kombinationen prüfen** — Stellen Sie sicher, dass Text, Links und UI-Elemente alle Standards erfüllen
- **Nutzerpräferenzen berücksichtigen** — Einige Benutzer können zusätzliche Farbsensibilitäten haben
- **Kontrastprüfer verwenden** — Kombinieren Sie diese Funktion mit Browser-Tools zur Verifizierung

## Fehlgeschlagene Paare und Empfehlungen {#failing-pairs-and-recommendations}

Wenn ein Farbkombination die Validierung nicht besteht, gibt die Funktion Empfehlungen:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Machen Sie die Textfarbe heller, z. B. auf #ffffff (Verhältnis wäre 5.2:1)",
    "Machen Sie die Hintergrundfarbe dunkler, z. B. auf #556b2f (Verhältnis wäre 4.8:1)",
    "Verwenden Sie eine andere Primärfarbe wie #4a6b1f (Verhältnis wäre 6.1:1)"
  ]
}
```

## Verwandte Funktionen {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — Erstellen Sie Logos mit Ihrer validierten Farbpalette
- [Create Menu](./create-menu.md) — Erstellen Sie Navigation mit zugänglichen Farben
