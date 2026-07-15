---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Utlöses omedelbart innan inloggningsautentiseringskakan sätts.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $logged_in_cookie | `string` | Värdet för inloggningskakan. |
| $expire | `int` | Tiden då inloggningsperioden löper ut, angiven som ett UNIX-tidsstämpel. Standardvärdet är 12 timmar efter kakans utgångstid. |
| $expiration | `int` | Tiden då inloggningsautentiseringskakan går ut, angiven som ett UNIX-tidsstämpel. Standardvärdet är 14 dagar från idag. |
| $user_id | `int` | Användar-ID. |
| $scheme | `string` | Autentiseringsschema. Standardvärde är 'logged_in'. |
| $token | `string` | Användarens sessions-token som ska användas för denna kaka. |

### Sedan {#since}

- 2.6.0
- 4.9.0: Parametern <code>$token</code> lades till.
### Källa {#source}

Definieras i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) på rad 141
