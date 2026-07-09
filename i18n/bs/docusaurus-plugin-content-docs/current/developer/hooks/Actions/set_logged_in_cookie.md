---
id: set_logged_in_cookie
title: Akcija - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Akcija: set_logged_in_cookie {#action-setloggedincookie}

Pokreće se odmah prije nego što se postavi kolačić za autentifikaciju za prijavljenog korisnika.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $logged_in_cookie | `string` | Vrijednost kolačića za prijavljenog korisnika. |
| $expire | `int` | Vrijeme isteka perioda prijave kao UNIX vremenski pečat. Podrazumevano je 12 sati nakon isteka kolačića. |
| $expiration | `int` | Vrijeme kada kolačić za autentifikaciju za prijavljenog korisnika istekne kao UNIX vremenski pečat. Podrazumevano je za 14 dana od sada. |
| $user_id | `int` | ID korisnika. |
| $scheme | `string` | Shema autentifikacije. Podrazumevano je 'logged_in'. |
| $token | `string` | Token sesije korisnika koji se koristi za ovaj kolačić. |

### Od verzije {#since}

- 2.6.0
- 4.9.0: Dodan je parametar `<code>$token</code>`.
### Izvor {#source}

Definisano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na liniji 141
