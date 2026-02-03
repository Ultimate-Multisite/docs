---
id: wu_minimum_password_strength
title: Filtro - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtrar la fuerza mínima de contraseña requerida (puntuación zxcvbn)

Filtrar la fuerza mínima de contraseña requerida (puntuación zxcvbn).

Niveles de fuerza: - 0, 1: Muy débil - 2: Débil - 3: Medio - 4: Fuerte (predeterminado)

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $min_strength | `int` | El nivel mínimo de fuerza requerido. |
| $strength_setting | `string` | El valor de la configuración de administrador (medium, strong, super_strong). |

### Desde

- 2.4.0

### Fuente

Definido en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) en la línea 516
