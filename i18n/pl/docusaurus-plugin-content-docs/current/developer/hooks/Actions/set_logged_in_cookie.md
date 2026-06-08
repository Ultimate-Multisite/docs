---
id: set_logged_in_cookie
title: Akcja - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Wyzwala się natychmiast przed ustawieniem ciasteczka uwierzytelniającego zalogowanego użytkownika.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Wartość ciasteczka zalogowania. |
| $expire | `int` | Czas wygaśnięcia okresu łaski logowania, podany jako znacznik czasu UNIX. Domyślnie wynosi 12 godzin od czasu wygaśnięcia ciasteczka. |
| $expiration | `int` | Czas wygaśnięcia ciasteczka uwierzytelniającego zalogowanego użytkownika, podany jako znacznik czasu UNIX. Domyślnie wynosi 14 dni od teraz. |
| $user_id | `int` | ID użytkownika. |
| $scheme | `string` | Schemat uwierzytelniania. Domyślnie 'logged_in'. |
| $token | `string` | Token sesji użytkownika, który ma być użyty dla tego ciasteczka. |

### Since

- 2.6.0
- 4.9.0: Dodano parametr <code>$token</code>.
### Source

Zdefiniowane w [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) w linii 141
