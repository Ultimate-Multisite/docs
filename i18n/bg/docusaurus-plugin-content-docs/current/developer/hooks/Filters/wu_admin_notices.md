---
id: wu_admin_notices
title: Филтър - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Позволява на разработчиците да филтрират административните известия, добавени от Ultimate Multisite.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $notices | `array` | Списък с известия за конкретната секция (панел). |
| $all_notices | `array` | Списък с добавени известия, разделени по секции (панели). |
| $panel | `string` | Секцията (панел), от която трябва да се извлекат известията. |
| $filter | `string` | Ако известията, които могат да бъдат премахнати, са филтрирани. |
| $dismissed_messages | `array` | Списък с ключовете на премахнатите известия. |

### От версия

- 2.0.0
### Източник

Дефиниран в [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) на ред 121


## Връщане
