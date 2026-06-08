---
id: set_logged_in_cookie
title: Handling - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Kjøres umiddelbart før innloggings-autentiserings-cookien settes.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $logged_in_cookie | `string` | Verdien for innloggings-cookien. |
| $expire | `int` | Tidspunktet innloggings-cookiens utvidede gyldighetsperiode utløper, angitt som et UNIX-tidsstempel. Standard er 12 timer etter cookiens utløp. |
| $expiration | `int` | Tidspunktet innloggings-autentiserings-cookien utløper, angitt som et UNIX-tidsstempel. Standard er 14 dager fra i dag. |
| $user_id | `int` | Bruker-ID. |
| $scheme | `string` | Autentiseringsskjema. Standard er 'logged_in'. |
| $token | `string` | Brukerens sesjonstoken som skal brukes for denne cookien. |

### Siden

- 2.6.0
- 4.9.0: Parameteren <code>$token</code> ble lagt til.
### Kilde

Definert i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) på linje 141
