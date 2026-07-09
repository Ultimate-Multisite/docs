---
title: Overiť kontrast palety
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Overenie kontrastu palety

Schopnosť **Validate Palette Contrast** kontroluje farebné páry vo vašej dizajnovej palete na súlad s WCAG (Web Content Accessibility Guidelines) pred ich použitím vo vašej téme.

## Prehľad

Táto schopnosť zabezpečuje, aby farebná schéma vašej stránky spĺňala štandardy prístupnosti tým, že overuje kontrastné pomery medzi farbami textu a pozadia. Pomáha predchádzať farebným kombináciám, ktoré by mohli byť pre používateľov so zrakovým znevýhodnením ťažko čitateľné.

## Formát vstupu

Schopnosť prijíma ako vstup farebnú paletu:

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

### Parametre

| Parameter | Typ | Povinné | Popis |
|-----------|------|----------|-------------|
| `colors` | array | Áno | Pole farebných objektov s vlastnosťami `name` a `hex` |
| `wcag_level` | string | Nie | Úroveň súladu s WCAG: "A", "AA" (predvolená) alebo "AAA" |
| `pairs_to_check` | array | Nie | Konkrétne farebné páry na overenie (napr. `["primary-text", "background-text"]`) |

## Kontrolované úrovne WCAG

Schopnosť overuje kontrastné pomery podľa štandardov WCAG:

| Úroveň | Normálny text | Veľký text | Minimálny pomer |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normálny text** — text menší ako 18pt (alebo 14pt tučný)
- **Veľký text** — text 18pt alebo väčší (alebo 14pt tučný alebo väčší)

## Schéma výstupu

Schopnosť vracia podrobnú správu o overení:

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

### Výstupné polia

| Pole | Typ | Popis |
|-------|------|-------------|
| `compliant` | boolean | Či celá paleta spĺňa zadanú úroveň WCAG |
| `wcag_level` | string | Úroveň WCAG, ktorá bola skontrolovaná |
| `pairs` | array | Podrobné výsledky pre každý farebný pár |
| `contrast_ratio` | number | Vypočítaný kontrastný pomer (1:1 až 21:1) |
| `status` | string | "pass" alebo "fail" pre každý pár |
| `recommendations` | array | Návrhy na zlepšenie nevyhovujúcich párov |

## Príklad použitia

**Prompt:**
```
Skontrolujte, či moja farebná paleta spĺňa štandardy WCAG AA. Mám primárnu farbu #678233, farbu textu #ffffff a pozadie #f5f5f5.
```

**Výsledok:**
Schopnosť overí všetky farebné kombinácie a vráti:
- ✅ Primárna + text: pomer 5.2:1 (spĺňa WCAG AA)
- ✅ Pozadie + text: pomer 12.1:1 (spĺňa WCAG AAA)
- Celkovo: V súlade s WCAG AA

## Integrácia s Theme Builder

Pri používaní výberu smerovania dizajnu v Theme Builderi schopnosť Validate Palette Contrast:

1. Analyzuje vašu vybranú farebnú paletu
2. Kontroluje všetky kombinácie textu a pozadia
3. Overuje ich podľa vami zvolenej úrovne WCAG
4. Poskytuje odporúčania pre nevyhovujúce páry
5. Zabraňuje použitiu neprístupných farebných schém

## Osvedčené postupy

- **Začnite úrovňou AA** — WCAG AA je štandardom pre väčšinu webových stránok
- **Testujte pred použitím** — overte svoju paletu pred potvrdením dizajnu
- **Skontrolujte všetky kombinácie** — zabezpečte, aby text, odkazy a prvky UI spĺňali štandardy
- **Zohľadnite používateľské preferencie** — niektorí používatelia môžu mať dodatočnú citlivosť na farby
- **Používajte kontroléry kontrastu** — kombinujte túto schopnosť s nástrojmi prehliadača na overenie

## Nevyhovujúce páry a odporúčania

Ak farebný pár neprejde overením, schopnosť poskytne odporúčania:

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

## Súvisiace schopnosti

- [Generovať logo SVG](./generate-logo-svg.md) — vytvorte logá s vašou overenou farebnou paletou
- [Vytvoriť menu](./create-menu.md) — vytvorte navigáciu s prístupnými farbami
