---
id: wu_page_load
title: 动作 - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# 动作: wu_page_load

允许插件开发者为我们的页面添加额外的钩子。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $id | `string` | 此页面的 ID。 |
| $page_hook | `string` | 此页面的页面钩子。 |
| $admin_page | `self` | 此页面实例。 |

### 版本

- 1.8.2
- 2.0.4: 添加了第三个参数：页面实例。

### 源码

定义在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) 第 318 行
