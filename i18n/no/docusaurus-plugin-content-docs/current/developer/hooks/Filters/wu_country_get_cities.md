---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Returnerer en liste over byer for en delstat i et land.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $cities | `array` | Liste over bynavn i delstaten. Det er ingen nøkler til stede. |
| $country_code | `string` | To-bokstavs ISO-kode for landet. |
| $state_code | `string` | To-bokstavs ISO-kode for delstaten. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans av den nåværende klassen. |

### Siden

- 2.0.11
### Kilde

Definert i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) på linje 146


## Returnerer
Den filtrerte listen over delstater.
