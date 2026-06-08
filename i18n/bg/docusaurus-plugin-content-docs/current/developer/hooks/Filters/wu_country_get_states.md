---
id: wu_country_get_states
title: Филтър - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Връща списък на щатите за тази държава.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $states | `array` | Списък от щати във формат XX => Име. |
| $country_code | `string` | Двубуквен ISO код за държавата. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанция на текущия клас. |

### От версия

- 2.0.11
### Източник

Дефиниран в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) на линия 86


## Връща
Филтрираният списък на щатите.
