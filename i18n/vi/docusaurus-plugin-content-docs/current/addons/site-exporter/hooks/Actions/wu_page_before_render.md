---
id: wu_page_before_render
title: Hành động - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: fc447057ea50e758d4cf83bef375f7e6
---
# Action: wu_page_before_render

Hành động này được kích hoạt trước khi trang được hiển thị (render).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID (mã định danh) của trang. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Đối tượng (instance) của Base Admin Page. |

### Since

- 1.8.2
### Source

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L356) tại dòng 356
