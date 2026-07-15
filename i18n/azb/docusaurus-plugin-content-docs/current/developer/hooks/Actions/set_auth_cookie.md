---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aksiyon: set_auth_cookie

Kimlik doğrulama çerezi ayarlanmadan hemen önce tetiklenir.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $auth_cookie | `string` | Kimlik doğrulama çerezi değeri. |
| $expire | `int` | Giriş süresinin dolacağı zamanı UNIX zaman damgası olarak belirtir. Varsayılan olarak çerezin süresinin dolmasından 12 saat sonrasıdır. |
| $expiration | `int` | Kimlik doğrulama çerezi ne zaman sona eriyor, bunu UNIX zaman damgası olarak belirtir. Varsayılan olarak bugünden 14 gün sonrasıdır. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $scheme | `string` | Kimlik doğrulama şeması. Değerler arasında 'auth' veya 'secure_auth' bulunur. |
| $token | `string` | Bu çerez için kullanılacak kullanıcının oturum belirteci. |

### Ne zaman {#since}

- 2.5.0
- 4.9.0: <code>$token</code> parametresi eklendi.
### Kaynak {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) dosyasının 124. satırında tanımlanmıştır.
