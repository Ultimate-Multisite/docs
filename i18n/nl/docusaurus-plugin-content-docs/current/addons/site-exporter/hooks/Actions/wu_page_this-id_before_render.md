---
id: wu_page_this-id_before_render
title: 'Actie - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_${this->id}_before_render

Wordt geactiveerd vóór het renderen van een specifieke pagina.

Usage: Het dynamische deel moet worden vervangen door een geldige pagina-id, bijv. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string|WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De id van de pagina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De Base Admin Page instantie. |

### Since

- 1.8.2

### Source

Gedefinieerd in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) op regel 368
