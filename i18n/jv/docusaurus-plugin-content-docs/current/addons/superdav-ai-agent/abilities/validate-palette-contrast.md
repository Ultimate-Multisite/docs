---
title: Validasi Kontras Palet
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validasi Kontras Palette

Kemampuan **Validate Palette Contrast** mriksa pasangan werna ing palette desain sampeyan kanggo kepatuhan WCAG (Web Content Accessibility Guidelines) sadurunge ditrapake menyang theme sampeyan.

## Ringkesan {#overview}

Kemampuan iki mesthekake skema werna situs sampeyan nyukupi standar aksesibilitas kanthi validasi rasio kontras antarane teks lan werna latar mburi. Iki mbantu nyegah kombinasi werna sing bisa angel diwaca dening pangguna sing nduweni gangguan visual.

## Format Input {#input-format}

Kemampuan iki nampa palette werna minangka input:

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
| `colors` | array | Yes | Larik obyek werna kanthi properti `name` lan `hex` |
| `wcag_level` | string | No | Tingkat kepatuhan WCAG: "A", "AA" (gawan), utawa "AAA" |
| `pairs_to_check` | array | No | Pasangan werna tartamtu kanggo divalidasi (umpamane, `["primary-text", "background-text"]`) |

## Tingkat WCAG sing Dipriksa {#wcag-levels-checked}

Kemampuan iki validasi rasio kontras miturut standar WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Teks Normal** — teks luwih cilik tinimbang 18pt (utawa 14pt kandel)
- **Teks Gedhe** — teks 18pt utawa luwih gedhe (utawa 14pt kandel utawa luwih gedhe)

## Skema Output {#output-schema}

Kemampuan iki mbalekake laporan validasi sing rinci:

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

### Field Output {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Apa kabeh palette nyukupi tingkat WCAG sing ditemtokake |
| `wcag_level` | string | Tingkat WCAG sing dipriksa |
| `pairs` | array | Asil rinci kanggo saben pasangan werna |
| `contrast_ratio` | number | Rasio kontras sing diwilang (1:1 nganti 21:1) |
| `status` | string | "pass" utawa "fail" kanggo saben pasangan |
| `recommendations` | array | Saran kanggo nambah pasangan sing gagal |

## Tuladha Panggunaan {#usage-example}

**Prompt:**
```
Priksa apa palette werna ku nyukupi standar WCAG AA. Aku duwe werna utama #678233, werna teks #ffffff, lan latar mburi #f5f5f5.
```

**Asil:**
Kemampuan iki validasi kabeh kombinasi werna lan mbalekake:
- ✅ Utama + Teks: rasio 5.2:1 (lulus WCAG AA)
- ✅ Latar mburi + Teks: rasio 12.1:1 (lulus WCAG AAA)
- Sakabèhé: Patuh karo WCAG AA

## Integrasi karo Theme Builder {#integration-with-theme-builder}

Nalika nggunakake pilihan arah-desain Theme Builder, kemampuan Validate Palette Contrast:

1. Nganalisis palette werna sing sampeyan pilih
2. Mriksa kabeh kombinasi teks-latar mburi
3. Validasi marang tingkat WCAG sing sampeyan pilih
4. Nyedhiyakake rekomendasi kanggo pasangan sing ora patuh
5. Nyegah ngetrapake skema werna sing ora aksesibel

## Praktik Paling Apik {#best-practices}

- **Miwiti nganggo tingkat AA** — WCAG AA iku standar kanggo umume situs web
- **Tes sadurunge ngetrapake** — validasi palette sampeyan sadurunge netepake desain
- **Priksa kabeh kombinasi** — priksa manawa teks, pranala, lan unsur UI kabeh nyukupi standar
- **Timbang preferensi pangguna** — sawetara pangguna bisa duwe sensitivitas werna tambahan
- **Gunakake pemeriksa kontras** — gabungake kemampuan iki karo piranti browser kanggo verifikasi

## Pasangan Gagal lan Rekomendasi {#failing-pairs-and-recommendations}

Yen pasangan werna gagal validasi, kemampuan iki nyedhiyakake rekomendasi:

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

## Kemampuan Gegandhengan {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — gawe logo nganggo palette werna sing wis divalidasi
- [Create Menu](./create-menu.md) — bangun navigasi nganggo werna sing aksesibel
