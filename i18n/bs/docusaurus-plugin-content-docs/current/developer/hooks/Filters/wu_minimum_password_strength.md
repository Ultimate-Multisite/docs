---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtrira minimalnu snagu lozinke koja je potrebna (zxcvbn rezultat).

Nivoi snage: - 0, 1: Vrlo slaba - 2: Slaba - 3: Srednja - 4: Snažna (podrazumevano)

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Minimalni nivo snage koji je potreban. |
| $strength_setting | `string` | Vrijednost postavke administratora (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Definisano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) na liniji 516
