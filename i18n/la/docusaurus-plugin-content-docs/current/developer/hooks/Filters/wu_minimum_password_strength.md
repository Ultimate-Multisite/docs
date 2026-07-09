---
id: wu_minimum_password_strength
title: Filtrum - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtrum: wu_minimum_password_strength

Filtra minimam vim tesserae requisitam (aestimatio zxcvbn).

Gradus roboris: - 0, 1: Valde debilis - 2: Debilis - 3: Medius - 4: Fortis (praedefinitus)

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $min_strength | `int` | Minimus gradus roboris requisitus. |
| $strength_setting | `string` | Valor optionis administratoris (medium, strong, super_strong). |

### Ex quo

- 2.4.0
### Fons

Definitum in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) ad lineam 516
