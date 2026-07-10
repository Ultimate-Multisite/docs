---
id: secure_logged_in_cookie
title: Saringan - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Saringan: secure_logged_in_cookie {#filter-secureloggedincookie}

Nyaring naha cookie anu geus logged in ngan kudu dikirim liwat HTTPS.

## Paraméter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Naha cookie anu geus logged in ngan kudu dikirim liwat HTTPS. |
| $user_id | `int` | ID pamaké. |
| $secure | `bool` | Naha auth cookie ngan kudu dikirim liwat HTTPS. |

### Ti saprak {#since}

- 3.1.0
### Sumber {#source}

Ditetepkeun dina [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) dina garis 91
