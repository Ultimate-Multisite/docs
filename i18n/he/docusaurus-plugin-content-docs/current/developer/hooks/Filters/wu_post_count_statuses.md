---
id: wu_post_count_statuses
title: פילטר - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# מסנן: wu_post_count_statuses

מאפשר למפתחי תוספים לשנות אילו מצבי פוסט (post status) יסופרו. כברירת מחדל, נספרים פוסטים שפורסמו ופוסטים פרטיים.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $post_status | `array` | רשימת מצבי הפוסטים |
| $post_type | `string` | ה-slug של סוג הפוסט |

### מאז {#since}

- 1.9.1
### מקור {#source}

מוגדר ב-[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) בשורה 119


## מחזיר {#returns}
מערך חדש של מצבי פוסטים
