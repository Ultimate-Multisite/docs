---
id: wu_make_primary_domain_redirect_url
title: פילטר - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

מסנן את כתובת ה-URL של ההפניה לאחר הגדרת דומיין כראשי.

מאפשר למפתחים להתאים אישית לאן המשתמשים מופנים לאחר שהגדירו דומיין כראשי בהצלחה. כברירת מחדל, ההפניה מתבצעת לכתובת ה-URL הנוכחית באתר הראשי, או לכתובת ה-URL של המנהל (admin) של האתר שעובר שינוי.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | כתובת ה-URL המוגדרת כברירת מחדל להפניה. יכול להיות ה-URL הנוכחי (אם זהו האתר הראשי) או כתובת ה-URL של המנהל של האתר הנוכחי. |
| $current_site | `int` | מזהה (ID) של האתר שבו הופך הדומיין לראשי. |
| $domain | `\Domain` | אובייקט הדומיין שהוגדר כראשי. |
| $old_primary_domains | `array` | מערך של מזהים (IDs) של דומיינים שהיו ראשיים בעבר. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[inc/ui/class-domain-mapping-element.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) בשורה 639.


## מחזיר
כתובת ה-URL המופנית והמסוננת.
