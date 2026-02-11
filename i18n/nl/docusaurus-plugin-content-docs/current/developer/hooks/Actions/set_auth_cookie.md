---
id: set_auth_cookie
title: Actie - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Actie: set_auth_cookie

Wordt onmiddellijk uitgevoerd voordat de authenticatiecookie wordt ingesteld.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $auth_cookie | `string` | Authenticatiecookie-waarde. |
| $expire | `int` | De tijd waarop de login‑graceperiode verloopt als een UNIX‑timestamp. Standaard is 12 uur na de vervaldatum van de cookie. |
| $expiration | `int` | De tijd waarop de authenticatiecookie verloopt als een UNIX‑timestamp. Standaard is 14 dagen vanaf nu. |
| $user_id | `int` | Gebruikers‑ID. |
| $scheme | `string` | Authenticatieschema. Waarden omvatten 'auth' of 'secure_auth'. |
| $token | `string` | Sessietoken van de gebruiker om voor deze cookie te gebruiken. |

### Sinds

- 2.5.0
- 4.9.0: De <code>$token</code> parameter is toegevoegd.

### Bron

Gedefinieerd in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) op regel 124
