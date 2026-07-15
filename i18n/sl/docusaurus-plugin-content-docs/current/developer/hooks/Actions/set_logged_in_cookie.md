---
id: set_logged_in_cookie
title: Dejanje - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Dejanje: set_logged_in_cookie

Sproži se tik preden je nastavljena piškotka za preverjanje pristnosti prijavljenega uporabnika.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Vrednost piškotka prijavljenega uporabnika. |
| $expire | `int` | Čas, ko poteče obdobje mirovanja prijave, kot UNIX timestamp. Privzeto je 12 ur po času poteka piškotka. |
| $expiration | `int` | Čas, ko poteče piškotek za preverjanje pristnosti prijavljenega uporabnika, kot UNIX timestamp. Privzeto je 14 dni od zdaj. |
| $user_id | `int` | ID uporabnika. |
| $scheme | `string` | Shema preverjanja pristnosti. Privzeto 'logged_in'. |
| $token | `string` | Uporabnikov žeton seje za uporabo za ta piškotek. |

### Od različice {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Vir {#source}

Definirano v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) v vrstici 141
