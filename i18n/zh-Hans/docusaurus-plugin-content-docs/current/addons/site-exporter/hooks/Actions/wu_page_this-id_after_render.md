---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# 动作: wu_page_${this->id}_after_render

渲染特定页面后触发。

使用: 动态部分需要替换为有效的页面 ID，例如 add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 页面 ID。 |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page 实例。 |

### 自

- 1.8.2

### 来源

定义在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) 第 394 行
