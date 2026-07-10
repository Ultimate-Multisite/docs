---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Vrne seznam državnih enot za to državo.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $states | `array` | Seznam državnih enot v obliki XX =&gt; Ime. |
| $country_code | `string` | Dvočrkovna ISO koda za državo. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutnega razreda. |

### Od {#since}

- 2.0.11
### Vir {#source}

Definirano v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) v vrstici 86


## Vrne {#returns}
Filtriran seznam državnih enot.
