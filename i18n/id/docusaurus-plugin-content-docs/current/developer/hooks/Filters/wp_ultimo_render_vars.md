---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Memungkinkan pengembang plugin untuk menambahkan variabel tambahan ke konteks render secara global.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array yang berisi variabel yang dilewatkan oleh panggilan render. |
| $view | `string` | Nama tampilan (view) yang akan dirender. |
| $default_view | `string` | Nama tampilan cadangan (fallback_view). |

### Sejak

- 2.0.0
### Sumber

Didefinisikan di [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) pada baris 31


## Mengembalikan
