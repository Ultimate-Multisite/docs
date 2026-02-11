---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Allow plugin developers to run additional things when pages are registered.

Unlike the wu_page_load, which only runs when a specific page is being seen, this hook runs at registration for every admin page being added using Ultimate Multisite code.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | L'ID de cette page. |
| $page_hook | `string` | Le nom du hook de cette page. |

### Since

- 2.0.0

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) à la ligne 228
