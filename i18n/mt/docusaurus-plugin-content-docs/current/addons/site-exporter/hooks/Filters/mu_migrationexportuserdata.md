---
id: mu_migrationexportuserdata
title: Filtru - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtru: mu_migration/export/user/data

Jiffiltra s-sett predefinit ta' data tal-utent li għandu jiġi esportat/importat.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $custom_user_data | `array` | L-array tad-data personalizzata tal-utent. |
| $user | `\WP_User` | L-oġġett tal-utent. |

### Minn {#since}

- 0.1.0
### Sors {#source}

- Iddefinit f'[`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) fil-linja 335
- Iddefinit f'[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) fil-linja 147
## Jirritorna {#returns}
Data array tal-utent.
