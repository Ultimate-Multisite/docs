---
id: set_auth_cookie
title: Gweithred - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Gweithred: set_auth_cookie {#action-setauthcookie}

Yn tanio yn union cyn i’r cwci dilysu gael ei osod.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $auth_cookie | `string` | Gwerth cwci dilysu. |
| $expire | `int` | Yr amser pan ddaw cyfnod gras mewngofnodi i ben fel stamp amser UNIX. Y diofyn yw 12 awr ar ôl amser dod i ben y cwci. |
| $expiration | `int` | Yr amser pan ddaw’r cwci dilysu i ben fel stamp amser UNIX. Y diofyn yw 14 diwrnod o nawr. |
| $user_id | `int` | ID defnyddiwr. |
| $scheme | `string` | Cynllun dilysu. Mae gwerthoedd yn cynnwys 'auth' neu 'secure_auth'. |
| $token | `string` | Tocyn sesiwn y defnyddiwr i’w ddefnyddio ar gyfer y cwci hwn. |

### Ers {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ar linell 124
