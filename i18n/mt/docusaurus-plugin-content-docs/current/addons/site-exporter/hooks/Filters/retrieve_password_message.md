---
id: retrieve_password_message
title: Filtru - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtru: retrieve_password_message

Jiffiltra l-korp tal-messaġġ tal-email għar-reset tal-password.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $message | `string` | Messaġġ tal-email predefinit. |
| $key | `string` | Iċ-ċavetta tal-attivazzjoni. |
| $user_login | `string` | L-isem tal-utent għall-utent. |
| $user_data | `\WP_User` | Oġġett WP_User. |

### Minn

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Sors

Iddefinit f’[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) fil-linja 149


## Jirritorna
Messaġġ tal-email predefinit.
