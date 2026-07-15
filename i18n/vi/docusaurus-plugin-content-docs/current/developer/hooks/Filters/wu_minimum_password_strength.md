---
id: wu_minimum_password_strength
title: Bộ lọc - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Bộ lọc này dùng để xác định độ mạnh mật khẩu tối thiểu yêu cầu (theo điểm zxcvbn).

Các mức độ mạnh: - 0, 1: Rất yếu - 2: Yếu - 3: Trung bình - 4: Mạnh (mặc định)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Mức độ mạnh tối thiểu yêu cầu. |
| $strength_setting | `string` | Giá trị cài đặt của quản trị viên (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
