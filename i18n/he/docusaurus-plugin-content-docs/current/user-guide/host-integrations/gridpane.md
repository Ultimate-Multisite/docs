---
title: אינטגרציית GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# אינטגרציה עם GridPane

## סקירה כללית
GridPane היא לוח בקרה לאירוח WordPress שתוכנן במיוחד עבור אנשי מקצוע רציניים בתחום WordPress. האינטגרציה הזו מאפשרת סנכרון אוטומטי של דומיינים וניהול תעודות SSL בין Ultimate Multisite לבין GridPane.

## תכונות
- סנכרון אוטומטי של דומיינים
- ניהול תעודות SSL
- הגדרה אוטומטית של קבוע SUNRISE

## דרישות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלכם:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## הוראות הגדרה

### 1. קבלת פרטי ה-API של GridPane

1. התחברו ללוח הבקרה של GridPane
2. עברו אל "Settings" > "API"
3. צרו מפתח API אם אין לכם כזה עדיין
4. העתיקו את מפתח ה-API

### 2. קבלת מזהי השרת והאתר

1. בלוח הבקרה של GridPane, עברו אל "Servers"
2. בחרו את השרת שבו מאוחסן אתר ה-WordPress multisite שלכם
3. רשמו את מזהה השרת (Server ID) - ניתן לראות אותו בכתובת ה-URL או בדף פרטי השרת
4. עברו אל "Sites" ובחרו את אתר ה-WordPress שלכם
5. רשמו את מזהה האתר (Site ID) - ניתן לראות אותו בכתובת ה-URL או בדף פרטי האתר

### 3. הוספת קבועים ל-wp-config.php

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. הפעלת האינטגרציה

1. באזור הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את אינטגרציית GridPane
5. לחצו על "Save Changes"

## איך זה עובד

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה שולחת בקשה ל-API של GridPane להוספת הדומיין לאתר שלכם
2. GridPane מטפל אוטומטית בהנפקת תעודת SSL
3. כאשר מיפוי דומיין מוסר, האינטגרציה תסיר את הדומיין מ-GridPane

האינטגרציה גם מטפלת אוטומטית בקבוע SUNRISE בקובץ wp-config.php, שנדרש כדי שמיפוי הדומיינים יעבוד כראוי.

## ניהול קבוע SUNRISE

תכונה ייחודית של אינטגרציית GridPane היא שהיא מחזירה אוטומטית את קבוע SUNRISE ב-wp-config.php למצבו המקורי, כדי למנוע התנגשויות עם מערכת מיפוי הדומיינים של GridPane עצמה. זה מבטיח ששתי המערכות יכולות לעבוד יחד ללא בעיות.

## פתרון בעיות

### בעיות בחיבור ל-API
- ודאו שמפתח ה-API שלכם נכון
- בדקו שמזהי השרת והאתר נכונים
- ודאו שלחשבון GridPane שלכם יש את ההרשאות הנדרשות

### בעיות בתעודות SSL
- ייתכן ש-GridPane יצטרך זמן מה להנפקת תעודות SSL
- ודאו שהדומיינים שלכם מצביעים כראוי לכתובת ה-IP של השרת
- בדקו את הגדרות ה-SSL של GridPane עבור האתר שלכם

### הדומיין לא נוסף
- בדקו את יומני Ultimate Multisite לאיתור הודעות שגיאה
- ודאו שהדומיין לא נוסף כבר ל-GridPane
- ודאו שרשומות ה-DNS של הדומיין מוגדרות כראוי
