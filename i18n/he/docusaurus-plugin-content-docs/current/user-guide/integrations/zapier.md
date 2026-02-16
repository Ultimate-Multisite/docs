---
title: שילוב Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# שילוב Ultimate Multisite עם Zapier

באחד המאמרים דיברנו על [Webhooks](webhooks.md) וכיצד ניתן להשתמש בהם לשילוב עם אפליקציות צד שלישי.

השימוש ב-webhooks מעט מסובך מכיוון שהוא דורש ידע מתקדם בתכנות ובקליטת payloads. השימוש ב-**Zapier** הוא דרך לעקוף את הקושי הזה.

ל-Zapier יש שילוב עם יותר מ-5000+ אפליקציות, מה שמקל על התקשורת בין אפליקציות שונות.

תוכלו ליצור **Triggers** שיופעלו כאשר אירועים מתרחשים ברשת שלכם (לדוגמה, חשבון נוצר ומפעיל את האירוע account_create) או ליצור **Actions** ברשת שלכם כתגובה לאירועים חיצוניים (לדוגמה, יצירת מנוי חשבון חדש ברשת Ultimate Multisite שלכם).

זה אפשרי מכיוון שה-**triggers וה-actions של Ultimate Multisite ב-Zapier** מופעלים על ידי ה-[REST API](https://developer.ultimatemultisite.com/api/docs/).

## איך להתחיל

ראשית, חפשו Ultimate Multisite ברשימת האפליקציות של Zapier. לחלופין, תוכלו ללחוץ על [הקישור הזה](https://zapier.com/apps/wp-ultimo/integrations).

היכנסו ל-dashboard שלכם ולחצו על כפתור **+** **Create Zap** בסרגל הצד השמאלי כדי להגדיר Zap חדש.

![לוח הבקרה של Zapier עם כפתור Create Zap](/img/admin/webhooks-list.png)

תועברו לדף יצירת ה-Zap.

בתיבת החיפוש הקלידו "wp ultimo". לחצו כדי לבחור באפשרות גרסת **Beta**.

![חיפוש WP Ultimo ברשימת האפליקציות של Zapier](/img/admin/webhooks-list.png)

לאחר בחירת האפליקציה שלנו, בחרו באירוע הזמין: **New Ultimate Multisite Event**.

![בחירת trigger של New Ultimate Multisite Event](/img/admin/webhooks-list.png)

עכשיו אנחנו צריכים לתת ל-Zapier גישה **לרשת שלכם**. לחיצה על **Sign in** תפתח חלון חדש שידרוש את **פרטי ה-API**.

![הנחיית Sign in של Zapier לפרטי API](/img/admin/webhooks-list.png)

היכנסו לפאנל הניהול של הרשת שלכם ונווטו אל **Ultimate Multisite > Settings** > **API & Webhooks** וחפשו את הקטע API Settings.

סמנו את האפשרות **Enable API** מכיוון שהיא נדרשת כדי שהחיבור יעבוד.

![הגדרות API עם אפשרות Enable API ב-Ultimate Multisite](/img/admin/webhooks-list.png)

השתמשו בסמל **Copy to Clipboard** בשדות API Key ו-API Secret והדביקו את הערכים האלה במסך השילוב.

בשדה URL, הכניסו את כתובת ה-URL המלאה של הרשת שלכם, כולל הפרוטוקול (HTTP או HTTPS).

![מסך שילוב Zapier עם שדות API Key, Secret ו-URL](/img/admin/webhooks-list.png)

לחצו על כפתור **Yes, Continue** כדי לעבור לשלב הבא. אם הכל עובד כמו שצריך, תקבלו את פני החשבון המחובר החדש שלכם! לחצו על **Continue** כדי ליצור trigger חדש.

## איך ליצור Trigger חדש

עכשיו שהחשבון שלכם מחובר, תוכלו לראות את האירועים הזמינים. בואו נבחר את האירוע **payment_received** עבור המדריך הזה.

![בחירת אירוע payment_received ב-trigger של Zapier](/img/admin/webhooks-list.png)

לאחר בחירת האירוע ולחיצה על **continue**, יופיע **שלב בדיקה**.

![שלב בדיקת trigger ב-Zapier](/img/admin/webhooks-list.png)

בשלב זה, Zapier יבדוק אם ה-Zap שלכם יכול **לשלוף את ה-payload הספציפי לאירוע הזה**. באירועים עתידיים מאותו סוג, מידע עם אותו מבנה יישלח.

![בדיקת trigger ב-Zapier הושלמה בהצלחה עם payload](/img/admin/webhooks-list.png)

במדריך שלנו הבדיקה **הושלמה בהצלחה** והחזירה את המידע לדוגמה של ה-payload. מידע לדוגמה זה יעזור לנו בעת יצירת actions. ה-trigger שלכם נוצר כעת ומוכן להתחבר לאפליקציות אחרות.

## איך ליצור Actions

Actions משתמשים במידע מ-triggers אחרים כדי ליצור רשומות חדשות ברשת שלכם.

ב**שלב יצירת ה-action** תבחרו את Ultimate Multisite **Beta** ואת האפשרות **Create Items on Ultimate Multisite**.

![יצירת action עם Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

בשלב הבא תיצרו את האימות שלכם, בדיוק כפי שעשינו ב**איך להתחיל**, או תבחרו אימות קיים. במדריך זה נבחר את אותו אימות שנוצר קודם לכן.

![בחירת אימות עבור ה-action ב-Zapier](/img/admin/webhooks-list.png)

### הגדרת ה-Action

זהו **השלב העיקרי של ה-action** וכאן הדברים קצת שונים. המידע הראשון שתבחרו הוא ה-**Item**. Item הוא **מודל המידע** של הרשת שלכם כגון **Customers, Payments, Sites, Emails** ואחרים.

![בחירת סוג Item עבור ה-action ב-Zapier](/img/admin/webhooks-list.png)

כאשר בוחרים item, הטופס **יסתדר מחדש כדי להציג את השדות הנדרשים והאופציונליים** עבור ה-item שנבחר.

לדוגמה, כאשר בוחרים את ה-item **Customer**, שדות הטופס יציגו את כל מה שצריך למלא כדי ליצור Customer חדש ברשת.

![שדות Customer item בהגדרת action ב-Zapier](/img/admin/webhooks-list.png)

לאחר מילוי כל השדות המסומנים כ-**required** ולחיצה על continue, מסך אחרון יציג לכם את השדות שמולאו ואת השדות שנותרו ריקים.

![בדיקת action ב-Zapier מציגה שדות מלאים וריקים](/img/admin/webhooks-list.png)

ברגע שהבדיקה שלכם מסתיימת ומצליחה, ה-action שלכם מוגדר. חשוב גם לבדוק ברשת שלכם אם ה-item נוצר עם הבדיקה של ה-action שלכם.
