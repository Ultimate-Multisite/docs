---
id: set_logged_in_cookie
title: Aksyon - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksyon: set_logged_in_cookie

Moandar dayon sa dili pa itakda ang logged-in authentication cookie.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $logged_in_cookie | `string` | Ang bili sa logged-in cookie. |
| $expire | `int` | Ang oras nga matapos ang login grace period isip UNIX timestamp. Default mao ang 12 ka oras human sa expiration time sa cookie. |
| $expiration | `int` | Ang oras kung kanus-a matapos ang logged-in authentication cookie isip UNIX timestamp. Default mao ang 14 ka adlaw gikan karon. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Default 'logged_in'. |
| $token | `string` | Session token sa user nga gamiton alang niini nga cookie. |

### Sukad

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tinubdan

Gihubit sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) sa linya 141
