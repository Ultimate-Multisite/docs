---
id: set_logged_in_cookie
title: Chiito - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Chiito: set_logged_in_cookie

Chinotangwa pakarepo cookie yekusimbisa munhu apinda isati yaiswa.

## Maparamita {#parameters}

| Zita | Type | Tsananguro |
|------|------|-------------|
| $logged_in_cookie | `string` | Kukosha kwecookie yemunhu apinda. |
| $expire | `int` | Nguva iyo nguva yekuwedzera yekupinda inopera seUNIX timestamp. Default maawa 12 mushure menguva yekupera kwecookie. |
| $expiration | `int` | Nguva iyo cookie yekusimbisa munhu apinda inopera seUNIX timestamp. Default mazuva 14 kubva zvino. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Nzira yekusimbisa. Default 'logged_in'. |
| $token | `string` | Session token yemushandisi yekushandisa kune cookie iyi. |

### Kubva {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) pamutsetse 141
