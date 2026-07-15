---
id: wu_minimum_password_strength
title: Pansala - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

I-filter ang pinakamababang lakas ng password na kinakailangan (zxcvbn iskor).

Mga antas ng lakas: - 0, 1: Napakahina - 2: Mahina - 3: Katamtaman - 4: Malakas (default)

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $min_strength | `int` | Ang pinakamababang antas ng lakas na kinakailangan. |
| $strength_setting | `string` | Ang halaga ng admin setting (medium, strong, super_strong). |

### Mula noong {#since}

- 2.4.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) sa linya 516
