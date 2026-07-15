---
id: wu_generated_username_from_email
title: פילטר - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

מסנן את שם המשתמש שנוצר עבור הלקוח.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $username | `string` | שם המשתמש שנוצר. |
| $email | `string` | כתובת המייל החדשה של הלקוח. |
| $new_user_args | `array` | מערך של פרמטרים למשתמש חדש, שיכול לכלול שם פרטי ושם משפחה. |
| $suffix | `string` | מחרוזת להוספה לשם המשתמש כדי להבטיח שהוא ייחודי. |

### מאז {#since}

- 3.7.0
### מקור {#source}

מוגדר ב[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) בשורה 488
