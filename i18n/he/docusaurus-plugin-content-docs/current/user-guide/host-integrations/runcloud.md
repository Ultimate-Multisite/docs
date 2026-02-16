---
title: שילוב RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# אינטגרציה עם RunCloud

## סקירה כללית
RunCloud היא פלטפורמה מבוססת ענן לניהול שרתים, המאפשרת להתקין ולנהל בקלות יישומי ווב על שרתי הענן שלכם. אינטגרציה זו מאפשרת סנכרון אוטומטי של דומיינים וניהול תעודות SSL בין Ultimate Multisite לבין RunCloud.

## תכונות
- סנכרון דומיינים אוטומטי
- ניהול תעודות SSL
- הסרת דומיינים כאשר מיפויים נמחקים

## דרישות מקדימות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלכם:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## הוראות הגדרה

### 1. קבלת פרטי ה-API של RunCloud

1. היכנסו ללוח הבקרה של RunCloud
2. עברו ל-"User Profile" (לחצו על תמונת הפרופיל בפינה הימנית העליונה)
3. בחרו "API" מהתפריט
4. לחצו על "Generate API Key" אם עדיין אין לכם מפתח
5. העתיקו את ה-API Key וה-API Secret

### 2. קבלת מזהי השרת והאפליקציה

1. בלוח הבקרה של RunCloud, עברו ל-"Servers"
2. בחרו את השרת שבו מותקן אתר ה-WordPress multisite שלכם
3. מזהה השרת מופיע בכתובת ה-URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. עברו ל-"Web Applications" ובחרו את אפליקציית ה-WordPress שלכם
5. מזהה האפליקציה מופיע בכתובת ה-URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. הוספת הקבועים לקובץ wp-config.php

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. הפעלת האינטגרציה

1. בממשק הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את האינטגרציה עם RunCloud
5. לחצו על "Save Changes"

## איך זה עובד

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה שולחת בקשה ל-API של RunCloud להוסיף את הדומיין לאפליקציה שלכם
2. אם הדומיין נוסף בהצלחה, האינטגרציה גם תפרוס מחדש את תעודות ה-SSL
3. כאשר מיפוי דומיין מוסר, האינטגרציה תסיר את הדומיין מ-RunCloud

בהתקנות מבוססות תת-דומיין, האינטגרציה תטפל אוטומטית ביצירת תת-דומיינים ב-RunCloud כאשר אתרים חדשים מתווספים לרשת שלכם.

## פתרון בעיות

### בעיות חיבור ל-API
- ודאו שפרטי ה-API שלכם נכונים
- בדקו שמזהי השרת והאפליקציה נכונים
- ודאו שלחשבון ה-RunCloud שלכם יש את ההרשאות הנדרשות

### בעיות עם תעודות SSL
- ייתכן ש-RunCloud יזדקק לזמן מה להנפקת תעודות SSL
- ודאו שהדומיינים שלכם מכוונים כראוי לכתובת ה-IP של השרת
- בדקו את הגדרות ה-SSL של RunCloud עבור האפליקציה שלכם

### הדומיין לא נוסף
- בדקו את יומני Ultimate Multisite לאיתור הודעות שגיאה
- ודאו שהדומיין לא נוסף כבר ל-RunCloud
- ודאו שתוכנית ה-RunCloud שלכם תומכת במספר דומיינים
