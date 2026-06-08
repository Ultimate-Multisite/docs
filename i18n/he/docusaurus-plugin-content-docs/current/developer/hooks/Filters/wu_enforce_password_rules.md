---
id: wu_enforce_password_rules
title: פילטר - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

מסנן האם לאכוף כללי סיסמה נוספים.

כאשר הערך הוא `true`, הוא אוכף אורך מינימלי ודרישות תווים. המאפיין מופעל אוטומטית עבור הגדרת "Super Strong" או כאשר תכונת הסיסמה החזקה של Defender Pro פעילה.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | האם לאכוף כללים נוספים. |
| $strength_setting | `string` | ערך ההגדרה של המנהל. |
| $defender_active | `bool` | האם תכונת הסיסמה החזקה של Defender Pro פעילה. |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
