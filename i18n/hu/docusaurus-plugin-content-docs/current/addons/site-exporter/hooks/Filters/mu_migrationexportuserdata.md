---
id: mu_migrationexportuserdata
title: Szűrő - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Szűrő: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Szűrőzi az alapértelmezett felhasználói adatok küldeményét, amelyet exportálnak vagy importálnak.

## Paraméterek {#parameters}

| Name | Type | Leírás |
|------|------|-------------|
| $custom_user_data | `array` | A felhasználói adatok hozzárendelt tömbje. |
| $user | `\WP_User` | A felhasználó objektum. |

### Since {#since}

- 0.1.0
### Forrás {#source}

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Visszaadja {#returns}
Felhasználói adatok tömbje.
