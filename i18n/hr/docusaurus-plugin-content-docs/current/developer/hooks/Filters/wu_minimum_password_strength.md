---
id: wu_minimum_password_strength
title: Filtar - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtrirajte minimalnu potrebnu jačinu lozinke (zxcvbn rezultat).

Razine jačine: - 0, 1: Vrlo slaba - 2: Slaba - 3: Srednja - 4: Jaka (zadano)

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Minimalna potrebna razina jačine. |
| $strength_setting | `string` | Vrijednost administratorske postavke (medium, strong, super_strong). |

### Od {#since}

- 2.4.0
### Izvor {#source}

Definirano u [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) u retku 516
