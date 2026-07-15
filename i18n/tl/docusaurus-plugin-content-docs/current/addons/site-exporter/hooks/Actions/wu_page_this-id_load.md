---
id: wu_page_this-id_load
title: 'Aksyon - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Payagan ang mga plugin developer na magdagdag ng karagdagang hooks sa partikular na pahina.

Paggamit: Ang dynamic na bahagi ay kailangang palitan ng wastong page id, hal. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID ng pahinang ito. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook na nabuo para sa pahinang ito. |

### Mula Noong {#since}

- 1.8.2
### Pinagmulan {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) sa linya 301
