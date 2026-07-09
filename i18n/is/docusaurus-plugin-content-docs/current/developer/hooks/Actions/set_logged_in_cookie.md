---
id: set_logged_in_cookie
title: Aðgerð - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aðgerð: set_logged_in_cookie {#action-setloggedincookie}

Keyrir strax áður en logged-in auðkenningar-kakan er sett.

## Breytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $logged_in_cookie | `string` | Gildi logged-in kökunnar. |
| $expire | `int` | Tíminn þegar frestur innskráningar rennur út sem UNIX tímastimpill. Sjálfgefið er 12 klukkustundum eftir að gildistími kökunnar rennur út. |
| $expiration | `int` | Tíminn þegar logged-in auðkenningar-kakan rennur út sem UNIX tímastimpill. Sjálfgefið er 14 dagar frá núna. |
| $user_id | `int` | Auðkenni notanda. |
| $scheme | `string` | Auðkenningarkerfi. Sjálfgefið 'logged_in'. |
| $token | `string` | Setutákn notanda til að nota fyrir þessa köku. |

### Síðan {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Uppruni {#source}

Skilgreint í [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) í línu 141
