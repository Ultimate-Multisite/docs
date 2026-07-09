---
id: set_auth_cookie
title: Akcija - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Akcija: set_auth_cookie {#action-setauthcookie}

Pokreće se odmah prije nego što se postavi kolačić za autentifikaciju.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $auth_cookie | `string` | Vrijednost kolačića za autentifikaciju. |
| $expire | `int` | Vrijeme isteka perioda gracioznosti prijave, kao UNIX vremenski pečat. Podrazumevano je 12 sati nakon isteka kolačića. |
| $expiration | `int` | Vrijeme kada kolačić za autentifikaciju istekne, kao UNIX vremenski pečat. Podrazumevano je za 14 dana od sada. |
| $user_id | `int` | ID korisnika. |
| $scheme | `string` | Shema autentifikacije. Vrijednosti uključuju 'auth' ili 'secure_auth'. |
| $token | `string` | Token sesije korisnika koji se koristi za ovaj kolačić. |

### Od verzije {#since}

- 2.5.0
- 4.9.0: Dodan je parametar <code>$token</code>.
### Izvor {#source}

Definisano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na liniji 124
