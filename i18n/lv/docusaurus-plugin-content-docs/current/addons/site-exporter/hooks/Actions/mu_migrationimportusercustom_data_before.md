---
id: mu_migrationimportusercustom_data_before
title: Darbība - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Darbība: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

Tiek palaista pirms pielāgoto lietotāja datu eksportēšanas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $user_data | `array` | Lietotāja datu masīvs. |
| $user | `\WP_User` | Lietotāja objekts. |

### Kopš {#since}

- 0.1.0
### Avots {#source}

Definēts [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) 139. rindā
