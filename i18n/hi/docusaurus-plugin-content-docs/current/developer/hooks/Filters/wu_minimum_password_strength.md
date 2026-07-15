---
id: wu_minimum_password_strength
title: फ़िल्टर - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

आवश्यक न्यूनतम पासवर्ड मज़बूती (zxcvbn स्कोर) को फ़िल्टर करें।

मज़बूती स्तर: - 0, 1: बहुत कमज़ोर - 2: कमज़ोर - 3: मध्यम - 4: मज़बूत (डिफ़ॉल्ट)

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | आवश्यक न्यूनतम मज़बूती स्तर। |
| $strength_setting | `string` | एडमिन सेटिंग का मान (medium, strong, super_strong)। |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) में लाइन 516 पर परिभाषित।
