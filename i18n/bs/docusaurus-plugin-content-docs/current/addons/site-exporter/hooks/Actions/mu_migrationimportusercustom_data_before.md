---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Pokreće se prije izvoza prilagođenih podataka korisnika.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $user_data | `array` | Niz podataka korisnika. |
| $user | `\WP_User` | Objekat korisnika. |

### Od verzije

- 0.1.0
### Izvor

Definisano je u [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) na liniji 139
