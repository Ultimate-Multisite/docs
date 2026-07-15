---
id: wu_connector_enforcement_option_keys
title: Filtro - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtro: wu_connector_enforcement_option_keys

Filtra la lista de claves de opción de proveedores de IA que se aplican desde el sitio principal.

Añade claves de opción para plugins de proveedores de IA personalizados o de terceros, de modo que sus configuraciones también se hereden del sitio principal en los subsitios.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $keys | `string[]` | Nombres de las claves de opción a aplicar (ya incluye las claves de conector descubiertas dinámicamente y EXTRA_PROVIDER_OPTIONS). |

### Desde {#since}

- 1.2.0
### Fuente {#source}

Definido en [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) en la línea 206
