---
id: retrieve_password_message
title: Фільтр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Фільтруе тэкст паведамлення пра аднаўленне пароля.

## Паметры

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Пачатковы тэкст паведамлення. |
| $key | `string` | Ключ актывацыі. |
| $user_login | `string` | Нікнейм карыстальніка. |
| $user_data | `\WP_User` | Объект WP_User. |

### З

- 2.8.0
- 4.1.0: Дададзеныя паметры <code>$user_login</code> і <code>$user_data</code>.
### Выказчык

Вызначаны ў [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) у 149-й пасылцы.


## Павяртоўвае
Пачатковы тэкст паведамлення.
