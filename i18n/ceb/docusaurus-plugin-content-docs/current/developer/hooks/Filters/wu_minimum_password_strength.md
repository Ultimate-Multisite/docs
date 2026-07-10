---
id: wu_minimum_password_strength
title: Pansala - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

I-filter ang minimum nga kusog sa password nga gikinahanglan (zxcvbn score).

Mga lebel sa kusog: - 0, 1: Hilabihan ka huyang - 2: Huyang - 3: Tunga-tunga - 4: Kusog (default)

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Ang minimum nga lebel sa kusog nga gikinahanglan. |
| $strength_setting | `string` | Ang kantidad sa admin setting (medium, strong, super_strong). |

### Sukad {#since}

- 2.4.0
### Gigikanan {#source}

Gihubit sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) sa linya 516
