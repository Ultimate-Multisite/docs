---
id: set_auth_cookie
title: Үйлдэл - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Үйлдэл: set_auth_cookie {#action-setauthcookie}

Баталгаажуулалтын cookie тохируулагдахын яг өмнө ажиллана.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Баталгаажуулалтын cookie-ийн утга. |
| $expire | `int` | Нэвтрэх хөнгөлөлтийн хугацаа дуусах цагийг UNIX timestamp хэлбэрээр илэрхийлнэ. Анхны утга нь cookie-ийн дуусах хугацаанаас хойш 12 цаг. |
| $expiration | `int` | Баталгаажуулалтын cookie дуусах цагийг UNIX timestamp хэлбэрээр илэрхийлнэ. Анхны утга нь одоогоос 14 хоногийн дараа. |
| $user_id | `int` | Хэрэглэгчийн ID. |
| $scheme | `string` | Баталгаажуулалтын scheme. Утгад 'auth' эсвэл 'secure_auth' орно. |
| $token | `string` | Энэ cookie-д ашиглах хэрэглэгчийн session token. |

### Хойш {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Эх сурвалж {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124)-д 124-р мөрөнд тодорхойлсон
