---
id: set_auth_cookie
title: Aktion - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aktion: set_auth_cookie

Löst unmittelbar aus, bevor das Authentifizierungs-Cookie gesetzt wird.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $auth_cookie | `string` | Authentifizierungs-Cookie-Wert. |
| $expire | `int` | Die Zeit, zu der die Login-Glückwunschfrist als UNIX-Zeitstempel abläuft. Standardmäßig 12 Stunden nach Ablauf des Cookies. |
| $expiration | `int` | Die Zeit, zu der das Authentifizierungs-Cookie als UNIX-Zeitstempel abläuft. Standardmäßig 14 Tage ab jetzt. |
| $user_id | `int` | Benutzer-ID. |
| $scheme | `string` | Authentifizierungs-Schema. Werte umfassen 'auth' oder 'secure_auth'. |
| $token | `string` | Benutzersitzungs-Token, das für dieses Cookie verwendet wird. |

### Seit

- 2.5.0
- 4.9.0: Der <code>$token</code>-Parameter wurde hinzugefügt.

### Quelle

Definiert in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) in Zeile 124
