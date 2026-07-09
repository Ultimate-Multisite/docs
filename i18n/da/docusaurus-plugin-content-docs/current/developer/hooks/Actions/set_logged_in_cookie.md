---
id: set_logged_in_cookie
title: Handling - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Handling: set_logged_in_cookie

Udløses umiddelbart før godkendelses-cookien for indloggede sættes.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $logged_in_cookie | `string` | Cookie-værdien for indloggede. |
| $expire | `int` | Tidspunktet, hvor login-respittiden udløber, som et UNIX-tidsstempel. Standard er 12 timer efter cookiens udløbstidspunkt. |
| $expiration | `int` | Tidspunktet, hvor godkendelses-cookien for indloggede udløber, som et UNIX-tidsstempel. Standard er 14 dage fra nu. |
| $user_id | `int` | Bruger-ID. |
| $scheme | `string` | Godkendelsesskema. Standard 'logged_in'. |
| $token | `string` | Brugerens sessionstoken, der skal bruges til denne cookie. |

### Siden

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Kilde

Defineret i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) på linje 141
