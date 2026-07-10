---
id: set_auth_cookie
title: Tindakan - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Dijalankan serta-merta sebelum *cookie* pengesahan ditetapkan.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Nilai *cookie* pengesahan. |
| $expire | `int` | Masa tempoh kelonggaran log masuk tamat sebagai *timestamp* UNIX. Lalatnya adalah 12 jam selepas masa luput *cookie*. |
| $expiration | `int` | Masa apabila *cookie* pengesahan luput sebagai *timestamp* UNIX. Lalatnya adalah 14 hari dari sekarang. |
| $user_id | `int` | ID Pengguna. |
| $scheme | `string` | Skema pengesahan. Nilai termasuk 'auth' atau 'secure_auth'. |
| $token | `string` | Token sesi pengguna untuk digunakan bagi *cookie* ini. |

### Sejak {#since}

- 2.5.0
- 4.9.0: Parameter `<code>$token</code>` telah ditambah.
### Sumber {#source}

Ditakrifkan dalam [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) pada baris 124
