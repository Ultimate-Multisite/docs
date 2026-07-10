---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

یہ فلٹر آتھنٹیکیشن کوکی کی میعاد ختم ہونے کی مدت (expiration period) کو کنٹرول کرتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | میعاد ختم ہونے کی مدت سیکنڈز میں۔ |
| $user_id | `int` | صارف کی شناخت کنندہ (User ID)۔ |
| $remember | `bool` | کیا صارف کے لاگ ان کو یاد رکھنا ہے؟ ڈیفالٹ طور پر غلط (false)۔ |

### Since {#since}

- 2.8.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) میں لائن 52 پر ڈیفائن کیا گیا ہے۔
