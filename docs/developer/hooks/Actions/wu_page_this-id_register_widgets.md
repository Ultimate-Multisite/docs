---
id: wu_page_this-id_register_widgets
title: "Action - wu_page_{$this->id}_register_widgets"
sidebar_label: "wu_page_{$this->id}_register_widgets"
---

# Action: wu_page_\{$this->id\}_register_widgets

Fires after widgets are registered for this page.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | The page id. |
| $page_hook | `string` | The page hook. |
| $page | `object` | The page object. |

### Since

- 2.4.10
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755

