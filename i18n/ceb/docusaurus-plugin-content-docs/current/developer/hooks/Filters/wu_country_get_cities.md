---
id: wu_country_get_cities
title: Salain - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Nagbalik sa lista sa mga siyudad alang sa usa ka estado sa usa ka nasod.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $cities | `array` | Lista sa mga ngalan sa siyudad sa estado. Walay mga key nga anaa. |
| $country_code | `string` | Duha-ka-letrang ISO code alang sa nasod. |
| $state_code | `string` | Duha-ka-letrang ISO code alang sa estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance sa kasamtangang class. |

### Sukad {#since}

- 2.0.11
### Tinubdan {#source}

Gidefine sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) sa linya 146


## Nagbalik {#returns}
Ang na-filter nga lista sa mga estado.
