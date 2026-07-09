---
id: send_auth_cookies
title: Szűrő - send_auth_cookies
sidebar_label: send_auth_cookies
_i18n_hash: b4e7974df7394f865bbf7450c9a1cd37
---
# Szűrő: send_auth_cookies {#filter-sendauthcookies}

Megtehető, hogy megakadályozza az autentikációs (auth) cookie-k küldését a felhasználónak (client-nek).

## Paraméterek {#parameters}

| Neve | Típusa | Leírása |
|------|------|-------------|
| $send | `bool` | Megtekinti, hogy az autentikációs cookie-kat küldjük-e a klientnek. |

### Megjelenés {#since}

- 4.7.4
### Forrás {#source}

Meghatározva a [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L150) fájlban, 150-soron.
