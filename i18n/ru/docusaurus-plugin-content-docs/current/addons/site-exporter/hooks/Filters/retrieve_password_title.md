---
id: retrieve_password_title
title: Фильтр - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Фильтр: retrieve_password_title

Фильтрует тему письма сброса пароля.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Default email title. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### С версии

- 2.8.0
- 4.4.0: Добавлены параметры <code>$user_login</code> и <code>$user_data</code>.

### Источник

Определено в [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) на строке 135

## Возвращает

Тема письма по умолчанию.
