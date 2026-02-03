---
id: wu_page_this-id_before_render
title: 'Acción - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Acción: wu_page_{$this->id}_before_render

Se dispara antes de renderizar una página específica.

Uso: La parte dinámica debe reemplazarse con un ID de página válido, por ejemplo add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Descripción |
|------|------|-------------|
| $page_id | `string|WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | El id de la página. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La instancia de Base Admin Page. |

### Since

- 1.8.2

### Source

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) en la línea 368
