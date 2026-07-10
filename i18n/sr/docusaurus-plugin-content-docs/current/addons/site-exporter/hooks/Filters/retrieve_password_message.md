---
id: retrieve_password_message
title: Филтер - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Филтер: retrieve_password_message {#filter-retrievepasswordmessage}

Филтрира тело поруке е-поште за ресетовање лозинке.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Подразумевана порука е-поште. |
| $key | `string` | Кључ за активацију. |
| $user_login | `string` | Корисничко име за корисника. |
| $user_data | `\WP_User` | WP_User објекат. |

### Од верзије {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Извор {#source}

Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) у реду 149


## Враћа {#returns}
Подразумевана порука е-поште.
