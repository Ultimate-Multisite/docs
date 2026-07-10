---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# פעולה: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

מופעל לאחר שווידג'טים נרשמים עבור דף זה.

החלק הדינמי של שם ה-hook, `$this->id`, מתייחס למזהה הדף (page id).

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $id | `string` | מזהה הדף. |
| $page_hook | `string` | ה-hook של הדף. |
| $page | `object` | אובייקט הדף. |

### מאז {#since}

- 2.4.10
### מקור {#source}

מוגדר ב[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) בשורה 755
