---
id: wu_page_added
title: 操作 - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

允许插件开发者在页面注册时执行额外操作。

与仅在查看特定页面时运行的 wu_page_load 不同，此挂钩在使用 WP Ultimo 代码添加每个管理员页面时在注册时运行。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 此页面的 ID。 |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | 为此页面生成的挂钩。 |

### 自

- 2.0.0

### 来源

定义在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) 第 203 行
