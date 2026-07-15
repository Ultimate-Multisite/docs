---
id: wu_page_load
title: פעולה - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

מאפשר למפתחי תוספים להוסיף ווים (hooks) נוספים לדפי המערכת שלנו.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | מזהה (ID) של הדף הזה. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | הוו (hook) שנוצר עבור הדף הזה. |

### מאז {#since}

- 1.8.2
### מקור {#source}

מוגדר ב-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) בשורה 289
