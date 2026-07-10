---
id: set_logged_in_cookie
title: Hành động - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Được kích hoạt ngay trước khi cookie xác thực đăng nhập được thiết lập.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Giá trị cookie đăng nhập. |
| $expire | `int` | Thời điểm giai đoạn ân hạn đăng nhập hết hạn, được tính bằng dấu thời gian UNIX. Mặc định là 12 giờ sau thời điểm cookie hết hạn. |
| $expiration | `int` | Thời điểm cookie xác thực đăng nhập hết hạn, được tính bằng dấu thời gian UNIX. Mặc định là 14 ngày kể từ bây giờ. |
| $user_id | `int` | ID người dùng. |
| $scheme | `string` | Cơ chế xác thực. Mặc định là 'logged_in'. |
| $token | `string` | Token phiên của người dùng để sử dụng cho cookie này. |

### Since {#since}

- 2.6.0
- 4.9.0: Tham số <code>$token</code> đã được thêm vào.
### Source {#source}

Được định nghĩa trong [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) tại dòng 141
