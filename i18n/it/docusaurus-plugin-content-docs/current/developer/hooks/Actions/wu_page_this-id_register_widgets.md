---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
Si attiva dopo che i widget sono stati registrati per questa pagina.

La porzione dinamica del nome del hook, `$this->id`, si riferisce all'id della pagina.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | L'id della pagina. |
| $page_hook | `string` | Il hook della pagina. |
| $page | `object` | L'oggetto della pagina. |

### Since

- 2.4.10

### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
