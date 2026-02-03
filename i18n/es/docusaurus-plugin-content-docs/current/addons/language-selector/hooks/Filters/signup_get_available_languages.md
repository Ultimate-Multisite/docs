---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filtro: signup_get_available_languages

Filtra la lista de idiomas disponibles para los registros de sitios en el front‑end.

Pasar un array vacío a este gancho desactivará la salida de la configuración en el formulario de registro, y se usará el idioma predeterminado al crear el sitio. Los idiomas que no estén ya instalados serán eliminados.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $available_languages | `array` | Idiomas disponibles. |

### Desde

- 4.4.0

### Fuente

Definido en [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) en la línea 125
