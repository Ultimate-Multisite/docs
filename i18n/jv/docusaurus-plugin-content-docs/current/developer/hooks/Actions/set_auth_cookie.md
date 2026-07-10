---
id: set_auth_cookie
title: Aksi - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Murub sanalika sadurunge cookie autentikasi disetel.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Nilai cookie autentikasi. |
| $expire | `int` | Wektu nalika masa tenggang mlebu kadaluwarsa minangka timestamp UNIX. Gawané yaiku 12 jam sawisé wektu kadaluwarsa cookie. |
| $expiration | `int` | Wektu nalika cookie autentikasi kadaluwarsa minangka timestamp UNIX. Gawané yaiku 14 dina saka saiki. |
| $user_id | `int` | ID pangguna. |
| $scheme | `string` | Skema autentikasi. Nilainé kalebu 'auth' utawa 'secure_auth'. |
| $token | `string` | Token sesi pangguna sing digunakaké kanggo cookie iki. |

### Wiwit {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Sumber {#source}

Ditetepaké ing [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ing baris 124
