---
title: Verifiko kontrastin e paletës
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Vlerëso kontrastin e paletës

Aftësia **Validate Palette Contrast** kontrollon çiftet e ngjyrave në paletën tënde të dizajnit për përputhshmëri me WCAG (Web Content Accessibility Guidelines) përpara se t’i aplikojë ato në temën tënde.

## Përmbledhje {#overview}

Kjo aftësi siguron që skema e ngjyrave e sajtit tënd të përmbushë standardet e aksesueshmërisë duke vlerësuar raportet e kontrastit midis ngjyrave të tekstit dhe sfondit. Ajo ndihmon në parandalimin e kombinimeve të ngjyrave që mund të jenë të vështira për t’u lexuar nga përdoruesit me dëmtime të shikimit.

## Formati i hyrjes {#input-format}

Aftësia pranon një paletë ngjyrash si hyrje:

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

### Parametrat {#parameters}

| Parametri | Tipi | I detyrueshëm | Përshkrimi |
|-----------|------|----------|-------------|
| `colors` | array | Po | Varg objektesh ngjyrash me vetitë `name` dhe `hex` |
| `wcag_level` | string | Jo | Niveli i përputhshmërisë WCAG: "A", "AA" (parazgjedhje), ose "AAA" |
| `pairs_to_check` | array | Jo | Çifte specifike ngjyrash për t’u vlerësuar (p.sh., `["primary-text", "background-text"]`) |

## Nivelet WCAG të kontrolluara {#wcag-levels-checked}

Aftësia vlerëson raportet e kontrastit sipas standardeve WCAG:

| Niveli | Tekst normal | Tekst i madh | Raporti minimal |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Tekst normal** — tekst më i vogël se 18pt (ose 14pt me të trasha)
- **Tekst i madh** — tekst 18pt ose më i madh (ose 14pt me të trasha ose më i madh)

## Skema e daljes {#output-schema}

Aftësia kthen një raport të detajuar vlerësimi:

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

### Fushat e daljes {#output-fields}

| Fusha | Tipi | Përshkrimi |
|-------|------|-------------|
| `compliant` | boolean | Nëse e gjithë paleta përmbush nivelin e specifikuar WCAG |
| `wcag_level` | string | Niveli WCAG që u kontrollua |
| `pairs` | array | Rezultate të detajuara për çdo çift ngjyrash |
| `contrast_ratio` | number | Raporti i llogaritur i kontrastit (1:1 deri në 21:1) |
| `status` | string | "pass" ose "fail" për çdo çift |
| `recommendations` | array | Sugjerime për përmirësimin e çifteve që dështojnë |

## Shembull përdorimi {#usage-example}

**Prompt:**
```
Kontrollo nëse paleta ime e ngjyrave përmbush standardet WCAG AA. Kam ngjyrën primare #678233, ngjyrën e tekstit #ffffff dhe sfondin #f5f5f5.
```

**Rezultati:**
Aftësia vlerëson të gjitha kombinimet e ngjyrave dhe kthen:
- ✅ Primare + Tekst: raport 5.2:1 (kalon WCAG AA)
- ✅ Sfond + Tekst: raport 12.1:1 (kalon WCAG AAA)
- Në përgjithësi: Në përputhje me WCAG AA

## Integrimi me Theme Builder {#integration-with-theme-builder}

Kur përdor përzgjedhjen e drejtimit të dizajnit në Theme Builder, aftësia Validate Palette Contrast:

1. Analizon paletën tënde të zgjedhur të ngjyrave
2. Kontrollon të gjitha kombinimet tekst-sfond
3. Vlerëson kundrejt nivelit tënd të zgjedhur WCAG
4. Jep rekomandime për çiftet jo në përputhje
5. Parandalon aplikimin e skemave të ngjyrave të paaksesueshme

## Praktikat më të mira {#best-practices}

- **Fillo me nivelin AA** — WCAG AA është standardi për shumicën e faqeve të internetit
- **Testo përpara aplikimit** — vlerëso paletën tënde përpara se të angazhohesh në një dizajn
- **Kontrollo të gjitha kombinimet** — sigurohu që teksti, lidhjet dhe elementet e UI të përmbushin të gjitha standardet
- **Merr parasysh preferencat e përdoruesve** — disa përdorues mund të kenë ndjeshmëri shtesë ndaj ngjyrave
- **Përdor kontrollues kontrasti** — kombinoje këtë aftësi me mjetet e shfletuesit për verifikim

## Çiftet që dështojnë dhe rekomandimet {#failing-pairs-and-recommendations}

Nëse një çift ngjyrash dështon në vlerësim, aftësia jep rekomandime:

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

## Aftësi të lidhura {#related-abilities}

- [Gjenero Logo SVG](./generate-logo-svg.md) — krijo logo me paletën tënde të validuar të ngjyrave
- [Krijo meny](./create-menu.md) — ndërto navigim me ngjyra të aksesueshme
