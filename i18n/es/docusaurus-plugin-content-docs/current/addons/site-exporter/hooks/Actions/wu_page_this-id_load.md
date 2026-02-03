---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Acción: wu_page_\{$this->id\}_load

Permitir a los desarrolladores de plugins agregar ganchos adicionales a una página específica.

Uso: La parte dinámica debe reemplazarse con un ID de página válido, por ejemplo add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El ID de esta página. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El gancho generado para esta página. |

### Desde

- 1.8.2

### Fuente

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) en la línea 301
