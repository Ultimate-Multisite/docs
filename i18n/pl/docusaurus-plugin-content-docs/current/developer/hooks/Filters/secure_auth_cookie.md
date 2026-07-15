---
id: secure_auth_cookie
title: Filtr - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filtr: secure_auth_cookie

Określa, czy ciasteczko uwierzytelniające (auth cookie) ma być wysyłane tylko przez HTTPS.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $secure | `bool` | Określa, czy ciasteczko ma być wysyłane tylko przez HTTPS. |
| $user_id | `int` | Identyfikator użytkownika. |

### Od wersji {#since}

- 3.1.0
### Źródło {#source}

Zdefiniowane w [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) w linii 80
