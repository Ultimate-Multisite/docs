---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Laat pluginontwikkelaars extra hooks toevoegen aan onze pagina's.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $id | `string` | De ID van deze pagina. |
| $page_hook | `string` | De pagina-hook van deze pagina. |
| $admin_page | `self` | TDe pagina-instantie. |

### Since

- 1.8.2
- 2.0.4: Toegevoegd derde parameter: de pagina-instantie.

### Source

Gedefinieerd in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) op regel 332
