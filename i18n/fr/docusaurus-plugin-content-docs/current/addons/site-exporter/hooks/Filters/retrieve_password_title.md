---
id: retrieve_password_title
title: Filtre - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtre : retrieve_password_title

Filtre le sujet de l'e‑mail de réinitialisation du mot de passe.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Default email title. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### Since

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.

### Source

Défini dans [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) à la ligne 135

## Returns

Default email title.
