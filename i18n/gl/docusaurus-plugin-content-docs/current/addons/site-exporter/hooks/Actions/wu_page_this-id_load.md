---
id: wu_page_this-id_load
title: 'Acción - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Permite aos desenvolvedores de plugins engadir hooks adicionais a unha páxina específica.

Uso: A parte dinámica debe substituírse por un id de páxina válido, p. ex. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta páxina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook xerado para esta páxina. |

### Desde

- 1.8.2
### Fonte

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na liña 301
