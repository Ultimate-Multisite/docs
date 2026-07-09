---
id: set_logged_in_cookie
title: Gnìomh - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Gnìomh: set_logged_in_cookie

Thèid a chur gu dol sa bhad mus tèid a’ bhriosgaid dearbhaidh airson cleachdaiche logaichte a-steach a shuidheachadh.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $logged_in_cookie | `string` | Luach na briosgaid airson cleachdaiche logaichte a-steach. |
| $expire | `int` | An t-àm a thig ùine-faochaidh an logaidh a-steach gu crìch mar stampa-ama UNIX. ’S e am bun-roghainn 12 uair a thìde às dèidh àm crìochnachaidh na briosgaid. |
| $expiration | `int` | An t-àm a thig a’ bhriosgaid dearbhaidh airson cleachdaiche logaichte a-steach gu crìch mar stampa-ama UNIX. ’S e am bun-roghainn 14 latha on-dràsta. |
| $user_id | `int` | ID cleachdaiche. |
| $scheme | `string` | Sgeama dearbhaidh. Bun-roghainn 'logged_in'. |
| $token | `string` | Token seisein a’ chleachdaiche ri chleachdadh airson na briosgaid seo. |

### Bho

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tùs

Air a mhìneachadh ann an [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) aig loidhne 141
