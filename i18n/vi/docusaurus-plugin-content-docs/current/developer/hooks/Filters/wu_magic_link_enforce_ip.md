---
id: wu_magic_link_enforce_ip
title: Bộ lọc - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Bộ lọc này quyết định xem có cần yêu cầu xác minh địa chỉ IP hay không.

Nếu đặt thành `false`, hệ thống sẽ cho phép token hoạt động từ các mạng khác nhau. Điều này làm giảm mức độ bảo mật nhưng tăng tính tiện dụng (ví dụ: đối với người dùng di động khi họ chuyển đổi mạng).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Xác định xem có yêu cầu địa chỉ IP phải khớp hay không. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) tại dòng 422
