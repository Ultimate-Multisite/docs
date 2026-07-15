---
id: wu_page_added
title: פעולה - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

מאפשר למפתחי תוספים להריץ פעולות נוספות כאשר עמודים נרשמים.

בניגוד ל-wu_page_load, שרץ רק כשצופים בעמוד ספציפי, ה-hook הזה רץ בזמן הרישום עבור כל עמוד מנהל שמוסף באמצעות קוד של Ultimate Multisite.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | מזהה העמוד הזה. |
| $page_hook | `string` | שם ה-hook של העמוד הזה. |

### Since {#since}

- 2.0.0
### Source {#source}

מוגדר ב[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) בשורה 228
