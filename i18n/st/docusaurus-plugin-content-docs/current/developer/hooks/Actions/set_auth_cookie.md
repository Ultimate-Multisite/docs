---
id: set_auth_cookie
title: Ketso - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Ketso: set_auth_cookie {#action-setauthcookie}

E sebetsa hang-hang pele cookie ya netefatso e behwa.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $auth_cookie | `string` | Boleng ba cookie ya netefatso. |
| $expire | `int` | Nako eo nako ya mohau wa ho kena e fellang ka yona e le UNIX timestamp. Ya kamehla ke dihora tse 12 ka mora nako ya ho fela ha cookie. |
| $expiration | `int` | Nako eo cookie ya netefatso e fellang ka yona e le UNIX timestamp. Ya kamehla ke matsatsi a 14 ho tloha jwale. |
| $user_id | `int` | ID ya mosebedisi. |
| $scheme | `string` | Mokgwa wa netefatso. Maboleng ho kenyeletswa 'auth' kapa 'secure_auth'. |
| $token | `string` | Token ya session ya mosebedisi e tla sebediswa bakeng sa cookie ena. |

### Ho tloha {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Mohlodi {#source}

E hlalositswe ho [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) moleng wa 124
