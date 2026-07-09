---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

Được kích hoạt trước khi hệ thống hiển thị (render) một trang cụ thể.

**Cách sử dụng:** Bạn cần thay thế phần động này bằng một ID trang hợp lệ, ví dụ: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID của trang. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Thể hiện (instance) của Base Admin Page. |

### Từ phiên bản {#since}

- 1.8.2
### Nguồn {#source}

Được định nghĩa tại [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) dòng 368
