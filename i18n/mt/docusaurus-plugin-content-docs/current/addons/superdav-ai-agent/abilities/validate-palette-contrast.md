---
title: Ivvalida l-Kuntrast tal-Paletta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Ivvalida l-Kuntrast tal-Palette {#validate-palette-contrast}

Il-kapaċità **Validate Palette Contrast** tiċċekkja pari ta' kuluri fil-palette tad-disinn tiegħek għall-konformità ma' WCAG (Web Content Accessibility Guidelines) qabel ma tapplikahom mat-theme tiegħek.

## Ħarsa Ġenerali {#overview}

Din il-kapaċità tiżgura li l-iskema tal-kuluri tas-sit tiegħek tissodisfa standards ta' aċċessibbiltà billi tivvalida l-proporzjonijiet tal-kuntrast bejn it-test u l-kuluri tal-isfond. Tgħin biex jiġu evitati kombinazzjonijiet ta' kuluri li jistgħu jkunu diffiċli biex jinqraw minn utenti b'indebolimenti viżivi.

## Format tal-Input {#input-format}

Il-kapaċità taċċetta palette ta' kuluri bħala input:

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

### Parametri {#parameters}

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|-----------|------|----------|-------------|
| `colors` | array | Iva | Array ta' oġġetti tal-kulur bi proprjetajiet `name` u `hex` |
| `wcag_level` | string | Le | Livell ta' konformità WCAG: "A", "AA" (default), jew "AAA" |
| `pairs_to_check` | array | Le | Pari speċifiċi ta' kuluri li għandhom jiġu vvalidati (eż., `["primary-text", "background-text"]`) |

## Livelli WCAG Iċċekkjati {#wcag-levels-checked}

Il-kapaċità tivvalida l-proporzjonijiet tal-kuntrast skont l-istandards WCAG:

| Livell | Test Normali | Test Kbir | Proporzjon Minimu |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Test Normali** — test iżgħar minn 18pt (jew 14pt bold)
- **Test Kbir** — test 18pt jew akbar (jew 14pt bold jew akbar)

## Skema tal-Output {#output-schema}

Il-kapaċità tirritorna rapport dettaljat ta' validazzjoni:

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

### Oqsma tal-Output {#output-fields}

| Qasam | Tip | Deskrizzjoni |
|-------|------|-------------|
| `compliant` | boolean | Jekk il-palette kollha tissodisfax il-livell WCAG speċifikat |
| `wcag_level` | string | Il-livell WCAG li ġie ċċekkjat |
| `pairs` | array | Riżultati dettaljati għal kull par ta' kuluri |
| `contrast_ratio` | number | Il-proporzjon tal-kuntrast ikkalkulat (1:1 sa 21:1) |
| `status` | string | "pass" jew "fail" għal kull par |
| `recommendations` | array | Suġġerimenti biex jitjiebu pari li jfallu |

## Eżempju ta' Użu {#usage-example}

**Prompt:**
```
Iċċekkja jekk il-palette tal-kuluri tiegħi tissodisfax l-istandards WCAG AA. Għandi kulur primarju #678233, kulur tat-test #ffffff, u sfond #f5f5f5.
```

**Riżultat:**
Il-kapaċità tivvalida l-kombinazzjonijiet kollha tal-kuluri u tirritorna:
- ✅ Primarju + Test: proporzjon 5.2:1 (jgħaddi WCAG AA)
- ✅ Sfond + Test: proporzjon 12.1:1 (jgħaddi WCAG AAA)
- Ġenerali: Konformi ma' WCAG AA

## Integrazzjoni ma' Theme Builder {#integration-with-theme-builder}

Meta tuża l-għażla tad-direzzjoni tad-disinn ta' Theme Builder, il-kapaċità Validate Palette Contrast:

1. Tanalizza l-palette tal-kuluri magħżula tiegħek
2. Tiċċekkja l-kombinazzjonijiet kollha ta' test u sfond
3. Tivvalida kontra l-livell WCAG magħżul tiegħek
4. Tipprovdi rakkomandazzjonijiet għal pari mhux konformi
5. Tipprevjeni l-applikazzjoni ta' skemi ta' kuluri mhux aċċessibbli

## L-Aħjar Prattiki {#best-practices}

- **Ibda bil-livell AA** — WCAG AA huwa l-istandard għal ħafna mill-websajts
- **Ittestja qabel tapplika** — ivvalida l-palette tiegħek qabel ma timpenja ruħek għal disinn
- **Iċċekkja l-kombinazzjonijiet kollha** — żgura li t-test, il-links, u l-elementi tal-UI kollha jissodisfaw l-istandards
- **Ikkunsidra l-preferenzi tal-utenti** — xi utenti jista' jkollhom sensittività addizzjonali għall-kuluri
- **Uża kontrolluri tal-kuntrast** — għaqqad din il-kapaċità ma' għodod tal-browser għall-verifika

## Pari li Jfallu u Rakkomandazzjonijiet {#failing-pairs-and-recommendations}

Jekk par ta' kuluri jfalli fil-validazzjoni, il-kapaċità tipprovdi rakkomandazzjonijiet:

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

## Kapaċitajiet Relatati {#related-abilities}

- [Iġġenera Logo SVG](./generate-logo-svg.md) — oħloq logos bil-palette tal-kuluri vvalidata tiegħek
- [Oħloq Menu](./create-menu.md) — ibni navigazzjoni b'kuluri aċċessibbli
