---
id: wu_dashboard_this-tab_widgets
title: 'Hành động - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets

Cho phép các nhà phát triển plugin thêm widget vào Bảng điều khiển Mạng (Network Dashboard Panel).

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $tab | `string` | Tab hiện tại. |
| $screen | `\WP_Screen` | Đối tượng màn hình. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Thể hiện trang quản trị Ultimate Multisite. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) tại dòng 214
