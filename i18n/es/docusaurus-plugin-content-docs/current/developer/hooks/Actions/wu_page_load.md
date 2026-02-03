---
id: wu_page_load
title: Acción - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Allow plugin developers to add additional hooks to our pages.

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $id | `string` | El ID de esta página. |
| $page_hook | `string` | El hook de página de esta página. |
| $admin_page | `self` | TThe instancia de la página. |

### Since

- 1.8.2
- 2.0.4: Se añadió el tercer parámetro: la instancia de la página.

### Source

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) en la línea 318
