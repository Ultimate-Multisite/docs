---
id: retrieve_password_title
title: Фільтр - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Фільтрує тему електронного листа скидання пароля.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $title | `string` | Стандартна назва електронного листа. |
| $user_login | `string` | Ім'я користувача. |
| $user_data | `\WP_User` | Об'єкт WP_User. |

### Починаючи з {#since}

- 2.8.0
- 4.4.0: Додано параметри <code>$user_login</code> та <code>$user_data</code>.
### Джерело {#source}

Визначено у [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) у рядку 135


## Повертає {#returns}
Стандартну назву електронного листа.
