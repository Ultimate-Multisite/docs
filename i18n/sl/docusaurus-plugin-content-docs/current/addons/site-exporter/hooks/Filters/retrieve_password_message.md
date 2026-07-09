---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtrira telo sporočila e-pošte za ponastavitev gesla.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Privzeto sporočilo e-pošte. |
| $key | `string` | Aktivacijski ključ. |
| $user_login | `string` | Uporabniško ime za uporabnika. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od različice

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Vir

Določeno v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) v vrstici 149


## Vrne
Privzeto sporočilo e-pošte.
