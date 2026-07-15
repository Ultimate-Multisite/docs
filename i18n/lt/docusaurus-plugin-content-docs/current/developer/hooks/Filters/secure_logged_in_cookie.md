---
id: secure_logged_in_cookie
title: Filtras - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtras: secure_logged_in_cookie

Filtruoja, ar prisijungimo cookie turėtų būti siunčiamas tik per HTTPS.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Ar prisijungimo cookie turėtų būti siunčiamas tik per HTTPS. |
| $user_id | `int` | Vartotojo ID. |
| $secure | `bool` | Ar autentifikavimo cookie turėtų būti siunčiamas tik per HTTPS. |

### Nuo {#since}

- 3.1.0
### Šaltinis {#source}

Apibrėžta [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) 91 eilutėje
