---
id: wu_mt_migration_failed
title: Дејство - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Акција: wu_mt_migration_failed {#action-wumtmigrationfailed}

Се активира кога миграцијата ќе не успее.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $job | `\Migration_Job` | Неуспешната задача за миграција. |
| $message | `string` | Порака за грешка. |

### Од верзија {#since}

- 1.0.0
### Извор {#source}

Дефинирано во [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) на ред 720
