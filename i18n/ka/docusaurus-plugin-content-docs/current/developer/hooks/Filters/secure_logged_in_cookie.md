---
id: secure_logged_in_cookie
title: ფილტრი - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# ფილტრი: secure_logged_in_cookie

ფილტრავს, უნდა გაიგზავნოს თუ არა სისტემაში შესვლის ქუქი მხოლოდ HTTPS-ით.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | უნდა გაიგზავნოს თუ არა სისტემაში შესვლის ქუქი მხოლოდ HTTPS-ით. |
| $user_id | `int` | მომხმარებლის ID. |
| $secure | `bool` | უნდა გაიგზავნოს თუ არა ავთენტიფიკაციის ქუქი მხოლოდ HTTPS-ით. |

### ვერსიიდან {#since}

- 3.1.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91)-ში, 91-ე ხაზზე
