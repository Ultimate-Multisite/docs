---
id: secure_auth_cookie
title: Filtru - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtru: secure_auth_cookie

Filtrează dacă cookie-ul de autentificare ar trebui trimis doar prin HTTPS.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $secure | `bool` | Dacă cookie-ul trebuie trimis doar prin HTTPS. |
| $user_id | `int` | ID-ul utilizatorului. |

### De la

- 3.1.0
### Sursă

Definit în [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) la linia 80
