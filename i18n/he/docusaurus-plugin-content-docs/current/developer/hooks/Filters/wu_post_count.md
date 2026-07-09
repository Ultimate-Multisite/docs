---
id: wu_post_count
title: פילטר - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# מסנן: wu_post_count {#filter-wupostcount}

מאפשר למפתחי תוספים לשנות את סך המונים של הפוסטים

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $count | `int` | סך המונים הכולל של הפוסטים |
| $post_counts | `object` | אובייקט וורדפרס המוחזר על ידי הפונקציה `wp_count_posts` |
| $post_type | `string` | ה-slug של סוג הפוסט |

### מאז {#since}

- 1.9.1
### מקור {#source}

מוגדר ב[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) בשורה 136


## מחזיר {#returns}
סך מונים חדש
