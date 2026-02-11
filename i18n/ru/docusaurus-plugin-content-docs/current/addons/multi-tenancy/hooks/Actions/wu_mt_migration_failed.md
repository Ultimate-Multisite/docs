---
id: wu_mt_migration_failed
title: Действие - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Вызывается, когда миграция не удалась.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $job | `\Migration_Job` | Неудачная миграционная задача. |
| $message | `string` | Сообщение об ошибке. |

### С версии

- 1.0.0

### Источник

Определено в [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) на строке 720
