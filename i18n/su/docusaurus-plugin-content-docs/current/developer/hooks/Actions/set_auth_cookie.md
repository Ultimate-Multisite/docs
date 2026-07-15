---
id: set_auth_cookie
title: Aksi - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Dijalankeun langsung saméméh cookie auténtikasi disetél.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Nilai cookie auténtikasi. |
| $expire | `int` | Waktu nalika mangsa tenggang login béak salaku UNIX timestamp. Bawaanana nyaéta 12 jam sanggeus waktu béakna cookie. |
| $expiration | `int` | Waktu nalika cookie auténtikasi béak salaku UNIX timestamp. Bawaanana nyaéta 14 poé ti ayeuna. |
| $user_id | `int` | ID pamaké. |
| $scheme | `string` | Skéma auténtikasi. Nilaina kaasup 'auth' atawa 'secure_auth'. |
| $token | `string` | Token sési pamaké pikeun dipaké pikeun cookie ieu. |

### Ti saprak {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sumber {#source}

Ditetepkeun dina [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) dina garis 124
