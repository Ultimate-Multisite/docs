---
title: התקנת Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# התקנת Ultimate Multisite {#installing-ultimate-multisite}

:::note
מדריך זה מניח שכבר התקנת והגדרת את WordPress Multisite. כדי ללמוד כיצד לעשות זאת, עיין ב[מדריך זה](https://www.wpbeginner.com/glossary/multisite/) של WP Beginner.
:::

## התקנת התוסף {#installing-the-plugin}

Ultimate Multisite זמין בחינם ב[WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

מלוח הבקרה **Network Admin Dashboard**, עבור ל-**Plugins → Add New Plugin**.

![דף הוספת תוסף חדש ב- Network Admin](/img/installation/add-new-plugin.png)

חפש את **"Ultimate Multisite"** (עם גרשיים להתאמה מדויקת) והוא יופיע כתוצאה הראשונה. לחץ על **Install Now**.

![תוצאות חיפוש המציגות את Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

לאחר ההתקנה, לחץ על **Network Activate** כדי להפעיל את התוסף בכל הרשת שלך.

![התוסף מותקן עם כפתור Network Activate](/img/installation/plugin-installed.png)

לאחר ההפעלה, תועבר אוטומטית לאשף ההגדרות (Setup Wizard).

![התוסף הופעל והועבר לאשף](/img/installation/plugin-activated.png)

## אשף ההגדרות {#setup-wizard}

אשף ההגדרות ילווה אותך בתהליך הגדרת Ultimate Multisite בכ-10 דקות.

### ברוכים הבאים {#welcome}

לחץ על **Get Started** כדי להתחיל.

![מסך ברוכים הבאים של אשף ההגדרות](/img/installation/wizard-welcome.png)

### בדיקות לפני ההתקנה {#pre-install-checks}

שלב זה בודק את מידע המערכת וההתקנת WordPress שלך כדי לוודא שהם עומדים בדרישות Ultimate Multisite. אם הכל נראה תקין, לחץ על **Go to the Next Step**.

![בדיקות לפני ההתקנה המציגות דרישות מערכת](/img/installation/wizard-pre-install-checks.png)

:::note כפתור Network Activate (גרסה 2.6.1 ומעלה)
אם Ultimate Multisite הותקן אך **טרם הופעל ברמה של רשת** — למשל, אם לחצת על **Activate** (אתר בודד) במקום **Network Activate** ממסך התוספים ברמת הרשת — שלב הבדיקות לפני ההתקנה יזהה זאת ויציג כפתור **Network Activate**.

לחיצה על **Network Activate** מפעילה את התוסף בכל רשת ה-multisite שלך באופן אוטומטי. לאחר ההפעלה, האשף ממשיך כרגיל לשלב ההתקנה. אין צורך לעזוב את האשף כדי לתקן את מצב ההפעלה.
:::

### התקנה {#installation}

מתקין יצור את טבלאות המסד הנתונים הנדרשות ויבצע התקנה של קובץ `sunrise.php` ש- Ultimate Multisite זקוק לו כדי לפעול. לחץ על **Install** כדי להמשיך.

![שלב ההתקנה המציג טבלאות מסד נתונים ואת sunrise.php](/img/installation/wizard-installation.png)

### החברה שלך {#your-company}

מלא את פרטי החברה שלך והגדר את המטבע ברירת המחדל. מידע זה יישמש בכל פלטפורמת ה-WaaS שלך. לחץ על **Continue** לאחר השלמה.

![שלב הגדרת החברה שלך](/img/installation/wizard-your-company.png)

### תוכן ברירת מחדל {#default-content}

שלב זה מאפשר לך להתקין תבניות מוגדרות מראש, מוצרים ותוכן התחלה אחר. זו דרך מצוינת להכיר את תכונות Ultimate Multisite. לחץ על **Install** כדי להוסיף את תוכן ברירת המחדל, או דלג על שלב זה אם מעדיפים להתחיל מאפס.

![שלב התקנת תוכן ברירת מחדל](/img/installation/wizard-default-content.png)

### תוספים מומלצים {#recommended-plugins}

התקן באופן אופציונלי תוספי לוויה מומלצים. לחץ על **Install** כדי להוסיף אותם או דלג כדי להמשיך.

![שלב התוספים המומלצים](/img/installation/wizard-recommended-plugins.png)

### מוכנים! {#ready}

זהו! התקנת Ultimate Multisite הושלמה. כעת תוכל להתחיל לבנות את פלטפורמת Website as a Service שלך מ-**Network Admin Dashboard**.

![הגדרות הושלמו - מסך מוכן](/img/installation/wizard-ready.png)

![לוח בקרה של Network Admin עם Ultimate Multisite פעיל](/img/installation/network-dashboard.png)

קדימה ותיהנו!
