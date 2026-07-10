---
id: set_logged_in_cookie
title: Aksie - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksie: set_logged_in_cookie {#action-setloggedincookie}

Word geaktiveer onmiddellik voordat die ingelogde autentiseringkoekie gestel word.

## Parameters {#parameters}

| Name | Type | Beskrywing |
|------|------|-------------|
| $logged_in_cookie | `string` | Die waarde van die ingelogde koekie. |
| $expire | `int` | Die tyd wanneer die aanmeld-graasperiode verval as 'n UNIX-stempel. Die standaard is 12 uur ná die koekie se vervaldatum. |
| $expiration | `int` | Die tyd wanneer die ingelogde autentiseringkoekie verval as 'n UNIX-stempel. Die standaard is 14 dae vanaf vandag. |
| $user_id | `int` | Gebruiker-ID. |
| $scheme | `string` | Autentiseringsskema. Die standaard is 'logged_in'. |
| $token | `string` | Die gebruiker se sessietoken wat vir hierdie koekie gebruik word. |

### Sedert {#since}

- 2.6.0
- 4.9.0: Die <code>$token</code> parameter is bygevoeg.
### Bron {#source}

Gedefinieer in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) op lyn 141
