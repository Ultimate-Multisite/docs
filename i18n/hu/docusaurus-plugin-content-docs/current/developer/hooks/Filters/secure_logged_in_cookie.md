---
id: secure_logged_in_cookie
title: Szűrő - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Szűrő: secure_logged_in_cookie

Meghatározza, hogy a bejelentkezési sütit csak HTTPS-en kell-e továbbítani.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Megdéminjezi, hogy a bejelentkezési sütit csak HTTPS-en kell-e továbbítani. |
| $user_id | `int` | Felhasználói azonosító. |
| $secure | `bool` | Megdéminjezi, hogy az hitelesítő sütit csak HTTPS-en kell-e továbbítani. |

### Desde

- 3.1.0
### Forrás

Megdéminjezik [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) fájlban, 91-sorban.
