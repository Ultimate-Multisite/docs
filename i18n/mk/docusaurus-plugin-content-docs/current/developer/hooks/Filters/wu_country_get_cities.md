---
id: wu_country_get_cities
title: Филтер - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Филтер: wu_country_get_cities

Ја враќа листата на градови за сојузна држава во земја.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $cities | `array` | Листа со имиња на градови во сојузната држава. Нема клучеви. |
| $country_code | `string` | Двобуквен ISO-код за земјата. |
| $state_code | `string` | Двобуквен ISO-код за сојузната држава. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца од тековната класа. |

### Од верзија

- 2.0.11
### Извор

Дефинирано во [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) на линија 146


## Враќа
Филтрирана листа на сојузни држави.
