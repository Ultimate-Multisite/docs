---
id: set_auth_cookie
title: Aksie - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Aksie: set_auth_cookie {#action-setauthcookie}

Word geaktiveer onmiddellik voor die autentikasiekoekie gestel word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $auth_cookie | `string` | Waarde van die autentikasiekoekie. |
| $expire | `int` | Die tyd wanneer die aanmeldingsgraasperiode verval as 'n UNIX-stempel. Die standaard is 12 uur ná die koekie se vervaldatum. |
| $expiration | `int` | Die tyd wanneer die autentikasiekoekie verval as 'n UNIX-stempel. Die standaard is 14 dae vanaf vandag. |
| $user_id | `int` | Gebruiker-ID. |
| $scheme | `string` | Autentikasieskema. Waardes sluit 'auth' of 'secure_auth' in. |
| $token | `string` | Gebruiker se sessie-token wat vir hierdie koekie gebruik word. |

### Sedert {#since}

- 2.5.0
- 4.9.0: Die <code>$token</code> parameter is bygevoeg.
### Bron {#source}

Detyreer in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) op lyn 124
