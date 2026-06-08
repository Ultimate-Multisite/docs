---
id: wu_domain_seller_search_delay
title: פילטר - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# מסנן: wu_domain_seller_search_delay

מסנן את זמן ההשהיה (debounce delay) של חיפוש הדומיין, ביחידות של מילישניות.

הגדלת ערך זה יכולה להפחית קריאות ל-API במקרה של חיבור איטי.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $delay | `int` | זמן ההשהיה של ה-debounce במילישניות. ברירת מחדל: 500. |

### מאז

- 2.1.0
### מקור

מוגדר ב-[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) בשורה 854
