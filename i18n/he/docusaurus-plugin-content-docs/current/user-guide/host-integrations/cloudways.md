---
title: אינטגרציה עם Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# אינטגרציית Cloudways

## סקירה כללית
Cloudways היא פלטפורמת אחסון ענן מנוהלת שמאפשרת לך לפרוס אתרי WordPress אצל ספקי ענן שונים כמו DigitalOcean, AWS, Google Cloud ועוד. אינטגרציה זו מאפשרת סנכרון דומיינים אוטומטי וניהול תעודות SSL בין Ultimate Multisite ו-Cloudways.

## תכונות
- סנכרון דומיינים אוטומטי
- ניהול תעודות SSL
- תמיכה בדומיינים נוספים
- אימות DNS עבור תעודות SSL

## דרישות
יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלך:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

באופן אופציונלי, אפשר גם להגדיר:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## הוראות הגדרה

### 1. קבלת פרטי הגישה ל-API של Cloudways

1. היכנס ללוח הבקרה של Cloudways שלך
2. עבור אל "Account" > "מפתחות API"
3. צור מפתח API אם עדיין אין לך אחד
4. העתק את האימייל ומפתח ה-API שלך

### 2. קבלת מזהי השרת והיישום שלך

1. בלוח הבקרה של Cloudways שלך, עבור אל "שרתים"
2. בחר את השרת שבו מתארח WordPress multisite שלך
3. מזהה השרת גלוי ב-URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. עבור אל "יישומים" ובחר את יישום ה-WordPress שלך
5. מזהה היישום גלוי ב-URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. הוספת קבועים ל-wp-config.php

הוסף את הקבועים הבאים לקובץ `wp-config.php` שלך:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

