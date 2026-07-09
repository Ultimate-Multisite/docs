---
id: set_logged_in_cookie
title: Çalakî - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Çalakî: set_logged_in_cookie {#action-setloggedincookie}

Tavilê berî ku cookieya piştrastkirina têketî were danîn, tê xebitandin.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $logged_in_cookie | `string` | Nirxa cookieya têketî. |
| $expire | `int` | Dema ku heyama destûra têketinê bi dawî dibe, wek UNIX timestamp. Standard 12 demjimêr piştî dema qedandina cookieyê ye. |
| $expiration | `int` | Dema ku cookieya piştrastkirina têketî bi dawî dibe, wek UNIX timestamp. Standard 14 roj ji niha ye. |
| $user_id | `int` | Nasnameya bikarhêner. |
| $scheme | `string` | Nexşeya piştrastkirinê. Standard 'logged_in'. |
| $token | `string` | Tokena rûniştina bikarhêner ku ji bo vê cookieyê were bikaranîn. |

### Ji {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Çavkanî {#source}

Di [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) de li rêza 141 hatiye danasîn.
