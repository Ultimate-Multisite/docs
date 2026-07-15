---
id: set_logged_in_cookie
title: Kev nqis tes - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Tshwm sim tam sim ua ntej cookie pov thawj tus neeg nkag lawm raug teeb.

## Cov parameter {#parameters}

| Lub npe | Hom | Kev piav qhia |
|------|------|-------------|
| $logged_in_cookie | `string` | Tus nqi cookie rau tus neeg nkag lawm. |
| $expire | `int` | Lub sijhawm uas lub sijhawm zam rau kev nkag xaus raws li UNIX timestamp. Lub neej ntawd yog 12 teev tom qab cookie lub sijhawm tas sij hawm. |
| $expiration | `int` | Lub sijhawm uas cookie pov thawj tus neeg nkag lawm tas sij hawm raws li UNIX timestamp. Lub neej ntawd yog 14 hnub txij tam sim no. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Txoj kev pov thawj. Lub neej ntawd yog 'logged_in'. |
| $token | `string` | Tus neeg siv lub session token siv rau cookie no. |

### Txij li {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Qhov chaw {#source}

Teev tseg hauv [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ntawm kab 141
