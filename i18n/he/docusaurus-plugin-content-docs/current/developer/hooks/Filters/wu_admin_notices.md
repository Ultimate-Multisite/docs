---
id: wu_admin_notices
title: מסנן - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# מסנן: wu_admin_notices

מאפשר למפתחים לסנן התראות מנהל (admin notices) שנוספו על ידי Ultimate Multisite.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $notices | `array` | רשימה של ההודעות עבור הפאנל הספציפי הזה. |
| $all_notices | `array` | רשימה של ההודעות שנוספו, וממוינות לפי פאנל. |
| $panel | `string` | הפאנל שממנו יש לשלוף את ההודעות. |
| $filter | `string` | מציין אם ההודעות שניתן לסגור עברו סינון. |
| $dismissed_messages | `array` | רשימה של מפתחות ההודעות שנסגרו. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) בשורה 121.


## מחזיר {#returns}
