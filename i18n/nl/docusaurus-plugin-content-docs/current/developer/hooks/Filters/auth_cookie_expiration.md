---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtert de duur van de vervalperiode van het authenticatiecookie.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $length | `int` | Duur van de vervalperiode in seconden. |
| $user_id | `int` | Gebruikers-ID. |
| $remember | `bool` | Of de gebruikerslogin moet worden onthouden. Standaard false. |

### Since

- 2.8.0

### Bron

Gedefinieerd in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) op regel 52
