---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

Belirli bir sayfa render edilmeden önce tetiklenir.

Kullanım: Dinamik kısmı geçerli bir sayfa ID'si ile değiştirmeniz gerekir, örneğin: add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametreler

| İsim | Tip | Açıklama |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sayfanın ID'si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page örneği. |

### Bu Özellik

- 1.8.2
### Kaynak

[inc/admin-pages/class-base-admin-page.php](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368)'de 368. satırda tanımlanmıştır.
