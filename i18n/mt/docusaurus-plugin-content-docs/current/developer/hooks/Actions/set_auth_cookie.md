---
id: set_auth_cookie
title: Azzjoni - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Azzjoni: set_auth_cookie

Tiskatta immedjatament qabel ma tiġi ssettjata l-cookie tal-awtentikazzjoni.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $auth_cookie | `string` | Valur tal-cookie tal-awtentikazzjoni. |
| $expire | `int` | Il-ħin meta jiskadi l-perjodu ta' grazzja tal-login bħala UNIX timestamp. Il-valur awtomatiku huwa 12-il siegħa wara l-ħin tal-iskadenza tal-cookie. |
| $expiration | `int` | Il-ħin meta tiskadi l-cookie tal-awtentikazzjoni bħala UNIX timestamp. Il-valur awtomatiku huwa 14-il jum minn issa. |
| $user_id | `int` | ID tal-utent. |
| $scheme | `string` | Skema ta' awtentikazzjoni. Il-valuri jinkludu 'auth' jew 'secure_auth'. |
| $token | `string` | Token tas-sessjoni tal-utent biex jintuża għal din il-cookie. |

### Minn

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sors

Definit f'[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) fil-linja 124
