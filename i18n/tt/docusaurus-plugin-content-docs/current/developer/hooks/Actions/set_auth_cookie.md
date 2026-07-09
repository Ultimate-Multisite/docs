---
id: set_auth_cookie
title: Гамәл - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Гамәл: set_auth_cookie

Аутентификация cookie урнаштырылыр алдыннан ук эшли.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $auth_cookie | `string` | Аутентификация cookie кыйммәте. |
| $expire | `int` | Керү өчен өстәмә вакыт аралыгы тәмамлана торган вакыт, UNIX timestamp буларак. Килешү буенча cookie тәмамлану вакытыннан соң 12 сәгать. |
| $expiration | `int` | Аутентификация cookie тәмамлана торган вакыт, UNIX timestamp буларак. Килешү буенча хәзердән 14 көн. |
| $user_id | `int` | Кулланучы ID. |
| $scheme | `string` | Аутентификация схемасы. Кыйммәтләргә 'auth' яки 'secure_auth' керә. |
| $token | `string` | Бу cookie өчен кулланырга кулланучының сессия токены. |

### Кайчаннан

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Чыганак

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) эчендә 124 нче юлда билгеләнгән
