---
id: wu_minimum_password_length
title: Bộ lọc - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Bộ lọc độ dài mật khẩu tối thiểu.

Chỉ được áp dụng khi `wu_enforce_password_rules` là `true`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Độ dài mật khẩu tối thiểu. Mặc định là 12 (khớp với Defender Pro). |
| $defender_active | `bool` | Xác định xem tính năng Mật khẩu mạnh Defender Pro có đang hoạt động hay không. |

### Since {#since}

- 2.4.0
### Source {#source}

Được định nghĩa tại [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ở dòng 543
