---
id: wu_minimum_password_strength
title: پاڵێوەر - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# فلتەر: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

کەمترین هێزی وشەی نهێنیی پێویست فلتەر بکە (zxcvbn score).

ئاستەکانی هێز: - 0، 1: زۆر لاواز - 2: لاواز - 3: ناوەند - 4: بەهێز (بنەڕەت)

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $min_strength | `int` | کەمترین ئاستی هێزی پێویست. |
| $strength_setting | `string` | بەهای ڕێکخستنی بەڕێوەبەر (medium, strong, super_strong). |

### لەوەتەی {#since}

- 2.4.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) لە هێڵی 516
