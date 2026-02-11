---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Ermöglicht Plugin-Entwicklern, zusätzliche Hooks zu einer bestimmten Seite hinzuzufügen.

Verwendung: Der dynamische Teil muss durch eine gültige Seiten-ID ersetzt werden, z. B. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID dieser Seite. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Der Hook, der für diese Seite generiert wurde. |

### Since

- 1.8.2

### Source

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) in Zeile 301
