---
id: wu_country_get_cities
title: Фильтр - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Фильтр: wu_country_get_cities

Возвращает список городов для штата в стране.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Список названий городов штата. Ключей нет. |
| $country_code | `string` | Двухбуквенный ISO-код страны. |
| $state_code | `string` | Двухбуквенный ISO-код штата. |
| $current_country | `\WP_Ultimo\Country\Country` | Экземпляр текущего класса. |

### С версии

- 2.0.11

### Источник

Определено в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) на строке 146

## Возвращает
Отфильтрованный список штатов.
