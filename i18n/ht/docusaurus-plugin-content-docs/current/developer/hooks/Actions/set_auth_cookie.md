---
id: set_auth_cookie
title: Aksyon - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aksyon: set_auth_cookie {#action-setauthcookie}

Deklanche imedyatman anvan yo mete cookie otantifikasyon an.

## Paramèt {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Valè cookie otantifikasyon an. |
| $expire | `int` | Lè peryòd gras koneksyon an ekspire kòm yon timestamp UNIX. Defo a se 12 èdtan apre lè ekspirasyon cookie a. |
| $expiration | `int` | Lè cookie otantifikasyon an ekspire kòm yon timestamp UNIX. Defo a se 14 jou apati kounye a. |
| $user_id | `int` | ID itilizatè. |
| $scheme | `string` | Konplo otantifikasyon. Valè yo enkli 'auth' oswa 'secure_auth'. |
| $token | `string` | Token sesyon itilizatè a pou itilize pou cookie sa a. |

### Depi {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sous {#source}

Defini nan [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) nan liy 124
