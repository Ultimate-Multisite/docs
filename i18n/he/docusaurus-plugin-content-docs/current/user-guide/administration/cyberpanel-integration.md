---
title: שילוב CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# אינטגרציה עם CyberPanel {#cyberpanel-integration}

מדריך זה מסביר כיצד להגדיר את אינטגרציית Ultimate Multisite עם CyberPanel, כך שדומיינים ממופים ברשת שלך יתווספו (ויוסרו) אוטומטית כ-Virtual Hosts ב-CyberPanel, עם אפשרות אופציונלית של הקצאת SSL אוטומטית באמצעות Let's Encrypt.

## מה זה עושה {#what-it-does}

- כאשר דומיין ממופה ב-Ultimate Multisite, האינטגרציה קוראת ל-API של CyberPanel כדי ליצור Virtual Host עבור הדומיין הזה.
- כאשר מוחק מיפוי דומיין, האינטגרציה קוראת ל-API כדי למחוק את ה-Virtual Host המתאים.
- כאשר Auto-SSL מופעל, האינטגרציה מפעילה את הנפקת תעודת Let's Encrypt מיד לאחר יצירת ה-Virtual Host.
- מוסיפה/מסירה באופן אופציונלי את הקיצור `www.` בהתאם להגדרת "Auto-create www subdomain" בהגדרות Domain Mapping.

## דרישות מקדימות {#prerequisites}

- מופע CyberPanel פעיל (מומלץ גרסה v2.3 ומעלה) שניתן להגיע אליו מהשרת של WordPress שלך.
- אתר אינטרנט קיים ב-CyberPanel שכבר משרת את שורש רשת ה-WordPress שלך. האינטגרציה מחברת Virtual Hosts חדשים לשרת הזה.
- ה-API של CyberPanel מופעל. האימות משתמש בשם המשתמש והסיסמה של מנהל ה-CyberPanel שלך.
- רשומות ה-DNS של הדומיינים הממופים חייבות כבר להצביע על כתובת ה-IP של השרת שלך לפני ש-Auto-SSL יכול להנפיק תעודה תקפה.

## דרישות {#requirements}

יש להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלך:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

אופציונלי, ניתן להגדיר גם:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ברירת מחדל: true — הנפקת SSL של Let's Encrypt לאחר יצירת הדומיין
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ברירת מחדל: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // משמש ליצירת קשר לתעודת SSL
```

## הוראות הגדרה {#setup-instructions}

### 1. הפעלת ה-API של CyberPanel {#1-enable-the-cyberpanel-api}

1. התחבר ל-Dashboard של CyberPanel כמנהל.
2. עבור אל **Security** > **SSL** וודא ש-SSL פעיל בממשק של CyberPanel עצמו (נדרש לקריאות API מאובטחות).
3. ה-API של CyberPanel זמין כברירת מחדל בכתובת `https://your-server-ip:8090/api/`. אין צורך בצעדים נוספים כדי להפעיל אותו — הוא פעיל כברירת מחדל למשתמשי מנהל.

### 2. הוספת קבועים ל-wp-config.php {#2-add-constants-to-wp-configphp}

