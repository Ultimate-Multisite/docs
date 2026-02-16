---
title: שפר את אינטגרציית לוח הבקרה
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# אינטגרציה עם לוח הבקרה Enhance

## סקירה כללית
Enhance הוא לוח בקרה מודרני המספק יכולות אוטומציה וניהול אירוח חזקות. האינטגרציה הזו מאפשרת סנכרון דומיינים אוטומטי וניהול תעודות SSL בין Ultimate Multisite ללוח הבקרה של Enhance.

**דיון קשור:** ראו [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) לטיפים מהקהילה ומידע נוסף.

## תכונות
- סנכרון דומיינים אוטומטי כאשר דומיינים ממופים ב-Ultimate Multisite
- הנפקת תעודות SSL אוטומטית דרך LetsEncrypt כאשר ה-DNS מוגדר נכון
- תמיכה בתת-דומיינים לרשתות שפועלות במצב subdomain
- הסרת דומיינים כאשר מיפויים נמחקים
- בדיקת חיבור לאימות פרטי ה-API

## דרישות

### דרישות מערכת
- לוח הבקרה Enhance מותקן ונגיש
- התקנת WordPress Multisite שמתארחת על שרת Enhance או מחוברת אליו
- שרת Apache (Enhance תומך כרגע בתצורות Apache; LiteSpeed Enterprise זמין בעלות מופחתת)

### גישת API
נדרשת גישת מנהל ללוח הבקרה של Enhance כדי ליצור API tokens.

## קבלת פרטי ה-API שלך

### 1. יצירת API Token

1. התחברו ללוח הבקרה של Enhance כמנהלים
2. לחצו על **Settings** בתפריט הניווט
3. נווטו אל **Access Tokens**
4. לחצו על **Create Token**
5. תנו ל-token שם תיאורי (לדוגמה, "Ultimate Multisite Integration")
6. הקצו את התפקיד **System Administrator**
7. לגבי תאריך התפוגה:
   - השאירו ריק אם אתם רוצים שה-token לא יפוג לעולם
   - או הגדירו תאריך תפוגה ספציפי למטרות אבטחה
8. לחצו על **Create**

לאחר היצירה, ה-**Access Token** וה-**Organization ID** יוצגו. **שמרו אותם מיד** כי ה-token יוצג רק פעם אחת.

### 2. קבלת ה-Organization ID

ה-Organization ID מוצג בדף Access Tokens בתיבת מידע כחולה עם התווית "Org ID: {your_id}".

ה-Organization ID הוא בפורמט UUID כמו: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

אפשר גם למצוא את ה-Organization ID של לקוח על ידי:
1. לכו לדף **Customers**
2. לחצו על **Manage customer** עבור הלקוח הרלוונטי
3. הסתכלו על ה-URL - ה-Organization ID הוא התווים האלפאנומריים אחרי `/customers/`

### 3. קבלת ה-Server ID

כדי למצוא את ה-Server ID (נדרש לפעולות דומיין):

1. בלוח הבקרה של Enhance, נווטו אל **Servers**
2. לחצו על השרת שבו ההתקנה של WordPress שלכם פועלת
3. ה-Server ID (בפורמט UUID) יהיה גלוי ב-URL או בפרטי השרת
4. לחילופין, אפשר להשתמש ב-API כדי לקבל רשימת שרתים:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

ה-Server ID הוא בפורמט UUID: `00000000-0000-0000-0000-000000000000`

### 4. קבלת כתובת ה-API

כתובת ה-API שלכם היא כתובת לוח הבקרה של Enhance עם הוספת `/api/`:

```
https://your-enhance-panel.com/api/
```

**חשוב:** הנתיב `/api/` נדרש. טעויות נפוצות כוללות:
- שימוש רק בדומיין ללא `/api/`
- שימוש ב-HTTP במקום ב-HTTPS (HTTPS נדרש לאבטחה)

## הגדרות

### קבועים נדרשים

הוסיפו את הקבועים הבאים לקובץ `wp-config.php` שלכם:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### הגדרה דרך אשף האינטגרציה

1. באזור הניהול של WordPress, לכו אל **Ultimate Multisite** > **Settings**
2. נווטו ללשונית **Integrations**
3. מצאו את **Enhance Control Panel Integration** ולחצו על **Configuration**
4. האשף ידריך אתכם בתהליך ההגדרה:
   - **שלב 1:** הקדמה וסקירת תכונות
   - **שלב 2:** הזנת פרטי ה-API (Token, API URL, Server ID)
   - **שלב 3:** בדיקת החיבור
   - **שלב 4:** סקירה והפעלה

אתם יכולים לבחור:
- לתת לאשף להזריק את הקבועים לקובץ `wp-config.php` באופן אוטומטי
- להעתיק את הגדרות הקבועים ולהוסיף אותם ידנית

