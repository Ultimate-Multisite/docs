---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filter de minimale wachtwoordsterkte die vereist is (zxcvbn-score).

Sterkte niveaus: - 0, 1: Zeer zwak - 2: Zwak - 3: Gemiddeld - 4: Sterk (standaard)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Het minimale sterkte niveau dat vereist is. |
| $strength_setting | `string` | De admin instelling waarde (medium, strong, super_strong). |

### Since

- 2.4.0

### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
