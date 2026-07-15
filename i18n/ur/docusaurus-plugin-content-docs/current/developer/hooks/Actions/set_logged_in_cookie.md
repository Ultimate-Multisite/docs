---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

یہ ایکشن اس وقت چلتا ہے جب لاگ ان تصدیق کی کوکی (logged-in authentication cookie) سیٹ ہونے سے فوراً پہلے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | لاگ ان کوکی کی ویلیو۔ |
| $expire | `int` | وہ وقت جب لاگ ان کی گریس پیریڈ ختم ہوتی ہے، جو یونیکس ٹائم سٹیمپ کے طور پر ہو۔ ڈیفالٹ یہ ہے کہ کوکی کی ایکسپائری کے وقت سے 12 گھنٹے بعد۔ |
| $expiration | `int` | وہ وقت جب لاگ ان تصدیق کی کوکی ختم ہوتی ہے، جو یونیکس ٹائم سٹیمپ کے طور پر ہو۔ ڈیفالٹ یہ ہے کہ آج سے 14 دن بعد۔ |
| $user_id | `int` | صارف کی شناخت (User ID)۔ |
| $scheme | `string` | تصدیق کا طریقہ کار (Authentication scheme)۔ ڈیفالٹ 'logged_in' ہے۔ |
| $token | `string` | اس کوکی کے لیے استعمال ہونے والا صارف کا سیشن ٹوکن۔ |

### کب سے موجود ہے {#since}

- 2.6.0
- 4.9.0: <code>$token</code> پیرامیٹر شامل کیا گیا۔
### ماخذ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) میں لائن 141 پر ڈیفائن کیا گیا ہے۔
