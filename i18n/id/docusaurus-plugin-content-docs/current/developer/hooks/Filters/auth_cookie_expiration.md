---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Memfilter durasi periode kedaluwarsa cookie otentikasi.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Durasi periode kedaluwarsa dalam detik. |
| $user_id | `int` | ID Pengguna. |
| $remember | `bool` | Menentukan apakah login pengguna harus diingat. Default false. |

### Sejak

- 2.8.0
### Sumber

Didefinisikan di [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) pada baris 52
