---
id: set_auth_cookie
title: Kitendo - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Inatokea mara moja kabla ya cookie ya uthibitisho kuwekwa.

## Vigezo

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Thamani ya cookie ya uthibitisho. |
| $expire | `int` | Muda ambao kipindi cha neema cha kuingia (login grace period) kinapokwisha kama UNIX timestamp. Kiwango (Default) ni saa 12 baada ya muda wa kuisha kwa cookie. |
| $expiration | `int` | Muda ambao cookie ya uthibitisho inapokwisha kama UNIX timestamp. Kiwango (Default) ni siku 14 kutoka sasa. |
| $user_id | `int` | Kitambulisho cha mtumiaji. |
| $scheme | `string` | Mfumo wa uthibitisho. Thamani ni pamoja na 'auth' au 'secure_auth'. |
| $token | `string` | Token ya kikao (session token) ya mtumiaji kutumika kwa cookie hii. |

### Tangu

- 2.5.0
- 4.9.0: Vigezo vya <code>$token</code> vimeongezwa.
### Chanzo

Vimefafanuliwa katika [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) kwenye mstari wa 124
