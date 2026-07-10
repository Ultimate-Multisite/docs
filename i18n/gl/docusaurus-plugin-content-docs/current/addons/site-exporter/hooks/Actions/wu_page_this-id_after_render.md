---
id: wu_page_this-id_after_render
title: 'Acción - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Execútase despois de renderizar unha páxina específica.

Uso: A parte dinámica debe substituírse por un id de páxina válido, p. ex. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O id da páxina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A instancia de Base Admin Page. |

### Desde {#since}

- 1.8.2
### Orixe {#source}

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) na liña 394
