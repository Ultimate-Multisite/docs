---
id: set_auth_cookie
title: Дзейніванне - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Выконваецца неадкладна перад вызначэннем кукі адзентыфікацыі.

## Параметры {#parameters}

| Назва | Тып | Опіс |
|------|------|-------------|
| $auth_cookie | `string` | Значэнне кукі адзентыфікацыі. |
| $expire | `int` | Час, калі праходны перыяд ўвайлення спыняецца, у фармаце UNIX timestamp. Па спілкуванні (Default) гэта 12 гадзін пасля спынення кукі. |
| $expiration | `int` | Час, калі спыняецца кукі адзентыфікацыі, у фармаце UNIX timestamp. Па спілкуванні (Default) гэта 14 дзён ад цяперашніга. |
| $user_id | `int` | ID карыстальніка. |
| $scheme | `string` | Схема адзентыфікацыі. Значэнні ўключаюць 'auth' або 'secure_auth'. |
| $token | `string` | Сясійны токен карыстальніка, які спатрэбіцца для гэтай кукі. |

### З {#since}

- 2.5.0
- 4.9.0: Параметр <code>$token</code> быў дададзены.
### Выказчык {#source}

Вызначаны ў [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) на 124-й кропцы
