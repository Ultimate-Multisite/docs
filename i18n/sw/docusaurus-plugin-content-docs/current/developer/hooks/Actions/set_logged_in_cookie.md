---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Inatokea mara moja kabla ya kuki ya uthibitisho ya kuingia kuwekwa.

## Parameters {#parameters}

| Name | Type | Maelezo |
|------|------|-------------|
| $logged_in_cookie | `string` | Thamani ya kuki ya kuingia. |
| $expire | `int` | Muda ambao kipindi cha neema cha kuingia kinapokwisha kama *UNIX timestamp*. Kiwango cha kawaida ni saa 12 baada ya muda wa kuki kuisha. |
| $expiration | `int` | Muda ambao kuki ya uthibitisho ya kuingia inapokwisha kama *UNIX timestamp*. Kiwango cha kawaida ni siku 14 kutoka sasa. |
| $user_id | `int` | Kitambulisho cha mtumiaji. |
| $scheme | `string` | Mfumo wa uthibitisho. Kiwango cha kawaida ni 'logged_in'. |
| $token | `string` | Token ya kikao ya mtumiaji kutumika kwa kuki hii. |

### Since {#since}

- 2.6.0
- 4.9.0: Parameter ya <code>$token</code> iliongezwa.
### Source {#source}

Imefafanuliwa katika [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) kwenye mstari wa 141
