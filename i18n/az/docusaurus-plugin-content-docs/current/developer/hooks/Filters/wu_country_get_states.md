---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Bu ölkə üçün vilayətlər siyahısını qaytarır.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | XX => Ad formatında vilayətlər siyahısı. |
| $country_code | `string` | Ölkə üçün iki hərflik ISO kodu. |
| $current_country | `\WP_Ultimo\Country\Country` | Cari sinif nümunəsi. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) faylında 86-cı sətirində təyin edilmişdir.


## Returns {#returns}
Filtr edilmiş vilayətlər siyahısı.
