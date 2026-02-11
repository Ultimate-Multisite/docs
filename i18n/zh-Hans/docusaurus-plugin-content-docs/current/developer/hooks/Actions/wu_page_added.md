---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# 动作: wu_page_added

允许插件开发者在页面注册时执行额外操作。

与 wu_page_load 不同，后者仅在查看特定页面时运行，而此钩子在使用 Ultimate Multisite 代码添加的每个管理员页面注册时运行。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $page_id | `string` | 此页面的 ID。 |
| $page_hook | `string` | 此页面的挂钩名称。 |

### 版本

- 2.0.0

### 源码

在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) 第 228 行定义
