---
id: set_logged_in_cookie
title: Hereket - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Hereket: set_logged_in_cookie {#action-setloggedincookie}

Ulgama girilen autentifikasiýa cookie-si goýulmazdan göni öň işledilýär.

## Parametrler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Ulgama girilen cookie bahasy. |
| $expire | `int` | Giriş ýeňillik möhletiniň UNIX wagt belgisi hökmünde gutarýan wagty. Deslapky bahasy cookie-niň gutarýan wagtyndan 12 sagat soň. |
| $expiration | `int` | Ulgama girilen autentifikasiýa cookie-siniň UNIX wagt belgisi hökmünde gutarýan wagty. Deslapky bahasy şu wagtdan 14 gün soň. |
| $user_id | `int` | Ulanyjy ID-si. |
| $scheme | `string` | Autentifikasiýa shemasy. Deslapky 'logged_in'. |
| $token | `string` | Bu cookie üçin ulanyljak ulanyjynyň sessiýa tokeni. |

### Şondan bäri {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Çeşme {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) içinde 141-nji setirde kesgitlenen
