---
id: set_auth_cookie
title: Igikorwa - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Igikorwa: set_auth_cookie {#action-setauthcookie}

Kibaho ako kanya mbere y’uko kuki y’iyemeza mwirondoro ishyirwaho.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $auth_cookie | `string` | Agaciro ka kuki y’iyemeza mwirondoro. |
| $expire | `int` | Igihe igihe cy’inyongera cyo kwinjira kirangirira nk’igihe cya UNIX. Mburabuzi ni amasaha 12 nyuma y’igihe kuki irangirira. |
| $expiration | `int` | Igihe kuki y’iyemeza mwirondoro irangirira nk’igihe cya UNIX. Mburabuzi ni iminsi 14 uhereye ubu. |
| $user_id | `int` | ID y’umukoresha. |
| $scheme | `string` | Uburyo bw’iyemeza mwirondoro. Indangagaciro zirimo 'auth' cyangwa 'secure_auth'. |
| $token | `string` | Token y’umukoresha y’icyiciro ikoreshwa kuri iyi kuki. |

### Kuva {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Inkomoko {#source}

Bisobanuwe muri [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ku murongo wa 124
