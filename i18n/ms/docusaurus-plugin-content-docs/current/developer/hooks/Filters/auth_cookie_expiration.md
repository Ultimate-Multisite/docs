---
id: auth_cookie_expiration
title: Penapis - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Mengubah tempoh kadaluarsa *cookie* pengesahan.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Tempoh kadaluarsa dalam saat. |
| $user_id | `int` | ID Pengguna. |
| $remember | `bool` | Sama ada untuk mengingati log masuk pengguna. Lalai palsu. |

### Since

- 2.8.0
### Source

Didefinisikan dalam [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) pada baris 52
