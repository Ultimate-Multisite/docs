---
id: set_auth_cookie
title: Azione - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Azione: set_auth_cookie

Si attiva immediatamente prima che venga impostato il cookie di autenticazione.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Valore del cookie di autenticazione. |
| $expire | `int` | Il tempo in cui scade il periodo di grazia di accesso come timestamp UNIX. Il valore predefinito è 12 ore dopo la scadenza del cookie. |
| $expiration | `int` | Il tempo in cui scade il cookie di autenticazione come timestamp UNIX. Il valore predefinito è 14 giorni da ora. |
| $user_id | `int` | ID utente. |
| $scheme | `string` | Schema di autenticazione. I valori includono 'auth' o 'secure_auth'. |
| $token | `string` | Token di sessione dell'utente da utilizzare per questo cookie. |

### Da

- 2.5.0
- 4.9.0: Il parametro <code>$token</code> è stato aggiunto.

### Fonte

Definito in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) alla riga 124
