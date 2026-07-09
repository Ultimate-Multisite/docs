---
id: set_logged_in_cookie
title: Aksi - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksi: set_logged_in_cookie

Dijalankeun langsung saméméh cookie auténtikasi logged-in disetel.

## Paraméter

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Nilai cookie logged-in. |
| $expire | `int` | Waktu béakna mangsa tenggang login salaku UNIX timestamp. Baku nyaéta 12 jam sanggeus waktu béakna cookie. |
| $expiration | `int` | Waktu nalika cookie auténtikasi logged-in béak salaku UNIX timestamp. Baku nyaéta 14 poé ti ayeuna. |
| $user_id | `int` | ID pamaké. |
| $scheme | `string` | Skéma auténtikasi. Baku 'logged_in'. |
| $token | `string` | Token sési pamaké pikeun dipaké ku cookie ieu. |

### Ti saprak

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sumber

Ditetepkeun dina [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) dina garis 141
