---
id: set_logged_in_cookie
title: Eylem - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksiyon: set_logged_in_cookie

Oturum açmış kimlik doğrulama çerezi ayarlanmadan hemen önce tetiklenir.

## Parametreler

| Adı | Tür | Açıklama |
|------|------|-------------|
| $logged_in_cookie | `string` | Oturum açmış çerez değeri. |
| $expire | `int` | Giriş süresinin sona erdiği zamanı bir UNIX zaman damgası olarak belirtir. Varsayılan olarak çerezin süresinin 12 saat sonrası kullanılır. |
| $expiration | `int` | Oturum açmış kimlik doğrulama çerezi sona erecek zamanı bir UNIX zaman damgası olarak belirtir. Varsayılan olarak şu andan 14 gün sonrası kullanılır. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $scheme | `string` | Kimlik doğrulama şeması. Varsayılan değeri 'logged_in'. |
| $token | `string` | Bu çerez için kullanılacak kullanıcının oturum token'ı. |

### Ne Zaman

- 2.6.0
- 4.9.0: <code>$token</code> parametresi eklendi.
### Kaynak

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) dosyasında 141. satırda tanımlanmıştır.
