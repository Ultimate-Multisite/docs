---
title: Dearbhaich Iomsgaradh na Paileid
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Dearbhaich Iomsgaradh na Palette {#validate-palette-contrast}

Bidh comas **Validate Palette Contrast** a’ sgrùdadh paidhrichean dhathan sa phalette dealbhaidh agad airson gèilleadh ri WCAG (Stiùiridhean Ruigsinneachd Susbaint Lìn) mus cuir thu an sàs iad san theme agad.

## Sealladh Coitcheann {#overview}

Nì an comas seo cinnteach gu bheil sgeama dhathan na làraich agad a’ coinneachadh ri inbhean ruigsinneachd le bhith a’ dearbhadh co-mheasan iomsgaraidh eadar teacsa agus dathan cùl-raoin. Cuidichidh e gus measgachaidhean dhathan a sheachnadh a dh’fhaodadh a bhith doirbh do luchd-cleachdaidh le duilgheadasan lèirsinn a leughadh.

## Fòrmat Ion-chuir {#input-format}

Gabhaidh an comas ri palette dhathan mar ion-chur:

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

### Paramadairean {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Tha | Array de nithean dath le feartan `name` agus `hex` |
| `wcag_level` | string | Chan eil | Ìre gèillidh WCAG: "A", "AA" (bunaiteach), no "AAA" |
| `pairs_to_check` | array | Chan eil | Paidhrichean dath sònraichte ri dhearbhadh (m.e., `["primary-text", "background-text"]`) |

## Ìrean WCAG a Thèid a Sgrùdadh {#wcag-levels-checked}

Dearbhaidh an comas co-mheasan iomsgaraidh a rèir inbhean WCAG:

| Ìre | Teacsa Àbhaisteach | Teacsa Mòr | Co-mheas As Ìsle |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Teacsa Àbhaisteach** — teacsa nas lugha na 18pt (no 14pt trom)
- **Teacsa Mòr** — teacsa 18pt no nas motha (no 14pt trom no nas motha)

## Sgeama Toraidh {#output-schema}

Tillidh an comas aithisg dearbhaidh mhionaideach:

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

### Raointean Toraidh {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | A bheil am palette gu lèir a’ coinneachadh ris an ìre WCAG shònraichte |
| `wcag_level` | string | An ìre WCAG a chaidh a sgrùdadh |
| `pairs` | array | Toraidhean mionaideach airson gach paidhir dhathan |
| `contrast_ratio` | number | An co-mheas iomsgaraidh a chaidh obrachadh a-mach (1:1 gu 21:1) |
| `status` | string | "pass" no "fail" airson gach paidhir |
| `recommendations` | array | Molaidhean airson paidhrichean a dh’fhàillig a leasachadh |

## Eisimpleir Cleachdaidh {#usage-example}

**Prompt:**
```
Thoir sùil a bheil am palette dhathan agam a’ coinneachadh ri inbhean WCAG AA. Tha prìomh dhath #678233 agam, dath teacsa #ffffff, agus cùl-raon #f5f5f5.
```

**Toradh:**
Dearbhaidh an comas a h-uile measgachadh dath agus tillidh e:
- ✅ Prìomh + Teacsa: co-mheas 5.2:1 (a’ dol seachad air WCAG AA)
- ✅ Cùl-raon + Teacsa: co-mheas 12.1:1 (a’ dol seachad air WCAG AAA)
- Uile gu lèir: A’ gèilleadh ri WCAG AA

## Amalachadh le Theme Builder {#integration-with-theme-builder}

Nuair a bhios tu a’ cleachdadh taghadh stiùireadh-dealbhaidh Theme Builder, nì comas Validate Palette Contrast:

1. Mion-sgrùdadh air a’ phalette dhathan a thagh thu
2. Sgrùdadh air a h-uile measgachadh teacsa-cùl-raoin
3. Dearbhadh an aghaidh na h-ìre WCAG a thagh thu
4. Molaidhean a thoirt seachad airson paidhrichean nach eil a’ gèilleadh
5. Casg a chur air sgeamaichean dhathan neo-ruigsinneach a chur an sàs

## Cleachdaidhean As Fheàrr {#best-practices}

- **Tòisich le ìre AA** — ’s e WCAG AA an inbhe airson a’ mhòr-chuid de làraichean-lìn
- **Dèan deuchainn mus cuir thu an sàs** — dearbhaich am palette agad mus geall thu ri dealbhadh
- **Thoir sùil air a h-uile measgachadh** — dèan cinnteach gu bheil teacsa, ceanglaichean, agus eileamaidean UI uile a’ coinneachadh ri inbhean
- **Beachdaich air roghainnean luchd-cleachdaidh** — faodaidh mothalachd dhathan a bharrachd a bhith aig cuid de luchd-cleachdaidh
- **Cleachd sgrùdairean iomsgaraidh** — cuir an comas seo còmhla ri innealan brabhsair airson dearbhadh

## Paidhrichean a Dh’fhàillig agus Molaidhean {#failing-pairs-and-recommendations}

Ma dh’fhàilligeas paidhir dhathan air dearbhadh, bheir an comas molaidhean seachad:

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

## Comasan Co-cheangailte {#related-abilities}

- [Cruthaich Logo SVG](./generate-logo-svg.md) — cruthaich suaicheantasan leis a’ phalette dhathan dhearbhaichte agad
- [Cruthaich Clàr-taice](./create-menu.md) — tog seòladh le dathan ruigsinneach
