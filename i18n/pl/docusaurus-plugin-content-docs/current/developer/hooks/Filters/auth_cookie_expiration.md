---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtr: auth_cookie_expiration {#filter-authcookieexpiration}

Filtr, który określa czas wygaśnięcia ciasteczka uwierzytelniającego.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $length | `int` | Czas trwania okresu wygaśnięcia w sekundach. |
| $user_id | `int` | Identyfikator użytkownika. |
| $remember | `bool` | Czy należy zapamiętać zalogowanie użytkownika. Domyślnie `false`. |

### Od {#since}

- 2.8.0
### Źródło {#source}

Zdefiniowany w [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) w linii 52
