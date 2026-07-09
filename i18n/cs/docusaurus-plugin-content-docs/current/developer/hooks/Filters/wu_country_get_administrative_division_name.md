---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Vrací hezký název administrativního poddělení země.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $name | `string` | Název poddělení. Obvykle něco jako stát, provincie, region atd. |
| $country_code | `string` | Dvojznakový ISO kód pro zemi. |
| $state_code | `string` | Dvojznakový ISO kód pro stát. |
| $ucwords | `bool` | zda máme slova ve velkých písmech. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancí aktuální třídy. |

### Od {#since}

- 2.0.11
### Zdroj {#source}

Definováno v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) na řádku 250


## Vrací {#returns}
Změněný název poddělení.
