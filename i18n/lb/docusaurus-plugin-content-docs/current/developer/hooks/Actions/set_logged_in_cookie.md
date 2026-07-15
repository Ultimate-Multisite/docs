---
id: set_logged_in_cookie
title: Aktioun - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Gëtt direkt ausgeléist, ier de ageloggt-Authentifikatiouns-Cookie gesat gëtt.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $logged_in_cookie | `string` | De Wäert vum ageloggt-Cookie. |
| $expire | `int` | D'Zäit, wou d'Grace-Period fir de Login als UNIX-Timestamp ofleeft. Standard ass 12 Stonnen no der Oflafzäit vum Cookie. |
| $expiration | `int` | D'Zäit, wou den ageloggt-Authentifikatiouns-Cookie als UNIX-Timestamp ofleeft. Standard ass 14 Deeg vun elo un. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentifikatiouns-Schema. Standard 'logged_in'. |
| $token | `string` | Sessiouns-Token vum Benotzer fir dëse Cookie ze benotzen. |

### Zënter {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Quell {#source}

Definéiert an [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) op der Linn 141
