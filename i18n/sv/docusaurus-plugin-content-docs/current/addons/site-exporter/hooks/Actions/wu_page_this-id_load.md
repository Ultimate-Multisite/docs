---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

Låter plugin-utvecklare lägga till ytterligare hooks på en specifik sida.

Användning: Den dynamiska delen måste ersättas med en giltig sid-ID, till exempel: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID:t för den här sidan. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hooken som genereras för den här sidan. |

### Sedan

- 1.8.2
### Källa

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) på rad 301
