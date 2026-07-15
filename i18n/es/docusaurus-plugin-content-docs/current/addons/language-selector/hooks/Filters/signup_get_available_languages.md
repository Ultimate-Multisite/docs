---
id: signup_get_available_languages
title: Filtro - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtro: signup_get_available_languages

Filtra la lista de idiomas disponibles para los registros de sitios en el front-end.

Pasar un array vacío a este hook deshabilitará la salida del ajuste en el formulario de registro, y se usará el idioma predeterminado al crear el sitio. Los idiomas que no estén ya instalados se eliminarán.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $available_languages | `array` | Idiomas disponibles. |

### Desde {#since}

- 4.4.0
### Fuente {#source}

Definido en [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) en la línea 117
