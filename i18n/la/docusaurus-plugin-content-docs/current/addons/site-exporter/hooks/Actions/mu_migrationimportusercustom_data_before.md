---
id: mu_migrationimportusercustom_data_before
title: Actio - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Actio: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

Invocatur antequam data usoris propria exportantur.

## Parametri {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $user_data | `array` | Series datorum usoris. |
| $user | `\WP_User` | Obiectum usoris. |

### Ab {#since}

- 0.1.0
### Fons {#source}

Definitum in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) in linea 139
