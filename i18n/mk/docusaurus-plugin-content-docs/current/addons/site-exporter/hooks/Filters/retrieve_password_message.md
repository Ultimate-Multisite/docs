---
id: retrieve_password_message
title: Филтер - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Го филтрира телото на пораката од е-поштата за ресетирање на лозинка.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $message | `string` | Стандардна порака за е-пошта. |
| $key | `string` | Клучот за активација. |
| $user_login | `string` | Корисничкото име за корисникот. |
| $user_data | `\WP_User` | WP_User објект. |

### Од верзија

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Извор

Дефинирано во [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) на линија 149


## Враќа
Стандардна порака за е-пошта.
