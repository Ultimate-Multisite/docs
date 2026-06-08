---
id: secure_logged_in_cookie
title: Filtru - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtru: secure_logged_in_cookie

Filtrează dacă cookie-ul de autentificare ar trebui să fie trimis doar prin HTTPS.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Indică dacă cookie-ul de autentificare ar trebui să fie trimis doar prin HTTPS. |
| $user_id | `int` | ID-ul utilizatorului. |
| $secure | `bool` | Indică dacă cookie-ul de autentificare ar trebui să fie trimis doar prin HTTPS. |

### De la

- 3.1.0
### Sursă

Definit în [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) la linia 91
