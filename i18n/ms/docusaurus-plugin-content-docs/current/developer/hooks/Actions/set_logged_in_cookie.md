---
id: set_logged_in_cookie
title: Tindakan - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Tindakan: set_logged_in_cookie {#action-setloggedincookie}

Berjalan serta-merta sebelum *cookie* pengesahan log masuk ditetapkan.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $logged_in_cookie | `string` | Nilai *cookie* log masuk. |
| $expire | `int` | Masa tempoh kelonggaran log masuk tamat sebagai *UNIX timestamp*. Lalat adalah 12 jam selepas masa luput *cookie*. |
| $expiration | `int` | Masa *cookie* pengesahan log masuk luput sebagai *UNIX timestamp*. Lalat adalah 14 hari dari sekarang. |
| $user_id | `int` | ID Pengguna. |
| $scheme | `string` | Skema pengesahan. Lalat 'logged_in'. |
| $token | `string` | Token sesi pengguna untuk digunakan bagi *cookie* ini. |

### Sejak {#since}

- 2.6.0
- 4.9.0: Parameter <code>$token</code> telah ditambah.
### Sumber {#source}

Didefinisikan dalam [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) pada baris 141
