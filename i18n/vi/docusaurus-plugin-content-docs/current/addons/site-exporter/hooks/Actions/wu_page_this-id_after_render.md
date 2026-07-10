---
id: wu_page_this-id_after_render
title: 'Hành động - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Được kích hoạt sau khi hiển thị (render) một trang cụ thể.

Cách dùng: Bạn cần thay thế phần động (dynamic part) bằng một ID trang hợp lệ, ví dụ: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID của trang. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Đối tượng (instance) của Base Admin Page. |

### Since {#since}

- 1.8.2
### Source {#source}

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) tại dòng 394
