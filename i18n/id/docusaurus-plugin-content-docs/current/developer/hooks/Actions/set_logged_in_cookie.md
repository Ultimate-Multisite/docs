---
id: set_logged_in_cookie
title: Aksi - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Dipicu segera sebelum cookie otentikasi masuk diatur.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Nilai cookie masuk. |
| $expire | `int` | Waktu masa tenggang login kedaluwarsa sebagai stempel waktu UNIX. Defaultnya adalah 12 jam setelah waktu kedaluwarsa cookie. |
| $expiration | `int` | Waktu cookie otentikasi masuk kedaluwarsa sebagai stempel waktu UNIX. Defaultnya adalah 14 hari dari sekarang. |
| $user_id | `int` | ID Pengguna. |
| $scheme | `string` | Skema otentikasi. Default 'logged_in'. |
| $token | `string` | Token sesi pengguna yang akan digunakan untuk cookie ini. |

### Sejak {#since}

- 2.6.0
- 4.9.0: Parameter <code>$token</code> ditambahkan.
### Sumber {#source}

Didefinisikan di [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) pada baris 141
