---
id: set_auth_cookie
title: Gnìomh - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Thèid a chur an gnìomh sa bhad mus tèid briosgaid an dearbhaidh a shuidheachadh.

## Paramadairean {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Luach briosgaid an dearbhaidh. |
| $expire | `int` | An t-àm a thig ùine-fàbhar logadh a-steach gu crìch mar UNIX timestamp. Is e am bun-roghainn 12 uair a thìde às dèidh àm crìochnachaidh na briosgaid. |
| $expiration | `int` | An t-àm nuair a thig briosgaid an dearbhaidh gu crìch mar UNIX timestamp. Is e am bun-roghainn 14 làithean bho seo a-mach. |
| $user_id | `int` | ID cleachdaiche. |
| $scheme | `string` | Sgeama dearbhaidh. Tha luachan a’ gabhail a-steach 'auth' no 'secure_auth'. |
| $token | `string` | Tòcan seisein a’ chleachdaiche ri chleachdadh airson na briosgaid seo. |

### Bho {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tùs {#source}

Air a mhìneachadh ann an [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) aig loidhne 124
