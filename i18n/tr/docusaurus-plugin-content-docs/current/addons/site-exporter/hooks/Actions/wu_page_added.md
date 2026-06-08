---
id: wu_page_added
title: Aksiyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Eklenti geliştiricilerinin, sayfalar kaydedilirken ek işlemler yapmasına olanak tanır.

Sadece belirli bir sayfa görüntülenirken çalışan `wu_page_load`'dan farklı olarak, bu hook, WP Ultimo kodu kullanılarak eklenen her yönetici sayfası için kayıt anında çalışır.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sayfanın kimliği (ID). |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sayfaya oluşturulan hook. |

### Versiyon

- 2.0.0
### Kaynak

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
