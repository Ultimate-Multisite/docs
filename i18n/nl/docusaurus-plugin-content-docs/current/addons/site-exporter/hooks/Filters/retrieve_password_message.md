---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtert de berichttekst van de wachtwoordresetmail.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Standaard e-mailbericht. |
| $key | `string` | De activatiecode. |
| $user_login | `string` | De gebruikersnaam van de gebruiker. |
| $user_data | `\WP_User` | WP_User object. |

### Since

- 2.8.0
- 4.1.0: Toegevoegd <code>$user_login</code> en <code>$user_data</code> parameters.

### Source

Gedefinieerd in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) op regel 149

## Returns

Standaard e-mailbericht.
