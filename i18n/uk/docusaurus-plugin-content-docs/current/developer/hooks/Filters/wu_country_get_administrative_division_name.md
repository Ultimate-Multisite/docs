---
id: wu_country_get_administrative_division_name
title: Фільтр - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Повертає коректну назву адміністративного підрозділу країни.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Назва підрозділу. Зазвичай це щось на кшталт штату, провінції, регіону тощо. |
| $country_code | `string` | Дволітерний ISO-код країни. |
| $state_code | `string` | Дволітерний ISO-код штату. |
| $ucwords | `bool` | Чи потрібно написати слова великими літерами. |
| $current_country | `\WP_Ultimo\Country\Country` | Екземпляр поточного класу. |

### Since

- 2.0.11
### Source

Визначено в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) на рядку 250


## Returns
Змінена назва підрозділу.
