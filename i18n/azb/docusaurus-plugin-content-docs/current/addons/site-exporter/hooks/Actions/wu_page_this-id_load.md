---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Aksiyon: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Bu, eklenti geliştiricilerinin belirli bir sayfaya ek hook'lar eklemesine izin verir.

**Kullanım:** Dinamik kısmı geçerli bir sayfa kimliği ile değiştirmeniz gerekir, örneğin: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sayfanın kimliği. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sayfaya oluşturulan hook. |

### Kullanılabilir {#since}

- 1.8.2
### Kaynak {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) dosyasının 301. satırında tanımlanmıştır.
