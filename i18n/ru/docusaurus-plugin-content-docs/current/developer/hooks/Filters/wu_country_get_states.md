---
id: wu_country_get_states
title: Фильтр - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Фильтр: wu_country_get_states

Возвращает список штатов для этой страны.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $states | `array` | Список штатов в формате XX =&gt; Имя. |
| $country_code | `string` | Двухбуквенный ISO-код страны. |
| $current_country | `\WP_Ultimo\Country\Country` | Экземпляр текущего класса. |

### Начиная с

- 2.0.11
### Источник

Определено в [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) на строке 86

## Возвращает
Отфильтрованный список штатов.
