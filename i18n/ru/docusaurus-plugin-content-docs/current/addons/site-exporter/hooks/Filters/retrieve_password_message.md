---
id: retrieve_password_message
title: Фильтр — retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Фильтр: retrieve_password_message

Фильтрует тело сообщения письма для сброса пароля.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $message | `string` | Default mail message. |
| $key | `string` | The activation key. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### С версии {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Источник {#source}

Определено в [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) на строке 149


## Возвращает {#returns}
Сообщение письма по умолчанию.
