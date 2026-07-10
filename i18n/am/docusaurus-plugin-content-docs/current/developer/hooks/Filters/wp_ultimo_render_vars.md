---
id: wp_ultimo_render_vars
title: ማጣሪያ - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

ፕልጊን ገንቢዎች (plugin developers) ሬንደር በሚደረገው አካባቢ (render context) ዓለም አቀፍ በሆነ መንገድ ተጨማሪ ተለዋዋጮችን (variables) እንዲጨምሩ ያስችላል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | በሬንደር ጥሪ (render call) ውስጥ የተላለፉ ተለዋዋጮችን የያዘ አሬይ (array)። |
| $view | `string` | መሬት (view) የተባለው ስም። |
| $default_view | `string` | መተዳደሪያ (fallback_view) ስም ነው። |

### Since {#since}

- 2.0.0
### Source {#source}

በ[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) ፋይል ውስጥ በ31ኛው መስመር ተገልጿል።

## Returns {#returns}
