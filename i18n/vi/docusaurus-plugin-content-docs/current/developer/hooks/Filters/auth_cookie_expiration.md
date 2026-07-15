---
id: auth_cookie_expiration
title: Bộ lọc - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Điều chỉnh thời gian hết hạn của cookie xác thực.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Khoảng thời gian hết hạn tính bằng giây. |
| $user_id | `int` | ID người dùng. |
| $remember | `bool` | Liệu có ghi nhớ đăng nhập của người dùng hay không. Mặc định là false. |

### Since {#since}

- 2.8.0
### Source {#source}

Được định nghĩa trong [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) tại dòng 52
