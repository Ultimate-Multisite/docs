---
title: Validasi Kontras Palét
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validasi Kontras Palét {#validate-palette-contrast}

Kamampuh **Validasi Kontras Palét** mariksa pasangan warna dina palét desain anjeun pikeun kasaluyuan jeung WCAG (Web Content Accessibility Guidelines) saméméh dilarapkeun kana téma anjeun.

## Ringkesan {#overview}

Kamampuh ieu mastikeun skéma warna situs anjeun nyumponan standar aksésibilitas ku ngavalidasi rasio kontras antara téks jeung warna latar. Ieu mantuan nyegah kombinasi warna anu bisa hésé dibaca ku pamaké anu boga gangguan paningalan.

## Format Input {#input-format}

Kamampuh ieu narima palét warna minangka input:

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array objék warna kalayan sipat `name` jeung `hex` |
| `wcag_level` | string | No | Tingkat kasaluyuan WCAG: "A", "AA" (standar), atawa "AAA" |
| `pairs_to_check` | array | No | Pasangan warna husus pikeun divalidasi (contona, `["primary-text", "background-text"]`) |

## Tingkat WCAG anu Dipariksa {#wcag-levels-checked}

Kamampuh ieu ngavalidasi rasio kontras numutkeun standar WCAG:

| Tingkat | Téks Normal | Téks Gedé | Rasio Minimum |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Téks Normal** — téks leuwih leutik ti 18pt (atawa 14pt bold)
- **Téks Gedé** — téks 18pt atawa leuwih gedé (atawa 14pt bold atawa leuwih gedé)

## Skéma Output {#output-schema}

Kamampuh ieu mulangkeun laporan validasi anu jéntré:

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

### Widang Output {#output-fields}

| Widang | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Naha sakabéh palét nyumponan tingkat WCAG anu ditangtukeun |
| `wcag_level` | string | Tingkat WCAG anu dipariksa |
| `pairs` | array | Hasil jéntré pikeun unggal pasangan warna |
| `contrast_ratio` | number | Rasio kontras anu diitung (1:1 nepi ka 21:1) |
| `status` | string | "pass" atawa "fail" pikeun unggal pasangan |
| `recommendations` | array | Saran pikeun ningkatkeun pasangan anu gagal |

## Conto Pamakéan {#usage-example}

**Prompt:**
```
Pariksa naha palét warna kuring nyumponan standar WCAG AA. Kuring boga warna utama #678233, warna téks #ffffff, jeung latar #f5f5f5.
```

**Hasil:**
Kamampuh ieu ngavalidasi sakabéh kombinasi warna sarta mulangkeun:
- ✅ Utama + Téks: rasio 5.2:1 (lulus WCAG AA)
- ✅ Latar + Téks: rasio 12.1:1 (lulus WCAG AAA)
- Gemblengna: Saluyu jeung WCAG AA

## Integrasi jeung Theme Builder {#integration-with-theme-builder}

Nalika maké pamilihan arah-desain Theme Builder, kamampuh Validasi Kontras Palét:

1. Nganalisis palét warna anu anjeun pilih
2. Mariksa sakabéh kombinasi téks-latar
3. Ngavalidasi kana tingkat WCAG anu anjeun pilih
4. Nyadiakeun saran pikeun pasangan anu teu saluyu
5. Nyegah dilarapkeunana skéma warna anu teu aksésibel

## Prakték Panghadéna {#best-practices}

- **Mimitian ku tingkat AA** — WCAG AA nyaéta standar pikeun kalolobaan situs wéb
- **Uji saméméh dilarapkeun** — validasi palét anjeun saméméh netepkeun kana hiji desain
- **Pariksa sakabéh kombinasi** — pastikeun téks, tautan, jeung unsur UI kabéh nyumponan standar
- **Pertimbangkeun karesep pamaké** — sababaraha pamaké bisa miboga sénsitipitas warna tambahan
- **Paké pamariksa kontras** — gabungkeun kamampuh ieu jeung parabot panyungsi pikeun verifikasi

## Pasangan anu Gagal jeung Saran {#failing-pairs-and-recommendations}

Lamun pasangan warna gagal validasi, kamampuh ieu nyadiakeun saran:

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

## Kamampuh Patali {#related-abilities}

- [Jieun Logo SVG](./generate-logo-svg.md) — jieun logo kalayan palét warna anu geus divalidasi
- [Jieun Menu](./create-menu.md) — ngawangun navigasi kalayan warna anu aksésibel
