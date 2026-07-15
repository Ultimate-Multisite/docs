---
title: Ṣàyẹ̀wò Ìyàtọ̀ Àwọ̀ Paleti
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Ṣàyẹ̀wò Ìyàtọ̀ Palette

Agbára **Ṣàyẹ̀wò Ìyàtọ̀ Palette** ń ṣàyẹ̀wò àwọn tọkọtaya àwọ̀ nínú palette àpẹrẹ rẹ fún ìbámu WCAG (Web Content Accessibility Guidelines) kí o tó fi wọ́n sí theme rẹ.

## Àkótán {#overview}

Agbára yìí ń rí dájú pé ètò àwọ̀ ojúlé rẹ bá àwọn ìlànà ìráyè wọlé mu nípa ṣíṣàyẹ̀wò àwọn ìwọ̀n ìyàtọ̀ láàárín ọ̀rọ̀ àti àwọn àwọ̀ abẹ́lẹ̀. Ó ń ràn ọ́ lọ́wọ́ láti dènà àwọn àkójọpọ̀ àwọ̀ tí ó lè ṣòro fún àwọn oníṣe tí wọ́n ní àìlera ìríran láti kà.

## Ọ̀nà Àgbéwọlé {#input-format}

Agbára náà ń gba palette àwọ̀ gẹ́gẹ́ bí àgbéwọlé:

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

### Àwọn Parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array àwọn ohun àwọ̀ pẹ̀lú àwọn ohun-ìní `name` àti `hex` |
| `wcag_level` | string | No | Ìpele ìbámu WCAG: "A", "AA" (àìyípadà), tàbí "AAA" |
| `pairs_to_check` | array | No | Àwọn tọkọtaya àwọ̀ pàtó láti ṣàyẹ̀wò (fún àpẹẹrẹ, `["primary-text", "background-text"]`) |

## Àwọn Ìpele WCAG Tí A Ṣàyẹ̀wò {#wcag-levels-checked}

Agbára náà ń ṣàyẹ̀wò àwọn ìwọ̀n ìyàtọ̀ gẹ́gẹ́ bí àwọn ìlànà WCAG:

| Ìpele | Ọ̀rọ̀ Deede | Ọ̀rọ̀ Ńlá | Ìwọ̀n Kéré Jù |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Ọ̀rọ̀ Deede** — ọ̀rọ̀ tí ó kéré ju 18pt (tàbí 14pt bold)
- **Ọ̀rọ̀ Ńlá** — ọ̀rọ̀ 18pt tàbí tóbi ju bẹ́ẹ̀ lọ (tàbí 14pt bold tàbí tóbi ju bẹ́ẹ̀ lọ)

## Àtòjọ Ìjáde {#output-schema}

Agbára náà ń dá ìròyìn ìfọwọ́sí tó kúnrẹ́rẹ́ padà:

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

### Àwọn Field Ìjáde {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Bóyá gbogbo palette bá ìpele WCAG tí a sọ mu |
| `wcag_level` | string | Ìpele WCAG tí a ṣàyẹ̀wò |
| `pairs` | array | Àwọn èsì tó kúnrẹ́rẹ́ fún tọkọtaya àwọ̀ kọ̀ọ̀kan |
| `contrast_ratio` | number | Ìwọ̀n ìyàtọ̀ tí a ṣe iṣirò (1:1 sí 21:1) |
| `status` | string | "pass" tàbí "fail" fún tọkọtaya kọ̀ọ̀kan |
| `recommendations` | array | Àwọn àbá fún fífi àwọn tọkọtaya tí kò yege sunwọ̀n síi |

## Àpẹẹrẹ Lílò {#usage-example}

**Prompt:**
```
Ṣàyẹ̀wò bóyá palette àwọ̀ mi bá àwọn ìlànà WCAG AA mu. Mo ní àwọ̀ primary #678233, àwọ̀ ọ̀rọ̀ #ffffff, àti abẹ́lẹ̀ #f5f5f5.
```

**Èsì:**
Agbára náà ń ṣàyẹ̀wò gbogbo àkójọpọ̀ àwọ̀ ó sì ń dá èyí padà:
- ✅ Primary + Ọ̀rọ̀: ìwọ̀n 5.2:1 (ó yege WCAG AA)
- ✅ Abẹ́lẹ̀ + Ọ̀rọ̀: ìwọ̀n 12.1:1 (ó yege WCAG AAA)
- Lapapọ̀: Ó bá WCAG AA mu

## Ìsopọ̀ pẹ̀lú Theme Builder {#integration-with-theme-builder}

Nígbà tí o bá ń lo yíyàn ìtọ́sọ́nà-àpẹrẹ ti Theme Builder, agbára Ṣàyẹ̀wò Ìyàtọ̀ Palette:

1. Ṣe àtúpalẹ̀ palette àwọ̀ tí o yàn
2. Ṣàyẹ̀wò gbogbo àkójọpọ̀ ọ̀rọ̀-abẹ́lẹ̀
3. Fọwọ́sí rẹ̀ pẹ̀lú ìpele WCAG tí o yàn
4. Pèsè àwọn àbá fún àwọn tọkọtaya tí kò bá ìlànà mu
5. Dènà fífi àwọn ètò àwọ̀ tí kò ṣeé ráyè wọlé sílò

## Àwọn Ìṣe Tó Dára Jù {#best-practices}

- **Bẹ̀rẹ̀ pẹ̀lú ìpele AA** — WCAG AA ni ìlànà fún ọ̀pọ̀lọpọ̀ website
- **Dán wò kí o tó fi sílò** — fọwọ́sí palette rẹ kí o tó fi ara mọ́ àpẹrẹ kan
- **Ṣàyẹ̀wò gbogbo àkójọpọ̀** — rí dájú pé ọ̀rọ̀, àwọn link, àti àwọn èròjà UI gbogbo bá àwọn ìlànà mu
- **Ronú nípa àwọn ìfẹ́ oníṣe** — àwọn oníṣe kan lè ní ìfarapa àwọ̀ àfikún
- **Lo àwọn olùṣàyẹ̀wò ìyàtọ̀** — darapọ̀ agbára yìí mọ́ àwọn irinṣẹ́ browser fún ìjẹ́rìí

## Àwọn Tọkọtaya Tí Kò Yẹge àti Àwọn Àbá {#failing-pairs-and-recommendations}

Bí tọkọtaya àwọ̀ kan bá kùnà ìfọwọ́sí, agbára náà ń pèsè àwọn àbá:

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

## Àwọn Agbára Tó Jọmọ́ {#related-abilities}

- [Ṣẹ̀dá Logo SVG](./generate-logo-svg.md) — ṣẹ̀dá àwọn logo pẹ̀lú palette àwọ̀ rẹ tí a ti fọwọ́sí
- [Ṣẹ̀dá Menu](./create-menu.md) — kọ́ ìlọ kiri pẹ̀lú àwọn àwọ̀ tó ṣeé ráyè wọlé
