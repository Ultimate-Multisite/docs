---
id: set_logged_in_cookie
title: Actie - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Actie: set_logged_in_cookie

Zet onmiddellijk vóór het instellen van de inlog-authenticatiecookie.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $logged_in_cookie | `string` | De waarde van de inlogcookie. |
| $expire | `int` | De tijd waarop de inloggraceperiode verloopt als UNIX-timestamp. Standaard is 12 uur na de vervaltijd van de cookie. |
| $expiration | `int` | De tijd waarop de inlog-authenticatiecookie verloopt als UNIX-timestamp. Standaard is 14 dagen vanaf nu. |
| $user_id | `int` | Gebruikers-ID. |
| $scheme | `string` | Authenticatieschema. Standaard 'logged_in'. |
| $token | `string` | De sessietoken van de gebruiker om voor deze cookie te gebruiken. |

### Sinds

- 2.6.0
- 4.9.0: De <code>$token</code> parameter is toegevoegd.

### Bron

Gedefinieerd in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) op regel 141
