---
id: wu_admin_notices
title: Фильтр — wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Фильтр: wu_admin_notices

Позволяет разработчикам фильтровать уведомления администратора, добавленные Ultimate Multisite.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $notices | `array` | List of notices for that particular panel. |
| $all_notices | `array` | List of notices added, segregated by panel. |
| $panel | `string` | Panel to retrieve the notices. |
| $filter | `string` | If the dismissable notices have been filtered out. |
| $dismissed_messages | `array` | List of dismissed notice keys. |

### Начиная с версии

- 2.0.0
### Источник

Определено в [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) в строке 121


## Возвращает
