---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtruje minimálnu požadovanú silu hesla (skóre zxcvbn).

Úrovne sily: - 0, 1: Veľmi slabá - 2: Slabá - 3: Stredná - 4: Silná (predvolené)

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $min_strength | `int` | Minimálna požadovaná úroveň sily. |
| $strength_setting | `string` | Hodnota nastavenia administrátora (medium, strong, super_strong). |

### Od verzie

- 2.4.0
### Zdroj

Definované v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) na riadku 516
