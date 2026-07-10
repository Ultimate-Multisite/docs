---
title: Validar el contraste de la paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validar el Contraste de la Paleta {#validate-palette-contrast}

La capacidad **Validar el Contraste de la Paleta** comprueba los pares de colores en la paleta del teu disseny per a la conformitat amb les WCAG (Web Content Accessibility Guidelines) abans d'aplicar-los al teu tema.

## Resum {#overview}

Aquesta capabilitat assegura que el esquema de colors del teu lloc web complix els estàndards d'accessibilitat validant les relacions de contraste entre els textos i els fons. Ajuda a prevenir combinacions de colors que podrien ser difícils de llegir per als usuaris amb discapacitat visual.

## Format d'entrada {#input-format}

Aquesta capabilitat accepta una paleta de colors com entrada:

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

### Paràmetres {#parameters}

| Paràmetre | Tip | Obligatori | Descripció |
|---|---|---|---|
| `colors` | array | Sí | Array d'objectes de color amb les propietats `name` i `hex` |
| `wcag_level` | string | No | Nivell de conformitat WCAG: "A", "AA" (default) o "AAA" |
| `pairs_to_check` | array | No | Parecs de colors específics a validar (p. ex., `["primary-text", "background-text"]`) |

## Nivells WCAG Comprovats {#wcag-levels-checked}

La capabilitat valida les relacions de contraste segons els estàndards WCAG:

| Nivell | Text Normal | Text Gran | Relació Mínima |
|---|---|---|---|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

La possibilitat retorna un informe de validació detallat:

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

### Campins de Sortida {#output-schema}

| Camp | Tip | Descripció |
|---|---|---|
| `compliant` | boolean | Si tota la paleta compleix el nivell WCAG especificat |
| `wcag_level` | string | El nivell WCAG que s'ha verificat |
| `pairs` | array | Resultats detallats per a cada pare de colors |
| `contrast_ratio` | number | La relació de contrast calculada (1:1 a 21:1) |
| `status` | string | "pass" o "fail" per a cada pare |
| `recommendations` | array | Suggeriments per millorar els pares que fallin |

## Exemple d'Ús {#output-fields}

**Prompt:**
```
Comprueba si la meva paleta de colors compleix els estàndards WCAG AA. Tinc el color primari #678233, el color del text #ffffff i el fons #f5f5f5.
```

**Resultat:**
La capacitat valida totes les combinacions de colors i retorna:
- ✅ Primari + Text: relació de 5,2:1 (passa WCAG AA)
- ✅ Fons + Text: relació de 12,1:1 (passa WCAG AAA)
- General: Compliment amb WCAG AA

## Integració amb Theme Builder {#usage-example}

Quan utilitzes la selecció de direcció de disseny del Theme Builder, la capacitat Validar Paleta Contrast:

1. Analitza la paleta de colors que has seleccionat
2. Comprova totes les combinacions text-fons
3. Valida contra el teu nivell WCAG elegit
4. Ofereix recomanacions per a parells no conformes
5. Previne l'aplicació de esquemes de color inacessibles

## Bontes Pràctiques {#integration-with-theme-builder}

- **Comença amb el nivell AA** — WCAG AA és el estàndard per a la majoria dels webs
- **Prova abans d'aplicar** — valida la teva paleta abans de comprometer-te amb un disseny
- **Comprova totes les combinacions** — assegura que el text, els enllaços i els elements de l'interfície satisfenyen els estàndards
- **Considera les preferències dels usuaris** — alguns usuaris poden tenir sensibilitat addicional al color
- **Utilitza verificadors de contrast** — combina aquesta capacitat amb eines del navegador per a la verificació

## Parells que Fallan i Recomanacions {#best-practices}

Si un parell de colors falla la validació, la capacitat proporciona recomanacions:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Aixeu el color del text a #ffffff (la relació seria de 5,2:1)",
    "Oscureix el color del fons a #556b2f (la relació seria de 4,8:1)",
    "Utilitza un color primari diferent com #4a6b1f (la relació seria de 6,1:1)"
  ]
}
```

## Capacitats Relacionades {#failing-pairs-and-recommendations}

- [Generar Logo SVG](./generate-logo-svg.md) — crea logos amb la teva paleta de colors validada
- [Crear Menú](./create-menu.md) — construeix la navegació amb colors accessibles
