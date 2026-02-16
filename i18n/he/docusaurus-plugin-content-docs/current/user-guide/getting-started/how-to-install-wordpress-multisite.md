---
title: איך להתקין WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# כיצד מתקינים WordPress Multisite?

WordPress Multisite מאפשר לכם להפעיל רשת של אתרים על התקנה אחת. זוהי תכונה מובנית, אך היא אינה פעילה כברירת מחדל.

:::tip
Ultimate Multisite כולל **[אשף הגדרת Multisite מובנה](./multisite-setup-wizard)** שמבצע את כל התהליך באופן אוטומטי. אם Ultimate Multisite מותקן אצלכם, מומלץ להשתמש באשף במקום לבצע את השלבים הידניים שלהלן.
:::

מכיוון ש-Ultimate Multisite הוא תוסף המיועד לרשת בלבד, במדריך זה תלמדו כיצד להתקין ולהגדיר את WordPress Multisite באופן ידני. הטקסט מבוסס על [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) מאת WPBeginner.

**דברים שחשוב לשים לב אליהם לפני יצירת רשת ה-Multisite:**

  * השתמשו באחסון WordPress איכותי! אתרים ברשת חולקים את אותם משאבי שרת.

  * אם יש לכם רק כמה אתרים עם תעבורה נמוכה, אחסון משותף יתאים לכם ככל הנראה.

  * רוב **ספקי אחסון WordPress מנוהל** מציעים תמיכה ב-Multisite מהקופסה (הם מתקינים WordPress עם Multisite כשהוא כבר מופעל ומוגדר עבורכם). כך הדבר אצל WP Engine, Closte, Cloudways ועוד. אם אינכם בטוחים האם כך הדבר אצל ספק האחסון שלכם, פנו לתמיכה שלהם לפני שתמשיכו במדריך זה.

  * כדאי גם להכיר את תהליך התקנת WordPress ועריכת קבצים באמצעות FTP.

_**חשוב**_ **:** אם אתם מגדירים רשת Multisite על אתר WordPress קיים, אל תשכחו:

  * ליצור גיבוי מלא של אתר ה-WordPress שלכם

  * לבטל את הפעלת כל התוספים באתר על ידי מעבר לדף התוספים, בחירת _בטל הפעלה_ מפעולות קבוצתיות ולאחר מכן לחיצה על _החל_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

כדי להפעיל Multisite, התחברו תחילה לאתר באמצעות לקוח FTP או מנהל הקבצים של cPanel, ופתחו את קובץ wp-config.php לעריכה.

לפני השורה _*That's all, stop editing! Happy blogging.*_, הוסיפו את קטע הקוד הבא:

define('WP_ALLOW_MULTISITE', true);

שמרו והעלו את קובץ wp-config.php בחזרה לשרת.

לאחר שתכונת ה-Multisite הופעלה באתר, הגיע הזמן להגדיר את הרשת.

עברו אל **כלים » הגדרת רשת**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

כעת עליכם להודיע ל-WordPress באיזו מבנה דומיין תשתמשו עבור האתרים ברשת: תת-דומיינים או תת-ספריות.

אם תבחרו בתת-דומיינים, תצטרכו לשנות את הגדרות ה-DNS למיפוי דומיינים ולוודא שהגדרתם _**תת-דומיינים כלליים (wildcard)**_ עבור רשת ה-Multisite.

בחזרה להגדרת הרשת, תנו כותרת לרשת שלכם וודאו שכתובת הדוא"ל בשדה דוא"ל מנהל הרשת נכונה. לחצו על _התקן_ כדי להמשיך.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

הוסיפו קוד זה, שסופק על ידי WordPress, לקובץ _**wp-config.php**_ שלכם:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

וקוד זה, שגם הוא סופק על ידי WordPress, לקובץ _**.htaccess**_ שלכם:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

השתמשו בלקוח FTP או במנהל קבצים (אם אתם משתמשים במשהו כמו cPanel, למשל) כדי להעתיק ולהדביק את הקוד בשני קבצים אלה.

לבסוף, התחברו מחדש לאתר ה-WordPress שלכם כדי לגשת לרשת ה-Multisite.

**חשוב לבדוק ולוודא שאתם מסוגלים ליצור תת-אתר בהתקנת ה-WordPress Multisite שלכם לפני שתתקינו את Ultimate Multisite.**

ליצירת תת-אתר:

  1. פתחו את wp-admin של האתר

  2. נווטו אל האתרים שלי > אתרים (/wp-admin/network/sites.php)

  3. לחצו על הוסף חדש בחלק העליון

  4. מלאו את כל השדות:

  * כתובת האתר — לעולם אל תשתמשו ב-"www"

  * תת-דומיין: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * תת-ספרייה: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * כותרת האתר — שם האתר, ניתן לשנות מאוחר יותר

  * דוא"ל מנהל — יוגדר כמשתמש המנהל הראשוני של תת-האתר

![טופס הוספת אתר חדש ב-WordPress Multisite](/img/admin/sites-list.png)

לאחר מילוי השדות, לחצו על כפתור "הוסף אתר". לאחר יצירת תת-האתר החדש, גשו אליו כדי לוודא שהוא פועל כראוי.

## בעיות נפוצות:

### 1\. אני יכול ליצור אתרים חדשים אך לא ניתן לגשת אליהם.

אם בחרתם בתת-דומיינים, עליכם גם להגדיר תת-דומיינים כלליים (wildcard) עבור רשת ה-Multisite שלכם.

לשם כך, עברו ללוח הבקרה של חשבון האחסון של האתר (למשל cPanel/Plesk/Direct Admin בהתאם לספק האחסון שלכם).

חפשו אפשרות עבור "דומיינים" או "תת-דומיינים". בחלק מלוחות הבקרה זה מסומן כ-"ניהול דומיינים".

בשדה תת-הדומיין, הזינו כוכבית (*). לאחר מכן, תתבקשו לבחור שם דומיין שאליו ברצונכם להוסיף את תת-הדומיין.

תיקיית השורש של שם הדומיין שנבחר תזוהה אוטומטית. לחצו על כפתור _צור_ או _שמור_ כדי להוסיף את תת-הדומיין הכללי. הרשומה אמורה להיראות "*.[mydomain.com](http://mydomain.com)"
