---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Permite a los desarrolladores de plugins ejecutar cosas adicionales cuando se registran las páginas.

A diferencia de wu_page_load, que solo se ejecuta cuando se visualiza una página específica, este gancho se ejecuta en el registro de cada página de administración que se agrega utilizando el código de Ultimate Multisite.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | El ID de esta página. |
| $page_hook | `string` | El nombre del gancho de esta página. |

### Since

- 2.0.0

### Source

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) en la línea 228
