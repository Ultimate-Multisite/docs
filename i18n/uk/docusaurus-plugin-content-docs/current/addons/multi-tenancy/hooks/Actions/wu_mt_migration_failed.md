---
id: wu_mt_migration_failed
title: Дія - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Дія: wu_mt_migration_failed

Викликається, коли відбувається збій міграції.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $job | `\Migration_Job` | Збій міграції (об'єкт). |
| $message | `string` | Повідомлення про помилку. |

### З версії {#since}

- 1.0.0
### Джерело {#source}

Визначено в [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) на рядку 720
