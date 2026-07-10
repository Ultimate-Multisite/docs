---
id: wu_sso_enabled
title: פילטר - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# מסנן: wu_sso_enabled {#filter-wussoenabled}

מאפשר הפעלה או כיבוי של יכולת Single Sign-On (SSO) חוצת דומיינים.

ניתן לסנן ערך זה כדי לכבות את ה-SSO לחלוטין, או להפעיל אותו באופן מותנה במקום זאת.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $enabled | `bool` | האם ה-SSO צריך להיות מופעל? `true` למצב מופעל, וערך שאינו `true` (כמו `false`) למצב כבוי. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) בשורה 110


## מחזיר {#returns}
אם ה-SSO מופעל או לא.
