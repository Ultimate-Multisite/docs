---
id: wu_mt_migration_failed
title: Eylem - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Bir göç (migration) başarısız olduğunda tetiklenir.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $job | `\Migration_Job` | Başarısız olan göç işi. |
| $message | `string` | Hata mesajı. |

### Versiyon {#since}

- 1.0.0
### Kaynak {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) dosyasının 720. satırında tanımlanmıştır.
