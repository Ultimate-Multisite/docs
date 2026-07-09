---
id: wu_mt_migration_failed
title: Радња - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Акција: wu_mt_migration_failed {#action-wumtmigrationfailed}

Покреће се када миграција не успе.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | Неуспели посао миграције. |
| $message | `string` | Порука о грешци. |

### Од верзије {#since}

- 1.0.0
### Извор {#source}

Дефинисано у [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) у реду 720
