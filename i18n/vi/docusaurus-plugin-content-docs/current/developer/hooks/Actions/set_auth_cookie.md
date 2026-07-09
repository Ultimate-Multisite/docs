---
id: set_auth_cookie
title: Hành động - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Được kích hoạt ngay trước khi cookie xác thực được thiết lập.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Giá trị cookie xác thực. |
| $expire | `int` | Thời điểm giai đoạn ân hạn đăng nhập hết hạn (dưới dạng timestamp UNIX). Mặc định là 12 giờ sau thời điểm cookie hết hạn. |
| $expiration | `int` | Thời điểm cookie xác thực hết hạn (dưới dạng timestamp UNIX). Mặc định là 14 ngày kể từ bây giờ. |
| $user_id | `int` | ID người dùng. |
| $scheme | `string` | Cơ chế xác thực. Các giá trị bao gồm 'auth' hoặc 'secure_auth'. |
| $token | `string` | Token phiên của người dùng để sử dụng cho cookie này. |

### Since {#since}

- 2.5.0
- 4.9.0: Tham số <code>$token</code> đã được thêm vào.
### Source {#source}

Được định nghĩa trong [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) tại dòng 124
