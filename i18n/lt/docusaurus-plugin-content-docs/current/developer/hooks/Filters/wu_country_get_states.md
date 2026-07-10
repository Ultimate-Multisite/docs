---
id: wu_country_get_states
title: Filtras - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtras: wu_country_get_states {#filter-wucountrygetstates}

Grąžina šios šalies valstijų sąrašą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $states | `array` | Valstijų sąrašas formatu XX =&gt; Pavadinimas. |
| $country_code | `string` | Dviejų raidžių šalies ISO kodas. |
| $current_country | `\WP_Ultimo\Country\Country` | Dabartinės klasės egzempliorius. |

### Nuo {#since}

- 2.0.11
### Šaltinis {#source}

Apibrėžta [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 86 eilutėje


## Grąžina {#returns}
Filtruotą valstijų sąrašą.
