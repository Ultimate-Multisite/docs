---
id: wu_page_this-id_load
title: 'Hành động - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Cho phép các nhà phát triển plugin thêm các hook bổ sung vào một trang cụ thể.

Cách sử dụng: Phần động này cần được thay thế bằng một ID trang hợp lệ, ví dụ: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID của trang này. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook được tạo cho trang này. |

### Since {#since}

- 1.8.2
### Source {#source}

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) tại dòng 301
