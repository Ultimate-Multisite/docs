---
id: wu_country_get_administrative_division_name
title: Filtru - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtru: wu_country_get_administrative_division_name

Returnează numele corect al subdiviziunilor administrative ale unei țări.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Numele diviziei. De obicei, ceva de genul stat, provincie, regiune etc. |
| $country_code | `string` | Codul ISO de două litere pentru țară. |
| $state_code | `string` | Codul ISO de două litere pentru stat. |
| $ucwords | `bool` | Dacă vrem să punem cu majuscule cuvintele. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanță a clasei curente. |

### Since

- 2.0.11
### Source

Definit în [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) la linia 250


## Returns
Numele diviziei modificate.
