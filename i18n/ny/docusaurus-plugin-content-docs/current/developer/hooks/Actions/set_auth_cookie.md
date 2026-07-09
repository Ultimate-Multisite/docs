---
id: set_auth_cookie
title: Chochita - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Imayamba nthawi yomweyo cookie yotsimikizira isanakhazikitsidwe.

## Ma Parameter

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $auth_cookie | `string` | Mtengo wa cookie yotsimikizira. |
| $expire | `int` | Nthawi yomwe nthawi yolekerera yolowera imatha monga UNIX timestamp. Zosasintha ndi maola 12 pambuyo pa nthawi yothera ya cookie. |
| $expiration | `int` | Nthawi yomwe cookie yotsimikizira imatha monga UNIX timestamp. Zosasintha ndi masiku 14 kuyambira pano. |
| $user_id | `int` | ID ya wogwiritsa ntchito. |
| $scheme | `string` | Dongosolo lotsimikizira. Mitengo imaphatikizapo 'auth' kapena 'secure_auth'. |
| $token | `string` | Token ya session ya wogwiritsa ntchito yogwiritsidwa ntchito pa cookie iyi. |

### Kuyambira

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Gwero

Yafotokozedwa mu [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) pa mzere 124
