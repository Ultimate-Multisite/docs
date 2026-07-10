---
id: wu_bypass_unset_current_user
title: פילטר - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

מאפשר למפתחים לעקוף את הקוד שמבטל את המשתמש הנוכחי.

החזרת כל ערך שאינו `null` תעקוף את הניקוי (unset) של המשתמש המחובר כרגע. זה יכול להיות שימושי בתרחישים מסוימים, למשל, כשעובדים עם אתרים משניים (sub-sites) המשמשים כלוחות מחוונים למנהלים (admin panels).

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` כדי להמשיך, כל דבר אחר כדי לעקוף זאת. |
| $current_user | `false\|\WP_User` | אובייקט המשתמש הנוכחי. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) בשורה 221

## מחזיר {#returns}
