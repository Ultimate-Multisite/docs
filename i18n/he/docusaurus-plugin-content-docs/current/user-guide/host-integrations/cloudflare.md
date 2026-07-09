---
title: אינטגרציית Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# שילוב Cloudflare

## סקירה כללית
Cloudflare היא רשת אספקת תוכן (CDN) וספקית אבטחה מובילה שעוזרת להגן על אתרים ולהאיץ אותם. שילוב זה מאפשר ניהול דומיינים אוטומטי בין Ultimate Multisite לבין Cloudflare, במיוחד עבור התקנות multisite בתת־דומיינים.

## תכונות
- יצירת תת־דומיינים אוטומטית ב-Cloudflare
- תמיכה בתת־דומיינים דרך פרוקסי
- ניהול רשומות DNS
- תצוגת רשומות DNS משופרת באזור הניהול של Ultimate Multisite

## דרישות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלך:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## הוראות התקנה

### 1. קבלת מפתח API של Cloudflare

1. התחבר אל לוח הבקרה שלך ב-Cloudflare
2. עבור אל "הפרופיל שלי" (לחץ על כתובת האימייל שלך בפינה הימנית העליונה)
3. בחר "API Tokens" מהתפריט
4. צור אסימון API חדש עם ההרשאות הבאות:
   - Zone.Zone: קריאה
   - Zone.DNS: עריכה
5. העתק את אסימון ה-API שלך

### 2. קבלת מזהה ה-Zone שלך

1. בלוח הבקרה שלך ב-Cloudflare, בחר את הדומיין שבו ברצונך להשתמש
2. מזהה ה-Zone גלוי בלשונית "סקירה כללית", בסרגל הצד הימני תחת "API"
3. העתק את מזהה ה-Zone

### 3. הוספת קבועים ל-wp-config.php

הוסף את הקבועים הבאים לקובץ `wp-config.php` שלך:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. הפעלת השילוב

1. באזור הניהול של WordPress, עבור אל Ultimate Multisite > הגדרות
2. נווט ללשונית "מיפוי דומיינים"
3. גלול מטה אל "שילובי מארחים"
4. הפעל את השילוב עם Cloudflare
5. לחץ על "שמור שינויים"

## איך זה עובד

### ניהול תת־דומיינים

כאשר נוצר אתר חדש בהתקנת multisite בתת־דומיינים:

1. השילוב שולח בקשה אל ה-API של Cloudflare כדי להוסיף רשומת CNAME עבור תת־הדומיין
2. תת־הדומיין מוגדר כברירת מחדל לעבור דרך פרוקסי של Cloudflare (ניתן לשנות זאת באמצעות מסננים)
3. כאשר אתר נמחק, השילוב יסיר את תת־הדומיין מ-Cloudflare

### תצוגת רשומות DNS

השילוב משפר את תצוגת רשומות ה-DNS באזור הניהול של Ultimate Multisite על ידי:

1. שליפת רשומות DNS ישירות מ-Cloudflare
2. הצגה אם הרשומות עוברות דרך פרוקסי או לא
3. הצגת מידע נוסף על רשומות ה-DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (נקראה בעבר "Cloudflare for SaaS") היא תכונה של Cloudflare שמאפשרת ללקוחות שלך להשתמש בדומיינים שלהם עם SSL ברשת ה-multisite שלך. זו הגישה המומלצת להתקנות multisite עם מיפוי דומיינים שמשתמשות ב-Cloudflare, מכיוון ש-Cloudflare מנהלת באופן אוטומטי את הנפקת וחידוש תעודות ה-SSL עבור כל דומיין מותאם אישית.

### במה היא שונה מהשילוב הסטנדרטי של Cloudflare

| | שילוב סטנדרטי | Cloudflare Custom Hostnames |
|---|---|---|
| **מטרה** | יצירה אוטומטית של רשומות DNS עבור תת־דומיינים | מאפשרת דומיינים מותאמים אישית (ממופים) עם SSL בניהול Cloudflare |
| **המתאים ביותר עבור** | multisite בתת־דומיינים | multisite עם מיפוי דומיינים |
| **SSL** | מטופל בנפרד | מנוהל אוטומטית על ידי Cloudflare |

### הגדרת Cloudflare Custom Hostnames

1. בלוח הבקרה שלך ב-Cloudflare, פתח את ה-zone עבור הדומיין הראשי שלך.
2. עבור אל **SSL/TLS > Custom Hostnames**.
3. הוסף מקור גיבוי שמצביע אל כתובת ה-IP או שם המארח של השרת שלך.
4. עבור כל דומיין לקוח שממופה ב-Ultimate Multisite, הוסף רשומת Custom Hostname ב-Cloudflare. ניתן להפוך שלב זה לאוטומטי באמצעות ה-API של Cloudflare.
5. Cloudflare מנפיקה ומחדשת תעודות TLS עבור כל שם מארח מותאם אישית באופן אוטומטי לאחר שה-DNS של הלקוח מופנה אל הרשת שלך.

לעיון מלא ב-API, ראה [תיעוד Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note עדכון מונחים
החל מ-Ultimate Multisite v2.6.1, תכונה זו נקראת **Cloudflare Custom Hostnames** בכל הגדרות ותוויות התוסף. גרסאות מוקדמות יותר השתמשו בשם "Cloudflare for SaaS", שהוא שם המוצר הבסיסי של Cloudflare.
:::

## הערות חשובות

בעקבות העדכונים האחרונים של Cloudflare, פרוקסי בתווים כלליים זמין כעת לכל הלקוחות. המשמעות היא ששילוב ה-DNS הסטנדרטי של Cloudflare פחות קריטי להתקנות multisite בתת־דומיינים מבעבר, מכיוון שניתן פשוט להגדיר רשומת DNS בתווים כלליים ב-Cloudflare.

## פתרון בעיות

### בעיות חיבור ל-API
- ודא שאסימון ה-API שלך נכון ושיש לו את ההרשאות הנדרשות
- בדוק שמזהה ה-Zone שלך נכון
- ודא של-Account שלך ב-Cloudflare יש את ההרשאות הנדרשות

### תת־דומיין לא נוסף
- בדוק את יומני Ultimate Multisite עבור הודעות שגיאה כלשהן
- ודא שתת־הדומיין עדיין לא נוסף ל-Cloudflare
- ודא שהתוכנית שלך ב-Cloudflare תומכת במספר רשומות ה-DNS שאתה יוצר

### בעיות פרוקסי
- אם אינך רוצה שתת־דומיינים יעברו דרך פרוקסי, ניתן להשתמש במסנן `wu_cloudflare_should_proxy`
- ייתכן שחלק מהתכונות לא יעבדו כראוי כאשר הן עוברות דרך פרוקסי (לדוגמה, פונקציות ניהול מסוימות של WordPress)
- שקול להשתמש ב-Page Rules של Cloudflare כדי לעקוף את המטמון עבור דפי ניהול
