---
id: set_logged_in_cookie
title: Akció - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

A bejelentkezett hitelesítő sütit (cookie) megadása közvetlenül előtti.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $logged_in_cookie | `string` | A bejelentkezett sütit értékét. |
| $expire | `int` | Az idő, amikor a bejelentkezési „mennyiség” (grace period) lejár, UNIX időbélyegként. Alapértelmezett érték: 12 órával később, mint a sütit lejárt időpontja. |
| $expiration | `int` | Az idő, amikor a bejelentkezett hitelesítő sütit lejárt, UNIX időbélyegként. Alapértelmezett érték: 14 nap múlva. |
| $user_id | `int` | Felhasználói azonosító. |
| $scheme | `string` | Hitelesítő rendszer. Alapértelmezett: 'logged_in'. |
| $token | `string` | A felhasználó munkamenet-tokenje, amelyet e sütithez kell használni. |

### Amikor elérhető {#since}

- 2.6.0
- 4.9.0: A <code>$token</code> paramétert adták hozzá.
### Forrás {#source}

Meghatározva a [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) fájlban, 141-sorban.
