---
id: set_logged_in_cookie
title: Ketso - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Ketso: set_logged_in_cookie

E sebetsa hang-hang pele cookie ea netefatso ea motho ea kene e behoa.

## Paramethara {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $logged_in_cookie | `string` | Boleng ba cookie ea motho ea kene. |
| $expire | `int` | Nako eo nako ea mohau ea ho kena e felloang ke eona e le UNIX timestamp. Tloaelo ke lihora tse 12 ka mor'a nako ea ho felloa ke nako ea cookie. |
| $expiration | `int` | Nako eo cookie ea netefatso ea motho ea kene e felloang ke eona e le UNIX timestamp. Tloaelo ke matsatsi a 14 ho tloha hona joale. |
| $user_id | `int` | ID ea mosebelisi. |
| $scheme | `string` | Moralo oa netefatso. Tloaelo ke 'logged_in'. |
| $token | `string` | Token ea session ea mosebelisi e tla sebelisoa bakeng sa cookie ena. |

### Ho tloha {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Mohloli {#source}

E hlalositsoe ho [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) moleng oa 141
