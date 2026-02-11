---
id: wp_ultimo_render_vars
title: 过滤器 - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

允许插件开发者在全局范围内向渲染上下文添加额外变量。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | 包含由渲染调用传递的变量的数组。 |
| $view | `string` | 要渲染的视图名称。 |
| $default_view | `string` | 备用视图的名称。 |

### Since

- 2.0.0

### Source

在 [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) 的第 31 行定义。

## Returns
