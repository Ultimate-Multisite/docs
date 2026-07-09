---
id: set_auth_cookie
title: Gníomh - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Gníomh: set_auth_cookie

Spreagtar é díreach sula socraítear an fianán fíordheimhnithe.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $auth_cookie | `string` | Luach an fhianáin fíordheimhnithe. |
| $expire | `int` | An t-am a théann tréimhse chairde an logála isteach in éag mar stampa ama UNIX. Is é an réamhshocrú 12 uair an chloig tar éis am éaga an fhianáin. |
| $expiration | `int` | An t-am a théann an fianán fíordheimhnithe in éag mar stampa ama UNIX. Is é an réamhshocrú 14 lá ón am seo. |
| $user_id | `int` | ID úsáideora. |
| $scheme | `string` | Scéim fíordheimhnithe. Áirítear ar na luachanna 'auth' nó 'secure_auth'. |
| $token | `string` | Token seisiúin an úsáideora le húsáid don fhianán seo. |

### Ó shin

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Foinse

Sainithe in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ag líne 124
