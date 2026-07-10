---
id: mu_migrationimportusercustom_data_after
title: Aksyon - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Moandar human ma-export ang custom nga datos sa user.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $user_data | `array` | Ang array sa datos sa user. |
| $user | `\WP_User` | Ang object sa user. |

### Sukad {#since}

- 0.1.0
### Tinubdan {#source}

Gihubit sa [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) sa linya 165
