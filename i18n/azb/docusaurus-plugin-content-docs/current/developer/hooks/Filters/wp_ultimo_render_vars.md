---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Plugin geliştiricilerinin render bağlamına (render context) global olarak ek değişkenler eklemesine izin verir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Render çağrısı ile iletilen değişkenleri içeren dizi. |
| $view | `string` | Render edilecek görünümün (view) adı. |
| $default_view | `string` | Yedek görünümün (fallback_view) adı. |

### Since

- 2.0.0
### Source

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) dosyasında 31. satırda tanımlanmıştır.


## Returns
