---
id: signup_get_available_languages
title: Suodatin - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Suodatin: signup_get_available_languages {#filter-signupgetavailablelanguages}

Suodattaa luettelon saatavilla olevista kielistä front-end-sivustorekisteröitymisiä varten.

Tyhjän taulukon välittäminen tälle hookille poistaa asetuksen tulostuksen rekisteröitymislomakkeessa, ja oletuskieltä käytetään sivustoa luotaessa. Kielet, joita ei ole jo asennettu, poistetaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $available_languages | `array` | Saatavilla olevat kielet. |

### Alkaen {#since}

- 4.4.0
### Lähde {#source}

Määritelty tiedostossa [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) rivillä 117