אם יש לך דומיינים **חיצוניים** נוספים (מחוץ לרשת ה-multisite שלך) שתמיד צריכים להישמר ברשימת הכינויים של Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning אל תכלול את ה-wildcard של הרשת שלך
**אל** תוסיף את `*.your-network.com` (או כל תבנית תת-דומיין של הרשת שלך) אל
`WU_CLOUDWAYS_EXTRA_DOMAINS`. ראה [חשוב — מלכודת SSL עם wildcard](#important--wildcard-ssl-pitfall)
בהמשך כדי להבין למה זה מונע הנפקת תעודות SSL לכל דייר בנפרד.
:::

### 4. הפעלת האינטגרציה

1. בניהול WordPress שלך, עבור אל Ultimate Multisite > הגדרות
2. נווט ללשונית "מיפוי דומיינים"
3. גלול מטה אל "אינטגרציות אחסון"
4. הפעל את האינטגרציה של Cloudways
5. לחץ על "שמור שינויים"

## איך זה עובד

### סנכרון דומיינים

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה מאחזרת את כל הדומיינים הממופים כעת
2. היא מוסיפה את הדומיין החדש לרשימה (יחד עם גרסת www אם רלוונטי)
3. היא שולחת את הרשימה המלאה אל Cloudways דרך ה-API
4. Cloudways מעדכנת את כינויי הדומיין עבור היישום שלך

הערה: ה-API של Cloudways דורש לשלוח את רשימת הדומיינים המלאה בכל פעם, ולא רק להוסיף או להסיר דומיינים בודדים.

### ניהול תעודות SSL

לאחר שהדומיינים מסונכרנים:

1. האינטגרציה בודקת לאילו דומיינים יש רשומות DNS תקפות שמצביעות לשרת שלך
2. היא שולחת בקשה אל Cloudways להתקנת תעודות SSL של Let's Encrypt עבור הדומיינים האלה
3. Cloudways מטפלת בהנפקה ובהתקנה של תעודות ה-SSL

האינטגרציה תמיד מבקשת תעודות Let's Encrypt **סטנדרטיות** (לא wildcard) מ-
Cloudways. אם מסופקת תבנית wildcard ב-`WU_CLOUDWAYS_EXTRA_DOMAINS`, התחילית
`*.` מוסרת לפני בקשת ה-SSL — ה-wildcard עצמו לעולם אינו מותקן על ידי
האינטגרציה הזו. כדי להשתמש בתעודת wildcard ב-Cloudways תצטרך להתקין אותה
ידנית, אבל פעולה כזו חוסמת הנפקת Let's Encrypt לכל דומיין עבור דומיינים מותאמים אישית ממופים
(ראה את המלכודת בהמשך).

## דומיינים נוספים

הקבוע `WU_CLOUDWAYS_EXTRA_DOMAINS` מאפשר לך לציין דומיינים **חיצוניים**
נוספים שתמיד צריכים להישמר ברשימת הכינויים של יישום Cloudways. השתמש בו עבור:

- דומיינים חיצוניים שאינם מנוהלים על ידי Ultimate Multisite (למשל אתר שיווק נפרד שחולק את אותו יישום Cloudways)
- דומיינים חונים או דומיינים לסביבת staging שברצונך לשמור ברשימת כינויי היישום

**אל** תשתמש בקבוע הזה עבור wildcard של תת-דומיינים ברשת שלך
(למשל `*.your-network.com`). ראה את מלכודת SSL עם wildcard בהמשך.

## חשוב — מלכודת SSL עם Wildcard

טעות נפוצה בעת ביצוע ההגדרה המוגדרת כברירת מחדל של Cloudways היא להוסיף wildcard כגון
`*.your-network.com` אל `WU_CLOUDWAYS_EXTRA_DOMAINS`, או להתקין ידנית תעודת SSL
עם wildcard של Cloudways עבור אותו wildcard.

**אם תעשה זאת, Cloudways תסרב להנפיק תעודות Let's Encrypt עבור הדומיינים המותאמים אישית
לכל דייר ש-Ultimate Multisite ממפה.** Cloudways מחליפה את תעודת ה-SSL הפעילה
ביישום בכל פעם, ותעודת wildcard קיימת מראש ביישום
חוסמת את הנפקת Let's Encrypt לכל דומיין שהאינטגרציה מסתמכת עליה.

### הגדרת SSL מומלצת ב-Cloudways עבור רשת Ultimate Multisite

1. בלשונית **SSL Certificate** של יישום Cloudways, התקן תעודת **Let's Encrypt
   סטנדרטית** שמכסה רק את `your-network.com` ואת `www.your-network.com`
   — **לא** wildcard.
2. **אל** תשים את `*.your-network.com` (או כל תבנית תת-דומיין של הרשת שלך) ב-
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. שמור את הקבוע הזה לדומיינים **חיצוניים** בלבד.
3. צור את ה-wildcard של תת-הדומיין לכל דייר ברמת ה-**DNS** בלבד (רשומת `A` עבור
   `*.your-network.com` שמצביעה לכתובת ה-IP של שרת Cloudways שלך) כדי שתתי-אתרים ייפתרו. SSL
   עבור דומיינים מותאמים אישית ממופים בודדים מונפק לאחר מכן אוטומטית על ידי האינטגרציה
   דרך Let's Encrypt.

אם הדומיינים המותאמים של הדיירים שלך תקועים ללא SSL, בדוק את לשונית ה-SSL של Cloudways. אם
אישור wildcard פעיל שם, הסר אותו, הנפק מחדש אישור Let's Encrypt
סטנדרטי עבור דומיין הרשת הראשי בלבד, והסר כל רשומת wildcard מתוך
`WU_CLOUDWAYS_EXTRA_DOMAINS`. לאחר מכן הפעל מחדש מיפוי דומיין (או המתן למיפוי הבא)
והאינטגרציה תתחיל להנפיק שוב אישורים לכל דומיין.

## פתרון בעיות

### בעיות חיבור API
- ודא שהאימייל ומפתח ה-API שלך נכונים
- בדוק שמזהי השרת והיישום שלך נכונים
- ודא שלחשבון Cloudways שלך יש את ההרשאות הנדרשות

### בעיות אישורי SSL
- Cloudways דורשת שלדומיינים יהיו רשומות DNS תקפות שמצביעות לשרת שלך לפני הנפקת אישורי SSL
- האינטגרציה מאמתת רשומות DNS לפני בקשת אישורי SSL
- אם אישורי SSL אינם מונפקים, בדוק שהדומיינים שלך מצביעים כראוי לכתובת ה-IP של השרת שלך
- **דומיינים מותאמים לכל דייר תקועים ללא SSL?** בדוק את לשונית אישור ה-SSL של יישום Cloudways. אם אישור wildcard (שהותקן ידנית, או מכסה את `*.your-network.com`) פעיל, Cloudways לא תנפיק אישורי Let's Encrypt עבור דומיינים מותאמים שמופו בנפרד. החלף אותו באישור Let's Encrypt סטנדרטי שמכסה רק את דומיין הרשת הראשי (`your-network.com`, `www.your-network.com`) והסר כל רשומת wildcard מתוך `WU_CLOUDWAYS_EXTRA_DOMAINS`. לאחר מכן הפעל מחדש מיפוי דומיין (או המתן למיפוי הבא) והאינטגרציה תבקש אישורים לכל דומיין.

### הדומיין לא נוסף
- בדוק את יומני Ultimate Multisite עבור הודעות שגיאה כלשהן
- ודא שהדומיין לא כבר נוסף ל-Cloudways
- ודא שתוכנית Cloudways שלך תומכת במספר הדומיינים שאתה מוסיף
