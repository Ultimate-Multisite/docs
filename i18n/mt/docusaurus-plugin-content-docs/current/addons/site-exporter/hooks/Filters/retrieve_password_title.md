---
id: retrieve_password_title
title: Filtru - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtru: retrieve_password_title

Jiffiltra s-suġġett tal-email għar-reset tal-password.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $title | `string` | Titlu predefinit tal-email. |
| $user_login | `string` | L-isem tal-utent għall-utent. |
| $user_data | `\WP_User` | Oġġett WP_User. |

### Minn {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Sors {#source}

Definit f’[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) fil-linja 135


## Jirritorna {#returns}
Titlu predefinit tal-email.
