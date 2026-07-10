---
id: wu_country_get_administrative_division_name
title: Filtre - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Returns nice name of the country administrative sub-divisions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Le nom de la division. Habituellement quelque chose comme état, province, région, etc. |
| $country_code | `string` | Code ISO à deux lettres pour le pays. |
| $state_code | `string` | Code ISO à deux lettres pour l'état. |
| $ucwords | `bool` | si nous mettons les mots en majuscules. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance de la classe actuelle. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns {#returns}
Le nom de la division modifié.
