---
id: auth_cookie_expiration
title: Szűrő - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Beállítja az hitelesítő süti (cookie) érvényekének időtartamát.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Az érvények időtartama másodpercekben. |
| $user_id | `int` | A felhasználói azonosító. |
| $remember | `bool` | Az, hogy emlékezzen-e a felhasználó bejelentkezésére. Alapértelmezett értéke `false`. |

### Desde {#since}

- 2.8.0
### Forrás {#source}

Meghatározva a [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) fájlban, 52-sorban.
