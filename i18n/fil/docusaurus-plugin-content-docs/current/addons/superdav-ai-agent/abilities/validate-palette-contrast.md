---
title: I-validate ang Kontraste ng Paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Pag-validate ng Contrast ng Kulay (Validate Palette Contrast) {#validate-palette-contrast}

Ang kakayahan na **Validate Palette Contrast** ay sumusuri sa mga pares ng kulay sa iyong design palette para sa pagsunod sa WCAG (Web Content Accessibility Guidelines) bago ito ilapat sa iyong theme.

## Pangkalahatang Ideya (Overview) {#overview}

Tinitiyak ng kakayahang ito na ang color scheme ng iyong site ay sumusunod sa mga pamantayan ng accessibility sa pamamagitan ng pag-validate ng contrast ratios sa pagitan ng kulay ng teksto at background. Nakakatulong ito para maiwasan ang mga kombinasyon ng kulay na maaaring mahirap basahin para sa mga user na may kapansanan sa paningin.

## Format ng Input (Input Format) {#input-format}

Tumatanggap ang kakayahan na ito ng isang color palette bilang input:

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

### Mga Parameter (Parameters) {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ng mga color object na may `name` at `hex` properties |
| `wcag_level` | string | No | WCAG compliance level: "A", "AA" (default), o "AAA" |
| `pairs_to_check` | array | No | Mga tiyak na pares ng kulay na kailangang i-validate (hal. `["primary-text", "background-text"]`) |

## Mga WCAG Level na Sinusuri (WCAG Levels Checked) {#wcag-levels-checked}

Ang kakayahan ay nagba-validate ng contrast ratios ayon sa mga pamantayan ng WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — teksto na mas maliit sa 18pt (o 14pt bold)
- **Large Text** — teksto na 18pt o mas malaki (o 14pt bold o mas malaki)

## Output Schema {#output-schema}

Ang kakayahan ay nagbabalik ng isang detalyadong validation report:

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

### Mga Field ng Output (Output Fields) {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kung ang buong palette ay sumusunod sa tinukoy na WCAG level |
| `wcag_level` | string | Ang WCAG level na sinuri |
| `pairs` | array | Detalyadong resulta para sa bawat pares ng kulay |
| `contrast_ratio` | number | Ang kinakalkulang contrast ratio (1:1 hanggang 21:1) |
| `status` | string | "pass" o "fail" para sa bawat pares |
| `recommendations` | array | Mga mungkahi para mapabuti ang mga pares na hindi pumasa |

## Halimbawa ng Paggamit (Usage Example) {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Resulta:**
Sinusuri ng kakayahan ang lahat ng kombinasyon ng kulay at nagbabalik ng:
- ✅ Primary + Text: 5.2:1 ratio (pumasa sa WCAG AA)
- ✅ Background + Text: 12.1:1 ratio (pumasa sa WCAG AAA)
- Overall: Sumusunod sa WCAG AA

## Integrasyon sa Theme Builder (Integration with Theme Builder) {#integration-with-theme-builder}

Kapag ginagamit ang design-direction selection ng Theme Builder, ang Validate Palette Contrast ability:

1. Sinusuri ang iyong napiling color palette
2. Sinusuri ang lahat ng kombinasyon ng teksto at background
3. Nagba-validate batay sa iyong napiling WCAG level
4. Nagbibigay ng mga rekomendasyon para sa mga pares na hindi sumusunod
5. Pinipigilan ang paglalapat ng mga color scheme na hindi accessible

## Mga Best Practices (Best Practices) {#best-practices}

- **Magsimula sa AA level** — Ang WCAG AA ang pamantayan para sa karamihan ng mga website
- **Mag-test bago mag-apply** — i-validate muna ang iyong palette bago ka mag-commit sa isang design
- **Suriin ang lahat ng kombinasyon** — tiyakin na ang teksto, link, at UI elements ay sumusunod sa pamantayan
- **Isaalang-alang ang kagustuhan ng user** — maaaring may iba pang color sensitivity ang ilang user
- **Gumamit ng contrast checkers** — pagsamahin ang kakayahang ito sa mga browser tools para sa pag-verify

## Mga Hindi Pumasa at Rekomendasyon (Failing Pairs and Recommendations) {#failing-pairs-and-recommendations}

Kung ang isang pares ng kulay ay hindi pumasa sa validation, nagbibigay ang kakayahan ng mga rekomendasyon:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Pagaan ang kulay ng teksto sa #ffffff (ang ratio ay magiging 5.2:1)",
    "Dilimhin ang kulay ng background sa #556b2f (ang ratio ay magiging 4.8:1)",
    "Gumamit ng ibang primary color tulad ng #4a6b1f (ang ratio ay magiging 6.1:1)"
  ]
}
```

## Kaugnay na Abilities (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — gumawa ng mga logo gamit ang iyong validated color palette
- [Create Menu](./create-menu.md) — bumuo ng navigation gamit ang accessible na kulay
