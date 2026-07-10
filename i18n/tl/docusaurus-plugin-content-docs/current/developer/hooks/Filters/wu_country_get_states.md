---
id: wu_country_get_states
title: Salain - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Ibinabalik ang listahan ng mga estado para sa bansang ito.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $states | `array` | Listahan ng mga estado sa format na XX =&gt; Pangalan. |
| $country_code | `string` | Dalawang-titik na ISO code para sa bansa. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ng kasalukuyang class. |

### Mula Noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) sa linya 86


## Ibinabalik {#returns}
Ang na-filter na listahan ng mga estado.
