---
title: Tabbatar da Bambancin Tarin Launuka
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Tabbatar da Bambancin Palette {#validate-palette-contrast}

Ƙwarewar **Validate Palette Contrast** tana duba ma'auratan launi a palette na ƙirarka don bin ƙa'idodin WCAG (Web Content Accessibility Guidelines) kafin a yi amfani da su a theme ɗinka.

## Bayani Gabaɗaya {#overview}

Wannan ƙwarewa tana tabbatar da cewa tsarin launin shafinka ya cika ƙa'idodin isa ga kowa ta hanyar tabbatar da ƙimar bambanci tsakanin rubutu da launukan bango. Tana taimakawa hana haɗin launuka da ka iya zama da wahalar karantawa ga masu amfani masu matsalar gani.

## Tsarin Shigarwa {#input-format}

Ƙwarewar tana karɓar palette na launi a matsayin shigarwa:

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

### Sigogi {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array na abubuwan launi masu kaddarorin `name` da `hex` |
| `wcag_level` | string | No | Matsayin bin WCAG: "A", "AA" (default), ko "AAA" |
| `pairs_to_check` | array | No | Takamaiman ma'auratan launi da za a tabbatar (misali, `["primary-text", "background-text"]`) |

## Matakan WCAG da Aka Duba {#wcag-levels-checked}

Ƙwarewar tana tabbatar da ƙimar bambanci bisa ga ƙa'idodin WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Rubutu na Al'ada** — rubutu ƙasa da 18pt (ko 14pt mai kauri)
- **Babban Rubutu** — rubutu 18pt ko fiye (ko 14pt mai kauri ko fiye)

## Tsarin Fitarwa {#output-schema}

Ƙwarewar tana dawo da cikakken rahoton tabbatarwa:

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

### Filayen Fitarwa {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ko dukan palette ɗin ya cika takamaiman matakin WCAG |
| `wcag_level` | string | Matakin WCAG da aka duba |
| `pairs` | array | Cikakken sakamako ga kowane ma'aurin launi |
| `contrast_ratio` | number | Ƙimar bambanci da aka lissafa (1:1 zuwa 21:1) |
| `status` | string | "pass" ko "fail" ga kowane ma'auri |
| `recommendations` | array | Shawarwari don inganta ma'auratan da suka gaza |

## Misalin Amfani {#usage-example}

**Umarni:**
```
Duba ko palette na launina ya cika ƙa'idodin WCAG AA. Ina da launin primary #678233, launin rubutu #ffffff, da bango #f5f5f5.
```

**Sakamako:**
Ƙwarewar tana tabbatar da duk haɗin launuka kuma tana dawo da:
- ✅ Primary + Rubutu: ƙima 5.2:1 (ya wuce WCAG AA)
- ✅ Bango + Rubutu: ƙima 12.1:1 (ya wuce WCAG AAA)
- Gaba ɗaya: Ya dace da WCAG AA

## Haɗawa da Theme Builder {#integration-with-theme-builder}

Lokacin amfani da zaɓin alkiblar-ƙira na Theme Builder, ƙwarewar Validate Palette Contrast tana:

1. Nazarin palette na launi da ka zaɓa
2. Duba duk haɗin rubutu-da-bango
3. Tabbatarwa bisa matakin WCAG da ka zaɓa
4. Ba da shawarwari ga ma'auratan da ba su dace ba
5. Hana amfani da tsarin launi da ba a iya isa gare su

## Kyawawan Hanyoyi {#best-practices}

- **Fara da matakin AA** — WCAG AA shi ne ma'auni ga yawancin shafukan yanar gizo
- **Gwada kafin amfani** — tabbatar da palette ɗinka kafin ka sadaukar da kanka ga ƙira
- **Duba duk haɗuwa** — tabbatar da rubutu, hanyoyin haɗi, da abubuwan UI duk sun cika ƙa'idoji
- **Yi la'akari da fifikon masu amfani** — wasu masu amfani na iya samun ƙarin jin launi
- **Yi amfani da masu duba bambanci** — haɗa wannan ƙwarewa da kayan aikin burauza don tabbatarwa

## Ma'auratan da Suka Gaza da Shawarwari {#failing-pairs-and-recommendations}

Idan ma'aurin launi ya gaza tabbatarwa, ƙwarewar tana ba da shawarwari:

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

## Ƙwarewa Masu Alaƙa {#related-abilities}

- [Ƙirƙiri Logo SVG](./generate-logo-svg.md) — ƙirƙiri tambura da palette na launi da ka tabbatar
- [Ƙirƙiri Menu](./create-menu.md) — gina kewayawa da launuka masu sauƙin isa
