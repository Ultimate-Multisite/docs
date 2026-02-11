---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Sta pluginontwikkelaars toe om extra hooks toe te voegen aan een specifieke pagina.

Usage: Het dynamische deel moet worden vervangen door een geldige pagina-ID, bijv. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De ID van deze pagina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De hook die aan deze pagina is gegenereerd. |

### Since

- 1.8.2

### Source

Gedefinieerd in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) op regel 301
