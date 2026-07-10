---
id: wu_password_require_lowercase
title: Bộ lọc - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Bộ lọc: wu_password_require_lowercase {#filter-wupasswordrequirelowercase}

Bộ lọc này dùng để xác định xem mật khẩu có yêu cầu chứa chữ thường hay không.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $require | `bool` | Có yêu cầu chữ thường hay không. Mặc định là `true` khi các quy tắc được áp dụng. |
| $defender_active | `bool` | Liệu Defender Pro Strong Password có đang hoạt động không. |

### Từ phiên bản {#since}

- 2.4.0
### Nguồn {#source}

Được định nghĩa trong [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) tại dòng 563
