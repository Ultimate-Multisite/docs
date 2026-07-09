---
id: wu_country_get_administrative_division_name
title: Филтър - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Връща красиво име на административните подделници на страната.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $name | `string` | Име на подделницата. Обикновено нещо като щат, провинция, регион и т.н. |
| $country_code | `string` | Двубуквен ISO код за страната. |
| $state_code | `string` | Двубуквен ISO код за щата. |
| $ucwords | `bool` | дали да превърнем думите в големи букви. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанция на текущия клас. |

### От версия {#since}

- 2.0.11
### Източник {#source}

Дефиниран в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) на линия 250


## Връща {#returns}
Модифицираното име на подделницата.
