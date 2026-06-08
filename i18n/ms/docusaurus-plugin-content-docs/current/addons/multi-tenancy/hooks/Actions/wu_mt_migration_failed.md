---
id: wu_mt_migration_failed
title: Tindakan - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Dipanggil apabila migrasi gagal.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $job | `\Migration_Job` | Tugas migrasi yang gagal. |
| $message | `string` | Mesej ralat. |

### Sejak

- 1.0.0
### Sumber

Didefinisikan dalam [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) pada baris 720
