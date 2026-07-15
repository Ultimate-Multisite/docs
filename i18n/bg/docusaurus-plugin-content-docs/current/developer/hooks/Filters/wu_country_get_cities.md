---
id: wu_country_get_cities
title: Филтър - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Филтър: wu_country_get_cities

Връща списък с градове за щат в една държава.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $cities | `array` | Списък с имена на градове на щат. Няма ключове. |
| $country_code | `string` | Двубуквен ISO код за страната. |
| $state_code | `string` | Двубуквен ISO код за щата. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанция на текущия клас. |

### От {#since}

- 2.0.11
### Източник {#source}

Дефиниран в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) на линия 146


## Връща {#returns}
Филтрираният списък от щати.
