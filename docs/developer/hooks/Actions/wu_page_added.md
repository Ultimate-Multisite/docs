---
id: wu_page_added
title: "Action - wu_page_added"
sidebar_label: "wu_page_added"
---

# Action: wu_page_added

Allow plugin developers to run additional things when pages are registered.

Unlike the wu_page_load, which only runs when a specific page is being seen, this hook runs at registration for every admin page being added using Ultimate Multisite code.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | The ID of this page. |
| $page_hook | `string` | The hook name of this page. |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228

