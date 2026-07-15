---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Auth cookie HTTPS വഴി മാത്രമേ അയക്കാനുള്ളൂ എന്ന് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Cookie HTTPS വഴി മാത്രമേ അയക്കാനുള്ളൂ എന്ന് ഇത് തീരുമാനിക്കുന്നു. |
| $user_id | `int` | യൂസർ ഐഡി. |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) at line 80
