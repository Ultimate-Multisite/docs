---
id: set_auth_cookie
title: Амал - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Амал: set_auth_cookie {#action-setauthcookie}

Дарҳол пеш аз гузоштани cookie-и аутентификатсия иҷро мешавад.

## Параметрҳо {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Қимати cookie-и аутентификатсия. |
| $expire | `int` | Замоне, ки давраи имтиёзии воридшавӣ ба анҷом мерасад, ҳамчун UNIX timestamp. Пешфарз 12 соат пас аз вақти анҷоми муҳлати cookie аст. |
| $expiration | `int` | Замоне, ки cookie-и аутентификатсия ба анҷом мерасад, ҳамчун UNIX timestamp. Пешфарз 14 рӯз аз ҳоло аст. |
| $user_id | `int` | ID-и корбар. |
| $scheme | `string` | Схемаи аутентификатсия. Қиматҳо 'auth' ё 'secure_auth'-ро дар бар мегиранд. |
| $token | `string` | Токени сессияи корбар барои истифода бо ин cookie. |

### Аз версияи {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Манбаъ {#source}

Дар [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) дар сатри 124 муайян шудааст
