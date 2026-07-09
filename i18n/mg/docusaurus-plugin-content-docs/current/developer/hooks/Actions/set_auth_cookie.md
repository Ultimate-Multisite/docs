---
id: set_auth_cookie
title: Hetsika - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Miasa avy hatrany alohan'ny hametrahana ny cookie fanamarinana.

## Masontsivana

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Sandan'ny cookie fanamarinana. |
| $expire | `int` | Ny fotoana ifaranan'ny fe-potoana fanalefahana amin'ny fidirana ho timestamp UNIX. Ny default dia 12 ora aorian'ny fotoana fahataperan'ny cookie. |
| $expiration | `int` | Ny fotoana hifaranan'ny cookie fanamarinana ho timestamp UNIX. Ny default dia 14 andro manomboka izao. |
| $user_id | `int` | ID an'ny mpampiasa. |
| $scheme | `string` | Skema fanamarinana. Ahitana 'auth' na 'secure_auth' ny sanda. |
| $token | `string` | Token fivorian'ny mpampiasa ampiasaina amin'ity cookie ity. |

### Hatramin'ny

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Loharano

Voafaritra ao amin'ny [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) amin'ny andalana 124
