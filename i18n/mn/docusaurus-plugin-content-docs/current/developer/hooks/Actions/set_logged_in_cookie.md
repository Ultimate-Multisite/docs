---
id: set_logged_in_cookie
title: Үйлдэл - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Үйлдэл: set_logged_in_cookie

Нэвтэрсэн эсэхийг баталгаажуулах cookie тохируулагдахын яг өмнө ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $logged_in_cookie | `string` | Нэвтэрсэн cookie-н утга. |
| $expire | `int` | Нэвтрэлтийн хөнгөлөлтийн хугацаа дуусах цаг, UNIX timestamp хэлбэрээр. Анхдагч нь cookie-н дуусах хугацаанаас 12 цагийн дараа. |
| $expiration | `int` | Нэвтэрсэн эсэхийг баталгаажуулах cookie дуусах цаг, UNIX timestamp хэлбэрээр. Анхдагч нь одоогоос 14 хоногийн дараа. |
| $user_id | `int` | Хэрэглэгчийн ID. |
| $scheme | `string` | Баталгаажуулалтын схем. Анхдагч нь 'logged_in'. |
| $token | `string` | Энэ cookie-д ашиглах хэрэглэгчийн session token. |

### Хойш {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Эх сурвалж {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141)-д 141-р мөрөнд тодорхойлогдсон.
