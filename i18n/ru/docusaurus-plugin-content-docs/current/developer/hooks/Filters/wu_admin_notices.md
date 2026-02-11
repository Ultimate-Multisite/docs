---
id: wu_admin_notices
title: Фильтр - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Фильтр: wu_admin_notices

Позволяет разработчикам фильтровать административные уведомления, добавленные Ultimate Multisite.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $notices | `array` | Список уведомлений для конкретной панели. |
| $all_notices | `array` | Список добавленных уведомлений, разделенных по панелям. |
| $panel | `string` | Панель, для которой нужно получить уведомления. |
| $filter | `string` | Если удаляемые уведомления были отфильтрованы. |
| $dismissed_messages | `array` | Список ключей удаленных уведомлений. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) на строке 121

## Возвращает
