---
id: set_logged_in_cookie
title: Aktion - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
Löst unmittelbar aus, bevor das eingeloggt-Authentifizierungs-Cookie gesetzt wird.

## Parameter

| Name | Typ | Beschreibung |
|------|-----|--------------|
| $logged_in_cookie | `string` | Der Wert des eingeloggt-Cookies. |
| $expire | `int` | Die Zeit, zu der die Login-Gnadenfrist als UNIX-Zeitstempel abläuft. Standardmäßig 12 Stunden nach dem Ablaufdatum des Cookies. |
| $expiration | `int` | Die Zeit, zu der das eingeloggt-Authentifizierungs-Cookie als UNIX-Zeitstempel abläuft. Standardmäßig 14 Tage ab jetzt. |
| $user_id | `int` | Benutzer-ID. |
| $scheme | `string` | Authentifizierungs-Schema. Standardmäßig 'logged_in'. |
| $token | `string` | Benutzersitzungstoken, das für dieses Cookie verwendet wird. |

### Seit

- 2.6.0
- 4.9.0: Der <code>$token</code>-Parameter wurde hinzugefügt.

### Quelle

Definiert in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) bei Zeile 141
