---
id: retrieve_password_title
title: Филтер - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Филтер: retrieve_password_title

Го филтрира предметот на е-пораката за ресетирање на лозинка.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $title | `string` | Стандарден наслов на е-пораката. |
| $user_login | `string` | Корисничкото име за корисникот. |
| $user_data | `\WP_User` | WP_User објект. |

### Од {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Извор {#source}

Дефинирано во [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) на линија 135


## Враќа {#returns}
Стандарден наслов на е-пораката.
