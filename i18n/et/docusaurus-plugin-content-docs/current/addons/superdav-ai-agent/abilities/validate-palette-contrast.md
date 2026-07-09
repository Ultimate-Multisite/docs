---
title: Valideeri paleti kontrastsus
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Paleti kontrasti valideerimine

Võime **Validate Palette Contrast** kontrollib sinu kujunduspaleti värvipaare WCAG (Web Content Accessibility Guidelines) nõuetele vastavuse suhtes enne nende rakendamist sinu theme’ile.

## Ülevaade

See võime tagab, et sinu saidi värviskeem vastab ligipääsetavuse standarditele, valideerides kontrastsuse suhtarve teksti- ja taustavärvide vahel. See aitab vältida värvikombinatsioone, mida nägemispuudega kasutajatel võib olla raske lugeda.

## Sisendvorming

Võime võtab sisendina vastu värvipaleti:

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

### Parameetrid

| Parameeter | Tüüp | Kohustuslik | Kirjeldus |
|-----------|------|----------|-------------|
| `colors` | array | Jah | Värviobjektide massiiv omadustega `name` ja `hex` |
| `wcag_level` | string | Ei | WCAG nõuetele vastavuse tase: "A", "AA" (vaikimisi) või "AAA" |
| `pairs_to_check` | array | Ei | Konkreetsed värvipaarid valideerimiseks (nt `["primary-text", "background-text"]`) |

## Kontrollitavad WCAG tasemed

Võime valideerib kontrastsuse suhtarve WCAG standardite järgi:

| Tase | Tavatekst | Suur tekst | Minimaalne suhtarv |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Tavatekst** — tekst, mis on väiksem kui 18 pt (või 14 pt paksus kirjas)
- **Suur tekst** — tekst 18 pt või suurem (või 14 pt paksus kirjas või suurem)

## Väljundskeem

Võime tagastab üksikasjaliku valideerimisaruande:

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

### Väljundväljad

| Väli | Tüüp | Kirjeldus |
|-------|------|-------------|
| `compliant` | boolean | Kas kogu palett vastab määratud WCAG tasemele |
| `wcag_level` | string | Kontrollitud WCAG tase |
| `pairs` | array | Üksikasjalikud tulemused iga värvipaari kohta |
| `contrast_ratio` | number | Arvutatud kontrastsuse suhtarv (1:1 kuni 21:1) |
| `status` | string | "pass" või "fail" iga paari kohta |
| `recommendations` | array | Soovitused ebaõnnestunud paaride parandamiseks |

## Kasutusnäide

**Viip:**
```
Kontrolli, kas minu värvipalett vastab WCAG AA standarditele. Mul on põhivärv #678233, tekstivärv #ffffff ja taust #f5f5f5.
```

**Tulemus:**
Võime valideerib kõik värvikombinatsioonid ja tagastab:
- ✅ Põhivärv + tekst: suhtarv 5.2:1 (läbib WCAG AA)
- ✅ Taust + tekst: suhtarv 12.1:1 (läbib WCAG AAA)
- Üldiselt: vastab WCAG AA nõuetele

## Integratsioon Theme Builderiga

Theme Builderi kujundussuuna valiku kasutamisel teeb Validate Palette Contrast võime järgmist:

1. Analüüsib sinu valitud värvipaletti
2. Kontrollib kõiki teksti-tausta kombinatsioone
3. Valideerib sinu valitud WCAG taseme suhtes
4. Annab soovitusi nõuetele mittevastavate paaride kohta
5. Takistab ligipääsmatute värviskeemide rakendamist

## Parimad tavad

- **Alusta AA tasemest** — WCAG AA on enamiku veebisaitide standard
- **Testi enne rakendamist** — valideeri oma palett enne kujundusele pühendumist
- **Kontrolli kõiki kombinatsioone** — veendu, et tekst, lingid ja UI elemendid vastaksid standarditele
- **Arvesta kasutaja eelistustega** — mõnel kasutajal võib olla täiendav värvitundlikkus
- **Kasuta kontrastsuse kontrollijaid** — kombineeri seda võimet kontrollimiseks brauseritööriistadega

## Ebaõnnestunud paarid ja soovitused

Kui värvipaar valideerimisel ebaõnnestub, annab võime soovitusi:

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

## Seotud võimed

- [Generate Logo SVG](./generate-logo-svg.md) — loo logosid oma valideeritud värvipaletiga
- [Create Menu](./create-menu.md) — ehita ligipääsetavate värvidega navigeerimine
