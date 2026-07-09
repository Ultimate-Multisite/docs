---
id: secure_logged_in_cookie
title: Filtrační metoda - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

Filtruje, zda by měl cookie přihlášeného uživatele být odesílán pouze přes HTTPS.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Zda by měl cookie přihlášeného uživatele být odesílán pouze přes HTTPS. |
| $user_id | `int` | ID uživatele. |
| $secure | `bool` | Zda by měl cookie autentizace být odesílán pouze přes HTTPS. |

### Od verze {#since}

- 3.1.0
### Zdroj {#source}

Definováno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na řádku 91
