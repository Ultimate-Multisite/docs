---
id: wu_country_get_administrative_division_name
title: Филтер - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Филтер: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Враћа леп назив административних пододељења земље.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $name | `string` | Назив пододељења. Обично нешто попут државе, провинције, региона итд. |
| $country_code | `string` | Двословни ISO код за земљу. |
| $state_code | `string` | Двословни ISO код за државу. |
| $ucwords | `bool` | да ли пишемо речи великим почетним словима. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца тренутне класе. |

### Од {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) у реду 250


## Враћа {#returns}
Измењени назив пододељења.
