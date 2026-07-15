---
id: set_auth_cookie
title: Isenzo - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Isebenza ngoko nangoko ngaphambi kokuba i-cookie yokuqinisekisa isetwe.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $auth_cookie | `string` | Ixabiso le-cookie yokuqinisekisa. |
| $expire | `int` | Ixesha apho ixesha loxolelo lokungena liphela khona njenge-UNIX timestamp. Okungagqibekanga ziiyure ezili-12 emva kwexesha lokuphelelwa kwe-cookie. |
| $expiration | `int` | Ixesha apho i-cookie yokuqinisekisa iphelelwa khona njenge-UNIX timestamp. Okungagqibekanga ziintsuku ezili-14 ukusuka ngoku. |
| $user_id | `int` | ID yomsebenzisi. |
| $scheme | `string` | Isikimu sokuqinisekisa. Amaxabiso aquka 'auth' okanye 'secure_auth'. |
| $token | `string` | I-token yeseshoni yomsebenzisi ekufuneka isetyenziselwe le cookie. |

### Ukususela {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Umthombo {#source}

Ichazwe ku-[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) kumgca 124
