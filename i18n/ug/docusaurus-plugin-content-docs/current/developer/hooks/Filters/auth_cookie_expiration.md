---
id: auth_cookie_expiration
title: سۈزگۈچ - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

كىرىشنى دەلىللەش cookie نىڭ ۋاقتى توشۇش مۇددىتىنىڭ داۋاملىشىش ۋاقتىنى سۈزۈپ بېرىدۇ.

## پارامېتىرلار {#parameters}

| ئىسمى | تۈرى | چۈشەندۈرۈشى |
|------|------|-------------|
| $length | `int` | ۋاقتى توشۇش مۇددىتىنىڭ سېكۇنت بويىچە داۋاملىشىش ۋاقتى. |
| $user_id | `int` | ئىشلەتكۈچى ID سى. |
| $remember | `bool` | ئىشلەتكۈچىنىڭ كىرىشىنى ئەستە ساقلاش-ساقلىماسلىق. كۆڭۈلدىكى قىممىتى false. |

### باشلاپ {#since}

- 2.8.0
### مەنبە {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) دا 52-قۇردا ئېنىقلانغان.
