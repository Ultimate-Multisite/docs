---
title: Patunayan ang Kontrast ng Paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# I-validate ang Contrast ng Palette {#validate-palette-contrast}

Sinusuri ng kakayahang **Validate Palette Contrast** ang mga pares ng kulay sa iyong design palette para sa pagsunod sa WCAG (Web Content Accessibility Guidelines) bago ilapat ang mga ito sa iyong theme.

## Pangkalahatang-ideya {#overview}

Tinitiyak ng kakayahang ito na natutugunan ng color scheme ng iyong site ang mga pamantayan sa accessibility sa pamamagitan ng pag-validate ng mga contrast ratio sa pagitan ng mga kulay ng teksto at background. Nakakatulong ito na maiwasan ang mga kombinasyon ng kulay na maaaring mahirap basahin para sa mga user na may kapansanan sa paningin.

## Format ng Input {#input-format}

Tumatanggap ang kakayahan ng color palette bilang input:

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

### Mga Parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ng mga color object na may mga property na `name` at `hex` |
| `wcag_level` | string | No | Antas ng pagsunod sa WCAG: "A", "AA" (default), o "AAA" |
| `pairs_to_check` | array | No | Mga partikular na pares ng kulay na iva-validate (hal., `["primary-text", "background-text"]`) |

## Mga Antas ng WCAG na Sinusuri {#wcag-levels-checked}

Ine-validate ng kakayahan ang mga contrast ratio ayon sa mga pamantayan ng WCAG:

| Antas | Karaniwang Teksto | Malaking Teksto | Minimum na Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Karaniwang Teksto** — tekstong mas maliit sa 18pt (o 14pt na bold)
- **Malaking Teksto** — tekstong 18pt o mas malaki (o 14pt na bold o mas malaki)

## Schema ng Output {#output-schema}

Nagbabalik ang kakayahan ng detalyadong ulat ng validation:

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

### Mga Field ng Output {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kung natutugunan ng buong palette ang tinukoy na antas ng WCAG |
| `wcag_level` | string | Ang antas ng WCAG na sinuri |
| `pairs` | array | Detalyadong mga resulta para sa bawat pares ng kulay |
| `contrast_ratio` | number | Ang nakalkulang contrast ratio (1:1 hanggang 21:1) |
| `status` | string | "pass" o "fail" para sa bawat pares |
| `recommendations` | array | Mga mungkahi para mapabuti ang mga pares na bumabagsak |

## Halimbawa ng Paggamit {#usage-example}

**Prompt:**
```
Suriin kung natutugunan ng aking color palette ang mga pamantayan ng WCAG AA. Mayroon akong primary color na #678233, text color na #ffffff, at background na #f5f5f5.
```

**Resulta:**
Ine-validate ng kakayahan ang lahat ng kombinasyon ng kulay at nagbabalik ng:
- ✅ Primary + Teksto: 5.2:1 ratio (pumapasa sa WCAG AA)
- ✅ Background + Teksto: 12.1:1 ratio (pumapasa sa WCAG AAA)
- Kabuuan: Sumusunod sa WCAG AA

## Integrasyon sa Theme Builder {#integration-with-theme-builder}

Kapag ginagamit ang pagpili ng design-direction ng Theme Builder, ang kakayahang Validate Palette Contrast ay:

1. Sinusuri ang iyong napiling color palette
2. Sinusuri ang lahat ng kombinasyon ng teksto at background
3. Nagva-validate laban sa iyong napiling antas ng WCAG
4. Nagbibigay ng mga rekomendasyon para sa mga pares na hindi sumusunod
5. Pinipigilan ang paglalapat ng mga color scheme na hindi accessible

## Pinakamahuhusay na Kasanayan {#best-practices}

- **Magsimula sa antas na AA** — Ang WCAG AA ang pamantayan para sa karamihan ng mga website
- **Subukan bago ilapat** — i-validate ang iyong palette bago mag-commit sa isang design
- **Suriin ang lahat ng kombinasyon** — tiyaking natutugunan ng teksto, mga link, at mga elemento ng UI ang lahat ng pamantayan
- **Isaalang-alang ang mga kagustuhan ng user** — maaaring may karagdagang sensitivity sa kulay ang ilang user
- **Gumamit ng mga contrast checker** — pagsamahin ang kakayahang ito sa mga browser tool para sa beripikasyon

## Mga Pares na Bumabagsak at Mga Rekomendasyon {#failing-pairs-and-recommendations}

Kung bumagsak sa validation ang isang pares ng kulay, nagbibigay ang kakayahan ng mga rekomendasyon:

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

## Mga Kaugnay na Kakayahan {#related-abilities}

- [Bumuo ng Logo SVG](./generate-logo-svg.md) — gumawa ng mga logo gamit ang iyong na-validate na color palette
- [Gumawa ng Menu](./create-menu.md) — bumuo ng nabigasyon gamit ang mga accessible na kulay
