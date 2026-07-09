---
id: set_logged_in_cookie
title: Toiminto - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Toiminto: set_logged_in_cookie {#action-setloggedincookie}

Käynnistyy välittömästi ennen kuin sisäänkirjautuneen todennuseväste asetetaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $logged_in_cookie | `string` | The logged-in cookie value. |
| $expire | `int` | The time the login grace period expires as a UNIX timestamp. Default is 12 hours past the cookie's expiration time. |
| $expiration | `int` | The time when the logged-in authentication cookie expires as a UNIX timestamp. Default is 14 days from now. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Default 'logged_in'. |
| $token | `string` | User's session token to use for this cookie. |

### Versiosta alkaen {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) rivillä 141
