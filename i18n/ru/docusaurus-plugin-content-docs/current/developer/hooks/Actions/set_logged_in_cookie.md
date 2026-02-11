---
id: set_logged_in_cookie
title: Действие - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Действие: set_logged_in_cookie

Срабатывает сразу перед установкой cookie аутентификации при входе в систему.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $logged_in_cookie | `string` | Значение cookie для входа в систему. |
| $expire | `int` | Время, когда истекает период льготы входа, в формате UNIX timestamp. По умолчанию 12 часов после истечения cookie. |
| $expiration | `int` | Время, когда истекает cookie аутентификации при входе в систему, в формате UNIX timestamp. По умолчанию 14 дней с момента. |
| $user_id | `int` | ID пользователя. |
| $scheme | `string` | Схема аутентификации. По умолчанию 'logged_in'. |
| $token | `string` | Токен сеанса пользователя, используемый для этого cookie. |

### С версии

- 2.6.0
- 4.9.0: Параметр <code>$token</code> был добавлен.

### Источник

Определено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) на строке 141
