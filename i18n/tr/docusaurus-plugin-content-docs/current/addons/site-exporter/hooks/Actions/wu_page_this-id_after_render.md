---
id: wu_page_this-id_after_render
title: 'Eylem - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Belirli bir sayfa oluşturulduktan sonra tetiklenir.

**Kullanım:** Dinamik kısmı geçerli bir sayfa kimliği ile değiştirmeniz gerekir, örneğin: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sayfanın kimliği. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page örneği. |

### Kullanılmaya Başladığı Versiyon

- 1.8.2
### Kaynak

394. satırda [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) içinde tanımlanmıştır.
