---
id: set_logged_in_cookie
title: Hohenga - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Mahi: set_logged_in_cookie

Ka whakaoho inamata i mua i te whakatakotoranga o te pihikete motuhēhēnga kua takiuru.

## Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $logged_in_cookie | `string` | Te uara pihikete kua takiuru. |
| $expire | `int` | Te wā e pau ai te wā aroha mō te takiuru hei UNIX timestamp. Ko te taunoa he 12 hāora i muri i te wā paunga o te pihikete. |
| $expiration | `int` | Te wā e pau ai te pihikete motuhēhēnga kua takiuru hei UNIX timestamp. Ko te taunoa he 14 rā mai i nāianei. |
| $user_id | `int` | ID kaiwhakamahi. |
| $scheme | `string` | Kaupapa motuhēhēnga. Taunoa 'logged_in'. |
| $token | `string` | Te session token a te kaiwhakamahi hei whakamahi mō tēnei pihikete. |

### Mai rā anō

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Pūtake

Kua tautuhia ki [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) i te rārangi 141
