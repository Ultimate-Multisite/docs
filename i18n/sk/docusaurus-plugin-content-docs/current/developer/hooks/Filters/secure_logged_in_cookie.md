---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Filtruje, či sa má súbor cookie prihláseného používateľa odosielať iba cez HTTPS.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Či sa má súbor cookie prihláseného používateľa odosielať iba cez HTTPS. |
| $user_id | `int` | ID používateľa. |
| $secure | `bool` | Či sa má autentifikačný súbor cookie odosielať iba cez HTTPS. |

### Od verzie {#since}

- 3.1.0
### Zdroj {#source}

Definované v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na riadku 91
