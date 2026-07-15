---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# 篩選器：wp_ultimo_render_vars

允許外掛開發者在全域範圍內向渲染上下文（render context）新增額外的變數。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $args | `array` | 包含傳遞給渲染呼叫的變數陣列。 |
| $view | `string` | 即將被渲染的視圖名稱。 |
| $default_view | `string` | 備用視圖（fallback_view）的名稱。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) 第 31 行


## 回傳 {#returns}
