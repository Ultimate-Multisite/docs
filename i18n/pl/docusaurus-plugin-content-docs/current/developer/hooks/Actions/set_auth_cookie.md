---
id: set_auth_cookie
title: Akcja - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Akcja: set_auth_cookie

Wywoływana jest tuż przed ustawieniem ciasteczka uwierzytelniającego.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $auth_cookie | `string` | Wartość ciasteczka uwierzytelniającego. |
| $expire | `int` | Czas wygaśnięcia okresu łaski logowania, podany jako znacznik czasu UNIX. Domyślnie jest to 12 godzin po wygaśnięciu ciasteczka. |
| $expiration | `int` | Czas wygaśnięcia ciasteczka uwierzytelniającego, podany jako znacznik czasu UNIX. Domyślnie jest to 14 dni od teraz. |
| $user_id | `int` | Identyfikator użytkownika. |
| $scheme | `string` | Schemat uwierzytelniania. Wartości obejmują 'auth' lub 'secure_auth'. |
| $token | `string` | Token sesji użytkownika, który ma być użyty dla tego ciasteczka. |

### Od {#since}

- 2.5.0
- 4.9.0: Dodano parametr <code>$token</code>.
### Źródło {#source}

Zdefiniowane w [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) w linii 124
