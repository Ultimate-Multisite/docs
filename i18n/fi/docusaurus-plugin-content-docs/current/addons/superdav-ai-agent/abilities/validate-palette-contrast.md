---
title: Validoi paletin kontrasti
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validoi paletin kontrasti

**Validate Palette Contrast** -kyky tarkistaa suunnittelupalettisi väriparit WCAG (Web Content Accessibility Guidelines) -vaatimustenmukaisuuden osalta ennen niiden käyttämistä teemassasi.

## Yleiskatsaus

Tämä kyky varmistaa, että sivustosi värimaailma täyttää saavutettavuusstandardit validoimalla tekstin ja taustavärien väliset kontrastisuhteet. Se auttaa estämään väriyhdistelmiä, joita näkörajoitteisten käyttäjien voi olla vaikea lukea.

## Syötemuoto

Kyky hyväksyy syötteenä väripaletin:

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

### Parametrit

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|-----------|------|----------|-------------|
| `colors` | array | Kyllä | Väriobjektien taulukko, jossa on `name`- ja `hex`-ominaisuudet |
| `wcag_level` | string | Ei | WCAG-vaatimustenmukaisuuden taso: "A", "AA" (oletus) tai "AAA" |
| `pairs_to_check` | array | Ei | Tietyt validoitavat väriparit (esim. `["primary-text", "background-text"]`) |

## Tarkistettavat WCAG-tasot

Kyky validoi kontrastisuhteet WCAG-standardien mukaisesti:

| Taso | Normaali teksti | Suuri teksti | Vähimmäissuhde |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normaali teksti** — teksti, joka on pienempi kuin 18 pt (tai 14 pt lihavoituna)
- **Suuri teksti** — teksti, joka on 18 pt tai suurempi (tai 14 pt lihavoituna tai suurempi)

## Tulosskeema

Kyky palauttaa yksityiskohtaisen validointiraportin:

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

### Tulosteen kentät

| Kenttä | Tyyppi | Kuvaus |
|-------|------|-------------|
| `compliant` | boolean | Täyttääkö koko paletti määritetyn WCAG-tason |
| `wcag_level` | string | Tarkistettu WCAG-taso |
| `pairs` | array | Yksityiskohtaiset tulokset jokaiselle väriparille |
| `contrast_ratio` | number | Laskettu kontrastisuhde (1:1–21:1) |
| `status` | string | "pass" tai "fail" jokaiselle parille |
| `recommendations` | array | Ehdotukset hylättyjen parien parantamiseksi |

## Käyttöesimerkki

**Kehote:**
```
Tarkista, täyttääkö väripalettini WCAG AA -standardit. Minulla on pääväri #678233, tekstiväri #ffffff ja tausta #f5f5f5.
```

**Tulos:**
Kyky validoi kaikki väriyhdistelmät ja palauttaa:
- ✅ Pääväri + teksti: suhde 5.2:1 (läpäisee WCAG AA:n)
- ✅ Tausta + teksti: suhde 12.1:1 (läpäisee WCAG AAA:n)
- Kokonaisuutena: WCAG AA -yhteensopiva

## Integrointi Theme Builderiin

Kun käytät Theme Builderin suunnittelusuunnan valintaa, Validate Palette Contrast -kyky:

1. Analysoi valitsemasi väripaletin
2. Tarkistaa kaikki teksti-tausta-yhdistelmät
3. Validoi valitsemaasi WCAG-tasoa vasten
4. Tarjoaa suosituksia vaatimustenvastaisille pareille
5. Estää saavuttamattomien värimaailmojen käyttämisen

## Parhaat käytännöt

- **Aloita AA-tasosta** — WCAG AA on standardi useimmille verkkosivustoille
- **Testaa ennen käyttämistä** — validoi palettisi ennen sitoutumista suunnitteluun
- **Tarkista kaikki yhdistelmät** — varmista, että teksti, linkit ja UI-elementit täyttävät kaikki standardit
- **Huomioi käyttäjien mieltymykset** — joillakin käyttäjillä voi olla lisäherkkyyttä väreille
- **Käytä kontrastintarkistimia** — yhdistä tämä kyky selaintyökaluihin todentamista varten

## Hylätyt parit ja suositukset

Jos väripari ei läpäise validointia, kyky tarjoaa suosituksia:

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

## Liittyvät kyvyt

- [Luo Logo SVG](./generate-logo-svg.md) — luo logoja validoidulla väripaletillasi
- [Luo valikko](./create-menu.md) — rakenna navigointi saavutettavilla väreillä
