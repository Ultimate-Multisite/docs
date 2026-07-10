---
id: set_auth_cookie
title: Aksi - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Dipicu segera sebelum *cookie* otentikasi diatur.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $auth_cookie | `string` | Nilai *cookie* otentikasi. |
| $expire | `int` | Waktu berakhirnya masa tenggang *login* sebagai *UNIX timestamp*. *Default*-nya adalah 12 jam setelah waktu kedaluwarsa *cookie*. |
| $expiration | `int` | Waktu kedaluwarsa *cookie* otentikasi sebagai *UNIX timestamp*. *Default*-nya adalah 14 hari dari sekarang. |
| $user_id | `int` | ID Pengguna. |
| $scheme | `string` | Skema otentikasi. Nilai yang mungkin termasuk 'auth' atau 'secure_auth'. |
| $token | `string` | Token sesi pengguna yang akan digunakan untuk *cookie* ini. |

### Sejak {#since}

- 2.5.0
- 4.9.0: Parameter `<code>$token</code>` ditambahkan.
### Sumber {#source}

Didefinisikan di [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) pada baris 124
