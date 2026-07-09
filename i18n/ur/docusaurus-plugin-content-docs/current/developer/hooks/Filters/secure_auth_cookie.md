---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

یہ فلٹر طے کرتا ہے کہ کیا آتھ (auth) کوکی صرف HTTPS کے ذریعے بھیجی جانی چاہیے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | کیا کوکی صرف HTTPS کے ذریعے بھیجی جانی چاہیے۔ |
| $user_id | `int` | صارف کی شناخت (User ID)۔ |

### Since {#since}

- 3.1.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) میں لائن 80 پر بیان کیا گیا ہے۔
