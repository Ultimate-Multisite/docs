---
id: wu_mt_migration_failed
title: Hərəkət - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Bir miqrasiya uğursuz olduqda işə düşür.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | Uğursuz olan miqrasiya işi. |
| $message | `string` | Xəta mesajı. |

### Nə vaxtdan {#since}

- 1.0.0
### Mənbə {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) faylında 720-ci sətirdə təyin edilmişdir.
