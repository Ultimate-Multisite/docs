---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Bir ölkədəki müəyyən bir vilayətə aid şəhərlərin siyahısını qaytarır.

## Parametrlər

| Ad | Növ | Təsvir |
|------|------|-------------|
| $cities | `array` | Vilayət şəhər adları siyahısı. Heç bir açar (key) yoxdur. |
| $country_code | `string` | Ölkə üçün iki hərflik ISO kodu. |
| $state_code | `string` | Vilayət üçün iki hərflik ISO kodu. |
| $current_country | `\WP_Ultimo\Country\Country` | Cari sinif (class) nümunəsi. |

### Nə vaxtdan

- 2.0.11
### Mənbə

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) faylında 146-cı sətirdə təyin edilmişdir.


## Qaytarır
Filtrirlənmiş vilayətlər siyahısı.
