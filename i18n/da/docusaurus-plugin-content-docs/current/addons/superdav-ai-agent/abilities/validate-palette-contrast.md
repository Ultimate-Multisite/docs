---
title: Valider palettens kontrast
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valider palettekontrast

Funktionen **Validate Palette Contrast** kontrollerer farvepar i din designpalette for overholdelse af WCAG (Web Content Accessibility Guidelines), før de anvendes på dit theme.

## Oversigt

Denne funktion sikrer, at dit websteds farveskema opfylder tilgængelighedsstandarder ved at validere kontrastforhold mellem tekst- og baggrundsfarver. Den hjælper med at forhindre farvekombinationer, der kan være svære at læse for brugere med synsnedsættelser.

## Inputformat

Funktionen accepterer en farvepalette som input:

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

### Parametre

| Parameter | Type | Påkrævet | Beskrivelse |
|-----------|------|----------|-------------|
| `colors` | array | Ja | Array af farveobjekter med egenskaberne `name` og `hex` |
| `wcag_level` | string | Nej | WCAG-overholdelsesniveau: "A", "AA" (standard) eller "AAA" |
| `pairs_to_check` | array | Nej | Specifikke farvepar, der skal valideres (f.eks. `["primary-text", "background-text"]`) |

## Kontrollerede WCAG-niveauer

Funktionen validerer kontrastforhold i henhold til WCAG-standarder:

| Niveau | Normal tekst | Stor tekst | Minimumsforhold |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal tekst** — tekst mindre end 18pt (eller 14pt fed)
- **Stor tekst** — tekst på 18pt eller større (eller 14pt fed eller større)

## Outputskema

Funktionen returnerer en detaljeret valideringsrapport:

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

### Outputfelter

| Felt | Type | Beskrivelse |
|-------|------|-------------|
| `compliant` | boolean | Om hele paletten opfylder det angivne WCAG-niveau |
| `wcag_level` | string | Det WCAG-niveau, der blev kontrolleret |
| `pairs` | array | Detaljerede resultater for hvert farvepar |
| `contrast_ratio` | number | Det beregnede kontrastforhold (1:1 til 21:1) |
| `status` | string | "pass" eller "fail" for hvert par |
| `recommendations` | array | Forslag til forbedring af par, der ikke består |

## Brugseksempel

**Prompt:**
```
Kontrollér, om min farvepalette opfylder WCAG AA-standarder. Jeg har primærfarven #678233, tekstfarven #ffffff og baggrunden #f5f5f5.
```

**Resultat:**
Funktionen validerer alle farvekombinationer og returnerer:
- ✅ Primær + tekst: forhold 5.2:1 (består WCAG AA)
- ✅ Baggrund + tekst: forhold 12.1:1 (består WCAG AAA)
- Samlet: Overholder WCAG AA

## Integration med Theme Builder

Når du bruger Theme Builders valg af designretning, gør funktionen Validate Palette Contrast følgende:

1. Analyserer din valgte farvepalette
2. Kontrollerer alle tekst-baggrund-kombinationer
3. Validerer i forhold til dit valgte WCAG-niveau
4. Giver anbefalinger til par, der ikke overholder kravene
5. Forhindrer anvendelse af utilgængelige farveskemaer

## Bedste praksis

- **Start med AA-niveau** — WCAG AA er standarden for de fleste websites
- **Test før anvendelse** — valider din palette, før du forpligter dig til et design
- **Kontrollér alle kombinationer** — sørg for, at tekst, links og UI-elementer alle opfylder standarderne
- **Tag hensyn til brugerpræferencer** — nogle brugere kan have yderligere farvefølsomhed
- **Brug kontrastkontrollører** — kombiner denne funktion med browserværktøjer til verificering

## Par, der ikke består, og anbefalinger

Hvis et farvepar ikke består valideringen, giver funktionen anbefalinger:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Relaterede funktioner

- [Generer logo-SVG](./generate-logo-svg.md) — opret logoer med din validerede farvepalette
- [Opret menu](./create-menu.md) — byg navigation med tilgængelige farver
