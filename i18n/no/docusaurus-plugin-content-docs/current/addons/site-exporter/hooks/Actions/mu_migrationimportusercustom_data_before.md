---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Kjøres før eksport av brukerdata.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $user_data | `array` | Arrayet med brukerdata. |
| $user | `\WP_User` | Brukerobjektet. |

### Siden

- 0.1.0
### Kilde

Definert i [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) på linje 139
