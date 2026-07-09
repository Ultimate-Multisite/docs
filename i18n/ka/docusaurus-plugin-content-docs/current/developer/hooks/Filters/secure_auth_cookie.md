---
id: secure_auth_cookie
title: ფილტრი - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# ფილტრი: secure_auth_cookie {#filter-secureauthcookie}

ფილტრავს, უნდა გაიგზავნოს თუ არა auth cookie მხოლოდ HTTPS-ის საშუალებით.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | უნდა გაიგზავნოს თუ არა cookie მხოლოდ HTTPS-ის საშუალებით. |
| $user_id | `int` | მომხმარებლის ID. |

### ვერსიიდან {#since}

- 3.1.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80)-ში, ხაზზე 80
