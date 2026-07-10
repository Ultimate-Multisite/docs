---
id: wu_page_this-id_load
title: 'Chochita - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Lolani opanga plugin kuwonjezera ma hook ena pa tsamba lapadera.

Kugwiritsa ntchito: Gawo losintha liyenera kusinthidwa ndi page id yovomerezeka, mwachitsanzo add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Ma Parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ya tsamba ili. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yopangidwa ku tsamba ili. |

### Kuyambira {#since}

- 1.8.2
### Gwero {#source}

Yafotokozedwa mu [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) pa mzere 301
