---
id: set_auth_cookie
title: Handling - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Kjøres umiddelbart før autentiserings-cookieen settes.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $auth_cookie | `string` | Verdien av autentiserings-cookieen. |
| $expire | `int` | Tidspunktet for utløp av påloggingsperioden, angitt som et UNIX-tidsstempel. Standard er 12 timer etter at cookieen utløper. |
| $expiration | `int` | Tidspunktet autentiserings-cookieen utløper, angitt som et UNIX-tidsstempel. Standard er 14 dager fra i dag. |
| $user_id | `int` | Bruker-ID. |
| $scheme | `string` | Autentiseringsskjema. Verdier inkluderer 'auth' eller 'secure_auth'. |
| $token | `string` | Brukerens sesjonstoken som skal brukes for denne cookieen. |

### Siden

- 2.5.0
- 4.9.0: Parameteren <code>$token</code> ble lagt til.
### Kilde

Definert i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) på linje 124
