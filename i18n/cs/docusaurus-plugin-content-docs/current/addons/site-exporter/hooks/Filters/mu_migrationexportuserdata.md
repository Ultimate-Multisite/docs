---
id: mu_migrationexportuserdata
title: Filtrační - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtruje výchozí soubor uživatelských údajů, které mají být exportovány nebo importovány.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Pole s vlastními uživatelskými daty. |
| $user | `\WP_User` | Objekt uživatele. |

### Od

- 0.1.0
### Zdroj

- Definováno v [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) na řádku 335
- Definováno v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) na řádku 147
## Vrací
Pole s daty uživatele.
