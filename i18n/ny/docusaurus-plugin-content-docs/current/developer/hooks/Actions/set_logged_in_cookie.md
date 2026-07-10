---
id: set_logged_in_cookie
title: Chochita - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Imayambitsidwa nthawi yomweyo cookie yotsimikizira ya olowa ikangotsala pang'ono kukhazikitsidwa.

## Ma Parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $logged_in_cookie | `string` | Mtengo wa cookie ya olowa. |
| $expire | `int` | Nthawi yomwe nyengo yachisomo yolowera imatha ngati UNIX timestamp. Zokhazikika ndi maola 12 pambuyo pa nthawi yotha ya cookie. |
| $expiration | `int` | Nthawi yomwe cookie yotsimikizira ya olowa imatha ngati UNIX timestamp. Zokhazikika ndi masiku 14 kuyambira pano. |
| $user_id | `int` | ID ya wogwiritsa ntchito. |
| $scheme | `string` | Njira yotsimikizira. Zokhazikika 'logged_in'. |
| $token | `string` | Token ya session ya wogwiritsa ntchito yogwiritsa ntchito pa cookie iyi. |

### Kuyambira {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Gwero {#source}

Yafotokozedwa mu [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) pa mzere 141
