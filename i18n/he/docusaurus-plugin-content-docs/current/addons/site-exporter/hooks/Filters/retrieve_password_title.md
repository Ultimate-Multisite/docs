---
id: retrieve_password_title
title: מסנן - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# מסנן: retrieve_password_title {#filter-retrievepasswordtitle}

מסנן את הנושא של אימייל איפוס הסיסמה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $title | `string` | כותרת ברירת המחדל של האימייל. |
| $user_login | `string` | שם המשתמש של המשתמש. |
| $user_data | `\WP_User` | אובייקט WP_User. |

### מאז {#since}

- 2.8.0
- 4.4.0: הוספו את הפרמטרים <code>$user_login</code> ו-<code>$user_data</code>.
### מקור {#source}

מוגדר ב-[inc/mu-migration/includes/commands/class-mu-migration-users.php](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) בשורה 135.


## מחזיר {#returns}
כותרת ברירת המחדל של האימייל.
