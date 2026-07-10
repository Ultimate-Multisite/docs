---
id: set_auth_cookie
title: Åtgärd - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Utlöses omedelbart innan autentiseringskakan sätts.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $auth_cookie | `string` | Värdet på autentiseringskakan. |
| $expire | `int` | Tiden då inloggningsperioden går ut, angiven som ett UNIX-tidsstämpel. Standardvärdet är 12 timmar efter kakan går ut. |
| $expiration | `int` | Tiden då autentiseringskakan går ut, angiven som ett UNIX-tidsstämpel. Standardvärdet är 14 dagar från idag. |
| $user_id | `int` | Användarens ID. |
| $scheme | `string` | Autentiseringsschema. Värden inkluderar 'auth' eller 'secure_auth'. |
| $token | `string` | Användarens sessions-token som ska användas för denna kaka. |

### Sedan {#since}

- 2.5.0
- 4.9.0: Parametern <code>$token</code> lades till.
### Källa {#source}

Definieras i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) på rad 124
