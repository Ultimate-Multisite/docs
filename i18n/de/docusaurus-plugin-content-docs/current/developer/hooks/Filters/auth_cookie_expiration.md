---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtert die Dauer des Ablaufzeitraums des Authentifizierungs-Cookies.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Dauer des Ablaufzeitraums in Sekunden. |
| $user_id | `int` | Benutzer-ID. |
| $remember | `bool` | Ob die Benutzerauthentifizierung gespeichert werden soll. Standardwert: false. |

### Since {#since}

- 2.8.0

### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52
