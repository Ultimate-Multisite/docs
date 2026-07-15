---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render

在渲染特定頁面之後觸發。

用法：動態的部分需要替換為有效的頁面 ID，例如：`add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 頁面 ID。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page 的實例。 |

### 可用自 {#since}

- 1.8.2
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) 的第 394 行