## הגדרות WordPress נוספות

על בסיס משוב מהקהילה ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ייתכן שתצטרכו להגדיר את ההגדרות הנוספות הבאות:

### הגדרת .htaccess

אם אתם חווים בעיות עם מיפוי דומיינים:
1. מחקו את קובץ ה-.htaccess המקורי של Enhance
2. החליפו אותו בקובץ ה-.htaccess הסטנדרטי של WordPress Multisite

### קבועי Cookies

הוסיפו את הקבועים הבאים ל-`wp-config.php` כדי להבטיח טיפול נכון ב-cookies בין דומיינים ממופים:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## איך זה עובד

### כאשר דומיין ממופה

1. משתמש ממפה דומיין מותאם אישית ב-Ultimate Multisite (או שאתר חדש נוצר במצב subdomain)
2. האינטגרציה שולחת בקשת POST ל-API של Enhance: `/servers/{server_id}/domains`
3. Enhance מוסיף את הדומיין להגדרות השרת שלכם
4. כאשר ה-DNS מצביע לשרת שלכם, Enhance מנפיק אוטומטית תעודת SSL דרך LetsEncrypt
5. הדומיין הופך פעיל עם HTTPS

### כאשר דומיין מוסר

1. מיפוי דומיין נמחק ב-Ultimate Multisite
2. האינטגרציה שולחת שאילתה ל-Enhance כדי למצוא את ה-ID של הדומיין
3. בקשת DELETE נשלחת אל: `/servers/{server_id}/domains/{domain_id}`
4. Enhance מסיר את הדומיין מהגדרות השרת שלכם

### בדיקת DNS ו-SSL

Ultimate Multisite כולל בדיקות DNS ו-SSL מובנות:
- אפשר להגדיר את מרווח הבדיקה ב-**Domain Mapping Settings** (ברירת מחדל: 300 שניות/5 דקות)
- המערכת תאמת את התפשטות ה-DNS לפני שתסמן דומיין כפעיל
- תוקף תעודת SSL נבדק אוטומטית
- Enhance מטפל בהנפקת SSL באופן אוטומטי, כך שאין צורך בהגדרת SSL ידנית

## אימות ההגדרה

### בדיקת החיבור

1. באשף האינטגרציה, השתמשו בשלב **Test Connection**
2. התוסף ינסה לקבל רשימת דומיינים בשרת שלכם
3. הודעת הצלחה מאשרת:
   - פרטי ה-API נכונים
   - כתובת ה-API נגישה
   - ה-Server ID תקין
   - ההרשאות מוגדרות כראוי

### לאחר מיפוי דומיין

1. מפו דומיין לבדיקה ב-Ultimate Multisite
2. בדקו את הלוגים של Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. וודאו בלוח הבקרה של Enhance שהדומיין נוסף:
   - לכו אל **Servers** > **Your Server** > **Domains**
   - הדומיין החדש אמור להופיע ברשימה
4. לאחר שה-DNS מתפשט, וודאו ש-SSL הונפק אוטומטית

## פתרון בעיות

### בעיות חיבור API

**שגיאה: "Failed to connect to Enhance API"**
- וודאו ש-`WU_ENHANCE_API_URL` כולל `/api/` בסוף
- ודאו שאתם משתמשים ב-HTTPS, לא HTTP
- בדקו שלוח הבקרה של Enhance נגיש משרת ה-WordPress שלכם
- וודאו שאין כללי firewall שחוסמים את החיבור

**שגיאה: "Enhance API Token not found"**
- ודאו ש-`WU_ENHANCE_API_TOKEN` מוגדר ב-`wp-config.php`
- וודאו שה-token לא נמחק או פג ב-Enhance
- בדקו אם יש שגיאות הקלדה בערך ה-token

**שגיאה: "Server ID is not configured"**
- וודאו ש-`WU_ENHANCE_SERVER_ID` מוגדר ב-`wp-config.php`
- ודאו שה-Server ID הוא בפורמט UUID תקין
- אשרו שהשרת קיים בלוח הבקרה של Enhance

### דומיין לא נוסף

**בדקו את הלוגים:**
1. לכו אל **Ultimate Multisite** > **Logs**
2. סננו לפי **integration-enhance**
3. חפשו הודעות שגיאה המציינות את הבעיה

**סיבות נפוצות:**
- פורמט שם דומיין לא תקין
- הדומיין כבר קיים ב-Enhance
- הרשאות API לא מספיקות (ודאו שה-token בעל תפקיד System Administrator)
- ה-Server ID לא תואם לשרת בפועל ב-Enhance

### בעיות תעודת SSL

