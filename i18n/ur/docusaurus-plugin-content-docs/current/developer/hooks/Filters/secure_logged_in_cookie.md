---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

یہ فلٹر طے کرتا ہے کہ لاگ ان کوکی (logged in cookie) صرف HTTPS کے ذریعے بھیجی جانی چاہیے یا نہیں۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | یہ طے کرتا ہے کہ لاگ ان کوکی صرف HTTPS کے ذریعے بھیجی جانی چاہیے۔ |
| $user_id | `int` | صارف کی ID (User ID)۔ |
| $secure | `bool` | یہ طے کرتا ہے کہ آتھنٹیکیشن کوکی (auth cookie) صرف HTTPS کے ذریعے بھیجی جانی چاہیے۔ |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
