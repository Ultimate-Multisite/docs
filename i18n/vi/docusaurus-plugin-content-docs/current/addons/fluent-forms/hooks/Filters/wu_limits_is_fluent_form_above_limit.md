---
id: wu_limits_is_fluent_form_above_limit
title: Bộ lọc - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Kiểm tra xem một loại form cụ thể có được phép sử dụng trên gói dịch vụ này hay không. Nó cho phép các nhà phát triển plugin tùy chỉnh (filter) giá trị trả về.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Cho biết loại form có vượt quá giới hạn hay không |
| $form_type | `string` | Loại form đang được kiểm tra |
| $form_count | `int` | Số lượng form hiện tại |
| $quota | `int` | Hạn mức cho phép |

### Since {#since}

- 1.0.0
### Source {#source}

- Được định nghĩa trong [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) tại dòng 56
- Được định nghĩa trong [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) tại dòng 89
