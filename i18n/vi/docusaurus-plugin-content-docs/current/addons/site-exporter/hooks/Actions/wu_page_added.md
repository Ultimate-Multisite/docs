---
id: wu_page_added
title: Hành động - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Cho phép các nhà phát triển plugin chạy thêm các tác vụ khi các trang được đăng ký.

Khác với `wu_page_load`, cái chỉ chạy khi một trang cụ thể đang được xem, hook này sẽ chạy ngay khi đăng ký cho mọi trang admin được thêm bằng code WP Ultimo.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID của trang này. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook được tạo cho trang này. |

### Since

- 2.0.0
### Source

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) tại dòng 203
