---
id: retrieve_password_message
title: Фільтр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Фільтр: retrieve_password_message

Фільтрує тіло повідомлення електронної пошти для скидання пароля.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $message | `string` | Стандартне повідомлення електронної пошти. |
| $key | `string` | Активаційний ключ. |
| $user_login | `string` | Ім'я користувача. |
| $user_data | `\WP_User` | Об'єкт WP_User. |

### Зверніть увагу

- 2.8.0
- 4.1.0: Додано параметри <code>$user_login</code> та <code>$user_data</code>.
### Джерело

Визначено у [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) на рядку 149


## Повертає
Стандартне повідомлення електронної пошти.
