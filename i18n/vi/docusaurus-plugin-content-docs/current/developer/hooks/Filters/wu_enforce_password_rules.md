---
id: wu_enforce_password_rules
title: Bộ lọc - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Bộ lọc này xác định xem có cần áp dụng các quy tắc mật khẩu bổ sung hay không.

Khi được đặt là `true`, nó sẽ yêu cầu độ dài và các loại ký tự tối thiểu. Tính năng này sẽ được kích hoạt tự động nếu bạn chọn cài đặt "Super Strong" hoặc khi tính năng Mật khẩu Mạnh của Defender Pro đang hoạt động.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Xác định xem có áp dụng các quy tắc bổ sung hay không. |
| $strength_setting | `string` | Giá trị cài đặt quản trị. |
| $defender_active | `bool` | Xác định xem tính năng Mật khẩu Mạnh của Defender Pro có đang hoạt động hay không. |

### Since {#since}

- 2.4.0
### Source {#source}

Được định nghĩa trong [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) tại dòng 531
