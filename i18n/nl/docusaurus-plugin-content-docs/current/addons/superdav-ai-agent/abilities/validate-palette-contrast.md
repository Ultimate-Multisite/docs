---
title: Valideer paletcontrast
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Controleer Paletcontrast {#validate-palette-contrast}

De functionaliteit **Controleer Paletcontrast** controleert kleurparen in uw ontwerppalet op naleving van WCAG (Web Content Accessibility Guidelines) voordat ze worden toegepast op uw thema.

## Overzicht {#overview}

Deze functionaliteit zorgt ervoor dat het kleurenschema van uw site voldoet aan de toegankelijkheidsnormen door de contrastverhoudingen tussen tekst- en achtergrondkleuren te valideren. Het helpt te voorkomen dat kleurcombinaties moeilijk leesbaar zijn voor gebruikers met visuele beperkingen.

## Input Formaat {#input-format}

De functionaliteit accepteert een kleurenpalet als input:

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

### Parameters {#parameters}

| Parameter | Type | Vereist | Beschrijving |
|-----------|------|---------|-------------|
| `colors` | array | Ja | Array van kleurobjecten met `name` en `hex` eigenschappen |
| `wcag_level` | string | Nee | WCAG-nalevnheidsniveau: "A", "AA" (standaard), of "AAA" |
| `pairs_to_check` | array | Nee | Specifieke kleurparen om te valideren (bijv. `["primary-text", "background-text"]`) |

## Gecontroleerde WCAG Niveaus {#wcag-levels-checked}

De functionaliteit valideert contrastverhoudingen volgens de WCAG-normen:

| Niveau | Normale Tekst | Grote Tekst | Minimaal Verhouding |
|-------|-------------|------------|---------------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normale Tekst** — tekst kleiner dan 18pt (of 14pt vet)
- **Grote Tekst** — tekst van 18pt of groter (of 14pt vet of groter)

## Output Schema {#output-schema}

De functionaliteit retourneert een gedetailleerd validatierapport:

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

### Output Velden {#output-fields}

| Veld | Type | Beschrijving |
|-------|------|-------------|
| `compliant` | boolean | Of het gehele palet voldoet aan het gespecificeerde WCAG-niveau |
| `wcag_level` | string | Het WCAG-niveau dat is gecontroleerd |
| `pairs` | array | Gedetailleerde resultaten voor elk kleurpaar |
| `contrast_ratio` | number | De berekende contrastverhouding (1:1 tot 21:1) |
| `status` | string | "pass" of "fail" voor elk paar |
| `recommendations` | array | Suggesties voor het verbeteren van falende paren |

## Gebruiksvoorbeeld {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Resultaat:**
De functionaliteit valideert alle kleurcombinaties en retourneert:
- ✅ Primary + Text: 5.2:1 verhouding (voldoet aan WCAG AA)
- ✅ Background + Text: 12.1:1 verhouding (voldoet aan WCAG AAA)
- Algemeen: Voldoet aan WCAG AA

## Integratie met Theme Builder {#integration-with-theme-builder}

Wanneer u de selectie van ontwerktijdsbestemming in Theme Builder gebruikt, dan:

1. Analyseert de functionaliteit uw geselecteerde kleurenpalet
2. Controleert alle tekst-achtergrondcombinaties
3. Valideert tegen uw gekozen WCAG-niveau
4. Biedt aanbevelingen voor niet-conforme paren
5. Voorkomt het toepassen van onbereikbare kleurenschema's

## Best Practices {#best-practices}

- **Begin met niveau AA** — WCAG AA is de standaard voor de meeste websites
- **Test voordat u toepast** — valideer uw palet voordat u een ontwerp vastlegt
- **Controleer alle combinaties** — zorg ervoor dat tekst, links en UI-elementen allemaal voldoen aan de normen
- **Overweeg gebruikersvoorkeuren** — sommige gebruikers kunnen extra kleurgevoel hebben
- **Gebruik contrastcheckers** — combineer deze functionaliteit met browserhulpmiddelen voor verificatie

## Falende Paren en Aanbevelingen {#failing-pairs-and-recommendations}

Als een kleurpaar de validatie faalt, geeft de functionaliteit aanbevelingen:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Licht de tekstkleur op naar #ffffff (verhouding zou 5.2:1 zijn)",
    "Verdonker de achtergrondkleur naar #556b2f (verhouding zou 4.8:1 zijn)",
    "Gebruik een andere primaire kleur zoals #4a6b1f (verhouding zou 6.1:1 zijn)"
  ]
}
```

## Gerelateerde Functionaliteiten {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — maak logo's met uw gevalideerde kleurenpalet
- [Create Menu](./create-menu.md) — bouw navigatie met toegankelijke kleuren
