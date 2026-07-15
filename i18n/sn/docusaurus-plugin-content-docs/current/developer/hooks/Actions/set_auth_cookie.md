---
id: set_auth_cookie
title: Chiito - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Chiito: set_auth_cookie

Chinoitika pakarepo authentication cookie isati yaiswa.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $auth_cookie | `string` | Kukosha kweauthentication cookie. |
| $expire | `int` | Nguva inopera nguva yenyasha yekupinda seUNIX timestamp. Default imaawa 12 mushure menguva yekupera kwecookie. |
| $expiration | `int` | Nguva inopera authentication cookie seUNIX timestamp. Default imazuva 14 kubva zvino. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Zvikosha zvinosanganisira 'auth' kana 'secure_auth'. |
| $token | `string` | Session token yemushandisi yekushandisa pa cookie iyi. |

### Kubva {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Kwakabva {#source}

Yakatsanangurwa mu[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) pamutsetse 124
