---
id: set_auth_cookie
title: Çalakî - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Çalakî: set_auth_cookie {#action-setauthcookie}

Rast berî ku cookie-ya piştrastkirinê were danîn tê xebitandin.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $auth_cookie | `string` | Nirxa cookie-ya piştrastkirinê. |
| $expire | `int` | Dema ku dema lêborîna têketinê diqede wek UNIX timestamp. Wekî standard 12 saet piştî dema qedandina cookie-yê ye. |
| $expiration | `int` | Dema ku cookie-ya piştrastkirinê diqede wek UNIX timestamp. Wekî standard 14 roj ji niha ye. |
| $user_id | `int` | ID-ya bikarhêner. |
| $scheme | `string` | Şemaya piştrastkirinê. Nirx tê de 'auth' an 'secure_auth' hene. |
| $token | `string` | Token-a danişîna bikarhênerê ku ji bo vê cookie-yê were bikaranîn. |

### Ji {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Çavkanî {#source}

Di [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) de li rêza 124 hatiye danasîn.
