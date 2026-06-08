---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Membenarkan pembangun plugin untuk menambah pemboleh ubah tambahan ke konteks render secara global.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array yang mengandungi pemboleh ubah yang dihantar melalui panggilan render. |
| $view | `string` | Nama paparan (view) yang akan dirender. |
| $default_view | `string` | Nama paparan sandaran (fallback_view). |

### Since

- 2.0.0
### Source

Ditakrifkan dalam [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) pada baris 31

## Returns
