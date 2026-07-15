---
id: mu_migrationexportuserdata
title: Filtry - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtruje domyślny zestaw danych użytkownika przeznaczonych do eksportu lub importu.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Tablica danych użytkownika niestandardowych. |
| $user | `\WP_User` | Obiekt użytkownika. |

### Since {#since}

- 0.1.0
### Source {#source}

- Zdefiniowane w [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) w linii 335
- Zdefiniowane w [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) w linii 147
## Returns {#returns}
Tablicę danych użytkownika.
