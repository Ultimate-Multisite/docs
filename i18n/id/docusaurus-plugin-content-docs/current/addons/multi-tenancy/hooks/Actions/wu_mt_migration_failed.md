---
id: wu_mt_migration_failed
title: Aksi - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Aksi: wu_mt_migration_failed {#action-wumtmigrationfailed}

Dipicu ketika proses migrasi gagal.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $job | `\Migration_Job` | Objek pekerjaan migrasi yang gagal. |
| $message | `string` | Pesan kesalahan yang terjadi. |

### Sejak {#since}

- 1.0.0
### Sumber {#source}

Didefinisikan di [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) pada baris 720
