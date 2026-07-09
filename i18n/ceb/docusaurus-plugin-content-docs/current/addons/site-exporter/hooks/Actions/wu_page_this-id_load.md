---
id: wu_page_this-id_load
title: 'Aksyon - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Tugoti ang mga developer sa plugin nga makadugang og dugang nga mga hook sa espesipikong panid.

Paggamit: Ang dynamic nga bahin kinahanglang pulihan og balidong page id, pananglitan add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Mga Parameter

| Ngalan | Tipo | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID niini nga panid. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook nga gihimo alang niini nga panid. |

### Sukad

- 1.8.2
### Tinubdan

Gidefine sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) sa linya 301
