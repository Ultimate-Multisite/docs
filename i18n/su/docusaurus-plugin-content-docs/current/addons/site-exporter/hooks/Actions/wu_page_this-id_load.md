---
id: wu_page_this-id_load
title: 'Aksi - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Ngidinan pamekar panyambung pikeun nambahkeun kait tambahan ka kaca husus.

Pamakéan: Bagian dinamis kudu diganti ku id kaca anu sah, contona add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paraméter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID kaca ieu. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Kait anu dihasilkeun pikeun kaca ieu. |

### Ti saprak

- 1.8.2
### Sumber

Ditetepkeun dina [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) dina garis 301
