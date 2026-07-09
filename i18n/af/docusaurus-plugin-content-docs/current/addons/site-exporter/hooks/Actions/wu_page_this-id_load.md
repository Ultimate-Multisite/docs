---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Dit laat plugin-ontwikkelaars toe om bykomende hooks aan 'n spesifieke bladsy by te voeg.

Gebruik: Die dinamiese deel moet vervang word met 'n geldige bladsy-ID, b.v. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID van hierdie bladsy. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die hook wat aan hierdie bladsy gegenereer word. |

### Sedert {#since}

- 1.8.2
### Bron {#source}

Gedefinieer in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) by bladsy 301
