---
id: set_auth_cookie
title: Aðgerð - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aðgerð: set_auth_cookie {#action-setauthcookie}

Keyrir strax áður en auðkenningarkakan er stillt.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Gildi auðkenningarköku. |
| $expire | `int` | Tíminn þegar undanþágutímabil innskráningar rennur út sem UNIX-tímastimpill. Sjálfgefið er 12 klukkustundum eftir lokatíma kökunnar. |
| $expiration | `int` | Tíminn þegar auðkenningarkakan rennur út sem UNIX-tímastimpill. Sjálfgefið er 14 dagar frá núna. |
| $user_id | `int` | Notandaauðkenni. |
| $scheme | `string` | Auðkenningarkerfi. Gildi innihalda 'auth' eða 'secure_auth'. |
| $token | `string` | Setutákn notanda til að nota fyrir þessa köku. |

### Síðan {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Uppruni {#source}

Skilgreint í [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) í línu 124
