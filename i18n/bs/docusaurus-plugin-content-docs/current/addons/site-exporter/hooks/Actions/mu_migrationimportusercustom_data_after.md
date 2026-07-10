---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Pokreće se nakon izvoza prilagođenih podataka korisnika.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Niz podataka korisnika. |
| $user | `\WP_User` | Objekat korisnika. |

### Od verzije {#since}

- 0.1.0
### Izvor {#source}

Definisano je u [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) na liniji 165