**SSL לא מונפק:**
- וודאו שה-DNS מצביע לכתובת ה-IP של השרת שלכם
- בדקו שהדומיין מתפרש נכון: `nslookup yourdomain.com`
- Enhance דורש שה-DNS יתפרש לפני שהוא יכול להנפיק SSL
- הנפקת SSL לוקחת בדרך כלל 5-10 דקות לאחר התפשטות ה-DNS
- בדקו את הלוגים של לוח הבקרה של Enhance לשגיאות ספציפיות ל-SSL

**פתרון בעיות SSL ידני ב-Enhance:**
1. לכו אל **Servers** > **Your Server** > **Domains**
2. מצאו את הדומיין שלכם ובדקו את סטטוס ה-SSL
3. אפשר להפעיל הנפקת SSL ידנית אם צריך

### מרווח בדיקת DNS

אם דומיינים או תעודות SSL לוקחים יותר מדי זמן להפעלה:
1. לכו אל **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. מצאו את ההגדרה **DNS Check Interval**
3. שנו מברירת המחדל של 300 שניות לערך נמוך יותר (מינימום: 10 שניות)
4. **הערה:** מרווחים נמוכים יותר משמעותם בדיקות תכופות יותר אבל עומס גבוה יותר על השרת

### שגיאות אימות

**שגיאות HTTP 401/403:**
- צרו מחדש את ה-API token ב-Enhance
- וודאו שה-token בעל תפקיד **System Administrator**
- בדקו שה-token לא פג
- ודאו שאתם משתמשים ב-Organization ID הנכון (למרות שבדרך כלל הוא לא נדרש ב-URL)

### ניתוח לוגים

הפעילו לוגים מפורטים:
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

אחר כך בדקו את הלוגים ב:
- לוגים של Ultimate Multisite: **Ultimate Multisite** > **Logs**
- לוג debug של WordPress: `wp-content/debug.log`
- לוגים של לוח Enhance: זמינים בממשק הניהול של Enhance

## מידע על ה-API

### אימות
כל בקשות ה-API משתמשות באימות Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### נקודות קצה נפוצות

**רשימת שרתים:**
```
GET /servers
```

**רשימת דומיינים בשרת:**
```
GET /servers/{server_id}/domains
```

**הוספת דומיין:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**מחיקת דומיין:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### תיעוד API מלא
תיעוד API מלא: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## שיטות עבודה מומלצות

### אבטחה
- **לעולם אל תשמרו API tokens ב-version control**
- אחסנו tokens ב-`wp-config.php` שצריך להיות מוחרג מ-Git
- השתמשו ב-tokens עם הרשאות מתאימות (System Administrator לאינטגרציה מלאה)
- הגדירו תאריכי תפוגה ל-tokens בסביבות production
- החליפו tokens מעת לעת

### ביצועים
- השתמשו במרווח בדיקת DNS ברירת המחדל (300 שניות) כדי להימנע מקריאות API מיותרות
- עקבו אחר משאבי שרת Enhance בעת הפעלת פעולות דומיין בקנה מידה גדול
- שקלו לפזר הוספות דומיינים אם ממפים הרבה דומיינים בבת אחת

### ניטור
- בדקו באופן קבוע את לוגי Ultimate Multisite לשגיאות אינטגרציה
- הגדירו ניטור להוספות דומיינים שנכשלו
- וודאו שתעודות SSL מונפקות כראוי
- עקבו אחר קיבולת שרת Enhance ומגבלות דומיינים

## משאבים נוספים

- **תיעוד רשמי של Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **תיעוד API של Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **פורום קהילת Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **דיון ב-GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **מדריך מיפוי דומיינים של Ultimate Multisite:** ראו דף ויקי "How to Configure Domain Mapping v2"

## תמיכה

אם אתם נתקלים בבעיות:
1. בדקו את סעיף פתרון הבעיות למעלה
2. עיינו בלוגים של Ultimate Multisite
3. התייעצו ב-[GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. פנו לתמיכה של Enhance לבעיות ספציפיות ללוח הבקרה
5. צרו דיון חדש עם לוגי שגיאות מפורטים לקבלת עזרה מהקהילה

## הערות

- האינטגרציה הזו מטפלת רק ב-domain aliases; Enhance מנהל SSL באופן אוטומטי
- האינטגרציה תומכת גם במיפויי דומיינים מותאמים אישית וגם באתרים מבוססי subdomain
- יצירה אוטומטית של subdomain www ניתנת להגדרה בהגדרות Domain Mapping
- Enhance תומך כרגע בתצורות Apache (LiteSpeed Enterprise זמין)
- הסרת דומיין מ-Ultimate Multisite תסיר את הדומיין מ-Enhance אך עשויה לא למחוק תעודות SSL משויכות מיד
