---
id: set_auth_cookie
title: Ekintza - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Autentifikazio-cookiea ezarri aurretik berehala abiarazten da.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $auth_cookie | `string` | Autentifikazio-cookiearen balioa. |
| $expire | `int` | Saio-hasierako grazia-aldia amaitzen den unea UNIX denbora-zigilu gisa. Lehenetsia cookiearen iraungitze-ordutik 12 ordu geroago da. |
| $expiration | `int` | Autentifikazio-cookiea iraungitzen den unea UNIX denbora-zigilu gisa. Lehenetsia hemendik 14 egunera da. |
| $user_id | `int` | Erabiltzailearen IDa. |
| $scheme | `string` | Autentifikazio-eskema. Balioen artean 'auth' edo 'secure_auth' daude. |
| $token | `string` | Erabiltzailearen saio-tokena cookie honetarako erabiltzeko. |

### Noiztik {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Iturria {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) fitxategian definitua, 124. lerroan
