---
id: wu_minimum_password_strength
title: Filtrační parametr - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtr: wu_minimum_password_strength

Filtruje požadovanou minimální sílu hesla (skóre zxcvbn).

Úrovně síly: - 0, 1: Velmi slabé - 2: Slabé - 3: Střední - 4: Silné (výchozí)

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Požadovaná minimální úroveň síly. |
| $strength_setting | `string` | Hodnota nastavení administrátora (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Definováno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) na řádku 516
