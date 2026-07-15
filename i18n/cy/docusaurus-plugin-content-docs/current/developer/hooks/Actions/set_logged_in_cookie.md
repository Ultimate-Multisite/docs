---
id: set_logged_in_cookie
title: Gweithred - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Gweithred: set_logged_in_cookie

Yn tanio yn syth cyn i’r cwci dilysu mewngofnodedig gael ei osod.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $logged_in_cookie | `string` | Gwerth y cwci mewngofnodedig. |
| $expire | `int` | Yr amser y daw cyfnod gras mewngofnodi i ben fel stamp amser UNIX. Y rhagosodiad yw 12 awr ar ôl amser dod i ben y cwci. |
| $expiration | `int` | Yr amser pan ddaw’r cwci dilysu mewngofnodedig i ben fel stamp amser UNIX. Y rhagosodiad yw 14 diwrnod o nawr. |
| $user_id | `int` | ID defnyddiwr. |
| $scheme | `string` | Cynllun dilysu. Rhagosodiad 'logged_in'. |
| $token | `string` | Tocyn sesiwn y defnyddiwr i’w ddefnyddio ar gyfer y cwci hwn. |

### Ers {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ar linell 141
