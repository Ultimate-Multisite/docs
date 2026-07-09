---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtrirajte najmanjšo zahtevano moč gesla (zxcvbn ocena).

Ravni moči: - 0, 1: Zelo šibko - 2: Šibko - 3: Srednje - 4: Močno (privzeto)

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Najmanjša zahtevana raven moči. |
| $strength_setting | `string` | Vrednost nastavitve skrbnika (medium, strong, super_strong). |

### Od različice

- 2.4.0
### Vir

Opredeljeno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) v vrstici 516
