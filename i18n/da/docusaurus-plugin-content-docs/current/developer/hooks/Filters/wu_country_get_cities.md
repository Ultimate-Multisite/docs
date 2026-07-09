---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Returnerer listen over byer for en stat i et land.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $cities | `array` | Liste over statens bynavne. Der er ingen nøgler. |
| $country_code | `string` | ISO-kode på to bogstaver for landet. |
| $state_code | `string` | ISO-kode på to bogstaver for staten. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans af den aktuelle klasse. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Defineret i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) på linje 146


## Returnerer {#returns}
Den filtrerede liste over stater.
