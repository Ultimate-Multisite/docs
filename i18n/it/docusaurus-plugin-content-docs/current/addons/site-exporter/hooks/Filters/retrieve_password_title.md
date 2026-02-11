---
id: retrieve_password_title
title: 'Per favore, inviami il contenuto del file Markdown/MDX che desideri tradurre.'
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtro: retrieve_password_title

Filtra l'oggetto dell'email di reimpostazione della password.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Titolo email predefinito. |
| $user_login | `string` | Il nome utente dell'utente. |
| $user_data | `\WP_User` | Oggetto WP_User. |

### Since

- 2.8.0
- 4.4.0: Aggiunti i parametri <code>$user_login</code> e <code>$user_data</code>.

### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) at line 135


## Returns

Titolo email predefinito.
