---
id: set_auth_cookie
title: Veprim - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Aktivizohet menjëherë përpara se cookie e autentikimit të vendoset.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $auth_cookie | `string` | Vlera e cookie-t të autentikimit. |
| $expire | `int` | Koha kur periudha e lehtësimit të hyrjes skadon si një UNIX timestamp. Parazgjedhja është 12 orë pas kohës së skadimit të cookie-t. |
| $expiration | `int` | Koha kur cookie e autentikimit skadon si një UNIX timestamp. Parazgjedhja është 14 ditë nga tani. |
| $user_id | `int` | ID e përdoruesit. |
| $scheme | `string` | Skema e autentikimit. Vlerat përfshijnë 'auth' ose 'secure_auth'. |
| $token | `string` | Tokeni i sesionit të përdoruesit për t’u përdorur për këtë cookie. |

### Që nga

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Burimi

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) në rreshtin 124
