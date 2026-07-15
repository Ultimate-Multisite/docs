---
id: wu_page_this-id_load
title: 'Chiito - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Bvumira vagadziri vemapulagini kuwedzera mamwe mahook kupeji chairo.

Kushandisa: Chikamu chinoshanduka chinofanira kutsiviwa nepage id inoshanda, semuenzaniso add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID yepeji rino. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yakagadzirwa kupeji rino. |

### Kubva {#since}

- 1.8.2
### Kunobva {#source}

Yakatsanangurwa mu [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) pamutsetse 301
