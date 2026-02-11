---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_${this->id}_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Die ID dieser Seite. |
| $page_hook | `string` | Der Seiten-Hook dieser Seite. |
| $admin_page | `self` | Die Seiteninstanz. |

### Since

- 1.8.2
- 2.0.4: Dritter Parameter hinzugefügt: die Seiteninstanz.

### Source

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) in Zeile 332
