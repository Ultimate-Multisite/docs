---
id: set_auth_cookie
title: Действие - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Действие: set_auth_cookie

Срабатывает сразу перед установкой cookie аутентификации.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $auth_cookie | `string` | Значение cookie аутентификации. |
| $expire | `int` | Время, когда истекает период льготы входа, как UNIX‑временная метка. По умолчанию 12 часов после времени истечения cookie. |
| $expiration | `int` | Время, когда истекает cookie аутентификации, как UNIX‑временная метка. По умолчанию 14 дней с момента сейчас. |
| $user_id | `int` | Идентификатор пользователя. |
| $scheme | `string` | Схема аутентификации. Значения включают 'auth' или 'secure_auth'. |
| $token | `string` | Токен сеанса пользователя, используемый для этого cookie. |

### С момента

- 2.5.0
- 4.9.0: Параметр <code>$token</code> был добавлен.

### Источник

Определено в [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) на строке 124
