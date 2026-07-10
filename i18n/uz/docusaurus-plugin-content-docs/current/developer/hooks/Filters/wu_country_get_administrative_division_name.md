---
id: wu_country_get_administrative_division_name
title: Filtr - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Mamlakat maʼmuriy bo‘linmalarining chiroyli nomini qaytaradi.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Bo‘linma nomi. Odatda state, province, region va hokazo kabi bo‘ladi. |
| $country_code | `string` | Mamlakat uchun ikki harfli ISO kodi. |
| $state_code | `string` | State uchun ikki harfli ISO kodi. |
| $ucwords | `bool` | agar so‘zlarni katta harfga o‘tkazsak. |
| $current_country | `\WP_Ultimo\Country\Country` | Joriy class instance. |

### Beri {#since}

- 2.0.11
### Manba {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ichida 250-qatorda aniqlangan


## Qaytaradi {#returns}
O‘zgartirilgan bo‘linma nomi.
