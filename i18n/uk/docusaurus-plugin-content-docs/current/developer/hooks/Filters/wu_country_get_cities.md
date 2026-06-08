---
id: wu_country_get_cities
title: Фільтр - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Повертає список міст для певного штату в країні.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Список назв міст штату. Ключі відсутні. |
| $country_code | `string` | Дволітерний ISO-код країни. |
| $state_code | `string` | Дволітерний ISO-код штату. |
| $current_country | `\WP_Ultimo\Country\Country` | Екземпляр поточного класу. |

### Since

- 2.0.11
### Source

Визначено в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) на рядку 146


## Returns
Відфільтрований список штатів.
