---
id: wu_magic_link_enforce_ip
title: פילטר - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

מסנן האם לאכוף אימות כתובת IP.

הגדר ל-false כדי לאפשר ל-tokens לעבוד מרשתות שונות. זה מפחית את רמת האבטחה אבל מגדיל את השימושיות (למשל, עבור משתמשי מובייל שמשנים רשתות).

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | האם לאכוף התאמת כתובת IP. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[inc/sso/class-magic-link.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) בשורה 422
