---
id: set_logged_in_cookie
title: Gníomh - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Gníomh: set_logged_in_cookie

Spreagtar é díreach sula socraítear an fianán fíordheimhnithe logáilte isteach.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $logged_in_cookie | `string` | Luach an fhianáin logáilte isteach. |
| $expire | `int` | An t-am a rachaidh tréimhse chairde an logála isteach in éag mar stampa ama UNIX. Is é an réamhshocrú 12 uair an chloig tar éis am éaga an fhianáin. |
| $expiration | `int` | An t-am a rachaidh an fianán fíordheimhnithe logáilte isteach in éag mar stampa ama UNIX. Is é an réamhshocrú 14 lá ó anois. |
| $user_id | `int` | ID úsáideora. |
| $scheme | `string` | Scéim fhíordheimhnithe. Réamhshocrú 'logged_in'. |
| $token | `string` | Comhartha seisiúin an úsáideora le húsáid don fhianán seo. |

### Ó shin

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Foinse

Sainithe in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ag líne 141
