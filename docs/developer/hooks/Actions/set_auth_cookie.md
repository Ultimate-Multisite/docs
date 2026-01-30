---
id: set_auth_cookie
title: "Action - set_auth_cookie"
sidebar_label: "set_auth_cookie"
---

# Action: set_auth_cookie

Fires immediately before the authentication cookie is set.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Authentication cookie value. |
| $expire | `int` | The time the login grace period expires as a UNIX timestamp. Default is 12 hours past the cookie's expiration time. |
| $expiration | `int` | The time when the authentication cookie expires as a UNIX timestamp. Default is 14 days from now. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Values include 'auth' or 'secure_auth'. |
| $token | `string` | User's session token to use for this cookie. |

### Since

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Source

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) at line 124

