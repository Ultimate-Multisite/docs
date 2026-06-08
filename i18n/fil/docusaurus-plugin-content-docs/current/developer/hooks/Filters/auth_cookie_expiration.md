---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Sinusuri nito ang tagal ng pag-expire ng cookie na ginagamit sa pag-authenticate.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Ang tagal ng pag-expire sa bilang ng segundo. |
| $user_id | `int` | Ang ID ng gumagamit. |
| $remember | `bool` | Kung kailangang tandaan ang login ng gumagamit. Default na *false*. |

### Since

- 2.8.0
### Source

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) sa linya 52
