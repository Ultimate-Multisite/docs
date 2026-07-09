---
id: set_logged_in_cookie
title: Aksyon - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksyon: set_logged_in_cookie

Deklanche imedyatman anvan yo mete cookie otantifikasyon pou moun ki konekte a.

## Paramèt

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $logged_in_cookie | `string` | Valè cookie pou moun ki konekte a. |
| $expire | `int` | Lè peryòd gras pou koneksyon an ekspire kòm yon UNIX timestamp. Defo a se 12 èdtan apre lè ekspirasyon cookie a. |
| $expiration | `int` | Lè cookie otantifikasyon pou moun ki konekte a ekspire kòm yon UNIX timestamp. Defo a se 14 jou apati kounye a. |
| $user_id | `int` | ID itilizatè. |
| $scheme | `string` | Chema otantifikasyon. Defo 'logged_in'. |
| $token | `string` | Token sesyon itilizatè a pou itilize pou cookie sa a. |

### Depi

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sous

Defini nan [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) nan liy 141
