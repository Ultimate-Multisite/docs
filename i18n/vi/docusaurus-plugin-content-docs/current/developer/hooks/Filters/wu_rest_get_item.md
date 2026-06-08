---
id: wu_rest_get_item
title: Bộ lọc - wu_rest_get_item
sidebar_label: wu_rest_get_item
_i18n_hash: 6e3f51a53f5b4bafef3d438273c979c8
---
# Filter: wu_rest_get_item

Bộ lọc này dùng để xác định xem yêu cầu có được phép tiếp tục xử lý hay không.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | Giá trị trả về ban đầu. |
| $rest_base | `array` | Slug thực thể. |
| $this | `\Base_Manager` | Đối tượng instance. |

### Since

- 2.0.0
### Source

Được định nghĩa trong [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L388) tại dòng 388
