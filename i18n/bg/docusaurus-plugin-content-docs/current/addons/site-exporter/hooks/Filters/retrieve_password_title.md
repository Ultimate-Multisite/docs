---
id: retrieve_password_title
title: Филтър - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Филтър: retrieve_password_title

Филтрира заглавието на имейла за сброс на паролата.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $title | `string` | Първоначално заглавие на имейла. |
| $user_login | `string` | Потребителското име на потребителя. |
| $user_data | `\WP_User` | Обект WP_User. |

### От

- 2.8.0
- 4.4.0: Добавени параметрите <code>$user_login</code> и <code>$user_data</code>.
### Източник

Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) на ред 135.


## Връща
Първоначално заглавие на имейла.
