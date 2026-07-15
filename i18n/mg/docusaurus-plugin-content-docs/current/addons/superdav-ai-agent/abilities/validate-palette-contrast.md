---
title: Hamarino ny fifanoheran'ny paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Hamarino ny Fifanoheran’ny Paleta

Ny fahaiza-manao **Validate Palette Contrast** dia manamarina ny tsiroaroan-loko ao amin’ny paletan’ny endrikao raha mifanaraka amin’ny WCAG (Web Content Accessibility Guidelines) alohan’ny hampiharana azy amin’ny theme-nao.

## Topimaso {#overview}

Ity fahaiza-manao ity dia miantoka fa mahafeno ny fenitry ny fahazoana idirana ny rafitra lokon’ny tranokalanao amin’ny fanamarinana ny tahan’ny fifanoherana eo amin’ny lokon’ny soratra sy ny lokon’ny afara. Manampy hisoroka fitambaran-loko mety ho sarotra vakiana ho an’ny mpampiasa manana fahasembanana ara-pahitana izany.

## Endrika Fampidirana {#input-format}

Mandray paleta loko ho fampidirana ilay fahaiza-manao:

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

### Masontsivana {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array an’ireo object loko misy properties `name` sy `hex` |
| `wcag_level` | string | No | Haavon’ny fanarahana WCAG: "A", "AA" (default), na "AAA" |
| `pairs_to_check` | array | No | Tsiroaroan-loko manokana hohamarinina (oh., `["primary-text", "background-text"]`) |

## Haavon’ny WCAG Hamarihina {#wcag-levels-checked}

Manamarina ny tahan’ny fifanoherana araka ny fenitry ny WCAG ilay fahaiza-manao:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Soratra Mahazatra** — soratra kely kokoa noho ny 18pt (na 14pt bold)
- **Soratra Lehibe** — soratra 18pt na lehibe kokoa (na 14pt bold na lehibe kokoa)

## Skeman’ny Vokatra {#output-schema}

Mamerina tatitra fanamarinana amin’ny antsipiriany ilay fahaiza-manao:

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

### Sahan’ny Vokatra {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Na mahafeno ny haavon’ny WCAG voafaritra ny paleta manontolo |
| `wcag_level` | string | Ny haavon’ny WCAG izay nohamarinina |
| `pairs` | array | Vokatra amin’ny antsipiriany ho an’ny tsiroaroan-loko tsirairay |
| `contrast_ratio` | number | Ny tahan’ny fifanoherana nokajiana (1:1 hatramin’ny 21:1) |
| `status` | string | "pass" na "fail" ho an’ny tsiroaroa tsirairay |
| `recommendations` | array | Soso-kevitra hanatsarana ireo tsiroaroa tsy mahomby |

## Ohatra Fampiasana {#usage-example}

**Prompt:**
```
Hamarino raha mahafeno ny fenitra WCAG AA ny paletan-lokoko. Manana loko fototra #678233 aho, loko soratra #ffffff, ary afara #f5f5f5.
```

**Vokatra:**
Manamarina ny fitambaran-loko rehetra ilay fahaiza-manao ary mamerina:
- ✅ Fototra + Soratra: tahan’ny 5.2:1 (mahafeno WCAG AA)
- ✅ Afara + Soratra: tahan’ny 12.1:1 (mahafeno WCAG AAA)
- Amin’ny ankapobeny: Mifanaraka amin’ny WCAG AA

## Fampidirana amin’ny Theme Builder {#integration-with-theme-builder}

Rehefa mampiasa ny fifantenana lalan’endrika ao amin’ny Theme Builder, ny fahaiza-manao Validate Palette Contrast dia:

1. Mandinika ny paletan-loko nofidinao
2. Manamarina ny fitambaran’ny soratra sy afara rehetra
3. Manamarina mifanaraka amin’ny haavon’ny WCAG nofidinao
4. Manome soso-kevitra ho an’ireo tsiroaroa tsy mifanaraka
5. Misoroka ny fampiharana rafitra loko tsy mora idirana

## Fomba Fanao Tsara Indrindra {#best-practices}

- **Atombohy amin’ny haavo AA** — WCAG AA no fenitra ho an’ny ankamaroan’ny tranonkala
- **Andramo alohan’ny hampiharana** — hamarino ny paletanao alohan’ny hirosoana amin’ny endrika iray
- **Hamarino ny fitambarana rehetra** — ataovy azo antoka fa mahafeno fenitra avokoa ny soratra, rohy, ary singa UI
- **Eritrereto ny safidin’ny mpampiasa** — mety hanana fahatsapana loko fanampiny ny mpampiasa sasany
- **Mampiasà mpanamarina fifanoherana** — ampifandraiso amin’ny fitaovan’ny navigateur ity fahaiza-manao ity ho fanamarinana

## Tsiroaroa Tsy Mahomby sy Soso-kevitra {#failing-pairs-and-recommendations}

Raha tsy mahomby amin’ny fanamarinana ny tsiroaroan-loko iray, dia manome soso-kevitra ilay fahaiza-manao:

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

## Fahaiza-manao Mifandray {#related-abilities}

- [Mamorona Logo SVG](./generate-logo-svg.md) — mamorona logo amin’ny paletan-loko voamarinao
- [Mamorona Menu](./create-menu.md) — manorina fitetezana amin’ny loko mora idirana
