---
id: secure_auth_cookie
title: Szűrő - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Szűrő: secure_auth_cookie

Megállapítja, hogy az autentikációs sütit (auth cookie) csak HTTPS protokollon kell-e küldeni.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $secure | `bool` | Megállapítja, hogy a sütit csak HTTPS protokollon kell-e küldeni. |
| $user_id | `int` | Felhasználói azonosító. |

### Desde

- 3.1.0
### Forrás

Definálva a [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) fájlban, 80-sorban
