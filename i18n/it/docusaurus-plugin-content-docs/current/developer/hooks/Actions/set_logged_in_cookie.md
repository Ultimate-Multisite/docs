---
id: set_logged_in_cookie
title: Azione - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Azione: set_logged_in_cookie

Si attiva immediatamente prima che venga impostato il cookie di autenticazione di accesso.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $logged_in_cookie | `string` | Il valore del cookie di accesso. |
| $expire | `int` | Il tempo in cui scade il periodo di grazia di accesso come timestamp UNIX. Il valore predefinito è 12 ore dopo la scadenza del cookie. |
| $expiration | `int` | Il tempo in cui scade il cookie di autenticazione di accesso come timestamp UNIX. Il valore predefinito è 14 giorni da ora. |
| $user_id | `int` | ID utente. |
| $scheme | `string` | Schema di autenticazione. Valore predefinito 'logged_in'. |
| $token | `string` | Token di sessione dell'utente da utilizzare per questo cookie. |

### Da

- 2.6.0
- 4.9.0: Il parametro <code>$token</code> è stato aggiunto.

### Fonte

Definito in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) alla riga 141
