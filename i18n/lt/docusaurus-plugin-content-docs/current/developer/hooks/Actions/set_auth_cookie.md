---
id: set_auth_cookie
title: Veiksmas - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Veiksmas: set_auth_cookie

Suveikia iškart prieš nustatant autentifikavimo slapuką.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Autentifikavimo slapuko reikšmė. |
| $expire | `int` | Laikas, kai prisijungimo lengvatinis laikotarpis baigiasi kaip UNIX laiko žyma. Numatytoji reikšmė yra 12 valandų po slapuko galiojimo pabaigos laiko. |
| $expiration | `int` | Laikas, kai autentifikavimo slapukas nustoja galioti kaip UNIX laiko žyma. Numatytoji reikšmė yra 14 dienų nuo dabar. |
| $user_id | `int` | Naudotojo ID. |
| $scheme | `string` | Autentifikavimo schema. Reikšmės apima 'auth' arba 'secure_auth'. |
| $token | `string` | Naudotojo sesijos tokenas, naudojamas šiam slapukui. |

### Nuo {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Šaltinis {#source}

Apibrėžta [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) 124 eilutėje
