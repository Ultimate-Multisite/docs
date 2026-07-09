---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtrira standardni set podataka korisnika koji će biti izvezen/uvozen.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Niz sa prilagođenim podacima korisnika. |
| $user | `\WP_User` | Objekt korisnika. |

### Od {#since}

- 0.1.0
### Izvor {#source}

- Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) na liniji 335
- Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) na liniji 147
## Vraća {#returns}
Niz podataka korisnika.
