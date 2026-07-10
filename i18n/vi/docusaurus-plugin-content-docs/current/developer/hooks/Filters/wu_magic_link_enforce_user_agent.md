---
id: wu_magic_link_enforce_user_agent
title: Bộ lọc - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Bộ lọc này dùng để xác định xem có nên bắt buộc xác minh thông tin user agent hay không.

Nếu đặt giá trị là `false`, các token sẽ hoạt động trên nhiều trình duyệt/thiết bị khác nhau. Điều này giúp tăng tính tiện dụng nhưng sẽ làm giảm mức độ bảo mật.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Xác định xem có cần bắt buộc khớp user agent hay không. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) tại dòng 410
