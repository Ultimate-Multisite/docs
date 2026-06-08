---
id: auth_cookie_expiration
title: Filtru - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtru: auth_cookie_expiration

Filtrează durata perioadei de expirare a cookie-ului de autentificare.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $length | `int` | Durata perioadei de expirare în secunde. |
| $user_id | `int` | ID-ul utilizatorului. |
| $remember | `bool` | Dacă să își amintească utilizatorul sesiunea de login. Implicit false. |

### De la

- 2.8.0
### Sursă

Definit în [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) la linia 52
