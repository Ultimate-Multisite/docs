---
id: set_logged_in_cookie
title: Дія - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Виконується одразу перед встановленням cookie для автентифікації авторизованого користувача.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $logged_in_cookie | `string` | Значення cookie для авторизованого користувача. |
| $expire | `int` | Час закінчення періоду дії входу (grace period) у форматі UNIX timestamp. За замовчуванням — через 12 годин після закінчення терміну дії cookie. |
| $expiration | `int` | Час закінчення cookie для автентифікації авторизованого користувача у форматі UNIX timestamp. За замовчуванням — через 14 днів. |
| $user_id | `int` | ID користувача. |
| $scheme | `string` | Схема автентифікації. За замовчуванням 'logged_in'. |
| $token | `string` | Токен сесії користувача, який потрібно використовувати для цього cookie. |

### З {#since}

- 2.6.0
- 4.9.0: Додано параметр <code>$token</code>.
### Джерело {#source}

Визначено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) на рядку 141
