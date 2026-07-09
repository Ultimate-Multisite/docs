---
id: auth_cookie_expiration
title: Filtrum - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtrum: auth_cookie_expiration

Filtrat durationem temporis exspirationis crustuli authenticationis.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $length | `int` | Duratio temporis exspirationis in secundis. |
| $user_id | `int` | ID usoris. |
| $remember | `bool` | Utrum initium sessionis usoris memoretur. Valor praedefinitus false. |

### Ex quo

- 2.8.0
### Fons

Definitum in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ad lineam 52
