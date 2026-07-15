---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Memfilter set data pengguna default yang akan diekspor atau diimpor.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Array data pengguna kustom. |
| $user | `\WP_User` | Objek pengguna. |

### Since {#since}

- 0.1.0
### Source {#source}

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Returns {#returns}
Array data pengguna.
