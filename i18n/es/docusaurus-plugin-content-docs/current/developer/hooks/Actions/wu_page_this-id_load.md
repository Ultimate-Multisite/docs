---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Permitir a los desarrolladores de plugins agregar ganchos adicionales a nuestras páginas.

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $id | `string` | El ID de esta página. |
| $page_hook | `string` | El gancho de página de esta página. |
| $admin_page | `self` | La instancia de la página. |

### Since

- 1.8.2
- 2.0.4: Se añadió el tercer parámetro: la instancia de la página.

### Source

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) en la línea 332
