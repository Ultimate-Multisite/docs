---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

מופעל לפני מחיקת אתר ממתין תלוי (orphaned) עבור מנוי GoCardless שבוטל.

כדי למנוע מחיקה, יש להחזיר `false` מהמסנן הזה.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | מזהה הבלוג של WordPress של האתר הממתין. |
| $membership | `\WP_Ultimo\Models\Membership` | המנוי שבוטל. |
| $old_status | `string` | הסטטוס (המצב) לפני הביטול. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[URL] בשורה 1086
