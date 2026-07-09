---
title: Logo SVG generieren
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo-SVG generieren {#generate-logo-svg}

Die Funktion **Logo-SVG generieren** ermöglicht es dem Theme Builder, benutzerdefinierte Logo-SVGs direkt in Ihre WordPress-Seite einzubetten und dabei eine automatische, namenraum-sichere Bereinigung durchzuführen.

## Überblick {#overview}

Diese Funktion generiert skalierbare Vektorgrafiken (SVG) für Logos, basierend auf der Markenrichtung und den Design-Präferenzen Ihrer Website. Die erstellten SVGs werden automatisch bereinigt, um sicherzustellen, dass sie für die Verwendung in WordPress sicher sind, während gleichzeitig die visuelle Integrität erhalten bleibt.

## Parameter {#parameters}

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|----------|-------------|
| `site_name` | string | Ja | Der Name der Website, für die das Logo generiert werden soll |
| `style` | string | Ja | Der Design-Stil (z. B. "modern", "klassisch", "minimalistisch", "spielerisch") |
| `colors` | array | Nein | Array von Hex-Farbcodes, die im Logo verwendet werden sollen (z. B. `["#678233", "#ffffff"]`) |
| `width` | number | Nein | SVG-Breite in Pixeln (Standard: 200) |
| `height` | number | Nein | SVG-Höhe in Pixeln (Standard: 200) |
| `include_text` | boolean | Nein | Ob der Seitenname als Text im Logo enthalten sein soll (Standard: true) |

## Ausgabeformat {#output-format}

Die Funktion gibt einen SVG-String mit folgender Struktur zurück:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-Bereinigungsverhalten {#svg-sanitisation-behaviour}

Die generierten SVGs durchlaufen eine automatische, namenraum-sichere Bereinigung, um Folgendes zu gewährleisten:

- **Unsichere Attribute entfernen** — entfernt Event-Handler, Skripte und potenziell gefährliche Attribute
- **Namensräume beibehalten** — behält SVG-Namensräume (xmlns, xlink) für eine korrekte Darstellung bei
- **Struktur validieren** — stellt sicher, dass das SVG den W3C-Standards entspricht
- **Entitäten kodieren** — maskiert Sonderzeichen im Textinhalt korrekt
- **Externe Referenzen entfernen** — entfernt externe Stylesheets und Bildreferenzen

Dadurch ist sichergestellt, dass das SVG direkt in WordPress eingebettet werden kann, ohne dass zusätzliche Bereinigung erforderlich ist.

## Anwendungsbeispiel {#usage-example}

**Prompt:**
```
Generiere ein modernes Logo für mein Tech-Startup namens "CloudSync" mit blauen und weißen Farben.
```

**Ergebnis:**
Die Funktion erstellt ein SVG-Logo, das:
- Den Namen "CloudSync" integriert
- Das angegebene Blau- und Weißfarbschema verwendet
- Moderne Designprinzipien befolgt
- Automatisch bereinigt und einsatzbereit ist

## Integration mit Theme Builder {#integration-with-theme-builder}

Wenn Sie die Design-Richtungs-Auswahl des Theme Builders verwenden, analysiert die Funktion Logo-SVG generieren:

1. Ihre Design-Richtung und Farbpalette
2. Generiert ein benutzerdefiniertes SVG-Logo, das Ihren Präferenzen entspricht
3. Betten das Logo automatisch in den Header/Branding-Bereich Ihrer Website ein
4. Speichert das SVG als benutzerdefiniertes Logo in den WordPress Media

## Best Practices {#best-practices}

- **Klare Stilpräferenzen angeben** — Beschreiben Sie den gewünschten Design-Stil (modern, klassisch, spielerisch usw.)
- **Farben festlegen** — Fügen Sie Ihre Markenfarben für Konsistenz hinzu
- **Darstellung testen** — Überprüfen Sie, ob das Logo auf verschiedenen Bildschirmgrößen korrekt angezeigt wird
- **Weiter anpassen** — Nutzen Sie die Logo-Anpassungswerkzeuge von WordPress, um Größe und Platzierung anzupassen

## Einschränkungen {#limitations}

- SVG-Logos werden als statische Grafiken generiert (nicht animiert)
- Komplexe Logos mit vielen Elementen erfordern möglicherweise manuelle Überarbeitung
- Benutzerdefinierte Schriftarten werden nicht unterstützt; Text verwendet Systemschriftarten
- Sehr große oder sehr kleine Dimensionen können die Qualität beeinträchtigen

## Verwandte Funktionen {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — Überprüft den Farbkontrast für die Barrierefreiheit
- [Create Menu](./create-menu.md) — Erstellt Navigationsmenüs für Ihre Website
