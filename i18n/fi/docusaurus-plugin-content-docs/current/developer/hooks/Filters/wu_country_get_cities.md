---
id: wu_country_get_cities
title: Suodatin - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Suodatin: wu_country_get_cities

Palauttaa maan osavaltion kaupunkien luettelon.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $cities | `array` | Luettelo osavaltion kaupunkien nimistä. Avaimia ei ole. |
| $country_code | `string` | Maan kaksikirjaiminen ISO-koodi. |
| $state_code | `string` | Osavaltion kaksikirjaiminen ISO-koodi. |
| $current_country | `\WP_Ultimo\Country\Country` | Nykyisen luokan instanssi. |

### Alkaen

- 2.0.11
### Lähde

Määritelty tiedostossa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) rivillä 146


## Palauttaa
Suodatetun osavaltioiden luettelon.
