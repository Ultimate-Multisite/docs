---
title: Dilysu Cyferbyniad y Palet
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Dilysu Cyferbyniad Palet {#validate-palette-contrast}

Mae’r gallu **Dilysu Cyferbyniad Palet** yn gwirio parau lliw yn eich palet dylunio am gydymffurfiaeth â WCAG (Web Content Accessibility Guidelines) cyn eu cymhwyso i’ch thema.

## Trosolwg {#overview}

Mae’r gallu hwn yn sicrhau bod cynllun lliw eich gwefan yn bodloni safonau hygyrchedd drwy ddilysu cymarebau cyferbyniad rhwng testun a lliwiau cefndir. Mae’n helpu i atal cyfuniadau lliw a allai fod yn anodd i ddefnyddwyr ag anableddau gweledol eu darllen.

## Fformat Mewnbwn {#input-format}

Mae’r gallu yn derbyn palet lliw fel mewnbwn:

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

### Paramedrau {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Arae o wrthrychau lliw gyda phriodweddau `name` a `hex` |
| `wcag_level` | string | No | Lefel gydymffurfio WCAG: "A", "AA" (diofyn), neu "AAA" |
| `pairs_to_check` | array | No | Parau lliw penodol i’w dilysu (e.e., `["primary-text", "background-text"]`) |

## Lefelau WCAG a Wirir {#wcag-levels-checked}

Mae’r gallu yn dilysu cymarebau cyferbyniad yn ôl safonau WCAG:

| Lefel | Testun Arferol | Testun Mawr | Cymhareb Isaf |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Testun Arferol** — testun llai na 18pt (neu 14pt trwm)
- **Testun Mawr** — testun 18pt neu fwy (neu 14pt trwm neu fwy)

## Sgema Allbwn {#output-schema}

Mae’r gallu yn dychwelyd adroddiad dilysu manwl:

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

### Meysydd Allbwn {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | A yw’r palet cyfan yn bodloni’r lefel WCAG benodedig |
| `wcag_level` | string | Y lefel WCAG a wiriwyd |
| `pairs` | array | Canlyniadau manwl ar gyfer pob pâr lliw |
| `contrast_ratio` | number | Y gymhareb cyferbyniad a gyfrifwyd (1:1 i 21:1) |
| `status` | string | "pass" neu "fail" ar gyfer pob pâr |
| `recommendations` | array | Awgrymiadau ar gyfer gwella parau sy’n methu |

## Enghraifft Defnydd {#usage-example}

**Anogiad:**
```
Gwiriwch a yw fy mhaleg lliw yn bodloni safonau WCAG AA. Mae gennyf liw cynradd #678233, lliw testun #ffffff, a chefndir #f5f5f5.
```

**Canlyniad:**
Mae’r gallu yn dilysu pob cyfuniad lliw ac yn dychwelyd:
- ✅ Cynradd + Testun: cymhareb 5.2:1 (yn pasio WCAG AA)
- ✅ Cefndir + Testun: cymhareb 12.1:1 (yn pasio WCAG AAA)
- Cyffredinol: Yn gydymffurfiol â WCAG AA

## Integreiddio â Theme Builder {#integration-with-theme-builder}

Wrth ddefnyddio dewis cyfeiriad-dylunio Theme Builder, mae’r gallu Dilysu Cyferbyniad Palet yn:

1. Dadansoddi eich palet lliw a ddewiswyd
2. Gwirio pob cyfuniad testun-cefndir
3. Dilysu yn erbyn eich lefel WCAG ddewisol
4. Darparu argymhellion ar gyfer parau nad ydynt yn gydymffurfiol
5. Atal cymhwyso cynlluniau lliw anhygyrch

## Arferion Gorau {#best-practices}

- **Dechreuwch gyda lefel AA** — WCAG AA yw’r safon ar gyfer y rhan fwyaf o wefannau
- **Profwch cyn cymhwyso** — dilyswch eich palet cyn ymrwymo i ddyluniad
- **Gwiriwch bob cyfuniad** — sicrhewch fod testun, dolenni, ac elfennau UI i gyd yn bodloni safonau
- **Ystyriwch ddewisiadau defnyddwyr** — gall fod gan rai defnyddwyr sensitifrwydd lliw ychwanegol
- **Defnyddiwch wirwyr cyferbyniad** — cyfuno’r gallu hwn ag offer porwr ar gyfer gwirio

## Parau sy’n Methu ac Argymhellion {#failing-pairs-and-recommendations}

Os yw pâr lliw yn methu dilysu, mae’r gallu yn darparu argymhellion:

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

## Galluoedd Cysylltiedig {#related-abilities}

- [Cynhyrchu Logo SVG](./generate-logo-svg.md) — creu logos gyda’ch palet lliw wedi’i ddilysu
- [Creu Dewislen](./create-menu.md) — adeiladu llywio gyda lliwiau hygyrch
