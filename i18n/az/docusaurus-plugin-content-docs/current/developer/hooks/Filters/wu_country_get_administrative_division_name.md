---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Ölkə inzibati alt-bölmələri üçün gözəl ad qaytarır.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Bölmə adı. Adətən dövlət, vilayət, region və s. kimi bir şey olur. |
| $country_code | `string` | Ölkə üçün iki hərflik ISO kodu. |
| $state_code | `string` | Dövlət üçün iki hərflik ISO kodu. |
| $ucwords | `bool` | Sözləri böyük hərflə yazmaq istəyirsinizsə. |
| $current_country | `\WP_Ultimo\Country\Country` | Cari sinifinin nümunəsi. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns {#returns}
Dəyişdirilmiş bölmə adı.
