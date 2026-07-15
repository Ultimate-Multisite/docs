---
id: secure_logged_in_cookie
title: Filtr - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtr: secure_logged_in_cookie

Określa, czy plik cookie sesji zalogowania ma być wysyłany tylko przez HTTPS.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Czy plik cookie sesji zalogowania ma być wysyłany tylko przez HTTPS. |
| $user_id | `int` | ID użytkownika. |
| $secure | `bool` | Czy plik cookie uwierzytelniania ma być wysyłany tylko przez HTTPS. |

### Od {#since}

- 3.1.0
### Źródło {#source}

Zdefiniowane w [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) w wierszu 91
