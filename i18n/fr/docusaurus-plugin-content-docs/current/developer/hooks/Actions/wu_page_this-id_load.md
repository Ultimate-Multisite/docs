---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | L'ID de cette page. |
| $page_hook | `string` | Le hook de page de cette page. |
| $admin_page | `self` | L'instance de page. |

### Since

- 1.8.2
- 2.0.4: Added third parameter: the page instance.
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) at line 332
