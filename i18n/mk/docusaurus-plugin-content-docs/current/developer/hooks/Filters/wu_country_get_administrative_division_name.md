---
id: wu_country_get_administrative_division_name
title: Филтер - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Го враќа убавото име на административните под-поделби на земјата.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $name | `string` | Името на поделбата. Обично нешто како држава, провинција, регион итн. |
| $country_code | `string` | Двобуквен ISO код за земјата. |
| $state_code | `string` | Двобуквен ISO код за државата. |
| $ucwords | `bool` | дали ги пишуваме зборовите со големи букви. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца на тековната класа. |

### Од

- 2.0.11
### Извор

Дефинирано во [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) на линија 250


## Враќа
Изменетото име на поделбата.
