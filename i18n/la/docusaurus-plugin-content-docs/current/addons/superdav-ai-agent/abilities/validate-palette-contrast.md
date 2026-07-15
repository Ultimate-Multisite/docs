---
title: Contrarium tabulae colorum valida
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valida Contrarium Paletae

Facultas **Valida Contrarium Paletae** paria colorum in paleta consilii tui explorat ut cum WCAG (Praeceptis Accessibilitatis Contenti Web) congruant, antequam ea themati tuo applicentur.

## Conspectus {#overview}

Haec facultas curat ut schema colorum situs tui normas accessibilitatis impleat, rationes contrarii inter textum et colores fundi validando. Iuvat impedire coniunctiones colorum quae usoribus cum impedimentis visus lectu difficiles esse possint.

## Forma Input {#input-format}

Facultas paletam colorum ut input accipit:

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

### Parametra {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Ita | Series obiectorum coloris cum proprietatibus `name` et `hex` |
| `wcag_level` | string | Non | Gradus congruentiae WCAG: "A", "AA" (praedefinitus), vel "AAA" |
| `pairs_to_check` | array | Non | Paria colorum certa ad validandum (exempli gratia, `["primary-text", "background-text"]`) |

## Gradus WCAG Explorati {#wcag-levels-checked}

Facultas rationes contrarii secundum normas WCAG validat:

| Gradus | Textus Normalis | Textus Magnus | Ratio Minima |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Textus Normalis** — textus minor quam 18pt (vel 14pt crassus)
- **Textus Magnus** — textus 18pt aut maior (vel 14pt crassus aut maior)

## Schema Output {#output-schema}

Facultas relationem validationis accuratam reddit:

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

### Campi Output {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Utrum tota paleta gradum WCAG specificatum impleat |
| `wcag_level` | string | Gradus WCAG qui exploratus est |
| `pairs` | array | Eventus accurati pro singulis paribus colorum |
| `contrast_ratio` | number | Ratio contrarii computata (1:1 ad 21:1) |
| `status` | string | "pass" vel "fail" pro singulis paribus |
| `recommendations` | array | Suasiones ad paria deficientia emendanda |

## Exemplum Usus {#usage-example}

**Prompt:**
```
Explora utrum paleta colorum mea normas WCAG AA impleat. Habeo colorem principalem #678233, colorem textus #ffffff, et fundum #f5f5f5.
```

**Effectus:**
Facultas omnes coniunctiones colorum validat et reddit:
- ✅ Principal + Textus: ratio 5.2:1 (WCAG AA transit)
- ✅ Fundus + Textus: ratio 12.1:1 (WCAG AAA transit)
- Universim: Cum WCAG AA congruit

## Integratio cum Theme Builder {#integration-with-theme-builder}

Cum selectione directionis consilii in Theme Builder uteris, facultas Valida Contrarium Paletae:

1. Paletam colorum a te selectam analysi subicit
2. Omnes coniunctiones textus-fundi explorat
3. Contra gradum WCAG a te electum validat
4. Suasiones pro paribus non congruentibus praebet
5. Impedit ne schemata colorum inaccessibilia applicentur

## Optimae Consuetudines {#best-practices}

- **Incipe a gradu AA** — WCAG AA est norma plurimorum situum interretialium
- **Proba ante applicationem** — valida paletam tuam antequam consilio te committas
- **Explora omnes coniunctiones** — cura ut textus, nexus, et elementa UI omnia normas impleant
- **Considera praeferentias usorum** — nonnulli usores sensibilitatem coloris additam habere possunt
- **Utere exploratoribus contrarii** — coniunge hanc facultatem cum instrumentis navigatoris ad verificationem

## Paria Deficientia et Suasiones {#failing-pairs-and-recommendations}

Si par colorum validatione deficit, facultas suasiones praebet:

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

## Facultates Relatae {#related-abilities}

- [Genera Logo SVG](./generate-logo-svg.md) — crea insignia cum paleta colorum tua valida
- [Crea Menu](./create-menu.md) — construe navigationem cum coloribus accessibilibus
