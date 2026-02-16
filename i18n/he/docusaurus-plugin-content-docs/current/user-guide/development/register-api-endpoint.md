---
title: רשום נקודת קצה API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# נקודת הקצה של Register API ב-Ultimate Multisite

במדריך זה תלמדו כיצד להשתמש בנקודת הקצה /register של Ultimate Multisite כדי ליצור את כל תהליך ההצטרפות ללקוח חדש ברשת שלכם, וכיצד לעשות זאת באמצעות Zapier.

נקודת הקצה משתמשת בשיטת POST ונקראת דרך הכתובת _**https://yoursite.com/wp-json/wu/v2/register**_. בקריאה זו יתבצעו 4 תהליכים ברשת שלכם:

  * ייווצר משתמש WordPress חדש או שיזוהה משתמש קיים באמצעות מזהה המשתמש.

  * ייווצר לקוח חדש ב-Ultimate Multisite או שיזוהה לקוח קיים באמצעות מזהה הלקוח.

  * ייווצר אתר חדש ברשת ה-WordPress.

  * לבסוף, תיווצר מנוי חדש ב-Ultimate Multisite.

לתהליך זה תזדקקו לפרטי ההתחברות ל-API. כדי לקבל אותם, היכנסו ללוח הניהול של הרשת, נווטו אל **Ultimate Multisite > Settings** > **API & Webhooks,** וחפשו את הקטע API Settings.

![קטע הגדרות API ב-Ultimate Multisite](/img/config/settings-api.png)  
סמנו את **Enable API** וקבלו את פרטי ההתחברות ל-API.

כעת, בואו נחקור את נקודת הקצה ולאחר מכן ניצור פעולת רישום ב-Zapier.

## פרמטרים בגוף הבקשה

בואו נסקור את המידע המינימלי שעלינו לשלוח לנקודת הקצה. בסוף מאמר זה תמצאו את הקריאה המלאה.

### לקוח

זהו המידע הנדרש לתהליך יצירת המשתמש והלקוח ב-Ultimate Multisite:

"customer_id" : integer

ניתן לשלוח את מזהה הלקוח שנוצר ברשת שלכם. אם לא נשלח, המידע שלהלן ישמש ליצירת לקוח חדש ומשתמש WordPress חדש. ניתן לשלוח גם את מזהה המשתמש באותו אופן כמו מזהה הלקוח.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **מנוי**

המידע היחיד שאנו צריכים בתוך אובייקט זה הוא סטטוס המנוי.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **מוצרים**

מוצרים מועברים כמערך עם מזהה מוצר אחד או יותר מהרשת שלכם. שימו לב, נקודת קצה זו אינה יוצרת מוצרים. עיינו בתיעוד של Ultimate Multisite כדי להבין טוב יותר את נקודת הקצה ליצירת מוצרים.

**"products" : [1,2],**

### תשלום

כמו במנוי, אנו צריכים רק את הסטטוס.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### אתר

ולסיום גוף הבקשה, אנו צריכים את כתובת האתר והכותרת שלו, שניהם בתוך אובייקט Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

התשובה מנקודת הקצה register תהיה מערך עם פרטי המנוי שנוצר.

## יצירת פעולה ב-Zapier

עם ההשקה של נקודת הקצה החדשה והמקיפה יותר ליצירת חשבונות, תוכלו לגשת גם לפעולה חדשה ב-Zapier.

האם אתם יודעים כיצד להשתמש וליהנות מכל מה שהגרסה החדשה של Zapier מציעה? למדו עוד כאן. (link?)

### יצירת פעולה

כדי להמחיש טוב יותר כיצד להשתמש בנקודת הקצה לרישום עם Zapier, בואו ניצור אינטגרציה עם Google Forms. בכל פעם שטופס זה ימולא והמידע יישמר בגיליון התשובות של הטופס, ייווצר מנוי חדש ברשת Ultimate Multisite.

ב-Google Forms, צרו טופס עם השדות המינימליים הנדרשים ליצירת מנוי חדש ברשת.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

כעת ב-Zapier, צרו Zap חדש וחברו את הטופס שיצרתם ב-Google דרך הגיליון שבו הנתונים נשמרים.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

סיימתם! טופס ה-Google Forms מחובר ל-Zapier ומוכן לאינטגרציה עם הרשת. כעת נעבור לפעולה (Action) שתתבצע כתוצאה מה-Trigger ש-Google Forms מפעיל בכל פעם שהטופס מתמלא.

אתרו את האפליקציה החדשה של Ultimate Multisite ובחרו בה. לסוג זה של Zap בחרו באפשרות Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

לאחר שלב ראשון זה, בחרו את החשבון שיחובר ל-Zap זה.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

זהו החלק הרגיש ביותר בכל התהליך. עלינו להתאים את השדות שהגיעו מ-Google Forms לשדות המינימליים הנדרשים לנקודת הקצה register, כפי שהוצג בסעיף הקודם של מאמר זה.

בדוגמה זו, אנו צריכים להגדיר רק את שם המשתמש, האימייל, הסיסמה, השם וכתובת האתר. השאר נקבע מראש כך שכל המנויים שנוצרים דרך טופס Google Forms זה יעקבו אחר אותו דפוס של מוצר וסטטוס.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

לאחר הגדרת המידע, המשיכו לבדיקה הסופית. במסך האחרון תוכלו לראות את כל השדות שיישלחו לנקודת הקצה, המידע המתאים שלהם והשדות שיישלחו ריקים.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

בדקו את ה-Zap החדש שלכם והוא אמור להושלם בהצלחה. אם מתרחשת שגיאה כלשהי, בדקו את כל השדות ואם הם נשלחים כראוי. מכיוון שיש הרבה מידע, דברים מסוימים עלולים להתפספס.

### פרמטרים מלאים של נקודת הקצה

הנה הקריאה המלאה וכל האפשרויות של שדות שניתן לשלוח.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
