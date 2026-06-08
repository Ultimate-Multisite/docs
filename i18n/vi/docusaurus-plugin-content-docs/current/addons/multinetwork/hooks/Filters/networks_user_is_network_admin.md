---
id: networks_user_is_network_admin
title: Bộ lọc - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

Bộ lọc này dùng để lọc các mạng (network) mà người dùng là quản trị viên.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $ | `array\|bool` | Danh sách ID mạng hoặc `false` nếu người dùng không thuộc mạng nào. |
| $ | `int` | ID người dùng mà các mạng cần được trả về. |

### Từ phiên bản

- 2.0.0
### Nguồn

Được định nghĩa trong [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) tại dòng 703
