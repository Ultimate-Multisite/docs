---
id: set_logged_in_cookie
title: Isenzo - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Isenzo: set_logged_in_cookie

Iqala kwangoko ngaphambi kokuba i-cookie yokuqinisekisa yomsebenzisi ongene ngaphakathi isetwe.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $logged_in_cookie | `string` | Ixabiso le-cookie yomsebenzisi ongene ngaphakathi. |
| $expire | `int` | Ixesha lokuphela kwexesha loxolelo lokungena njenge-UNIX timestamp. Okungagqibekanga ziiyure ezili-12 emva kwexesha lokuphelelwa kwe-cookie. |
| $expiration | `int` | Ixesha apho i-cookie yokuqinisekisa yomsebenzisi ongene ngaphakathi iphelelwa khona njenge-UNIX timestamp. Okungagqibekanga ziintsuku ezili-14 ukusuka ngoku. |
| $user_id | `int` | ID yomsebenzisi. |
| $scheme | `string` | Iskimu sokuqinisekisa. Okungagqibekanga 'logged_in'. |
| $token | `string` | I-token yeseshoni yomsebenzisi eza kusetyenziswa kule cookie. |

### Ukususela {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Umthombo {#source}

Ichazwe kwi-[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) kumgca 141
