---
id: wu_page_load
title: Actie - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $id | `string` | De ID van deze pagina. |
| $page_hook | `string` | De pagina-hook van deze pagina. |
| $admin_page | `self` | TThe pagina-instantie. |

### Sinds

- 1.8.2
- 2.0.4: Toegevoegd derde parameter: de pagina-instantie.

### Bron

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) at line 318
