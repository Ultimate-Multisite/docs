---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Kimlik doğrulama çerezi ne kadar süreyle geçerli olacağını belirler.

## Parametreler

| Adı | Türü | Açıklama |
|------|------|-------------|
| $length | `int` | Bitiş süresi saniye cinsinden. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $remember | `bool` | Kullanıcının girişini hatırlanıp hatırlanmayacağı. Varsayılan değeri false'dur. |

### Versiyon

- 2.8.0
### Kaynak

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) dosyasında 52. satırda tanımlanmıştır.
