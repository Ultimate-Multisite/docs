---
id: set_logged_in_cookie
title: Aiki - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aiki: set_logged_in_cookie

Yana faruwa nan take kafin a saita cookie na tabbatarwa na mai shiga.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $logged_in_cookie | `string` | Ƙimar cookie na mai shiga. |
| $expire | `int` | Lokacin da wa’adin rangwamen shiga zai ƙare a matsayin UNIX timestamp. Tsoho shi ne awanni 12 bayan lokacin ƙarewar cookie. |
| $expiration | `int` | Lokacin da cookie na tabbatarwa na mai shiga zai ƙare a matsayin UNIX timestamp. Tsoho shi ne kwanaki 14 daga yanzu. |
| $user_id | `int` | ID na mai amfani. |
| $scheme | `string` | Tsarin tabbatarwa. Tsoho 'logged_in'. |
| $token | `string` | Token na zaman mai amfani da za a yi amfani da shi don wannan cookie. |

### Tun daga {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tushe {#source}

An ayyana shi a cikin [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) a layi 141
