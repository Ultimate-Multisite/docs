---
id: wu_page_load
title: "Action - wu_page_load"
sidebar_label: "wu_page_load"
---

# Action: wu_page_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | The ID of this page. |
| $page_hook | `string` | The page hook of this page. |
| $admin_page | `self` | TThe page instance. |

### Since

- 1.8.2
- 2.0.4: Added third parameter: the page instance.
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) at line 318

