---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtert de Message-Body vun der Passwuert-Zerécksetzungs-Mail.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $message | `string` | Standard-Mail-Noriicht. |
| $key | `string` | Den Aktivéierungsschlëssel. |
| $user_login | `string` | De Benotzernumm fir de Benotzer. |
| $user_data | `\WP_User` | WP_User-Objet. |

### Zënter

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Quell

Definéiert an [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) op Linn 149


## Retouren
Standard-Mail-Noriicht.
