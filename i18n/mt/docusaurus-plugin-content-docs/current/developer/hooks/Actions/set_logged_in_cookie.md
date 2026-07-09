---
id: set_logged_in_cookie
title: Azzjoni - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Azzjoni: set_logged_in_cookie

Jinxtegħel immedjatament qabel ma jiġi ssettjat il-cookie tal-awtentikazzjoni tal-utent illoggjat.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $logged_in_cookie | `string` | Il-valur tal-cookie tal-utent illoggjat. |
| $expire | `int` | Il-ħin meta jiskadi l-perjodu ta' grazzja tal-login bħala UNIX timestamp. Il-valur awtomatiku huwa 12-il siegħa wara l-ħin ta' skadenza tal-cookie. |
| $expiration | `int` | Il-ħin meta jiskadi l-cookie tal-awtentikazzjoni tal-utent illoggjat bħala UNIX timestamp. Il-valur awtomatiku huwa 14-il jum minn issa. |
| $user_id | `int` | ID tal-utent. |
| $scheme | `string` | Skema ta' awtentikazzjoni. Valur awtomatiku 'logged_in'. |
| $token | `string` | It-token tas-sessjoni tal-utent li għandu jintuża għal dan il-cookie. |

### Minn

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sors

Definit f’[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) fil-linja 141
