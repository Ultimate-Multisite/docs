---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtert den Standardsatz von Benutzerdaten, die exportiert/importiert werden sollen.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $custom_user_data | `array` | Das Array der benutzerdefinierten Benutzerdaten. |
| $user | `\WP_User` | Das Benutzerobjekt. |

### Seit {#since}

- 0.1.0
### Quelle {#source}

- Definiert in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) in Zeile 335
- Definiert in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) in Zeile 147
## Rückgaben {#returns}
Array-Daten des Benutzers.
