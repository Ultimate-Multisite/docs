---
id: set_auth_cookie
title: Hohenga - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Mahi: set_auth_cookie

Ka whakaoho tonu i mua i te tautuhinga o te pihikete whakamotuhēhē.

## Ngā Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $auth_cookie | `string` | Uara pihikete whakamotuhēhē. |
| $expire | `int` | Te wā e pau ai te wā whakangāwari takiuru hei UNIX timestamp. Ko te taunoa he 12 hāora i muri i te wā paunga o te pihikete. |
| $expiration | `int` | Te wā e pau ai te pihikete whakamotuhēhē hei UNIX timestamp. Ko te taunoa he 14 rā mai i nāianei. |
| $user_id | `int` | ID kaiwhakamahi. |
| $scheme | `string` | Aronui whakamotuhēhē. Kei roto i ngā uara ko 'auth', ko 'secure_auth' rānei. |
| $token | `string` | Token wātū a te kaiwhakamahi hei whakamahi mō tēnei pihikete. |

### Mai i {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Pūtake {#source}

Kua tautuhia ki [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) i te rārangi 124
