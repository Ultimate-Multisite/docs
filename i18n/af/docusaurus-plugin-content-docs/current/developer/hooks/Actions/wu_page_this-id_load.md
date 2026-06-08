---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Dit laat plugin-ontwikkelaars toe om bykomende hooks aan ons bladsye by te voeg.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Die ID van hierdie bladsy. |
| $page_hook | `string` | Die bladsy-hook van hierdie bladsy. |
| $admin_page | `self` | Die bladsy-instansie. |

### Sedert

- 1.8.2
- 2.0.4: Derde parameter bygevoeg: die bladsy-instansie.
### Bron

Gedefinieer in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) by lyn 332
