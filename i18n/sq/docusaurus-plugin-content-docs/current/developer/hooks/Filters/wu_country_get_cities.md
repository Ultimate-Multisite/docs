---
id: wu_country_get_cities
title: Filtër - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtër: wu_country_get_cities {#filter-wucountrygetcities}

Kthen listën e qyteteve për një shtet në një vend.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $cities | `array` | Lista e emrave të qyteteve të shtetit. Nuk ka çelësa të pranishëm. |
| $country_code | `string` | Kodi ISO me dy shkronja për vendin. |
| $state_code | `string` | Kodi ISO me dy shkronja për shtetin. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancë e klasës aktuale. |

### Që nga {#since}

- 2.0.11
### Burimi {#source}

Përcaktuar në [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) në rreshtin 146


## Kthen {#returns}
Lista e filtruar e shteteve.
