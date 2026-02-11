---
id: wu_country_get_administrative_division_name
title: Фильтр - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Фильтр: wu_country_get_administrative_division_name

Возвращает красивое название административных подразделений страны.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Название подразделения. Обычно что-то вроде штата, провинции, региона и т.д. |
| $country_code | `string` | Двухбуквенный ISO-код страны. |
| $state_code | `string` | Двухбуквенный ISO-код штата. |
| $ucwords | `bool` | если преобразовать слова в заглавные буквы. |
| $current_country | `\WP_Ultimo\Country\Country` | Экземпляр текущего класса. |

### С версии

- 2.0.11

### Источник

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250

## Возвращает

Измененное название подразделения.
