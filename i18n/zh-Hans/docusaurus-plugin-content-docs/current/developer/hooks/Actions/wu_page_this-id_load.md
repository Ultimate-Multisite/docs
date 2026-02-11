---
id: wu_page_this-id_load
title: '动作 - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# 操作: wu_page_\{$this->id\}_load

允许插件开发者为我们的页面添加额外的钩子。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $id | `string` | 此页面的 ID。 |
| $page_hook | `string` | 此页面的页面钩子。 |
| $admin_page | `self` | 页面实例。 |

### 版本

- 1.8.2
- 2.0.4：添加了第三个参数：页面实例。

### 源码

定义在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) 的第 332 行
