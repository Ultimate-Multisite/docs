---
id: wu_mt_migration_failed
title: Action - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Bu hook, bir göç (migration) işlemi başarısız olduğunda tetiklenir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | Başarısız olan göç işi (migration job). |
| $message | `string` | Hata mesajı. |

### Since {#since}

- 1.0.0
### Source {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) dosyasının 720. satırında tanımlanmıştır.
