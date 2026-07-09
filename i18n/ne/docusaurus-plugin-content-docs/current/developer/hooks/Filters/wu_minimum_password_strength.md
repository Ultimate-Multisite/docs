---
id: wu_minimum_password_strength
title: फिल्टर - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# फिल्टर: wu_minimum_password_strength

आवश्यक न्यूनतम पासवर्ड शक्ति फिल्टर गर्नुहोस् (zxcvbn स्कोर)।

शक्ति स्तरहरू: - 0, 1: धेरै कमजोर - 2: कमजोर - 3: मध्यम - 4: बलियो (पूर्वनिर्धारित)

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $min_strength | `int` | आवश्यक न्यूनतम शक्ति स्तर। |
| $strength_setting | `string` | admin सेटिङ मान (medium, strong, super_strong)। |

### देखि

- 2.4.0
### स्रोत

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) मा लाइन 516 मा परिभाषित गरिएको छ।
