---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtruje predvolenú sadu používateľských údajov, ktoré sa majú exportovať/importovať.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $custom_user_data | `array` | Pole vlastných používateľských údajov. |
| $user | `\WP_User` | Objekt používateľa. |

### Od verzie {#since}

- 0.1.0
### Zdroj {#source}

- Definované v [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) na riadku 335
- Definované v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) na riadku 147
## Návratová hodnota {#returns}
Dáta poľa používateľa.
