---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

లాగిన్ అయిన కుకీని (cookie) HTTPS ద్వారా మాత్రమే పంపాలా వద్దా అని ఇది నిర్ణయిస్తుంది.

## పారామీటర్లు (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | లాగిన్ అయిన కుకీని HTTPS ద్వారా మాత్రమే పంపాలా వద్దా. |
| $user_id | `int` | యూజర్ ID. |
| $secure | `bool` | ఆథెంటికేషన్ కుకీని (auth cookie) HTTPS ద్వారా మాత్రమే పంపాలా వద్దా. |

### ఎప్పటి నుండి (Since)

- 3.1.0
### మూలం (Source)

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) లోని 91వ లైన్‌లో నిర్వచించబడింది.
