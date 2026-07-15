---
id: auth_cookie_expiration
title: Filtre - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Kimlik doğrulama çerezi (cookie) süresinin ne kadar olacağını ayarlar.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Süre bitiş süresini saniye cinsinden belirtir. |
| $user_id | `int` | Kullanıcının ID'si. |
| $remember | `bool` | Kullanıcının oturumunun hatırlanıp hatırlanmayacağını belirtir. Varsayılan değeri `false`'dur. |

### Versiyon {#since}

- 2.8.0
### Kaynak {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) dosyasında 52. satırda tanımlanmıştır.
