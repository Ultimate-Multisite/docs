---
id: wu_page_added
title: Eylem - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Eklenti geliştiricilerinin sayfalar kaydedildiğinde ek işlemler yapmasına olanak tanır.

Sadece belirli bir sayfa görüntülendiğinde çalışan `wu_page_load`'dan farklı olarak, bu hook, Ultimate Multisite kodu kullanılarak eklenen her yönetici sayfası için kayıt sırasında çalışır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Bu sayfanın kimliği (ID). |
| $page_hook | `string` | Bu sayfanın hook adı. |

### Kullanılabilir {#since}

- 2.0.0
### Kaynak {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) dosyasının 228. satırında tanımlanmıştır.
