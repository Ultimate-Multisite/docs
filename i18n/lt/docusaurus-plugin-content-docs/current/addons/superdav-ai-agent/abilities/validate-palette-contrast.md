---
title: Patikrinti paletės kontrastą
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Paletės kontrasto patikrinimas {#validate-palette-contrast}

**Validate Palette Contrast** gebėjimas patikrina spalvų poras jūsų dizaino paletėje pagal WCAG (Web Content Accessibility Guidelines) atitiktį prieš pritaikant jas jūsų temai.

## Apžvalga {#overview}

Šis gebėjimas užtikrina, kad jūsų svetainės spalvų schema atitiktų prieinamumo standartus, patikrindamas kontrasto santykius tarp teksto ir fono spalvų. Jis padeda išvengti spalvų derinių, kuriuos gali būti sunku perskaityti naudotojams, turintiems regos sutrikimų.

## Įvesties formatas {#input-format}

Gebėjimas kaip įvestį priima spalvų paletę:

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

### Parametrai {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Spalvų objektų masyvas su `name` ir `hex` savybėmis |
| `wcag_level` | string | No | WCAG atitikties lygis: "A", "AA" (numatytasis) arba "AAA" |
| `pairs_to_check` | array | No | Konkrečios spalvų poros, kurias reikia patikrinti (pvz., `["primary-text", "background-text"]`) |

## Tikrinami WCAG lygiai {#wcag-levels-checked}

Gebėjimas patikrina kontrasto santykius pagal WCAG standartus:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Įprastas tekstas** — tekstas, mažesnis nei 18pt (arba 14pt paryškintas)
- **Didelis tekstas** — 18pt arba didesnis tekstas (arba 14pt paryškintas ar didesnis)

## Išvesties schema {#output-schema}

Gebėjimas grąžina išsamią patikrinimo ataskaitą:

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

### Išvesties laukai {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ar visa paletė atitinka nurodytą WCAG lygį |
| `wcag_level` | string | WCAG lygis, kuris buvo patikrintas |
| `pairs` | array | Išsamūs kiekvienos spalvų poros rezultatai |
| `contrast_ratio` | number | Apskaičiuotas kontrasto santykis (nuo 1:1 iki 21:1) |
| `status` | string | "pass" arba "fail" kiekvienai porai |
| `recommendations` | array | Pasiūlymai, kaip pagerinti neatitinkančias poras |

## Naudojimo pavyzdys {#usage-example}

**Užklausa:**
```
Patikrinkite, ar mano spalvų paletė atitinka WCAG AA standartus. Turiu pagrindinę spalvą #678233, teksto spalvą #ffffff ir foną #f5f5f5.
```

**Rezultatas:**
Gebėjimas patikrina visus spalvų derinius ir grąžina:
- ✅ Pagrindinė + tekstas: santykis 5.2:1 (atitinka WCAG AA)
- ✅ Fonas + tekstas: santykis 12.1:1 (atitinka WCAG AAA)
- Bendrai: atitinka WCAG AA

## Integracija su Theme Builder {#integration-with-theme-builder}

Naudojant Theme Builder dizaino krypties pasirinkimą, Validate Palette Contrast gebėjimas:

1. Išanalizuoja jūsų pasirinktą spalvų paletę
2. Patikrina visus teksto ir fono derinius
3. Patikrina pagal jūsų pasirinktą WCAG lygį
4. Pateikia rekomendacijas neatitinkančioms poroms
5. Neleidžia pritaikyti neprieinamų spalvų schemų

## Geriausios praktikos {#best-practices}

- **Pradėkite nuo AA lygio** — WCAG AA yra standartas daugumai svetainių
- **Patikrinkite prieš pritaikydami** — patikrinkite savo paletę prieš įsipareigodami dizainui
- **Patikrinkite visus derinius** — įsitikinkite, kad tekstas, nuorodos ir UI elementai atitinka standartus
- **Atsižvelkite į naudotojų nuostatas** — kai kurie naudotojai gali turėti papildomą jautrumą spalvoms
- **Naudokite kontrasto tikrintuvus** — derinkite šį gebėjimą su naršyklės įrankiais patikrai

## Neatitinkančios poros ir rekomendacijos {#failing-pairs-and-recommendations}

Jei spalvų pora nepraeina patikrinimo, gebėjimas pateikia rekomendacijas:

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

## Susiję gebėjimai {#related-abilities}

- [Generuoti Logo SVG](./generate-logo-svg.md) — kurkite logotipus su patikrinta spalvų palete
- [Sukurti meniu](./create-menu.md) — kurkite navigaciją su prieinamomis spalvomis
