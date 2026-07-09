---
id: wu_country_get_states
title: Filtry - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtr: wu_country_get_states {#filter-wucountrygetstates}

Zwraca listę stanów dla danego kraju.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $states | `array` | Lista stanów w formacie XX => Nazwa. |
| $country_code | `string` | Dwuznakowy kod ISO kraju. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancja bieżącej klasy. |

### Od {#since}

- 2.0.11
### Źródło {#source}

Zdefiniowane w [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) w linii 86


## Zwraca {#returns}
Przefiltrowaną listę stanów.
