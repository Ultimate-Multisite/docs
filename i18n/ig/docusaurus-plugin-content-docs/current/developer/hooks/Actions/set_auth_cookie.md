---
id: set_auth_cookie
title: Omume - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Na-amalite ozugbo tupu e debe authentication cookie.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Uru authentication cookie. |
| $expire | `int` | Oge login grace period ga-agwụ dị ka UNIX timestamp. Ndabara bụ awa 12 gafere oge ngwụcha cookie ahụ. |
| $expiration | `int` | Oge mgbe authentication cookie ga-agwụ dị ka UNIX timestamp. Ndabara bụ ụbọchị 14 site ugbu a. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Ụkpụrụ gụnyere 'auth' ma ọ bụ 'secure_auth'. |
| $token | `string` | Session token nke user a ga-eji maka cookie a. |

### Since {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Source {#source}

Akọwara ya na [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) n'ahịrị 124
