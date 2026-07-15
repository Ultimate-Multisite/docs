---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

یہ عمل تصدیق کا کوکی (authentication cookie) سیٹ ہونے سے فوراً پہلے چلتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | تصدیق کوکی کی ویلیو (Authentication cookie value)۔ |
| $expire | `int` | وہ وقت جب لاگ ان گریس پیریڈ ختم ہو جائے گا، یونیکس ٹائم سٹیمپ کے طور پر۔ ڈیفالٹ یہ ہے کہ کوکی کی ایکسپائری کے وقت سے 12 گھنٹے بعد۔ |
| $expiration | `int` | وہ وقت جب تصدیق کوکی ختم ہو جائے گا، یونیکس ٹائم سٹیمپ کے طور پر۔ ڈیفالٹ آج سے 14 دن بعد۔ |
| $user_id | `int` | صارف کی شناخت کنندہ (User ID)۔ |
| $scheme | `string` | تصدیق کا طریقہ کار (Authentication scheme)۔ ویلیوز میں 'auth' یا 'secure_auth' شامل ہیں۔ |
| $token | `string` | اس کوکی کے لیے استعمال ہونے والا صارف کا سیشن ٹوکن (User's session token)۔ |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> پیرامیٹر شامل کیا گیا۔
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) میں لائن 124 پر ڈیفائن کیا گیا ہے۔
