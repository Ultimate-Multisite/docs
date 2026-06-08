---
id: retrieve_password_message
title: Филтър - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Филтрира тялото на съобщението, изпратено при възстановяване на парола.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Първоначалното съобщение по имейл. |
| $key | `string` | Активационният ключ. |
| $user_login | `string` | Потребителското име на потребителя. |
| $user_data | `\WP_User` | Обект WP_User. |

### Since

- 2.8.0
- 4.1.0: Добавени параметрите <code>$user_login</code> и <code>$user_data</code>.
### Source

Дефиниран в [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) на линия 149


## Returns
Първоначалното съобщение по имейл.
