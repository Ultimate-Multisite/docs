---
title: Cloudflare Integration
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# אינטגרציה עם Cloudflare

## סקירה כללית
Cloudflare היא ספקית מובילה של רשת אספקת תוכן (CDN) ושירותי אבטחה, המסייעת להגן על אתרים ולהאיץ אותם. אינטגרציה זו מאפשרת ניהול אוטומטי של דומיינים בין Ultimate Multisite ל-Cloudflare, במיוחד עבור התקנות multisite מבוססות תת-דומיין.

## תכונות
- יצירה אוטומטית של תת-דומיינים ב-Cloudflare
- תמיכה בתת-דומיינים עם proxy
- ניהול רשומות DNS
- תצוגה משופרת של רשומות DNS בממשק הניהול של Ultimate Multisite

## דרישות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלכם:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## הוראות הגדרה

### 1. קבלת מפתח ה-API של Cloudflare

1. התחברו ללוח הבקרה של Cloudflare
2. עברו ל-"My Profile" (לחצו על כתובת האימייל שלכם בפינה הימנית העליונה)
3. בחרו "API Tokens" מהתפריט
4. צרו API token חדש עם ההרשאות הבאות:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. העתיקו את ה-API token

### 2. קבלת ה-Zone ID

1. בלוח הבקרה של Cloudflare, בחרו את הדומיין שברצונכם להשתמש בו
2. ה-Zone ID מוצג בלשונית "Overview", בסרגל הצד הימני תחת "API"
3. העתיקו את ה-Zone ID

### 3. הוספת הקבועים ל-wp-config.php

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. הפעלת האינטגרציה

1. בממשק הניהול של WordPress, עברו אל Ultimate Multisite > Settings
2. נווטו ללשונית "Domain Mapping"
3. גללו למטה אל "Host Integrations"
4. הפעילו את אינטגרציית Cloudflare
5. לחצו על "Save Changes"

## איך זה עובד

### ניהול תת-דומיינים

כאשר אתר חדש נוצר בהתקנת multisite מבוססת תת-דומיין:

1. האינטגרציה שולחת בקשה ל-API של Cloudflare להוספת רשומת CNAME עבור תת-הדומיין
2. תת-הדומיין מוגדר כברירת מחדל לעבור דרך ה-proxy של Cloudflare (ניתן לשנות זאת באמצעות filters)
3. כאשר אתר נמחק, האינטגרציה תסיר את תת-הדומיין מ-Cloudflare

### תצוגת רשומות DNS

האינטגרציה משפרת את תצוגת רשומות ה-DNS בממשק הניהול של Ultimate Multisite על ידי:

1. שליפת רשומות DNS ישירות מ-Cloudflare
2. הצגה האם רשומות עוברות דרך proxy או לא
3. הצגת מידע נוסף על רשומות ה-DNS

## הערות חשובות

בעקבות עדכונים אחרונים של Cloudflare, תמיכה ב-proxy עבור wildcard זמינה כעת לכל הלקוחות. משמעות הדבר היא שאינטגרציית Cloudflare פחות קריטית להתקנות multisite מבוססות תת-דומיין מאשר בעבר, מכיוון שניתן פשוט להגדיר רשומת DNS מסוג wildcard ב-Cloudflare.

## פתרון בעיות

### בעיות חיבור ל-API
- ודאו שה-API token שלכם נכון ויש לו את ההרשאות הנדרשות
- בדקו שה-Zone ID נכון
- ודאו שלחשבון ה-Cloudflare שלכם יש את ההרשאות הנדרשות

### תת-דומיין לא נוסף
- בדקו את הלוגים של Ultimate Multisite לאיתור הודעות שגיאה
- ודאו שתת-הדומיין לא נוסף כבר ל-Cloudflare
- ודאו שתוכנית ה-Cloudflare שלכם תומכת במספר רשומות ה-DNS שאתם יוצרים

### בעיות proxy
- אם אינכם רוצים שתת-דומיינים יעברו דרך proxy, תוכלו להשתמש ב-filter בשם `wu_cloudflare_should_proxy`
- חלק מהתכונות עשויות לא לעבוד כראוי כאשר הן עוברות דרך proxy (למשל, פונקציות מסוימות בממשק הניהול של WordPress)
- שקלו להשתמש ב-Page Rules של Cloudflare כדי לעקוף את ה-cache עבור דפי ניהול
