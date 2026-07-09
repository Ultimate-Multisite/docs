---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Acțiune: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Se declanșează după exportarea datelor personalizate ale utilizatorului.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $user_data | `array` | Coloana cu datele utilizatorului. |
| $user | `\WP_User` | Obiectul utilizatorului. |

### De la {#since}

- 0.1.0
### Sursă {#source}

Definit în [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) la linia 165
