---
id: wu_page_this-id_load
title: "Action - wu_page_{$this->id}_load"
sidebar_label: "wu_page_{$this->id}_load"
---

# Action: wu_page_\{$this->id\}_load

Allow plugin developers to add additional hooks to specific page.

Usage: The dynamic part needs to be replaced with a valid page id, e.g. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | The ID of this page. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | The hook generated to this page. |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301

