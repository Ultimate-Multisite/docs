---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

ఆథెంటికేషన్ కుకీని (auth cookie) HTTPS ద్వారా మాత్రమే పంపాలా వద్దా అని ఇది నిర్ణయిస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | కుకీని HTTPS ద్వారా మాత్రమే పంపాలా వద్దా అని ఇది చెకింగ్ చేస్తుంది. |
| $user_id | `int` | యూజర్ ID. |

### Since

- 3.1.0
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) లోని 80వ లైన్‌లో నిర్వచించబడింది.
