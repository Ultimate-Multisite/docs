---
id: secure_logged_in_cookie
title: Penapis - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Menapis sama ada kuki log masuk perlu dihantar hanya melalui HTTPS.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Sama ada kuki log masuk hanya perlu dihantar melalui HTTPS. |
| $user_id | `int` | ID Pengguna. |
| $secure | `bool` | Sama ada kuki pengesahan perlu dihantar hanya melalui HTTPS. |

### Sejak {#since}

- 3.1.0
### Sumber {#source}

Didefinisikan dalam [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) pada baris 91
