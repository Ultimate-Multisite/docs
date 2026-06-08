---
id: wu_minimum_password_length
title: פילטר - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# מסנן: wu_minimum_password_length

מסנן את אורך הסיסמה המינימלי.

הוא נאכף רק כאשר `wu_enforce_password_rules` הוא `true`.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $min_length | `int` | אורך סיסמה מינימלי. ברירת מחדל 12 (משתווה ל-Defender Pro). |
| $defender_active | `bool` | האם מופעל Defender Pro Strong Password. |

### מאז

- 2.4.0
### מקור

מוגדר ב[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) בשורה 543
