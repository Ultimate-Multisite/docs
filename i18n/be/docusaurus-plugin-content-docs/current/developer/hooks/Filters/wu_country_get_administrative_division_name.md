---
id: wu_country_get_administrative_division_name
title: Фільтр - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Павяртае адпаведную назву адміністрацыйных падраздзяленняў краіны.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Назва падраздзялення. Завыклі ва ўставы, правінцыя, рэгіён і г. д. |
| $country_code | `string` | Двулітарковы ISO-код краіны. |
| $state_code | `string` | Двулітарковы ISO-код штату. |
| $ucwords | `bool` | Калі трэба перавесці літары ў вялікія. |
| $current_country | `\WP_Ultimo\Country\Country` | Экземпт бягучага класа. |

### Since

- 2.0.11
### Source

Вызначаны ў [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) на 250-й кропцы


## Returns
Змяненае імя падраздзялення.
