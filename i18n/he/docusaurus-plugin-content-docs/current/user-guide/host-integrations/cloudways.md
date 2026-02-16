---
title: Cloudways אינטגרציה
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# אינטגרציה עם Cloudways

## סקירה כללית
Cloudways היא פלטפורמת אירוח ענן מנוהלת שמאפשרת לכם להעלות אתרי WordPress על ספקי ענן שונים כמו DigitalOcean, AWS, Google Cloud ועוד. האינטגרציה הזו מאפשרת סנכרון דומיינים אוטומטי וניהול תעודות SSL בין Ultimate Multisite לבין Cloudways.

## תכונות
- סנכרון דומיינים אוטומטי
- ניהול תעודות SSL
- תמיכה בדומיינים נוספים
- אימות DNS לתעודות SSL

## דרישות
יש להגדיר את הקבועים הבאים בקובץ ה-`wp-config.php` שלכם:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

בנוסף, ניתן להגדיר באופן אופציונלי:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## הוראות הגדרה

### 1. קבלת פרטי ה-API של Cloudways

1. התחברו ל-dashboard של Cloudways
2. עברו אל "Account" > "API Keys"
3. צרו מפתח API אם אין לכם עדיין
4. העתיקו את כתובת האימייל ומפתח ה-API

### 2. קבלת מזהי השרת והאפליקציה

1. ב-dashboard של Cloudways, עברו אל "Servers"
2. בחרו את השרת שעליו מאורח ה-WordPress multisite שלכם
3. מזהה השרת מופיע ב-URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. עברו אל "Applications" ובחרו את אפליקציית ה-WordPress שלכם
5. מזהה האפליקציה מופיע ב-URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. הוספת הקבועים ל-wp-config.php

הוסיפו את הקבועים הבאים לקובץ ה-`wp-config.php` שלכם:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

אם יש לכם דומיינים נוספים שצריכים להיכלל תמיד:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. הפעלת האינטגרציה

1. באזור הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את אינטגרציית Cloudways
5. לחצו על "Save Changes"

## איך זה עובד

### סנכרון דומיינים

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה מאחזרת את כל הדומיינים הממופים כרגע
2. היא מוסיפה את הדומיין החדש לרשימה (יחד עם גרסת www אם רלוונטי)
3. היא שולחת את הרשימה המלאה ל-Cloudways דרך ה-API
4. Cloudways מעדכנת את כינויי הדומיין עבור האפליקציה שלכם

הערה: ה-API של Cloudways דורש שליחת הרשימה המלאה של הדומיינים בכל פעם, ולא רק הוספה או הסרה של דומיינים בודדים.

### ניהול תעודות SSL

לאחר סנכרון הדומיינים:

1. האינטגרציה בודקת אילו דומיינים מכילים רשומות DNS תקינות שמצביעות על השרת שלכם
2. היא שולחת בקשה ל-Cloudways להתקין תעודות SSL של Let's Encrypt עבור אותם דומיינים
3. Cloudways מטפלת בהנפקה ובהתקנה של תעודות ה-SSL

## דומיינים נוספים

הקבוע `WU_CLOUDWAYS_EXTRA_DOMAINS` מאפשר לכם לציין דומיינים נוספים שיכללו תמיד בעת הסנכרון עם Cloudways. זה שימושי עבור:

- דומיינים שלא מנוהלים על ידי Ultimate Multisite
- דומיינים עם wildcard (למשל, `*.example.com`)
- דומיינים לפיתוח או staging

## פתרון בעיות

### בעיות חיבור ל-API
- ודאו שכתובת האימייל ומפתח ה-API נכונים
- בדקו שמזהי השרת והאפליקציה נכונים
- ודאו שלחשבון ה-Cloudways שלכם יש את ההרשאות הנדרשות

### בעיות בתעודות SSL
- Cloudways דורשת שלדומיינים יהיו רשומות DNS תקינות שמצביעות על השרת שלכם לפני הנפקת תעודות SSL
- האינטגרציה מאמתת רשומות DNS לפני בקשת תעודות SSL
- אם תעודות SSL לא מונפקות, בדקו שהדומיינים שלכם מצביעים כראוי על כתובת ה-IP של השרת

### דומיין לא נוסף
- בדקו את הלוגים של Ultimate Multisite לאיתור הודעות שגיאה
- ודאו שהדומיין לא כבר נוסף ל-Cloudways
- ודאו שתוכנית ה-Cloudways שלכם תומכת במספר הדומיינים שאתם מוסיפים
