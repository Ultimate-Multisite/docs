---
title: Txheeb Xyuas Kev Sib Piv Xim hauv Pawg Xim
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Xyuas Palette Contrast Kom Raug

Lub peev xwm **Xyuas Palette Contrast Kom Raug** xyuas cov khub xim hauv koj lub palette tsim kom ua raws WCAG (Web Content Accessibility Guidelines) ua ntej muab siv rau koj lub theme.

## Kev Piav Qhia Dav

Lub peev xwm no xyuas kom koj lub site cov xim ua raws cov qauv accessibility los ntawm kev tshuaj xyuas contrast ratios ntawm xim ntawv thiab xim tom qab. Nws pab tiv thaiv cov kev sib xyaw xim uas tej zaum yuav ua rau cov neeg siv uas muaj teeb meem pom kev nyeem nyuaj.

## Hom Ntaub Ntawv Nkag

Lub peev xwm txais ib lub palette xim ua ntaub ntawv nkag:

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

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ntawm cov khoom xim uas muaj `name` thiab `hex` properties |
| `wcag_level` | string | No | Qib ua raws WCAG: "A", "AA" (default), lossis "AAA" |
| `pairs_to_check` | array | No | Cov khub xim tshwj xeeb uas yuav xyuas kom raug (piv txwv, `["primary-text", "background-text"]`) |

## Cov Qib WCAG Uas Tau Xyuas

Lub peev xwm tshuaj xyuas contrast ratios raws li WCAG cov qauv:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Ntawv Ib Txwm** — ntawv me dua 18pt (lossis 14pt bold)
- **Ntawv Loj** — ntawv 18pt lossis loj dua (lossis 14pt bold lossis loj dua)

## Output Schema

Lub peev xwm xa rov qab ib daim ntawv ceeb toom kev xyuas kom raug uas muaj ncauj lus kom ntxaws:

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

### Output Fields

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Seb tag nrho lub palette puas ua raws qib WCAG uas tau teev |
| `wcag_level` | string | Qib WCAG uas tau xyuas |
| `pairs` | array | Cov txiaj ntsig ntxaws rau txhua khub xim |
| `contrast_ratio` | number | Contrast ratio uas tau xam (1:1 txog 21:1) |
| `status` | string | "pass" lossis "fail" rau txhua khub |
| `recommendations` | array | Cov lus pom zoo los txhim kho cov khub uas tsis dhau |

## Piv Txwv Kev Siv

**Prompt:**
```
Xyuas seb kuv lub palette xim puas ua raws WCAG AA cov qauv. Kuv muaj xim primary #678233, xim ntawv #ffffff, thiab xim tom qab #f5f5f5.
```

**Txiaj Ntsig:**
Lub peev xwm xyuas txhua qhov kev sib xyaw xim thiab xa rov qab:
- ✅ Primary + Text: 5.2:1 ratio (dhau WCAG AA)
- ✅ Background + Text: 12.1:1 ratio (dhau WCAG AAA)
- Tag nrho: Ua raws WCAG AA

## Kev Koom Nrog Theme Builder

Thaum siv Theme Builder txoj kev xaiv design-direction, lub peev xwm Validate Palette Contrast:

1. Tshuaj xyuas koj lub palette xim uas koj xaiv
2. Xyuas txhua qhov kev sib xyaw ntawv-tom qab
3. Xyuas kom raug raws qib WCAG uas koj xaiv
4. Muab cov lus pom zoo rau cov khub uas tsis ua raws
5. Tiv thaiv tsis pub siv cov kev teeb xim uas tsis accessible

## Kev Ua Zoo Tshaj

- **Pib nrog qib AA** — WCAG AA yog tus qauv rau feem ntau cov website
- **Sim ua ntej siv** — xyuas koj lub palette kom raug ua ntej cog lus rau ib qho design
- **Xyuas txhua qhov kev sib xyaw** — xyuas kom ntawv, links, thiab UI elements txhua yam ua raws cov qauv
- **Xav txog cov neeg siv cov kev nyiam** — qee tus neeg siv tej zaum yuav muaj kev rhiab rau xim ntxiv
- **Siv contrast checkers** — muab lub peev xwm no koom nrog browser tools rau kev txheeb xyuas

## Cov Khub Tsis Dhau thiab Cov Lus Pom Zoo

Yog ib khub xim tsis dhau kev xyuas kom raug, lub peev xwm muab cov lus pom zoo:

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

## Cov Peev Xwm Muaj Feem Xyuam

- [Tsim Logo SVG](./generate-logo-svg.md) — tsim logos nrog koj lub palette xim uas twb xyuas kom raug lawm
- [Tsim Menu](./create-menu.md) — tsim kev taw qhia nrog cov xim uas accessible
