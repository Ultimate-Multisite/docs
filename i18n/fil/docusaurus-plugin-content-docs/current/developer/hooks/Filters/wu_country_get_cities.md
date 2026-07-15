---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Ito ay nagbabalik ng listahan ng mga lungsod (cities) para sa isang estado sa isang bansa.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $cities | `array` | Listahan ng mga pangalan ng lungsod sa estado. Walang mga *key* na kasama. |
| $country_code | `string` | Dalawang-letrang ISO code para sa bansa. |
| $state_code | `string` | Dalawang-letrang ISO code para sa estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ng kasalukuyang class. |

### Mula pa noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) sa linya 146


## Mga Ibinabalik {#returns}
Ang na-filter na listahan ng mga estado.
