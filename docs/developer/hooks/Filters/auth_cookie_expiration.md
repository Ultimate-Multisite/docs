---
id: auth_cookie_expiration
title: "Filter - auth_cookie_expiration"
sidebar_label: "auth_cookie_expiration"
---

# Filter: auth_cookie_expiration

Filters the duration of the authentication cookie expiration period.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Duration of the expiration period in seconds. |
| $user_id | `int` | User ID. |
| $remember | `bool` | Whether to remember the user login. Default false. |

### Since

- 2.8.0
### Source

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52

