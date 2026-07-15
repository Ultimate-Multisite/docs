---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Pinapayagan nito ang mga developer ng plugin na magdagdag ng karagdagang hooks sa isang tiyak na pahina.

Paggamit: Kailangang palitan ang dynamic na bahagi ng isang balidong page ID, halimbawa: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID ng pahinang ito. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook na ginawa para sa pahinang ito. |

### Mula {#since}

- 1.8.2
### Pinagmulan {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) sa linya 301
