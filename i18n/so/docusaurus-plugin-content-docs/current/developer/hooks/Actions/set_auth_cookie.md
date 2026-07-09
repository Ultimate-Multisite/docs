---
id: set_auth_cookie
title: Ficil - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Ficil: set_auth_cookie {#action-setauthcookie}

Waxay dhacdaa isla markiiba ka hor inta aan la dejin cookie-ga aqoonsiga.

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $auth_cookie | `string` | Qiimaha cookie-ga aqoonsiga. |
| $expire | `int` | Waqtiga muddada dabacsanaanta gelitaanka ay ku dhammaato sida UNIX timestamp. Caadigu waa 12 saacadood ka dib waqtiga uu cookie-gu dhacayo. |
| $expiration | `int` | Waqtiga uu cookie-ga aqoonsigu dhacayo sida UNIX timestamp. Caadigu waa 14 maalmood laga bilaabo hadda. |
| $user_id | `int` | Aqoonsiga isticmaale. |
| $scheme | `string` | Nidaamka aqoonsiga. Qiimayaasha waxaa ka mid ah 'auth' ama 'secure_auth'. |
| $token | `string` | Session token-ka isticmaalaha ee loo adeegsanayo cookie-gan. |

### Tan iyo {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Isha {#source}

Waxaa lagu qeexay [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) safka 124
