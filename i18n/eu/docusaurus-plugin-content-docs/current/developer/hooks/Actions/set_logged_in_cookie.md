---
id: set_logged_in_cookie
title: Ekintza - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Ekintza: set_logged_in_cookie

Saioa hasita dagoen autentifikazio cookiea ezarri baino berehala abiarazten da.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $logged_in_cookie | `string` | Saioa hasita dagoen cookiearen balioa. |
| $expire | `int` | Saio-hasieraren grazia-aldia noiz iraungitzen den, UNIX denbora-zigilu gisa. Lehenetsia cookiearen iraungitze-ordutik 12 ordu geroago da. |
| $expiration | `int` | Saioa hasita dagoen autentifikazio cookiea noiz iraungitzen den, UNIX denbora-zigilu gisa. Lehenetsia hemendik 14 egunera da. |
| $user_id | `int` | Erabiltzailearen IDa. |
| $scheme | `string` | Autentifikazio-eskema. Lehenetsia 'logged_in'. |
| $token | `string` | Cookie honetarako erabili beharreko erabiltzailearen saio-tokena. |

### Noiztik

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Iturburua

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) fitxategian definitua, 141. lerroan
