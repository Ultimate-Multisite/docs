---
id: secure_logged_in_cookie
title: Kichujio - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Inaangalia kama cookie ya kuingia (logged in cookie) inapaswa kutumwa kupitia HTTPS pekee.

## Viparametrika

| Jina | Aina | Maelezo |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Inangalia kama cookie ya kuingia inapaswa kutumwa kupitia HTTPS pekee. |
| $user_id | `int` | Kitambulisho cha Mtumiaji. |
| $secure | `bool` | Inangalia kama cookie ya uthibitisho (auth cookie) inapaswa kutumwa kupitia HTTPS pekee. |

### Tangu

- 3.1.0
### Chanzo

Imefafanuliwa katika [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) kwenye mstari wa 91
