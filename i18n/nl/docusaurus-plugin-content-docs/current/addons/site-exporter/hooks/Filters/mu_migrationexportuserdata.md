---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtert de standaardset gebruikersgegevens die moeten worden geëxporteerd/geïmporteerd.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $custom_user_data | `array` | De aangepaste array met gebruikersgegevens. |
| $user | `\WP_User` | Het gebruikersobject. |

### Sinds {#since}

- 0.1.0
### Bron {#source}

- Gedefinieerd in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) op regel 335
- Gedefinieerd in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) op regel 147
## Retourneert {#returns}
Array met gebruikersgegevens.
