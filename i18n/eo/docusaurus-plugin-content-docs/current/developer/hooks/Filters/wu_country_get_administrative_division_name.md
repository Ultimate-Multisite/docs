---
id: wu_country_get_administrative_division_name
title: Filtro - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtrilo: wu_country_get_administrative_division_name

Redonas belan nomon de la administraj subpartoj de la lando.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $name | `string` | La nomo de la subparto. Kutime io kiel ŝtato, provinco, regiono, ktp. |
| $country_code | `string` | Dulitera ISO-kodo por la lando. |
| $state_code | `string` | Dulitera ISO-kodo por la ŝtato. |
| $ucwords | `bool` | ĉu ni majuskligas la vortojn. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanco de la nuna klaso. |

### Ekde {#since}

- 2.0.11
### Fonto {#source}

Difinita en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ĉe linio 250


## Redonas {#returns}
La modifitan nomon de la subparto.
