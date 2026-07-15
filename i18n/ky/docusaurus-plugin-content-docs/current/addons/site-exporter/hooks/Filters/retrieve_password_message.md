---
id: retrieve_password_message
title: Фильтр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Сырсөздү баштапкы абалга келтирүү катынын билдирүү денесин чыпкалайт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $message | `string` | Демейки кат билдирүүсү. |
| $key | `string` | Активдештирүү ачкычы. |
| $user_login | `string` | Колдонуучу үчүн колдонуучу аты. |
| $user_data | `\WP_User` | WP_User объекти. |

### Бери {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Булак {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ичинде 149-сапта аныкталган


## Кайтарат {#returns}
Демейки кат билдирүүсү.
