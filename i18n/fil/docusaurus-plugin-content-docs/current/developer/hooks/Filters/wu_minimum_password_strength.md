---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Ito ay nagfi-filter sa minimum na lakas ng password na kinakailangan (zxcvbn score).

Mga antas ng lakas: - 0, 1: Napakahina (Very weak) - 2: Mahina (Weak) - 3: Katamtaman (Medium) - 4: Malakas (Strong) (default)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Ang minimum na antas ng lakas na kinakailangan. |
| $strength_setting | `string` | Ang halaga ng setting ng admin (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Tinukoy sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) sa linya 516
