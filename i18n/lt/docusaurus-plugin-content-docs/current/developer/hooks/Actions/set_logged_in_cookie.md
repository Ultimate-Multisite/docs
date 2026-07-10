---
id: set_logged_in_cookie
title: Veiksmas - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Veiksmas: set_logged_in_cookie {#action-setloggedincookie}

Suveikia iškart prieš nustatant prisijungusio naudotojo autentifikavimo slapuką.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Prisijungusio naudotojo slapuko reikšmė. |
| $expire | `int` | Laikas, kai baigiasi prisijungimo lengvatinis laikotarpis, kaip UNIX laiko žyma. Numatytoji reikšmė yra 12 valandų po slapuko galiojimo pabaigos. |
| $expiration | `int` | Laikas, kai prisijungusio naudotojo autentifikavimo slapukas nustoja galioti, kaip UNIX laiko žyma. Numatytoji reikšmė yra po 14 dienų nuo dabar. |
| $user_id | `int` | Naudotojo ID. |
| $scheme | `string` | Autentifikavimo schema. Numatytoji reikšmė „logged_in“. |
| $token | `string` | Naudotojo sesijos atpažinimo raktas, naudojamas šiam slapukui. |

### Nuo {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Šaltinis {#source}

Apibrėžta [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) 141 eilutėje
