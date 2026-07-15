---
title: Palitranyň kontrastyny barla
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palitranyň kontrastyny barlamak

**Validate Palette Contrast** ukyby dizaýn palitraňyzdaky reňk jübütlerini temaňyza ulanmazdan öň WCAG (Web Content Accessibility Guidelines) laýyklygy boýunça barlaýar.

## Umumy syn {#overview}

Bu ukyp tekst we fon reňkleriniň arasyndaky kontrast gatnaşygyny barlamak arkaly saýtyňyzyň reňk shemasynyň elýeterlilik standartlaryna laýyk gelmegini üpjün edýär. Ol görüş taýdan kynçylygy bolan ulanyjylar üçin okamak kyn bolup biljek reňk utgaşmalarynyň öňüni almaga kömek edýär.

## Giriş formaty {#input-format}

Bu ukyp giriş hökmünde reňk palitrasyny kabul edýär:

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

### Parametrler {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Hawa | `name` we `hex` häsiýetleri bolan reňk obýektleriniň massiwi |
| `wcag_level` | string | Ýok | WCAG laýyklyk derejesi: "A", "AA" (deslapky), ýa-da "AAA" |
| `pairs_to_check` | array | Ýok | Barlamaly anyk reňk jübütleri (mysal üçin, `["primary-text", "background-text"]`) |

## Barlanylýan WCAG derejeleri {#wcag-levels-checked}

Bu ukyp kontrast gatnaşyklaryny WCAG standartlaryna görä barlaýar:

| Dereje | Adaty tekst | Uly tekst | Iň pes gatnaşyk |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Adaty tekst** — 18pt-den kiçi tekst (ýa-da 14pt goýy)
- **Uly tekst** — 18pt ýa-da ondan uly tekst (ýa-da 14pt goýy ýa-da ondan uly)

## Çykyş shemasy {#output-schema}

Bu ukyp jikme-jik barlag hasabatyny gaýtarýar:

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

### Çykyş meýdanlary {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Tutuş palitranyň görkezilen WCAG derejesine laýyk gelýändigi |
| `wcag_level` | string | Barlanan WCAG derejesi |
| `pairs` | array | Her reňk jübüti üçin jikme-jik netijeler |
| `contrast_ratio` | number | Hasaplanan kontrast gatnaşygy (1:1-den 21:1-e çenli) |
| `status` | string | Her jübüt üçin "pass" ýa-da "fail" |
| `recommendations` | array | Şowsuz jübütleri gowulandyrmak üçin teklipler |

## Ulanyş mysaly {#usage-example}

**Prompt:**
```
Reňk palitramyň WCAG AA standartlaryna laýyk gelýändigini barla. Mende esasy reňk #678233, tekst reňki #ffffff we fon #f5f5f5 bar.
```

**Netije:**
Bu ukyp ähli reňk utgaşmalaryny barlaýar we şulary gaýtarýar:
- ✅ Esasy + Tekst: 5.2:1 gatnaşyk (WCAG AA-dan geçýär)
- ✅ Fon + Tekst: 12.1:1 gatnaşyk (WCAG AAA-dan geçýär)
- Umumy: WCAG AA bilen laýyk

## Theme Builder bilen integrasiýa {#integration-with-theme-builder}

Theme Builder-iň dizaýn-ugur saýlawyny ulananyňyzda, Validate Palette Contrast ukyby:

1. Saýlanan reňk palitraňyzy seljerýär
2. Ähli tekst-fon utgaşmalaryny barlaýar
3. Saýlan WCAG derejäňiz boýunça barlaýar
4. Laýyk däl jübütler üçin teklipler berýär
5. Elýeterli bolmadyk reňk shemalarynyň ulanylmagynyň öňüni alýar

## Iň gowy tejribeler {#best-practices}

- **AA derejesinden başlaň** — WCAG AA köp websaýtlar üçin standartdyr
- **Ulanmazdan öň synag ediň** — dizaýna doly geçmezden öň palitraňyzy barlaň
- **Ähli utgaşmalary barlaň** — tekst, baglanyşyklar we UI elementleriniň ählisiniň standartlara laýykdygyna göz ýetiriň
- **Ulanyjy isleglerini göz öňünde tutuň** — käbir ulanyjylarda goşmaça reňk duýgurlygy bolup biler
- **Kontrast barlaýjylaryny ulanyň** — tassyklamak üçin bu ukyby brauzer gurallary bilen birleşdiriň

## Şowsuz jübütler we teklipler {#failing-pairs-and-recommendations}

Eger reňk jübüti barlagdan geçmese, bu ukyp teklipler berýär:

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

## Baglanyşykly ukyplar {#related-abilities}

- [Logo SVG döretmek](./generate-logo-svg.md) — barlanan reňk palitraňyz bilen logolar dörediň
- [Menýu döretmek](./create-menu.md) — elýeterli reňkler bilen nawigasiýa guruň
