---
id: retrieve_password_message
title: Filtro - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

Filtra il corpo del messaggio della mail di reimpostazione della password.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Messaggio di posta predefinito. |
| $key | `string` | La chiave di attivazione. |
| $user_login | `string` | Il nome utente dell'utente. |
| $user_data | `\WP_User` | Oggetto WP_User. |

### Since

- 2.8.0
- 4.1.0: Aggiunti i parametri <code>$user_login</code> e <code>$user_data</code>.

### Source

Definito in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) alla riga 149

## Returns

Messaggio di posta predefinito.
