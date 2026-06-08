---
id: wu_username_from_email
title: מסנן - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

מסנן את שם המשתמש של לקוח חדש.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $username | `string` | שם המשתמש של הלקוח. |
| $email | `string` | כתובת המייל של הלקוח החדש. |
| $new_user_args | `array` | מערך של פרמטרים למשתמש חדש, שיכול לכלול שם פרטי ושם משפחה. |
| $suffix | `string` | מחרוזת להוספה לשם המשתמש כדי להבטיח שהוא ייחודי. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) בשורה 516
