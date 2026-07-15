---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Tələb olunan minimum şifrə gücünü (zxcvbn skoru) filtrləyir.

Güc səviyyələri: - 0, 1: Çox zəif - 2: Zəif - 3: Orta - 4: Güclü (default)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Tələb olunan minimum güc səviyyəsi. |
| $strength_setting | `string` | Admin ayar dəyəri (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
