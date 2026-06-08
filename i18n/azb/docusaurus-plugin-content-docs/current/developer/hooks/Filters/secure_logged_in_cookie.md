---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Bu filtre, oturum açma cookie'sinin sadece HTTPS üzerinden gönderilip gönderilmeyeceğini belirler.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Oturum açma cookie'sinin sadece HTTPS üzerinden gönderilip gönderilmeyeceği. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $secure | `bool` | Kimlik doğrulama cookie'sinin sadece HTTPS üzerinden gönderilip gönderilmeyeceği. |

### Versiyon

- 3.1.0
### Kaynak

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) dosyasında 91. satırda tanımlanmıştır.
