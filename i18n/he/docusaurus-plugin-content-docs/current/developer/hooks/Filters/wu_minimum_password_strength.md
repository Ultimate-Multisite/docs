---
id: wu_minimum_password_strength
title: פילטר - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

מסנן את חוזק הסיסמה המינימלי הנדרש (ציון zxcvbn).

רמות חוזק: - 0, 1: חלש מאוד - 2: חלש - 3: בינוני - 4: חזק (ברירת מחדל)

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $min_strength | `int` | רמת החוזק המינימלית הנדרשת. |
| $strength_setting | `string` | ערך הגדרת המנהל (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

מוגדר ב-[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) בשורה 516
