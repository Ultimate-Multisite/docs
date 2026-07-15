---
id: wu_mt_migration_failed
title: Действие - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Действие: wu_mt_migration_failed

Изрича се, когато миграцията не успее.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $job | `\Migration_Job` | Заданието за миграция, което се е провалило. |
| $message | `string` | Съобщение за грешка. |

### От {#since}

- 1.0.0
### Източник {#source}

Дефинирано в [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) на линия 720
