---
id: secure_auth_cookie
title: Զտիչ - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Ֆիլտր՝ secure_auth_cookie

Ֆիլտրում է՝ արդյոք auth cookie-ն պետք է ուղարկվի միայն HTTPS-ով։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $secure | `bool` | Արդյոք cookie-ն պետք է ուղարկվի միայն HTTPS-ով։ |
| $user_id | `int` | Օգտատիրոջ ID։ |

### Սկսած {#since}

- 3.1.0
### Աղբյուր {#source}

Սահմանված է [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80)-ում՝ 80-րդ տողում
