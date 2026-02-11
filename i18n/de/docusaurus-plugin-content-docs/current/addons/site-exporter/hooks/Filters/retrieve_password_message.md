---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtert den Nachrichtentext der Passwortzurücksetzungs‑E‑Mail.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Default mail message. |
| $key | `string` | The activation key. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### Since

- 2.8.0
- 4.1.0: Hinzugefügt <code>$user_login</code> und <code>$user_data</code> Parameter.

### Source

Definiert in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) in Zeile 149

## Returns
Standardmailnachricht.
