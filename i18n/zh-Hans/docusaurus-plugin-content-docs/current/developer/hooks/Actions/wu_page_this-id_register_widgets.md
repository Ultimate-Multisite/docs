---
id: wu_page_this-id_register_widgets
title: '动作 - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

在此页面注册小部件后触发。

钩子名称的动态部分 `$this->id` 指的是页面 ID。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $id | `string` | 页面 ID。 |
| $page_hook | `string` | 页面钩子。 |
| $page | `object` | 页面对象。 |

### Since

- 2.4.10

### Source

在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) 中定义，位于第 755 行
