---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Akan dipanggil selepas data pengguna tersuai dieksport.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $user_data | `array` | Array data pengguna. |
| $user | `\WP_User` | Objek pengguna. |

### Sejak {#since}

- 0.1.0
### Sumber {#source}

Didefinisikan dalam [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) pada baris 165
