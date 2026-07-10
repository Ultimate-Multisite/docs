---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Gee die mooi naam van die administratiewe onderverdeelings van die land terug.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $name | `string` | Die onderverdeling se naam. Gewoonlik iets soos staat, provinsie, streek, ens. |
| $country_code | `string` | Twee-letter ISO-kode vir die land. |
| $state_code | `string` | Twee-letter ISO-kode vir die staat. |
| $ucwords | `bool` | Of ons die woorde hoogs skryf. |
| $current_country | `\WP_Ultimo\Country\Country` | 'n Voorbeeld van die huidige klas. |

### Sedert {#since}

- 2.0.11
### Bron {#source}

Benoem in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) op lyn 250


## Gee Terug {#returns}
Die gewysigde onderverdeling se naam.
