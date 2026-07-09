---
title: I-validate ang Kontras sa Paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# I-validate ang Contrast sa Paleta

Ang **I-validate ang Contrast sa Paleta** nga abilidad mosusi sa mga pares sa kolor sa imong paleta sa disenyo alang sa pagsunod sa WCAG (Web Content Accessibility Guidelines) sa wala pa kini i-apply sa imong theme.

## Kinatibuk-ang Tan-aw

Kini nga abilidad nagsiguro nga ang color scheme sa imong site motuman sa mga sumbanan sa accessibility pinaagi sa pag-validate sa mga contrast ratio tali sa teksto ug mga kolor sa background. Makatabang kini sa pagpugong sa mga kombinasyon sa kolor nga mahimong lisod basahon sa mga user nga adunay visual impairments.

## Format sa Input

Ang abilidad modawat og paleta sa kolor isip input:

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

### Mga Parameter

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array sa mga object sa kolor nga adunay `name` ug `hex` nga mga property |
| `wcag_level` | string | No | Level sa pagsunod sa WCAG: "A", "AA" (default), o "AAA" |
| `pairs_to_check` | array | No | Espesipikong mga pares sa kolor nga i-validate (pananglitan, `["primary-text", "background-text"]`) |

## Mga Level sa WCAG nga Gisusi

Gi-validate sa abilidad ang mga contrast ratio sumala sa mga sumbanan sa WCAG:

| Level | Normal nga Teksto | Dakong Teksto | Minimum nga Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal nga Teksto** — teksto nga mas gamay sa 18pt (o 14pt bold)
- **Dakong Teksto** — teksto nga 18pt o mas dako (o 14pt bold o mas dako)

## Schema sa Output

Ang abilidad mobalik og detalyadong report sa pag-validate:

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

### Mga Field sa Output

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kung ang tibuok paleta motuman ba sa gitakdang level sa WCAG |
| `wcag_level` | string | Ang level sa WCAG nga gisusi |
| `pairs` | array | Detalyadong mga resulta alang sa matag pares sa kolor |
| `contrast_ratio` | number | Ang nakalkulang contrast ratio (1:1 hangtod 21:1) |
| `status` | string | "pass" o "fail" alang sa matag pares |
| `recommendations` | array | Mga sugyot alang sa pagpaayo sa mga pares nga napakyas |

## Pananglitan sa Paggamit

**Prompt:**
```
Susiha kung ang akong paleta sa kolor motuman sa mga sumbanan sa WCAG AA. Aduna koy primary color #678233, text color #ffffff, ug background #f5f5f5.
```

**Resulta:**
Gi-validate sa abilidad ang tanang kombinasyon sa kolor ug mobalik og:
- ✅ Primary + Teksto: 5.2:1 ratio (nakapasar sa WCAG AA)
- ✅ Background + Teksto: 12.1:1 ratio (nakapasar sa WCAG AAA)
- Kinatibuk-an: Motuman sa WCAG AA

## Integration uban sa Theme Builder

Kung mogamit sa pagpili sa direksyon sa disenyo sa Theme Builder, ang abilidad nga I-validate ang Contrast sa Paleta:

1. Moanalisar sa imong napiling paleta sa kolor
2. Mosusi sa tanang kombinasyon sa teksto-background
3. Mo-validate batok sa imong napiling level sa WCAG
4. Mohatag og mga rekomendasyon alang sa mga pares nga dili motuman
5. Mopugong sa pag-apply sa mga color scheme nga dili accessible

## Pinakamaayong mga Pamaagi

- **Sugdi sa level nga AA** — ang WCAG AA mao ang sumbanan alang sa kadaghanang website
- **Sulayi sa dili pa i-apply** — i-validate ang imong paleta sa dili pa mopasalig sa usa ka disenyo
- **Susiha ang tanang kombinasyon** — siguroa nga ang teksto, mga link, ug mga elemento sa UI motuman tanan sa mga sumbanan
- **Tagda ang mga gusto sa user** — ang ubang user mahimong adunay dugang nga pagkasensitibo sa kolor
- **Gamita ang mga contrast checker** — isagol kini nga abilidad uban sa mga browser tool alang sa pag-verify

## Mga Pares nga Napakyas ug mga Rekomendasyon

Kung ang usa ka pares sa kolor mapakyas sa pag-validate, ang abilidad mohatag og mga rekomendasyon:

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

## May Kalabotang mga Abilidad

- [Paghimo og Logo SVG](./generate-logo-svg.md) — paghimo og mga logo gamit ang imong na-validate nga paleta sa kolor
- [Paghimo og Menu](./create-menu.md) — paghimo og nabigasyon nga adunay accessible nga mga kolor
