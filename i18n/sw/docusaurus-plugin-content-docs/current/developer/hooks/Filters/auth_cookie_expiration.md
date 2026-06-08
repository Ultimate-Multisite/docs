---
id: auth_cookie_expiration
title: Kichujio - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Hii inarekebisha muda ambao cookie ya uthibitisho (authentication cookie) inadumu kabla ya kuisha.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Muda wa kipindi cha kuisha kwa sekunde. |
| $user_id | `int` | Kitambulisho cha mtumiaji (User ID). |
| $remember | `bool` | Kama inapaswa kukumbuka kuingia kwa mtumiaji. Kiwango cha awali ni *false*. |

### Tangu

- 2.8.0
### Chanzo

Imefafanuliwa katika [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) kwenye mstari wa 52
