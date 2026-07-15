---
id: auth_cookie_expiration
title: Saringan - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Nyaring suwéné wektu kadaluwarsa cookie otentikasi.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Suwéné wektu kadaluwarsa ing detik. |
| $user_id | `int` | ID panganggo. |
| $remember | `bool` | Apa kudu éling login panganggo. Gawané false. |

### Wiwit {#since}

- 2.8.0
### Sumber {#source}

Ditetepaké ing [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ing baris 52
