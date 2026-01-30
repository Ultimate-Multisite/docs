---
id: wp_ultimo_render_vars
title: "Filter - wp_ultimo_render_vars"
sidebar_label: "wp_ultimo_render_vars"
---

# Filter: wp_ultimo_render_vars

Allow plugin developers to add extra variable to the render context globally.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array containing variables passed by the render call. |
| $view | `string` | Name of the view to be rendered. |
| $default_view | `string` | Name of the fallback_view |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) at line 31


## Returns

