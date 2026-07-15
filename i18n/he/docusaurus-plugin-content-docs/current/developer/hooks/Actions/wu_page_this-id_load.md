---
id: wu_page_this-id_load
title: 'פעולה - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

מאפשר למפתחי plugins להוסיף hooks נוספים לדפים שלנו.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | מזהה (ID) של הדף הזה. |
| $page_hook | `string` | ה-hook של הדף הזה. |
| $admin_page | `self` | מופע הדף. |

### מאז {#since}

- 1.8.2
- 2.0.4: נוסף פרמטר שלישי: מופע הדף.
### מקור {#source}

מוגדר ב-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) בשורה 332
