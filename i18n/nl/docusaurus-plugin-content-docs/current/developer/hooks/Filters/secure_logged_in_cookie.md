---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Filters whether the logged in cookie should only be sent over HTTPS.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Of de ingelogde cookie alleen via HTTPS moet worden verzonden. |
| $user_id | `int` | Gebruikers-ID. |
| $secure | `bool` | Of de auth-cookie alleen via HTTPS moet worden verzonden. |

### Since

- 3.1.0

### Source

Gedefinieerd in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) op regel 91
