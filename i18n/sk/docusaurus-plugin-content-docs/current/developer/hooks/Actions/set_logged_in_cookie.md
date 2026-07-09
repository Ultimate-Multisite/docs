---
id: set_logged_in_cookie
title: Akcia - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Akcia: set_logged_in_cookie

Spustí sa bezprostredne pred nastavením prihlasovacieho autentifikačného cookie.

## Parametre

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Hodnota prihláseného cookie. |
| $expire | `int` | Čas, keď uplynie ochranná lehota prihlásenia, ako UNIX timestamp. Predvolená hodnota je 12 hodín po čase vypršania platnosti cookie. |
| $expiration | `int` | Čas, keď vyprší platnosť prihlasovacieho autentifikačného cookie, ako UNIX timestamp. Predvolená hodnota je 14 dní odteraz. |
| $user_id | `int` | ID používateľa. |
| $scheme | `string` | Schéma autentifikácie. Predvolené 'logged_in'. |
| $token | `string` | Token relácie používateľa, ktorý sa má použiť pre tento cookie. |

### Od verzie

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Zdroj

Definované v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na riadku 141
