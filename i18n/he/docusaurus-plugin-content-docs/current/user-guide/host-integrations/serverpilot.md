---
title: שילוב ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# אינטגרציה עם ServerPilot

## סקירה כללית
ServerPilot הוא שירות ענן לאירוח אתרי WordPress ואתרי PHP אחרים על שרתים ב-DigitalOcean, Amazon, Google או כל ספק שרתים אחר. אינטגרציה זו מאפשרת סנכרון אוטומטי של דומיינים וניהול תעודות SSL בין Ultimate Multisite ל-ServerPilot.

## תכונות
- סנכרון דומיינים אוטומטי
- ניהול תעודות SSL עם Let's Encrypt
- חידוש אוטומטי של תעודות SSL

## דרישות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלכם:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## הוראות הגדרה

### 1. קבלת פרטי ה-API של ServerPilot

1. היכנסו ללוח הבקרה של ServerPilot
2. עברו אל "Account" > "API"
3. צרו מפתח API חדש אם אין לכם כבר
4. העתיקו את ה-Client ID ואת מפתח ה-API

### 2. קבלת ה-App ID

1. בלוח הבקרה של ServerPilot, עברו אל "Apps"
2. בחרו את האפליקציה שבה מאורח ה-WordPress multisite שלכם
3. ה-App ID מופיע בכתובת ה-URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. הוספת קבועים לקובץ wp-config.php

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. הפעלת האינטגרציה

1. באזור הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את אינטגרציית ServerPilot
5. לחצו על "Save Changes"

## איך זה עובד

### סנכרון דומיינים

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה מושכת את רשימת הדומיינים הנוכחית מ-ServerPilot
2. היא מוסיפה את הדומיין החדש לרשימה (יחד עם גרסת www אם רלוונטי)
3. היא שולחת את הרשימה המעודכנת ל-ServerPilot דרך ה-API
4. ServerPilot מעדכן את רשימת הדומיינים עבור האפליקציה שלכם

### ניהול תעודות SSL

לאחר סנכרון הדומיינים:

1. האינטגרציה מפעילה אוטומטית AutoSSL עבור האפליקציה שלכם
2. ServerPilot מטפל בהנפקה והתקנה של תעודת SSL באמצעות Let's Encrypt
3. ServerPilot גם מטפל בחידוש אוטומטי של תעודות SSL

## אימות תעודות SSL

האינטגרציה מוגדרת להגדיל את מספר ניסיונות אימות תעודות SSL עבור ServerPilot, מכיוון שייתכן שייקח זמן עד ש-ServerPilot ינפיק ויתקין תעודות SSL. כברירת מחדל, היא תנסה עד 5 פעמים, אך ניתן לשנות זאת באמצעות filters.

## פתרון בעיות

### בעיות חיבור ל-API
- ודאו שה-Client ID ומפתח ה-API שלכם נכונים
- בדקו שה-App ID נכון
- ודאו שלחשבון ה-ServerPilot שלכם יש את ההרשאות הנדרשות

### בעיות בתעודות SSL
- ServerPilot דורש שלדומיינים יהיו רשומות DNS תקינות המצביעות לשרת שלכם לפני הנפקת תעודות SSL
- אם תעודות SSL לא מונפקות, בדקו שהדומיינים שלכם מצביעים כראוי לכתובת ה-IP של השרת שלכם
- ייתכן שייקח זמן עד ש-ServerPilot ינפיק ויתקין תעודות SSL (בדרך כלל 5-15 דקות)

### דומיין לא נוסף
- בדקו ביומני Ultimate Multisite אם יש הודעות שגיאה
- ודאו שהדומיין לא נוסף כבר ל-ServerPilot
- ודאו שתוכנית ה-ServerPilot שלכם תומכת במספר הדומיינים שאתם מוסיפים

### הסרת דומיין
- נכון לעכשיו, ה-API של ServerPilot לא מספק דרך להסיר דומיינים בודדים
- כאשר מיפוי דומיין מוסר ב-Ultimate Multisite, האינטגרציה תעדכן את רשימת הדומיינים ב-ServerPilot כך שלא תכלול את הדומיין שהוסר
