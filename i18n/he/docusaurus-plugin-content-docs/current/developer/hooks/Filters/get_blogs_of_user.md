---
id: get_blogs_of_user
title: פילטר - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

משכפל את ה-WP Filter המקורי כאן, למקרה הצורך.

מסנן את רשימת האתרים שאליהם משויך המשתמש.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $sites | `object[]` | מערך של אובייקטי אתרים השייכים למשתמש. |
| $user_id | `int` | מזהה משתמש (User ID). |
| $all | `bool` | האם מערך האתרים המוחזר צריך להכיל את כל האתרים, כולל אלה המסומנים כ'מוגדרים למחיקה' (deleted), 'ארכיון' (archived) או 'ספאם' (spam). ברירת מחדל: false. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב-[inc/managers/class-site-manager.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) בשורה 851
