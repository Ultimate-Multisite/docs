---
id: wu_page_this-id_before_render
title: "Action - wu_page_{$this->id}_before_render"
sidebar_label: "wu_page_{$this->id}_before_render"
---

# Action: wu_page_\{$this->id\}_before_render

Fires before rendering a specific page.

Usage: The dynamic part needs to be replaced with a valid page id, e.g. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | The id of the page. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | The Base Admin Page instance. |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) at line 368

