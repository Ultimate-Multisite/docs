---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filter die erforderliche Mindestpasswortstärke (zxcvbn-Score).

Stärkelevels: - 0, 1: Sehr schwach - 2: Schwach - 3: Mittel - 4: Stark (Standard)

## Parameters

| Name | Type | Beschreibung |
|------|------|-------------|
| $min_strength | `int` | Die erforderliche Mindeststärke. |
| $strength_setting | `string` | Der Admin-Einstellungwert (medium, strong, super_strong). |

### Since

- 2.4.0

### Source

Definiert in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) in Zeile 516
