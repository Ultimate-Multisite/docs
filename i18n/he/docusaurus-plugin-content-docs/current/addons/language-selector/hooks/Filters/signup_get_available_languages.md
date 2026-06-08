---
id: signup_get_available_languages
title: פילטר - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

מסנן את רשימת השפות הזמינות עבור הרשמה לאתר בצד הלקוח (front-end).

העברת מערך ריק (empty array) ל-hook הזה תבטל את הצגת ההגדרה בטופס ההרשמה, והשפה ברירת המחדל תשמש בעת יצירת האתר. שפות שאינן מותקנות כבר יוסרו מהרשימה.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $available_languages | `array` | שפות זמינות. |

### מאז

- 4.4.0
### מקור

מוגדר ב[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) בשורה 117
