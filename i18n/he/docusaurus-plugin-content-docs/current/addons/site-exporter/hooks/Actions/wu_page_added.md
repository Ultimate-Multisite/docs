---
id: wu_page_added
title: פעולה - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

מאפשר למפתחי תוספים להריץ פעולות נוספות כאשר דפים נרשמים.

בניגוד ל-`wu_page_load`, שמריץ רק כאשר צופים בדף ספציפי, ה-hook הזה רץ בזמן הרישום עבור כל דף מנהל שמוסף באמצעות קוד WP Ultimo.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | המזהה (ID) של הדף הזה. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ה-hook שנוצר עבור דף זה. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) בשורה 203
