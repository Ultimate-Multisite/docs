---
title: Preveri kontrast palete
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Preverjanje kontrasta palete

Zmožnost **Validate Palette Contrast** preveri barvne pare v vaši oblikovalski paleti glede skladnosti z WCAG (Web Content Accessibility Guidelines), preden jih uporabite v svoji temi.

## Pregled {#overview}

Ta zmožnost zagotavlja, da barvna shema vašega spletnega mesta izpolnjuje standarde dostopnosti, tako da preverja kontrastna razmerja med barvami besedila in ozadja. Pomaga preprečiti barvne kombinacije, ki bi jih uporabniki z okvarami vida težko brali.

## Oblika vnosa {#input-format}

Zmožnost kot vnos sprejme barvno paleto:

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Polje barvnih objektov z lastnostma `name` in `hex` |
| `wcag_level` | string | No | Raven skladnosti WCAG: "A", "AA" (privzeto) ali "AAA" |
| `pairs_to_check` | array | No | Določeni barvni pari za preverjanje (npr. `["primary-text", "background-text"]`) |

## Preverjene ravni WCAG {#wcag-levels-checked}

Zmožnost preverja kontrastna razmerja v skladu s standardi WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Običajno besedilo** — besedilo, manjše od 18 pt (ali 14 pt krepko)
- **Veliko besedilo** — besedilo 18 pt ali večje (ali 14 pt krepko ali večje)

## Shema izhoda {#output-schema}

Zmožnost vrne podrobno poročilo o preverjanju:

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

### Izhodna polja {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ali celotna paleta izpolnjuje določeno raven WCAG |
| `wcag_level` | string | Raven WCAG, ki je bila preverjena |
| `pairs` | array | Podrobni rezultati za vsak barvni par |
| `contrast_ratio` | number | Izračunano kontrastno razmerje (1:1 do 21:1) |
| `status` | string | "pass" ali "fail" za vsak par |
| `recommendations` | array | Predlogi za izboljšanje neuspešnih parov |

## Primer uporabe {#usage-example}

**Poziv:**
```
Preveri, ali moja barvna paleta izpolnjuje standarde WCAG AA. Imam primarno barvo #678233, barvo besedila #ffffff in ozadje #f5f5f5.
```

**Rezultat:**
Zmožnost preveri vse barvne kombinacije in vrne:
- ✅ Primarna + besedilo: razmerje 5.2:1 (ustreza WCAG AA)
- ✅ Ozadje + besedilo: razmerje 12.1:1 (ustreza WCAG AAA)
- Skupno: skladno z WCAG AA

## Integracija s Theme Builder {#integration-with-theme-builder}

Pri uporabi izbire oblikovalske usmeritve v Theme Builder zmožnost Validate Palette Contrast:

1. Analizira vašo izbrano barvno paleto
2. Preveri vse kombinacije besedila in ozadja
3. Preveri glede na izbrano raven WCAG
4. Poda priporočila za neskladne pare
5. Prepreči uporabo nedostopnih barvnih shem

## Najboljše prakse {#best-practices}

- **Začnite z ravnjo AA** — WCAG AA je standard za večino spletnih mest
- **Preizkusite pred uporabo** — preverite svojo paleto, preden se zavežete oblikovanju
- **Preverite vse kombinacije** — zagotovite, da besedilo, povezave in elementi uporabniškega vmesnika vsi izpolnjujejo standarde
- **Upoštevajte uporabniške nastavitve** — nekateri uporabniki imajo lahko dodatno občutljivost na barve
- **Uporabite preverjevalnike kontrasta** — združite to zmožnost z orodji brskalnika za preverjanje

## Neuspešni pari in priporočila {#failing-pairs-and-recommendations}

Če barvni par ne prestane preverjanja, zmožnost poda priporočila:

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

## Sorodne zmožnosti {#related-abilities}

- [Ustvari logotip SVG](./generate-logo-svg.md) — ustvarite logotipe s svojo preverjeno barvno paleto
- [Ustvari meni](./create-menu.md) — zgradite navigacijo z dostopnimi barvami
