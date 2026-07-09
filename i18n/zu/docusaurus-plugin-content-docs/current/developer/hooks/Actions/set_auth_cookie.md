---
id: set_auth_cookie
title: Isenzo - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Isenzo: set_auth_cookie

Kuqala ngokushesha ngaphambi kokuthi ikhukhi yokuqinisekisa isethwe.

## Amapharamitha

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $auth_cookie | `string` | Inani lekhukhi yokuqinisekisa. |
| $expire | `int` | Isikhathi lapho isikhathi somusa sokungena ngemvume siphelelwa khona njenge-UNIX timestamp. Okuzenzakalelayo amahora ayi-12 ngemva kwesikhathi sokuphelelwa kwekhukhi. |
| $expiration | `int` | Isikhathi lapho ikhukhi yokuqinisekisa iphelelwa khona njenge-UNIX timestamp. Okuzenzakalelayo izinsuku eziyi-14 kusukela manje. |
| $user_id | `int` | I-ID yomsebenzisi. |
| $scheme | `string` | Uhlelo lokuqinisekisa. Amanani afaka 'auth' noma 'secure_auth'. |
| $token | `string` | I-token yeseshini yomsebenzisi ezosetshenziswa kule khukhi. |

### Kusukela

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Umthombo

Kuchazwe ku-[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) emgqeni 124
