---
id: wu_minimum_password_strength
title: Filtru - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtru: wu_minimum_password_strength

Filtrează nivelul minim de forță a parolei necesar (scor zxcvbn).

Nivelurile de forță: - 0, 1: Foarte slab - 2: Slab - 3: Mediu - 4: Bun (implicit)

## Parametri {#parameters}

| Name | Type | Descriere |
|------|------|-------------|
| $min_strength | `int` | Nivelul minim de forță cerut. |
| $strength_setting | `string` | Valoarea setării de administrator (medium, strong, super_strong). |

### De la {#since}

- 2.4.0
### Sursă {#source}

Definit în [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) la linia 516
