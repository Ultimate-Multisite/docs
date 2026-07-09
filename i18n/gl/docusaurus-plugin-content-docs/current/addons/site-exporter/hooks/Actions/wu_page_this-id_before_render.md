---
id: wu_page_this-id_before_render
title: 'Acción - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Execútase antes de renderizar unha páxina específica.

Uso: A parte dinámica debe substituírse por un id de páxina válido, p. ex. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O id da páxina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A instancia de Base Admin Page. |

### Desde {#since}

- 1.8.2
### Fonte {#source}

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) na liña 368
