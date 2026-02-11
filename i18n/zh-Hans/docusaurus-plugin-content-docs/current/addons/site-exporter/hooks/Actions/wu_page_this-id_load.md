---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# 动作: wu_page_{$this->id}_load

允许插件开发者为特定页面添加额外的钩子。

用法：动态部分需要替换为有效的页面 ID，例如 `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 此页面的 ID。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 为此页面生成的钩子。 |

### 自

- 1.8.2

### 来源

定义在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) 的第 301 行
