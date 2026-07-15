---
id: set_auth_cookie
title: Hereket - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Hereket: set_auth_cookie

Autentifikasiýa cookie-si bellenmezinden edil öň işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $auth_cookie | `string` | Autentifikasiýa cookie-siniň bahasy. |
| $expire | `int` | Giriş ýeňillik möhletiniň UNIX wagt belgisi hökmünde tamamlanýan wagty. Deslapky ýagdaýda cookie-niň möhletiniň tamamlanýan wagtyndan 12 sagat soň. |
| $expiration | `int` | Autentifikasiýa cookie-siniň UNIX wagt belgisi hökmünde möhletiniň tamamlanýan wagty. Deslapky ýagdaýda şu wagtdan 14 gün soň. |
| $user_id | `int` | Ulanyjy ID-si. |
| $scheme | `string` | Autentifikasiýa shemasy. Bahalara 'auth' ýa-da 'secure_auth' girýär. |
| $token | `string` | Bu cookie üçin ulanyljak ulanyjynyň sessiýa tokeni. |

### Şondan bäri {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Çeşme {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) içinde 124-nji setirde kesgitlenen.
