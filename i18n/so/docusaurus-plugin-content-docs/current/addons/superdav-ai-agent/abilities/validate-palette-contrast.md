---
title: Xaqiiji Isbarbardhigga Paletka Midabbada
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Xaqiiji Isbarbardhigga Palette {#validate-palette-contrast}

Awoodda **Validate Palette Contrast** waxay hubisaa lammaanaha midabbada ee palette-ka naqshaddaada si ay u waafaqaan WCAG (Web Content Accessibility Guidelines) ka hor inta aan lagu dabaqin theme-kaaga.

## Dulmar {#overview}

Awooddani waxay xaqiijisaa in nidaamka midabbada ee site-kaaga uu buuxiyo heerarka helitaannimada iyadoo la xaqiijinayo saamiyada isbarbardhigga ee u dhexeeya qoraalka iyo midabbada asalka. Waxay ka caawisaa ka hortagga isku-darka midab ee ku adkaan kara isticmaalayaasha leh naafonimo arag inay akhriyaan.

## Qaabka Gelinta {#input-format}

Awooddu waxay aqbashaa palette midab ahaan gelin ahaan:

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

### Xuduudaha {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ka kooban walxo midab oo leh sifooyinka `name` iyo `hex` |
| `wcag_level` | string | No | Heerka waafaqsanaanta WCAG: "A", "AA" (default), ama "AAA" |
| `pairs_to_check` | array | No | Lammaane midab oo gaar ah oo la xaqiijinayo (tusaale, `["primary-text", "background-text"]`) |

## Heerarka WCAG ee La Hubiyo {#wcag-levels-checked}

Awooddu waxay xaqiijisaa saamiyada isbarbardhigga iyadoo raacaysa heerarka WCAG:

| Heer | Qoraal Caadi ah | Qoraal Weyn | Saamiga Ugu Yar |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Qoraal Caadi ah** — qoraal ka yar 18pt (ama 14pt oo bold ah)
- **Qoraal Weyn** — qoraal 18pt ah ama ka weyn (ama 14pt oo bold ah ama ka weyn)

## Schema-ga Soo-saarka {#output-schema}

Awooddu waxay soo celisaa warbixin xaqiijin oo faahfaahsan:

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

### Goobaha Soo-saarka {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Haddii palette-ka oo dhan uu buuxiyo heerka WCAG ee la cayimay |
| `wcag_level` | string | Heerka WCAG ee la hubiyay |
| `pairs` | array | Natiijooyin faahfaahsan oo loogu talagalay lammaane midab kasta |
| `contrast_ratio` | number | Saamiga isbarbardhigga ee la xisaabiyay (1:1 ilaa 21:1) |
| `status` | string | "pass" ama "fail" lammaane kasta |
| `recommendations` | array | Talooyin lagu hagaajinayo lammaanayaasha fashilmay |

## Tusaalaha Isticmaalka {#usage-example}

**Prompt:**
```
Hubi haddii palette-ka midabbadaydu buuxiyo heerarka WCAG AA. Waxaan haystaa midabka primary #678233, midabka qoraalka #ffffff, iyo asalka #f5f5f5.
```

**Natiijo:**
Awooddu waxay xaqiijisaa dhammaan isku-darrada midabbada waxayna soo celisaa:
- ✅ Primary + Qoraal: saamiga 5.2:1 (wuu gudbaa WCAG AA)
- ✅ Asal + Qoraal: saamiga 12.1:1 (wuu gudbaa WCAG AAA)
- Guud ahaan: Waafaqsan WCAG AA

## Isku-xidhka Theme Builder {#integration-with-theme-builder}

Marka la isticmaalayo xulashada jihada-naqshadda ee Theme Builder, awoodda Validate Palette Contrast waxay:

1. Falanqaysaa palette-ka midabbada ee aad dooratay
2. Hubisaa dhammaan isku-darrada qoraal-asal
3. Ka xaqiijisaa heerka WCAG ee aad dooratay
4. Bixisaa talooyin loogu talagalay lammaanayaasha aan waafaqsanayn
5. Ka hortagtaa in la dabaqo nidaamyo midab oo aan la heli karin

## Hab-dhaqannada Ugu Fiican {#best-practices}

- **Ku bilow heerka AA** — WCAG AA waa heerka caadiga ah ee inta badan mareegaha
- **Tijaabi ka hor intaadan dabaqin** — xaqiiji palette-kaaga ka hor intaadan ku go'an naqshad
- **Hubi dhammaan isku-darrada** — hubi in qoraalka, linkiyada, iyo curiyeyaasha UI dhammaantood buuxiyaan heerarka
- **Tixgeli doorbidyada isticmaalaha** — isticmaalayaasha qaar waxay yeelan karaan xasaasiyad midab oo dheeraad ah
- **Isticmaal hubiyeyaasha isbarbardhigga** — ku dar awooddan qalabka browser-ka si loo xaqiijiyo

## Lammaanayaasha Fashilmay iyo Talooyinka {#failing-pairs-and-recommendations}

Haddii lammaane midab uu ku dhaco xaqiijinta, awooddu waxay bixisaa talooyin:

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

## Awoodaha La Xiriira {#related-abilities}

- [Samee Logo SVG](./generate-logo-svg.md) — samee astaamo adigoo isticmaalaya palette-ka midabbada ee la xaqiijiyay
- [Abuur Menu](./create-menu.md) — dhis navigation leh midabbo la heli karo
