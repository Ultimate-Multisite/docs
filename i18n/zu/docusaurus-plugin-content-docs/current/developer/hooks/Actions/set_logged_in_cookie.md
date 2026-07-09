---
id: set_logged_in_cookie
title: Isenzo - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Isenzo: set_logged_in_cookie

Senzeka ngokushesha ngaphambi kokuthi i-cookie yokuqinisekisa yokungena ngemvume isethwe.

## Amapharamitha

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $logged_in_cookie | `string` | Inani le-cookie yokungena ngemvume. |
| $expire | `int` | Isikhathi lapho isikhathi somusa sokungena ngemvume siphelelwa khona njenge-UNIX timestamp. Okuzenzakalelayo amahora angu-12 ngemva kwesikhathi sokuphelelwa kwe-cookie. |
| $expiration | `int` | Isikhathi lapho i-cookie yokuqinisekisa yokungena ngemvume iphelelwa khona njenge-UNIX timestamp. Okuzenzakalelayo izinsuku ezingu-14 kusukela manje. |
| $user_id | `int` | I-ID yomsebenzisi. |
| $scheme | `string` | Isikimu sokuqinisekisa. Okuzenzakalelayo 'logged_in'. |
| $token | `string` | I-session token yomsebenzisi ezosetshenziswa kule cookie. |

### Kusukela

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Umthombo

Kuchazwe ku-[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) emgqeni 141
