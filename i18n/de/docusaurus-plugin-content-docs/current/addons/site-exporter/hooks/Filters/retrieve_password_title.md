---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filters the subject of the password reset email.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Standard-E-Mail-Titel. |
| $user_login | `string` | Der Benutzername des Benutzers. |
| $user_data | `\WP_User` | WP_User-Objekt. |

### Seit

- 2.8.0
- 4.4.0: Hinzugefügt die <code>$user_login</code> und <code>$user_data</code> Parameter.

### Quelle

Definiert in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) bei Zeile 135

## Rückgabe
Standard-E-Mail-Titel.
