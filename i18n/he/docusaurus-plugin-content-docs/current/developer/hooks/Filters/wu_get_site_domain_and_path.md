---
id: wu_get_site_domain_and_path
title: פילטר - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

מאפשר למפתחים לתפעל (לשנות) זוגות של דומיין/נתיב.

זה יכול להיות שימושי למספר דברים, כמו יישום סוג של פתרון סטוייג'ינג (staging), שרתים שונים, וכו'.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $d | `object` | האובייקט הנוכחי המכיל מפתחות של דומיין ונתיב. |
| $path_or_subdomain | `string` | הנתיב/תת-דומיין המקורי שהועבר לפונקציה. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/functions/site.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) בשורה 235.

## מחזיר {#returns}
אובייקט המכיל מפתחות של דומיין ונתיב.
