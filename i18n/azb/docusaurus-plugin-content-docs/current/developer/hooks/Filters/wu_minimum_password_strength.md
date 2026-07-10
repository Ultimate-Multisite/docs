---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Minimum şifre gücü gereksinimini (zxcvbn skoru) filtreler.

Güç seviyeleri: - 0, 1: Çok zayıf - 2: Zayıf - 3: Orta - 4: Güçlü (varsayılan)

## Parameters {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $min_strength | `int` | Gereken minimum güç seviyesi. |
| $strength_setting | `string` | Yönetici ayar değeri (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
