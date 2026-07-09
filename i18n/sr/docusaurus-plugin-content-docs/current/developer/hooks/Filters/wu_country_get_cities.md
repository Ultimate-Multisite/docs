---
id: wu_country_get_cities
title: Филтер - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Филтер: wu_country_get_cities {#filter-wucountrygetcities}

Враћа листу градова за савезну државу у земљи.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $cities | `array` | Листа назива градова савезне државе. Кључеви нису присутни. |
| $country_code | `string` | Двословни ISO код за земљу. |
| $state_code | `string` | Двословни ISO код за савезну државу. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца тренутне класе. |

### Од верзије {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) у реду 146


## Враћа {#returns}
Филтрирану листу савезних држава.
