---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Gee die lys van state vir hierdie land terug.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | Lys van state in 'n XX => Naam formaat. |
| $country_code | `string` | Twee-letter ISO-kode vir die land. |
| $current_country | `\WP_Ultimo\Country\Country` | 'n Voorbeeld van die huidige klas. |

### Since {#since}

- 2.0.11
### Source {#source}

Bepaald in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) op lyn 86


## Returns {#returns}
Die gefilterde lys van state.
