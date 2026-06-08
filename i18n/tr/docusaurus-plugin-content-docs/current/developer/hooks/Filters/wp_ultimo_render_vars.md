---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Eklenti geliştiricilerinin render bağlamına (render context) global olarak ek değişkenler eklemesine izin verir.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $args | `array` | Render çağrısı ile geçirilen değişkenleri içeren dizi. |
| $view | `string` | Render edilecek görünümün (view) adı. |
| $default_view | `string` | Yedek görünümün (fallback_view) adı. |

### Versiyon

- 2.0.0
### Kaynak

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) dosyasında 31. satırda tanımlanmıştır.


## Dönüş Değeri
