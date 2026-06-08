---
id: wu_setup_wizard
title: Bộ lọc - wu_setup_wizard
sidebar_label: wu_setup_wizard
_i18n_hash: dc634d6e39db4ee62d4b90237fe06c40
---
# Bộ lọc: wu_setup_wizard

Cho phép các nhà phát triển thêm các bước tùy chỉnh vào quy trình hướng dẫn cài đặt (setup wizard).

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $sections | `array` | Các phần hiện tại. |
| $is_migration | `bool` | Xác định xem đây có phải là quá trình di chuyển dữ liệu (migration) hay không. |
| $wizard | `object` | Thể hiện (instance) hiện tại của wizard. |

### Từ phiên bản

- 2.0.0
### Nguồn

Được định nghĩa trong [`inc/admin-pages/class-setup-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-setup-wizard-admin-page.php#L525) tại dòng 525


## Giá trị trả về
