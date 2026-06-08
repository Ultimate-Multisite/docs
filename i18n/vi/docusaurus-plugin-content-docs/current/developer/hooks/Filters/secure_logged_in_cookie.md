---
id: secure_logged_in_cookie
title: Bộ lọc - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Bộ lọc: secure_logged_in_cookie

Kiểm soát xem cookie đăng nhập có chỉ được gửi qua HTTPS hay không.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Liệu cookie đăng nhập có chỉ được gửi qua HTTPS hay không. |
| $user_id | `int` | ID người dùng. |
| $secure | `bool` | Liệu cookie xác thực có chỉ được gửi qua HTTPS hay không. |

### Từ phiên bản

- 3.1.0
### Nguồn

Được định nghĩa trong [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) tại dòng 91
