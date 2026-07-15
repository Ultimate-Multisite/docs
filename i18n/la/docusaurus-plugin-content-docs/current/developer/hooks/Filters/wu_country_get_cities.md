---
id: wu_country_get_cities
title: Filtrum - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtrum: wu_country_get_cities

Reddet indicem urbium pro provincia in regione.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $cities | `array` | Index nominum urbium provinciae. Nullae claves adsunt. |
| $country_code | `string` | Codex ISO duarum litterarum pro regione. |
| $state_code | `string` | Codex ISO duarum litterarum pro provincia. |
| $current_country | `\WP_Ultimo\Country\Country` | Instantia classis praesentis. |

### Ex versione {#since}

- 2.0.11
### Fons {#source}

Definitum in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ad lineam 146


## Reddit {#returns}
Index provinciarum percolatus.
