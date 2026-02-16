---
title: אינטגרציית cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# אינטגרציה עם cPanel

## סקירה כללית
cPanel היא אחת מלוחות הבקרה לאחסון אתרים הפופולריים ביותר, ונמצאת בשימוש נרחב אצל ספקי אחסון משותף ושרתים ייעודיים. אינטגרציה זו מאפשרת סנכרון אוטומטי של דומיינים בין Ultimate Multisite ל-cPanel, כך שתוכלו להוסיף באופן אוטומטי כינויי דומיין ותת-דומיינים לחשבון ה-cPanel שלכם.

## תכונות
- יצירה אוטומטית של addon domains ב-cPanel
- יצירה אוטומטית של תת-דומיינים ב-cPanel (עבור התקנות multisite מבוססות תת-דומיין)
- הסרת דומיינים כאשר מיפויים נמחקים

## דרישות מקדימות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלכם:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

בנוסף, ניתן להגדיר באופן אופציונלי:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## הוראות התקנה

### 1. השגת פרטי ההתחברות ל-cPanel

1. קבלו את שם המשתמש והסיסמה ל-cPanel מספק האחסון שלכם
2. גלו מהי כתובת ה-cPanel שלכם (בדרך כלל `cpanel.yourdomain.com` או `yourdomain.com:2083`)

### 2. הוספת קבועים לקובץ wp-config.php

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

באופן אופציונלי, ניתן להתאים אישית את הפורט ותיקיית השורש:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. הפעלת האינטגרציה

1. בממשק הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את אינטגרציית ה-cPanel
5. לחצו על "Save Changes"

## איך זה עובד

### Addon Domains

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה שולחת בקשה ל-API של cPanel להוספת הדומיין כ-addon domain
2. הדומיין מוגדר להצביע על תיקיית השורש שלכם
3. כאשר מיפוי דומיין מוסר, האינטגרציה תסיר את ה-addon domain מ-cPanel

### תת-דומיינים

עבור התקנות multisite מבוססות תת-דומיין, כאשר אתר חדש נוצר:

1. האינטגרציה מחלצת את חלק התת-דומיין מהדומיין המלא
2. היא שולחת בקשה ל-API של cPanel להוספת התת-דומיין
3. התת-דומיין מוגדר להצביע על תיקיית השורש שלכם

## הערות חשובות

- האינטגרציה משתמשת ב-API2 של cPanel כדי לתקשר עם חשבון ה-cPanel שלכם
- לחשבון ה-cPanel שלכם חייבות להיות הרשאות להוספת addon domains ותת-דומיינים
- חלק מספקי האחסון עשויים להגביל את מספר ה-addon domains או התת-דומיינים שניתן ליצור
- האינטגרציה לא מטפלת בהגדרות DNS; עדיין תצטרכו להפנות את הדומיינים שלכם לכתובת ה-IP של השרת

## פתרון בעיות

### בעיות חיבור ל-API
- ודאו ששם המשתמש והסיסמה ל-cPanel נכונים
- בדקו שכתובת ה-cPanel נכונה ונגישה
- ודאו שלחשבון ה-cPanel שלכם יש את ההרשאות הנדרשות
- נסו להשתמש בכתובת URL מלאה עבור ה-host (למשל, `https://cpanel.yourdomain.com`)

### הדומיין לא נוסף
- בדקו את לוגים של Ultimate Multisite לאיתור הודעות שגיאה
- ודאו שהדומיין לא כבר קיים ב-cPanel
- ודאו שחשבון ה-cPanel שלכם לא הגיע למגבלת ה-addon domains או התת-דומיינים

### בעיות עם תעודות SSL
- האינטגרציה לא מטפלת בהנפקת תעודות SSL
- תצטרכו להשתמש בכלי ה-SSL/TLS של cPanel או בתכונת AutoSSL כדי להנפיק תעודות SSL לדומיינים שלכם
- לחלופין, ניתן להשתמש בשירות כמו Let's Encrypt עם AutoSSL של cPanel
