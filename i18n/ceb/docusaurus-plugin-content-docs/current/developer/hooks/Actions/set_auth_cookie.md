---
id: set_auth_cookie
title: Aksyon - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aksyon: set_auth_cookie {#action-setauthcookie}

Mo-trigger dayon sa dili pa i-set ang authentication cookie.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $auth_cookie | `string` | Bili sa authentication cookie. |
| $expire | `int` | Ang oras nga matapos ang login grace period isip UNIX timestamp. Default mao ang 12 ka oras human sa expiration time sa cookie. |
| $expiration | `int` | Ang oras kung kanus-a mo-expire ang authentication cookie isip UNIX timestamp. Default mao ang 14 ka adlaw gikan karon. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Ang mga bili naglakip sa 'auth' o 'secure_auth'. |
| $token | `string` | Session token sa user nga gamiton para niini nga cookie. |

### Sukad {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tinubdan {#source}

Gidefine sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) sa linya 124
