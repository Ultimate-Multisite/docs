---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Dipanggil setelah data pengguna kustom berhasil diekspor.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Array yang berisi data pengguna. |
| $user | `\WP_User` | Objek pengguna. |

### Sejak {#since}

- 0.1.0
### Sumber {#source}

Didefinisikan di [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) pada baris 165
