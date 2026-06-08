---
id: set_auth_cookie
title: Akció - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Akció: set_auth_cookie

Azonosító sütit (authentication cookie) írása közvetlenül előtti.

## Paraméterek

| Név | Típus | Leírás |
|------|------|-------------|
| $auth_cookie | `string` | Azonosító sütit (authentication cookie) értéke. |
| $expire | `int` | Az idő, amikor a bejelentkezési „mennyiség” (grace period) lejár, UNIX időbélyegként. Alapértelmezett érték: 12 órával később, mint a sütit lejárt időpontja. |
| $expiration | `int` | Az idő, amikor azonosító sütit (authentication cookie) lejár, UNIX időbélyegként. Alapértelmezett érték: 14 nap múlva. |
| $user_id | `int` | Felhasználói azonosító (User ID). |
| $scheme | `string` | Azonosítási schéma (Authentication scheme). Az értékek közé tartozik az 'auth' vagy 'secure_auth'. |
| $token | `string` | A felhasználó munkamenet tokenje (session token), amelyet ennek a sütitnek kell használni. |

### Seit

- 2.5.0
- 4.9.0: A <code>$token</code> paramétert adják hozzá.
### Forrás

Definálva van [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) fájlban, 124-sorban.
