---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Auth çerezin sadece HTTPS üzerinden gönderilip gönderilmeyeceğini filtreler.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $secure | `bool` | Çerezin sadece HTTPS üzerinden gönderilip gönderilmeyeceğini belirler. |
| $user_id | `int` | Kullanıcı Kimliği. |

### Versiyon {#since}

- 3.1.0
### Kaynak {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) dosyasında 80. satırda tanımlanmıştır.
