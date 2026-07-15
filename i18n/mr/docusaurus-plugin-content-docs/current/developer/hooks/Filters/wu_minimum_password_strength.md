---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

आवश्यक किमान पासवर्डची ताकद (zxcvbn score) फिल्टर करा.

ताकद स्तर (Strength levels): - 0, 1: खूप कमकुवत (Very weak) - 2: कमकुवत (Weak) - 3: मध्यम (Medium) - 4: मजबूत (Strong) (डीफॉल्ट)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | आवश्यक किमान ताकदीचा स्तर. |
| $strength_setting | `string` | ॲडमिन सेटिंगचे मूल्य (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
