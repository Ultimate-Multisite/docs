---
id: wu_page_this-id_after_render
title: 'Acción - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Acción: wu_page_\{$this->id\}_after_render

Se dispara después de renderizar una página específica.

Uso: La parte dinámica debe reemplazarse con un ID de página válido, por ejemplo add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El id de la página. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La instancia Base Admin Page. |

### Desde

- 1.8.2

### Fuente

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) en la línea 394
