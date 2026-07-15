---
id: retrieve_password_title
title: Филтер - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Филтер: retrieve_password_title

Филтрира наслов имејла за ресетовање лозинке.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $title | `string` | Подразумевани наслов имејла. |
| $user_login | `string` | Корисничко име за корисника. |
| $user_data | `\WP_User` | WP_User објекат. |

### Од верзије {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Извор {#source}

Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) у реду 135


## Враћа {#returns}
Подразумевани наслов имејла.