הוסף את הקבועים הבאים לקובץ `wp-config.php` שלך לפני השורה `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

כדי להפעיל Auto-SSL (מומלץ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. הפעלת האינטגרציה {#3-enable-the-integration}

1. במנהל הרשת של WordPress שלך, עבור אל **Ultimate Multisite** > **Settings**.
2. נווט ללשונית **Domain Mapping**.
3. גלול מטה ל**Host Integrations**.
4. הפעל את האינטגרציה **CyberPanel**.
5. לחץ על **Save Changes**.

### 4. אימות החיבוריות {#4-verify-connectivity}

השתמש במבחן החיבור המובנה במכשיר ההגדרות:

1. עבור אל **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. לחץ על **Test Connection**.
3. הודעת הצלחה מאשרת שה-Plugin יכול להגיע ל-API של CyberPanel ולאמת את זה בצורה נכונה.

## איך זה עובד {#how-it-works}

### Domain Mapping (מיפוי דומיין) {#domain-mapping}

כאשר דומיין ממופה ב-Ultimate Multisite:

1. האינטגרציה שולחת בקשת `POST` לכתובת `/api/createWebsite` בשרת ה-CyberPanel שלך.
2. CyberPanel יוצר Virtual Host חדש עבור הדומיין תחת החבילה שהוגדרה.
3. שורש המסמך (document root) מוגדר להצביע על ספריית שורש רשת ה-WordPress שלך.
4. כאשר מיפוי הדומיין מוסר, האינטגרציה קוראת ל-`/api/deleteWebsite` כדי לנקות את ה-Virtual Host.

### Auto-SSL {#auto-ssl}

כאשר `WU_CYBERPANEL_AUTO_SSL` הוא `true`:

1. לאחר יצירת ה-Virtual Host, האינטגרציה קוראת ל-`/api/issueSSL` עבור הדומיין.
2. CyberPanel מבקש תעודת Let's Encrypt באמצעות אתגר ACME HTTP-01.
3. התעודה מתחדשת אוטומטית על ידי CyberPanel לפני תאריך התפוגה.

> **חשוב:** ה-DNS חייב להיות מופץ במלואו לכתובת ה-IP של השרת שלך לפני ש-Let's Encrypt יכול לאמת את הדומיין. אם הנפקת ה-SSL נכשלת מיד לאחר המיפוי, המתן להפצת ה-DNS והפעל מחדש את ה-SSL מה-Dashboard של CyberPanel תחת **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

אם **Auto-create www subdomain** מופעל בהגדרות Domain Mapping שלך, האינטגרציה יוצרת גם כינוי Virtual Host עבור `www.<domain>` וכאשר Auto-SSL מופעל, היא מנפיקה תעודה המכסה גם את ה-apex וגם את וריאנט ה-www.

### Email Forwarders (העברת דואר אלקטרוני) {#email-forwarders}

כאשר ה-Addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) פעיל, CyberPanel יכול גם לספק העברת דואר אלקטרוני ללקוחות. מעבירים מנתבים הודעות מכתובת דומיין לתיבת דואר אחרת מבלי ליצור תיבת דואר מלאה, וזה שימושי לכינויים כמו `info@customer-domain.test` או `support@customer-domain.test`.

לפני הפעלת העברות ללקוחות:

1. ודא שקבועי CyberPanel שהוצגו לעיל הוגדרו ומבחן החיבוריות עובר בהצלחה.
2. הפעל את ספק הדואר האלקטרוני של CyberPanel בהגדרות ה-Emails Addon.
3. ודא שהדומיין של הלקוח כבר קיים ב-CyberPanel לפני יצירת המעביר.
4. צור מעביר בדיקה ושלח דרכו הודעה לפני שאתה מציע את התכונה בתוכניות הפקה.

אם יצירת המעביר נכשלת, בדוק תחילה את יומני הפעילות של Ultimate Multisite, ולאחר מכן ודא ב-CyberPanel שהדומיין המקור קיים ושהמשתמש ה-API מחזיק בהרשאות ניהול דואר אלקטרוני.

## מסמך קונפיגורציה {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | כתובת URL מלאה למופע CyberPanel שלך כולל פורט, לדוגמה: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | שם המשתמש של מנהל CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | סיסמת מנהל CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | חבילת הארחה של CyberPanel להקצאה ל-Virtual Hosts חדשים |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | הנפקת תעודת SSL של Let's Encrypt לאחר יצירת הדומיין |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | גרסת ה-PHP עבור Virtual Hosts חדשים (חייבת להתאים לגרסה המותקנת ב-CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | כתובת המייל ליצירת קשר לצורך רישום תעודת SSL |

## הערות חשובות {#important-notes}

- ה-API של CyberPanel משתמש באימות טוקן מבוסס סשן. האינטגרציה מטפלת בהשגת הטוקן אוטומטית בכל קריאה ל-API.
- חשבון המנהל של CyberPanel שלך חייב להחזיק בהרשאות ליצירה ומחיקה של אתרים.
- CyberPanel פועל כברירת מחדל בפורט `8090`. אם השרת שלך משתמש בחומת אש (firewall), ודא שפורט זה נגיש מהשרת של יישום WordPress.
- האינטגרציה אינה מנהלת רשומות DNS. עליך להצביע את ה-DNS של הדומיין שלך לכתובת ה-IP של השרת שלך לפני מיפוי הדומיין ב-Ultimate Multisite.
- אם אתה משתמש ב-OpenLiteSpeed (OLS), מופעל מחדש הדרגתי (graceful restart) אוטומטית לאחר שינויי Virtual Host. אין צורך בהתערבות ידנית.

## פתרון תקלות {#troubleshooting}

### API Connection Refused (החיבור ל-API נדחה) {#api-connection-refused}

- ודא שפורט `8090` פתוח בחומת האש של השרת שלך.
- אשר שערך `WU_CYBERPANEL_HOST` כולל את הפרוטוקול הנכון (`https://`) והפורט.
- בדוק שהתעודה של CyberPanel SSL שלך תקינה; תעודות חתום-עצמיות (self-signed) עלולות לגרום לכשלים באימות TLS. הגדר את `WU_CYBERPANEL_VERIFY_SSL` ל-`false` רק בסביבת רשת פרטית מהימנה.

### Authentication Errors (שגיאות אימות) {#authentication-errors}

- אשר ש-`WU_CYBERPANEL_USERNAME` ו-`WU_CYBERPANEL_PASSWORD` נכונים על ידי התחברות ל-CyberPanel ישירות.
- CyberPanel נועל חשבונות לאחר ניסיונות כניסה כושלים חוזרים. בדוק את **Security** > **Brute Force Monitor** ב-CyberPanel אם מתרחשים נעילות.

### Domain Not Created (הדומיין לא נוצר) {#domain-not-created}

- בדוק את יומן הפעילות של Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) עבור הודעות שגיאה של ה-API.
- ודא שהחבילה המוגדרת ב-`WU_CYBERPANEL_PACKAGE` קיימת ב-CyberPanel (**Packages** > **List Packages**).
- ודא שהדומיין עדיין לא נרשם כאתר ב-CyberPanel — יצירת דומיין כפול מחזירה שגיאה.

### SSL Certificate Not Issued (תעודת SSL לא הונפקה) {#ssl-certificate-not-issued}

- אשר שה-DNS הופץ במלואו: `dig +short your-domain.com` אמור להחזיר את כתובת ה-IP של השרת שלך.
- Let's Encrypt מכריח מגבלות קצב (rate limits). אם הנפקת מספר תעודות לאחרונה עבור אותו דומיין, המתן לפני שניסיון חוזר.
- בדוק את יומני ה-SSL של CyberPanel תחת **Logs** > **Error Logs** לקבלת פרטים על כשלונות הנפקת תעודות.
- כפתרון גיבוי, ניתן להנפיק SSL ידנית מתוך CyberPanel: **SSL** > **Manage SSL** > בחר את הדומיין > **Issue SSL**.

## מקורות מידע {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
