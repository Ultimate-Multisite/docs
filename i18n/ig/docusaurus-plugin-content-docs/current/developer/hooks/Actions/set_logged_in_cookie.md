---
id: set_logged_in_cookie
title: Omume - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Na-eme ozugbo tupu etinye cookie nkwenye onye banyere.

## Parameters {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $logged_in_cookie | `string` | Uru cookie onye banyere. |
| $expire | `int` | Oge oge mgbaghara nbanye ga-agwụ dị ka UNIX timestamp. Ndabere bụ awa 12 gafere oge ngwụcha cookie. |
| $expiration | `int` | Oge mgbe cookie nkwenye onye banyere ga-agwụ dị ka UNIX timestamp. Ndabere bụ ụbọchị 14 site ugbu a. |
| $user_id | `int` | ID onye ọrụ. |
| $scheme | `string` | Usoro nkwenye. Ndabere 'logged_in'. |
| $token | `string` | Token nnọkọ onye ọrụ a ga-eji maka cookie a. |

### Kemgbe {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Isi mmalite {#source}

Akọwara na [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na ahịrị 141
