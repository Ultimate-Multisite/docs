---
id: mu_migrationimportusercustom_data_after
title: Darbība — mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Darbība: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Tiek palaista pēc pielāgoto lietotāja datu eksportēšanas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $user_data | `array` | Lietotāja datu masīvs. |
| $user | `\WP_User` | Lietotāja objekts. |

### Kopš {#since}

- 0.1.0
### Avots {#source}

Definēts [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) 165. rindā
