---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtrira privzeti nabor podatkov uporabnika za izvoz/uvoz.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $custom_user_data | `array` | Polje podatkov uporabnika po meri. |
| $user | `\WP_User` | Objekt uporabnika. |

### Od različice

- 0.1.0
### Vir

- Definirano v [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) v vrstici 335
- Definirano v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) v vrstici 147
## Vrne
Polje podatkov uporabnika.
