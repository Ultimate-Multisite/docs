---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Gee die lys van stede vir 'n staat in 'n land terug.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $cities | `array` | Lys van stadsname vir die staat. Daar is geen sleutels nie. |
| $country_code | `string` | Twee-letter ISO-kode vir die land. |
| $state_code | `string` | Twee-letter ISO-kode vir die staat. |
| $current_country | `\WP_Ultimo\Country\Country` | 'n Voorbeeld van die huidige klas. |

### Sedert {#since}

- 2.0.11
### Bron {#source}

Gedefinieer in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) by lyn 146


## Gee terug {#returns}
Die gefilterde lys van state.
