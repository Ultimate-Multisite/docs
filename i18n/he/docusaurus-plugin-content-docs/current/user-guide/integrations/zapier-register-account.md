---
title: הרשמת חשבון דרך Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# אירוע: רישום חשבון דרך Zapier

במאמר [שילוב Ultimate Multisite עם Zapier](zapier.md), הסברנו כיצד להשתמש ב-Zapier לביצוע פעולות שונות ב-Ultimate Multisite על בסיס טריגרים ואירועים. במאמר זה נראה כיצד ניתן לשלב אפליקציות צד שלישי. נשתמש ב-Google Sheets כמקור הנתונים ונשלח את המידע ל-Ultimate Multisite לצורך רישום חשבון.

ראשית, עליכם ליצור **Google Sheet** ב-Google Drive שלכם. הקפידו להגדיר כל עמודה בצורה ברורה כדי שתוכלו למפות את הנתונים בקלות בהמשך.

![Google Sheet עם עמודות לנתוני לקוחות](/img/admin/webhooks-list.png)לאחר יצירת ה-Google Sheet, היכנסו לחשבון Zapier שלכם והתחילו ליצור zap.

![לוח הבקרה של Zapier ליצירת zap](/img/admin/webhooks-list.png)בשדה החיפוש של **"App event"** בחרו **"Google Sheets"**

![בחירת Google Sheets כאירוע האפליקציה](/img/admin/webhooks-list.png)

לאחר מכן, בשדה "**Event**" בחרו "**New spreadsheet row**" ולחצו על "**Continue**"

![בחירת אירוע New spreadsheet row ב-Zapier](/img/admin/webhooks-list.png)בשלב הבא תתבקשו לבחור את **חשבון Google** שבו שמור ה-**Google Sheet**. ודאו שחשבון Google הנכון מצוין.

![בחירת חשבון Google עבור ה-Google Sheet](/img/admin/webhooks-list.png)

תחת "**Set up trigger**", תצטרכו לבחור ולציין את גיליון ה-Google ואת גליון העבודה שבהם תשתמשו כמקור הנתונים. מלאו את הפרטים הללו ולחצו על "**Continue**"

![הגדרת טריגר עם בחירת גיליון וגליון עבודה](/img/admin/webhooks-list.png)השלב הבא הוא "**test your trigger**" כדי לוודא שה-Google Sheet מחובר כראוי.

![שלב בדיקת הטריגר ב-Zapier](/img/admin/webhooks-list.png)אם הבדיקה הצליחה, תראו תוצאה המציגה ערכים מהגיליון שלכם. לחצו על "**Continue**" כדי להמשיך.

![בדיקת טריגר מוצלחת המציגה ערכים מהגיליון](/img/admin/webhooks-list.png)השלב הבא הוא להגדיר את הפעולה השנייה שתיצור או תרשום חשבון ב-Ultimate Multisite. בשדה החיפוש בחרו "**Ultimate Multisite(2.0.2)**"

![בחירת Ultimate Multisite כאפליקציית הפעולה](/img/admin/webhooks-list.png)

בשדה "**Event**", בחרו "**Register an Account in Ultimate Multisite**" ולאחר מכן לחצו על כפתור "**Continue**".

![אירוע פעולת Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)תחת "**Set up an action**", תראו שדות שונים הזמינים לנתוני לקוח, מנויים, מוצרים ועוד. תוכלו למפות את הערכים מה-Google Sheet שלכם ולהקצות אותם לשדה המתאים שבו הם צריכים להופיע, כפי שמוצג בצילום המסך למטה.

![מיפוי ערכי Google Sheet לשדות Ultimate Multisite](/img/admin/webhooks-list.png)

לאחר מיפוי הערכים, תוכלו לבדוק את הפעולה.

![בדיקת פעולת רישום החשבון ב-Zapier](/img/admin/webhooks-list.png)
