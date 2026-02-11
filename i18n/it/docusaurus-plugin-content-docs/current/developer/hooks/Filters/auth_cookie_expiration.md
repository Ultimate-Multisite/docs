---
id: auth_cookie_expiration
title: Filtro - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtro: auth_cookie_expiration

Filtra la durata del periodo di scadenza del cookie di autenticazione.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $length | `int` | Durata del periodo di scadenza in secondi. |
| $user_id | `int` | ID utente. |
| $remember | `bool` | Se ricordare l'accesso dell'utente. Predefinito false. |

### Da

- 2.8.0

### Fonte

Definito in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) alla riga 52
