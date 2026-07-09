---
id: wu_page_this-id_load
title: 'Aktioun - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Erlaabt plugin-Entwéckler, zousätzlech hooks op eng spezifesch Säit derbäizesetzen.

Benotzung: Den dynameschen Deel muss duerch eng gëlteg Säiten-ID ersat ginn, z. B. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameteren

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D'ID vun dëser Säit. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Den hook, dee fir dës Säit generéiert gouf. |

### Zanter

- 1.8.2
### Quell

Definéiert an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) op Linn 301
