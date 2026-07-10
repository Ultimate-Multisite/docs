---
title: Validera palettkontrast
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validera palettkontrast {#validate-palette-contrast}

Funktionen **Validera palettkontrast** kontrollerar färgpar i din designpalett mot WCAG (Web Content Accessibility Guidelines) för att se till att de fungerar innan de tillämpas på ditt tema.

## Översikt {#overview}

Denna funktion säkerställer att din webbplats färgtema uppfyller tillgänglighetsstandarder genom att validera kontrastförhållandet mellan text- och bakgrundsfärger. Det hjälper till att förhindra färgkombinationer som kan vara svåra för användare med synnedsättning att läsa.

## Inputformat {#input-format}

Funktionen tar emot en färgpalett som input:

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

### Parametrar {#parameters}

| Parameter | Typ | Obligatorisk | Beskrivning |
|-----------|------|----------|-------------|
| `colors` | array | Ja | Array av färgobjekt med egenskaperna `name` och `hex` |
| `wcag_level` | string | Nej | WCAG-efterlevnadsnivå: "A", "AA" (standard), eller "AAA" |
| `pairs_to_check` | array | Nej | Specifika färgpar som ska valideras (t.ex. `["primary-text", "background-text"]`) |

## WCAG-nivåer som kontrolleras {#wcag-levels-checked}

Funktionen validerar kontrastförhållanden enligt WCAG-standarder:

| Nivå | Normal text | Stor text | Minsta förhållande |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal text** — text mindre än 18pt (eller 14pt fetstil)
- **Stor text** — text 18pt eller större (eller 14pt fetstil eller större)

## Output Schema {#output-schema}

Funktionen returnerar en detaljerad valideringsrapport:

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

### Fält i output {#output-fields}

| Fält | Typ | Beskrivning |
|-------|------|-------------|
| `compliant` | boolean | Om hela paletten uppfyller den angivna WCAG-nivån |
| `wcag_level` | string | Den WCAG-nivå som kontrollerades |
| `pairs` | array | Detaljerade resultat för varje färgpar |
| `contrast_ratio` | number | Det beräknade kontrastförhållandet (1:1 till 21:1) |
| `status` | string | "pass" eller "fail" för varje par |
| `recommendations` | array | Förslag på förbättringar för misslyckade par |

## Användningsexempel {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Resultat:**
Funktionen validerar alla färgkombinationer och returnerar:
- ✅ Primär + Text: 5.2:1 förhållande (uppfyller WCAG AA)
- ✅ Bakgrund + Text: 12.1:1 förhållande (uppfyller WCAG AAA)
- Totalt: Uppfyller WCAG AA

## Integration med Theme Builder {#integration-with-theme-builder}

När du använder Theme Builders urval av designriktning:

1. Analyserar din valda färgpalett
2. Kontrollerar alla text-bakgrundskombinationer
3. Validerar mot din valda WCAG-nivå
4. Ger rekommendationer för icke-efterlevande par
5. Förhindrar att du tillämpar otillgängliga färgscheman

## Bästa praxis {#best-practices}

- **Börja med AA-nivån** — WCAG AA är standarden för de flesta webbplatser
- **Testa innan du tillämpar** — validera din palett innan du bestämmer dig för ett designval
- **Kontrollera alla kombinationer** — se till att text, länkar och UI-element alla uppfyller standarderna
- **Tänk på användarpreferenser** — vissa användare kan ha ytterligare färgkänslighet
- **Använd kontrastkontrollrar** — kombinera denna funktion med webbläsartjänster för verifiering

## Misslyckade par och rekommendationer {#failing-pairs-and-recommendations}

Om ett färgpar misslyckas med valideringen ger funktionen rekommendationer:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Ljusna textfärgen till #ffffff (förhållandet skulle bli 5.2:1)",
    "Mörkna bakgrundsfärgen till #556b2f (förhållandet skulle bli 4.8:1)",
    "Använd en annan primär färg som #4a6b1f (förhållandet skulle bli 6.1:1)"
  ]
}
```

## Relaterade funktioner {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — skapa logotyper med din validerade färgpalett
- [Create Menu](./create-menu.md) — bygga navigering med tillgängliga färger
