---
id: wu_page_after_render
title: פעולה - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render {#action-wupageafterrender}

מאפשר למפתחי תוספים להוסיף תוכן נוסף לאחר שאנו מדפיסים את הדף.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $page_id | `string` | מזהה (ID) של הדף הזה |
| $page | `object` | אובייקט הדף. |

### מאז {#since}

- 1.8.2
### מקור {#source}

מוגדר ב[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) בשורה 413
