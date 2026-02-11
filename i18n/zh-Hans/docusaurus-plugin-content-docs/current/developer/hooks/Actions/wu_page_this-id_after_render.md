---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 8366130ec913af612a31f8385db10a0b
---
# Action: wu_page_${this->id}_after_render

允许插件开发者在我们打印页面后添加额外内容

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $page_id | `string` | 该页面的 ID |
| $page | `object` | 页面对象。 |

### 自

- 1.8.2

### 来源

在 [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L423) 中定义
