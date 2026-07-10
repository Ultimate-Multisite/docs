---
id: wu_country_get_cities
title: Suodatin - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Suodatin: wu_country_get_cities {#filter-wucountrygetcities}

Palauttaa maan osavaltion kaupunkien luettelon.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $cities | `array` | Luettelo osavaltion kaupunkien nimistä. Avaimia ei ole. |
| $country_code | `string` | Maan kaksikirjaiminen ISO-koodi. |
| $state_code | `string` | Osavaltion kaksikirjaiminen ISO-koodi. |
| $current_country | `\WP_Ultimo\Country\Country` | Nykyisen luokan instanssi. |

### Alkaen {#since}

- 2.0.11
### Lähde {#source}

Määritelty tiedostossa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) rivillä 146


## Palauttaa {#returns}
Suodatetun osavaltioiden luettelon.
