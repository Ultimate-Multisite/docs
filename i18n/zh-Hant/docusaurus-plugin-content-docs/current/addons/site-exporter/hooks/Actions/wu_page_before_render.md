---
id: wu_page_before_render
title: 動作 - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: fc447057ea50e758d4cf83bef375f7e6
---
# Action: wu_page_before_render {#action-wupagebeforerender}

該動作會在頁面渲染之前觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 頁面的 ID。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page 的實例。 |

### 自 {#since}

- 1.8.2
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L356) 的第 356 行
