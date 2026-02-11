---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Aktion: wu_page_${this->id}_after_render

Auslöst nach dem Rendern einer bestimmten Seite.

Verwendung: Der dynamische Teil muss durch eine gültige Seiten-ID ersetzt werden, z. B. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $page_id | `string|WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID der Seite. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die Base Admin Page Instanz. |

### Seit

- 1.8.2

### Quelle

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) in Zeile 394
