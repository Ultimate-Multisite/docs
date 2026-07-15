---
id: mu_migrationexportuserdata
title: Salain - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Gi-filter ang default nga set sa datos sa user nga i-export/import.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $custom_user_data | `array` | Ang custom nga array sa datos sa user. |
| $user | `\WP_User` | Ang object sa user. |

### Sukad {#since}

- 0.1.0
### Tinubdan {#source}

- Gihubit sa [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) sa linya 335
- Gihubit sa [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) sa linya 147
## Nagbalik {#returns}
Array data user.
