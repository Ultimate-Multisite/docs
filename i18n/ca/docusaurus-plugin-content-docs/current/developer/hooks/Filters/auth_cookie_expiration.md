---
id: auth_cookie_expiration
title: Filtre - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtre: auth_cookie_expiration

Filtra la durada del període de caducitat de la cookie d'autenticació.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| $length | `int` | Durada del període de caducitat en segons. |
| $user_id | `int` | ID de l'usuari. |
| $remember | `bool` | Si recordar la sessió de l'usuari. Default false. |

### Des de

- 2.8.0
### Font

Definiut en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) a la línia 52
