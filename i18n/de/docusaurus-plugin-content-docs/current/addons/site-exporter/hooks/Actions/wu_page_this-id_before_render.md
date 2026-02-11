---
id: wu_page_this-id_before_render
title: 'Aktion - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Löst aus, bevor eine bestimmte Seite gerendert wird.

Verwendung: Der dynamische Teil muss durch eine gültige Seiten-ID ersetzt werden, z. B. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID der Seite. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die Base Admin Page Instanz. |

### Since

- 1.8.2

### Source

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) in Zeile 368
