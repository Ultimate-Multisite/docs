---
id: wu_page_this-id_after_render
title: 'פעולה - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 8366130ec913af612a31f8385db10a0b
---
# Action: wu_page_{$this->id}_after_render {#action-wupagethis-idafterrender}

מאפשר למפתחי תוספים להוסיף תוכן נוסף לאחר שאנו מציגים את הדף.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | מזהה (ID) של הדף הזה |
| $page | `object` | אובייקט הדף. |

### מאז {#since}

- 1.8.2
### מקור {#source}

מוגדר ב-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L423) בשורה 423
