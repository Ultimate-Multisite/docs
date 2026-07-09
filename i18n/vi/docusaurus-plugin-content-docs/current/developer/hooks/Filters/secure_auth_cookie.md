---
id: secure_auth_cookie
title: Bộ lọc - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Bộ lọc: secure_auth_cookie {#filter-secureauthcookie}

Bộ lọc này xác định xem cookie xác thực có nên chỉ được gửi qua HTTPS hay không.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Xác định xem cookie có nên chỉ được gửi qua HTTPS hay không. |
| $user_id | `int` | ID người dùng. |

### Từ phiên bản {#since}

- 3.1.0
### Nguồn {#source}

Được định nghĩa trong [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) tại dòng 80
