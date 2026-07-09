---
id: set_auth_cookie
title: მოქმედება - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

აქტიურდება დაუყოვნებლივ, სანამ ავტორიზაციის cookie დაყენდება.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | ავტორიზაციის cookie-ის მნიშვნელობა. |
| $expire | `int` | დრო, როდესაც შესვლის შეღავათიანი პერიოდი იწურება UNIX timestamp-ის სახით. ნაგულისხმევია cookie-ის ვადის გასვლის დროიდან 12 საათის შემდეგ. |
| $expiration | `int` | დრო, როდესაც ავტორიზაციის cookie იწურება UNIX timestamp-ის სახით. ნაგულისხმევია ამ მომენტიდან 14 დღე. |
| $user_id | `int` | მომხმარებლის ID. |
| $scheme | `string` | ავტორიზაციის სქემა. მნიშვნელობები მოიცავს 'auth' ან 'secure_auth'. |
| $token | `string` | მომხმარებლის სესიის ტოკენი, რომელიც ამ cookie-სთვის გამოიყენება. |

### გამოშვებიდან

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### წყარო

განსაზღვრულია [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124)-ში, ხაზზე 124
