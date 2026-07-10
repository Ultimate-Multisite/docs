---
id: wu_country_get_cities
title: Filtr - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Zwraca listę miast dla danego stanu w danym kraju.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Lista nazw miast w stanie. Nie ma kluczy. |
| $country_code | `string` | Dwuznakowy kod ISO kraju. |
| $state_code | `string` | Dwuznakowy kod ISO stanu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancja bieżącej klasy. |

### Od {#since}

- 2.0.11
### Źródło {#source}

Zdefiniowane w [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) w linii 146


## Zwraca {#returns}
Przefiltrowaną listę stanów.
