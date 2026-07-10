---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_${this->id}_before_render {#action-wupagethis-idbeforerender}

允许插件开发者在我们打印页面之前添加额外内容。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | 该页面的 ID。 |
| $page | `object` | 页面对象。 |

### Since {#since}

- 1.8.2

### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) at line 398
