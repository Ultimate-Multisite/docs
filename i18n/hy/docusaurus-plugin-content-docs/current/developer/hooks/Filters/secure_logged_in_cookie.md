---
id: secure_logged_in_cookie
title: Զտիչ - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Զտում է՝ արդյոք մուտք գործածի cookie-ն պետք է ուղարկվի միայն HTTPS-ով։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Արդյոք մուտք գործածի cookie-ն պետք է ուղարկվի միայն HTTPS-ով։ |
| $user_id | `int` | Օգտատիրոջ ID։ |
| $secure | `bool` | Արդյոք auth cookie-ն պետք է ուղարկվի միայն HTTPS-ով։ |

### Սկսած {#since}

- 3.1.0
### Աղբյուր {#source}

Սահմանված է [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91)-ում՝ 91-րդ տողում։
