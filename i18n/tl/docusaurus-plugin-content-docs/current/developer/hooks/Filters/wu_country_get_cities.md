---
id: wu_country_get_cities
title: Salain - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Ibinabalik ang listahan ng mga lungsod para sa isang estado sa isang bansa.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $cities | `array` | Listahan ng mga pangalan ng lungsod sa estado. Walang mga key na naroroon. |
| $country_code | `string` | Dalawang-titik na ISO code para sa bansa. |
| $state_code | `string` | Dalawang-titik na ISO code para sa estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ng kasalukuyang class. |

### Mula noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) sa linya 146


## Ibinabalik {#returns}
Ang na-filter na listahan ng mga estado.
