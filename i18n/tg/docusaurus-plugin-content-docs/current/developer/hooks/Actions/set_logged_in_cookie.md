---
id: set_logged_in_cookie
title: Амал - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Бевосита пеш аз муқаррар шудани cookie-и аутентификатсияи воридшуда иҷро мешавад.

## Параметрҳо {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Арзиши cookie-и воридшуда. |
| $expire | `int` | Замоне, ки муҳлати имтиёзии воридшавӣ ҳамчун UNIX timestamp ба поён мерасад. Пешфарз 12 соат пас аз вақти анҷоми cookie аст. |
| $expiration | `int` | Замоне, ки cookie-и аутентификатсияи воридшуда ҳамчун UNIX timestamp ба поён мерасад. Пешфарз 14 рӯз аз ҳоло аст. |
| $user_id | `int` | ID-и корбар. |
| $scheme | `string` | Нақшаи аутентификатсия. Пешфарз 'logged_in'. |
| $token | `string` | Токени нишасти корбар барои истифода бо ин cookie. |

### Аз {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Манбаъ {#source}

Дар [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) дар сатри 141 муайян шудааст
