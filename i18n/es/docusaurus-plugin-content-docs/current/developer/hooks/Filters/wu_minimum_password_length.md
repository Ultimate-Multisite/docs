---
id: wu_minimum_password_length
title: Filtro - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtro: wu_minimum_password_length

Filtrar la longitud mínima de la contraseña.

Solo se aplica cuando wu_enforce_password_rules es verdadero.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $min_length | `int` | Longitud mínima de la contraseña. Por defecto 12 (coincide con Defender Pro). |
| $defender_active | `bool` | Si Defender Pro Strong Password está activo. |

### Desde

- 2.4.0

### Fuente

Definido en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) en la línea 543
