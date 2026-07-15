---
id: auth_cookie_expiration
title: ფილტრი - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ფილტრავს ავტორიზაციის cookie-ს ვადის გასვლის პერიოდის ხანგრძლივობას.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $length | `int` | ვადის გასვლის პერიოდის ხანგრძლივობა წამებში. |
| $user_id | `int` | მომხმარებლის ID. |
| $remember | `bool` | უნდა დამახსოვრდეს თუ არა მომხმარებლის შესვლა. ნაგულისხმევად false. |

### ვერსიიდან {#since}

- 2.8.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52)-ში, 52-ე ხაზზე
