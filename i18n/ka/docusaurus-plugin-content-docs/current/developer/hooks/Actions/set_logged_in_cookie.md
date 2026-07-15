---
id: set_logged_in_cookie
title: მოქმედება - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

იშვება დაუყოვნებლივ, სანამ სისტემაში შესული მომხმარებლის ავთენტიფიკაციის cookie დაყენდება.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | სისტემაში შესული მომხმარებლის cookie-ს მნიშვნელობა. |
| $expire | `int` | დრო, როდესაც შესვლის საშეღავათო პერიოდი იწურება, როგორც UNIX timestamp. ნაგულისხმევია cookie-ს ვადის გასვლის დროიდან 12 საათი. |
| $expiration | `int` | დრო, როდესაც სისტემაში შესული მომხმარებლის ავთენტიფიკაციის cookie-ს ვადა იწურება, როგორც UNIX timestamp. ნაგულისხმევია ამ მომენტიდან 14 დღე. |
| $user_id | `int` | მომხმარებლის ID. |
| $scheme | `string` | ავთენტიფიკაციის სქემა. ნაგულისხმევია 'logged_in'. |
| $token | `string` | მომხმარებლის სესიის token, რომელიც გამოიყენება ამ cookie-სთვის. |

### გამოჩნდა ვერსიიდან {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### წყარო {#source}

განსაზღვრულია [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141)-ში, 141-ე ხაზზე
