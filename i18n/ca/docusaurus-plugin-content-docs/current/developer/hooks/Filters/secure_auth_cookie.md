---
id: secure_auth_cookie
title: Filtre - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtre: secure_auth_cookie {#filter-secureauthcookie}

Filtra si la cookie d'autenticació s'ha de enviar només per HTTPS.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $secure | `bool` | Si la cookie ha de ser enviada només per HTTPS. |
| $user_id | `int` | ID de l'usuari. |

### Des de {#since}

- 3.1.0
### Font {#source}

Definida en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) a la línia 80
