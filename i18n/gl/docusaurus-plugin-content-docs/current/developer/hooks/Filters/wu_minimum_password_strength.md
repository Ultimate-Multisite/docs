---
id: wu_minimum_password_strength
title: Filtro - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtro: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtra a fortaleza mínima do contrasinal requirida (puntuación zxcvbn).

Niveis de fortaleza: - 0, 1: Moi débil - 2: Débil - 3: Media - 4: Forte (predeterminado)

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $min_strength | `int` | O nivel mínimo de fortaleza requirido. |
| $strength_setting | `string` | O valor da configuración de administración (medium, strong, super_strong). |

### Desde {#since}

- 2.4.0
### Fonte {#source}

Definido en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) na liña 516
