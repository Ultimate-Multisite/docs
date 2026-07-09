---
id: set_logged_in_cookie
title: Гамәл - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Гамәл: set_logged_in_cookie

Системага керү аутентификация cookie куелганчы ук эшли.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $logged_in_cookie | `string` | Системага керү cookie кыйммәте. |
| $expire | `int` | Керү өчен ташламалы вакыт тәмамлана торган вакыт, UNIX вакыт тамгасы буларак. Килешү буенча cookie тәмамлану вакытыннан соң 12 сәгать. |
| $expiration | `int` | Системага керү аутентификация cookie тәмамлана торган вакыт, UNIX вакыт тамгасы буларак. Килешү буенча хәзердән 14 көн. |
| $user_id | `int` | Кулланучы ID. |
| $scheme | `string` | Аутентификация схемасы. Килешү буенча 'logged_in'. |
| $token | `string` | Бу cookie өчен кулланыла торган кулланучының сессия токены. |

### Бирле

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Чыганак

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) эчендә, 141 нче юлда билгеләнгән
