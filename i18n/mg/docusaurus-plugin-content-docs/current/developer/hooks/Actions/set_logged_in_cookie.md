---
id: set_logged_in_cookie
title: Hetsika - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Mitranga avy hatrany alohan'ny hametrahana ny cookie fanamarinana logged-in.

## Masontsivana

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Ny sandan'ny cookie logged-in. |
| $expire | `int` | Ny fotoana hifaranan'ny fe-potoana fanalefahana login amin'ny endrika UNIX timestamp. Ny default dia 12 ora aorian'ny fotoana fahataperan'ny cookie. |
| $expiration | `int` | Ny fotoana hifaranan'ny cookie fanamarinana logged-in amin'ny endrika UNIX timestamp. Ny default dia 14 andro manomboka izao. |
| $user_id | `int` | ID-n'ny mpampiasa. |
| $scheme | `string` | Rafitra fanamarinana. Default 'logged_in'. |
| $token | `string` | Token-n'ny session an'ny mpampiasa hampiasaina amin'ity cookie ity. |

### Nanomboka tamin'ny

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Loharano

Voafaritra ao amin'ny [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) amin'ny andalana 141
