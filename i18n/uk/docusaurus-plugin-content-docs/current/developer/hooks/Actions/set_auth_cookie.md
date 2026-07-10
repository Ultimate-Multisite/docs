---
id: set_auth_cookie
title: Дія - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Виконується безпосередньо перед встановленням кукі автентифікації.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Значення кукі автентифікації. |
| $expire | `int` | Час закінчення періоду дії входу як UNIX-мітка. За замовчуванням це 12 годин після закінчення терміну дії кукі. |
| $expiration | `int` | Час закінчення терміну дії кукі як UNIX-мітка. За замовчуванням це 14 днів від сьогодні. |
| $user_id | `int` | Ідентифікатор користувача. |
| $scheme | `string` | Схема автентифікації. Доступні значення включають 'auth' або 'secure_auth'. |
| $token | `string` | Токен сесії користувача, який буде використано для цього кукі. |

### Since {#since}

- 2.5.0
- 4.9.0: Додано параметр <code>$token</code>.
### Source {#source}

Визначено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) на рядку 124
