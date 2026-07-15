---
id: retrieve_password_message
title: פילטר - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

מסנן את גוף ההודעה של המייל לאיפוס סיסמה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $message | `string` | הודעת המייל המקורית. |
| $key | `string` | מפתח ההפעלה. |
| $user_login | `string` | שם המשתמש של המשתמש. |
| $user_data | `\WP_User` | אובייקט WP_User. |

### מאז {#since}

- 2.8.0
- 4.1.0: נוספו הפרמטרים <code>$user_login</code> ו-<code>$user_data</code>.
### מקור {#source}

מוגדר ב-[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) בשורה 149.


## מחזיר {#returns}
הודעת המייל המקורית.
