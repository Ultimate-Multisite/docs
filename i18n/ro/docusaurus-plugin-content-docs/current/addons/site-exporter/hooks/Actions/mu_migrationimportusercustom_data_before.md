---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Se declanșează înainte de exportarea datelor personalizate ale utilizatorului.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $user_data | `array` | Matricea cu datele utilizatorului. |
| $user | `\WP_User` | Obiectul utilizatorului. |

### De la

- 0.1.0
### Sursă

Definit în [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) la linia 139
