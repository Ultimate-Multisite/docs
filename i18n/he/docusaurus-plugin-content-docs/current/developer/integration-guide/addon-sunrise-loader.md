---
title: תוסף Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# מטען קבצי Sunrise של Addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 מוסיף מטען הרחבה (extension loader) של sunrise עבור Addons ואינטגרציות מותאמות אישית של MU-plugin שצריכות לרוץ במהלך שלב האתחול (bootstrapping) של WordPress sunrise, מבלי שיהיה צורך לערוך את הקובץ `wp-content/sunrise.php` שנוצר.

## מתי להשתמש בו {#when-to-use-it}

השתמש בהרחבת sunrise כאשר האינטגרציה שלך חייבת לרוץ לפני טעינת ה-plugins הרגילים, לדוגמה: ניתוב דומיין מותאם אישית, טיפול בבקשות ספציפיות למארח (host-specific), או התאמות מוקדמות לשלב האתחול של הרשת (network bootstrap).

עבור אינטגרציות רגילות, עדיף להשתמש ב-plugins רגילים של WordPress, ב-MU-plugins, וב-hooks של Ultimate Multisite המודוקמנטים. קוד sunrise רץ מוקדם מאוד, ולכן הוא צריך להישאר קטן, הגנתי (defensive), וללא תלויות חיצוניות.

## קונבנציית שמות קבצים {#file-naming-convention}

צור קובץ PHP בשם `sunrise.php` בתוך ספריית Addon שהשם שלה מתחיל ב-`ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

המטען סורק את ספריית ה-plugins עבור תבנית זו:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

הקבצים שנמצאים תואמים נטענים בסדר אלפביתי לפי נתיב ה-addon.

## היכן למקם את הקובץ {#where-to-place-the-file}

מקם את הקובץ בתיקייה הראשית של ה-addon שמחזיק בהתנהגות ה-sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

הסריקה מתבצעת ביחס ל-`WP_CONTENT_DIR`, ולא לערך הנוכחי של `WP_PLUGIN_DIR`. זה שומר על יציבות הגילוי כאשר ריבונות מרובה (multi-tenancy) או קוד של שלב אתחול מוקדם אחר משנים קבועים של ספריית ה-plugins.

אל תערוך ישירות את הקובץ `wp-content/sunrise.php` שנוצר. המטען מאפשר לקוד מותאם אישית להרחיב את התנהגות ה-sunrise מבלי לבצע fork של קובץ ה-sunrise הליבה ש-Ultimate Multisite מתקין ומעדכן.

## Hooks ופילטרים זמינים {#hooks-and-filters-available}

קבצי sunrise של Addon רצים לאחר שמפת הדומיינים של Ultimate Multisite נטענה ולפני ש-WordPress מפעיל את `ms_loaded`. בנקודה זו, קובץ sunrise יכול:

- לקרוא או לדרוס את `$current_site` ואת `$current_blog`;
- לגשת ל-`$wpdb` לאחר שסיום תצורת מסד הנתונים נטען;
- להגדיר קבועים של זמן sunrise, כמו `BLOG_ID_CURRENT_SITE`, במידת הצורך;
- לקרוא את מצב העזרה של sunrise של Ultimate Multisite, כולל מצב הניתוב המשמש לאינטגרציות של ריבונות מרובה.

Ultimate Multisite מפעיל את `wu_sunrise_loaded` לאחר שסיימו את מטען ה-sunrise שלו. השתמש בפעולה (action) הזו לקוד שצריך לרוץ לאחר ששלב האתחול של sunrise הושלם, אך עדיין שייך למחזור החיים של sunrise.

הפעל רק פונקציות שכבר נטענו בשלב ה-sunrise. הימנע מעבודה כבדה עם מסד נתונים, רינדור תבניות, בקשות HTTP, וקוד שמניח שהסדר הרגיל של טעינת ה-plugins הושלם.

## דוגמה מינימלית {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

לאחר פריסת הקובץ, טען דומיין ממופה וכתובת main-site לא ממופה כדי לוודא ששני הנתיבים עדיין מבצעים את שלב האתחול בהצלחה.
