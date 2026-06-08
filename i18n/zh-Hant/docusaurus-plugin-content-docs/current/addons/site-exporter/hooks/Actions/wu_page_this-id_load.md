---
id: wu_page_this-id_load
title: '動作 - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

讓外掛開發者能夠為特定頁面新增額外的鉤子。

用法：動態部分需要替換為有效的頁面 ID，例如：`add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## 參數

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 此頁面的 ID。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 為此頁面生成的鉤子。 |

### Since

- 1.8.2
### Source

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) 的第 301 行
