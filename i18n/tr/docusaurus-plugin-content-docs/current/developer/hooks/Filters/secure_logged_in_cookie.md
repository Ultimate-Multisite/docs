---
id: secure_logged_in_cookie
title: Filtre - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

Giriş yapmış kullanıcı çerezinin yalnızca HTTPS üzerinden gönderilip gönderilmeyeceğini filtreler.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Giriş yapmış kullanıcı çerezi yalnızca HTTPS üzerinden gönderilmeli mi? |
| $user_id | `int` | Kullanıcı Kimliği. |
| $secure | `bool` | Kimlik doğrulama çerezi yalnızca HTTPS üzerinden gönderilmeli mi? |

### Versiyon {#since}

- 3.1.0
### Kaynak {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) dosyasında 91. satırda tanımlanmıştır.
