---
id: set_logged_in_cookie
title: Ficil - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Ficil: set_logged_in_cookie

Wuxuu dhacaa isla markiiba ka hor inta aan la dejin cookie-ga xaqiijinta ee logged-in.

## Xuduudaha {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $logged_in_cookie | `string` | Qiimaha cookie-ga logged-in. |
| $expire | `int` | Waqtiga muddada naxariista login-ku dhacayo sida UNIX timestamp. Asal ahaan waa 12 saacadood ka dib waqtiga dhicitaanka cookie-ga. |
| $expiration | `int` | Waqtiga cookie-ga xaqiijinta ee logged-in uu dhacayo sida UNIX timestamp. Asal ahaan waa 14 maalmood laga bilaabo hadda. |
| $user_id | `int` | Aqoonsiga isticmaalaha. |
| $scheme | `string` | Habka xaqiijinta. Asal ahaan 'logged_in'. |
| $token | `string` | Session token-ka isticmaalaha ee loo adeegsanayo cookie-gan. |

### Tan iyo {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Isha {#source}

Waxaa lagu qeexay [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) safka 141
