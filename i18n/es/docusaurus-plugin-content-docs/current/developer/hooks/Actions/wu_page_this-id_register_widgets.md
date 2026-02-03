---
id: wu_page_this-id_register_widgets
title: 'Acción - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_${this->id}_register_widgets

Se dispara después de que los widgets se registran para esta página.

La porción dinámica del nombre del gancho, `$this->id`, se refiere al id de la página.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $id | `string` | El id de la página. |
| $page_hook | `string` | El gancho de la página. |
| $page | `object` | El objeto de la página. |

### Desde

- 2.4.10
### Fuente

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) en la línea 755
