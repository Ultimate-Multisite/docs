---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtrerer standardsættet af brugerdata, der skal eksporteres/importeres.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $custom_user_data | `array` | Det brugerdefinerede brugerdata-array. |
| $user | `\WP_User` | Brugerobjektet. |

### Siden

- 0.1.0
### Kilde

- Defineret i [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) på linje 335
- Defineret i [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) på linje 147
## Returnerer
Array-data bruger.
