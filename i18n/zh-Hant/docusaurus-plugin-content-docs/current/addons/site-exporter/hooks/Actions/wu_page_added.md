---
id: wu_page_added
title: 動作 - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

允許外掛開發者在頁面被註冊時執行額外的操作。

與 `wu_page_load` 不同，後者僅在查看特定頁面時執行；而此 hook 則會在使用 WP Ultimo 程式碼新增的每個管理員頁面註冊時執行。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 此頁面的 ID。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 為此頁面生成的 hook。 |

### Since

- 2.0.0
### Source

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) 第 203 行
