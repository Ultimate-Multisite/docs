---
id: set_auth_cookie
title: Eylem - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Kimlik doğrulama çerezi ayarlanmadan hemen önce tetiklenir.

## Parametreler {#parameters}

| Adı | Tür | Açıklama |
|------|------|-------------|
| $auth_cookie | `string` | Kimlik doğrulama çerezi değeri. |
| $expire | `int` | Giriş süresinin (login grace period) sona erdiği zamanı UNIX zaman damgası olarak belirtir. Varsayılan olarak çerezin süresinin 12 saat sonrasıdır. |
| $expiration | `int` | Kimlik doğrulama çerezi sona erdiğindeki zamanı UNIX zaman damgası olarak belirtir. Varsayılan olarak bugünden 14 gün sonrasıdır. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $scheme | `string` | Kimlik doğrulama şeması. Değerleri 'auth' veya 'secure_auth' olabilir. |
| $token | `string` | Bu çerez için kullanılacak kullanıcının oturum token'ı. |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> parametresi eklendi.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) dosyasında 124. satırda tanımlanmıştır.
