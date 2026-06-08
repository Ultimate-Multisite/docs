---
id: wu_page_load
title: פעולה - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

מאפשר למפתחי תוספים להוסיף hooks נוספים לדפי האתר שלנו.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $id | `string` | המזהה (ID) של הדף הזה. |
| $page_hook | `string` | ה-hook של הדף הזה. |
| $admin_page | `self` | מופע הדף. |

### מאז

- 1.8.2
- 2.0.4: הוסף פרמטר שלישי: מופע הדף.
### מקור

מוגדר ב[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) בשורה 318
