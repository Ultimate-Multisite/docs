---
id: wu_country_get_states
title: Фільтр - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Фільтр: wu_country_get_states

Повертає список штатів для цієї країни.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $states | `array` | Список штатів у форматі XX => Ім'я. |
| $country_code | `string` | Дволітерний ISO-код країни. |
| $current_country | `\WP_Ultimo\Country\Country` | Екземпляр поточного класу. |

### Починаючи з {#since}

- 2.0.11
### Джерело {#source}

Визначено в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) на рядку 86


## Повертає {#returns}
Відфільтрований список штатів.
