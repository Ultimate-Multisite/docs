---
id: set_logged_in_cookie
title: Aksi - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Tindakan: set_logged_in_cookie {#action-setloggedincookie}

Mlaku langsung sadurunge cookie otentikasi wis mlebu disetel.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $logged_in_cookie | `string` | Nilai cookie wis mlebu. |
| $expire | `int` | Wektu nalika wektu tenggang mlebu kadaluwarsa minangka cap wektu UNIX. Gawané 12 jam sawisé wektu kadaluwarsa cookie. |
| $expiration | `int` | Wektu nalika cookie otentikasi wis mlebu kadaluwarsa minangka cap wektu UNIX. Gawané 14 dina saka saiki. |
| $user_id | `int` | ID pangguna. |
| $scheme | `string` | Skema otentikasi. Gawané 'logged_in'. |
| $token | `string` | Token sesi pangguna sing dienggo kanggo cookie iki. |

### Wiwit {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sumber {#source}

Ditetepaké ing [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ing baris 141
