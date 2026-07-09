---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtert de Betreff vun der E-Mail fir d'Passwuert zeréckzesetzen.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $title | `string` | Standard-E-Mail-Titel. |
| $user_login | `string` | De Benotzernumm fir de Benotzer. |
| $user_data | `\WP_User` | WP_User-Objet. |

### Zënter

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Quell

Definéiert an [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) op Zeil 135


## Retouren
Standard-E-Mail-Titel.
