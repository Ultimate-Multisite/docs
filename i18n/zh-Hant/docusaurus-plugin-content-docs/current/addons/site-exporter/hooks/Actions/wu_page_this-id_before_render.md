---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# 動作: wu_page_{$this->id}_before_render

在渲染特定頁面之前觸發。

用法：需要將動態部分替換為有效的頁面 ID，例如 add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 頁面的 ID。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page 的實例。 |

### 自 {#since}

- 1.8.2
### 來源 {#source}

定義於 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) 的第 368 行
