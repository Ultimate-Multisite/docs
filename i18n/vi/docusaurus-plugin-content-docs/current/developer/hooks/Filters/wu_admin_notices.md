---
id: wu_admin_notices
title: Bộ lọc - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Cho phép các nhà phát triển lọc các thông báo quản trị (admin notices) do Ultimate Multisite thêm vào.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | Danh sách các thông báo cho bảng điều khiển (panel) cụ thể đó. |
| $all_notices | `array` | Danh sách các thông báo được thêm vào, được phân loại theo từng bảng điều khiển. |
| $panel | `string` | Bảng điều khiển (Panel) cần lấy các thông báo. |
| $filter | `string` | Nếu các thông báo có thể đóng (dismissable notices) đã được lọc bỏ. |
| $dismissed_messages | `array` | Danh sách các khóa (key) thông báo đã bị đóng. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa tại [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) ở dòng 121


## Returns {#returns}
