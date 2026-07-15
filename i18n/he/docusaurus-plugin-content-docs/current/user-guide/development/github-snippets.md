---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# כיצד להשתמש בקטעי קוד של Ultimate Multisite מהמאגר שלנו ב-GitHub

ישנם קטעי קוד זמינים במאגר GitHub שמשתמשי Ultimate Multisite מבקשים לעיתים קרובות, כדי להוסיף פונקציונליות קטנות כמו הוספת סקריפט Google Analytics לדפי ההרשמה או הסתרת meta box מלוח הבקרה של המנהל.

מאמר זה יראה לך כיצד להשתמש בקטעי הקוד האלה, ובאופן ספציפי יותר – היכן למקם אותם.

תוכלו למצוא את קטעי הקוד בקישור הבא.

https://github.com/next-press/wp-ultimo-snippets/

יש 2 דרכים להוסיף את הקוד

  1. בקובץ functions.php של התבנית שלך.

  2. תוספים חובה (mu-plugins)

# כיצד להוסיף את קטע הקוד לקובץ functions.php של התבנית שלך

  1. התחבר ללוח הבקרה של רשת ה-WordPress שלך ועבור אל תבניות > עורך תבניות (ראה צילום מסך למטה).

  2. בדף "עריכת תבניות", ודא שהתבנית הפעילה שלך נבחרה בשדה הנפתח הממוקם בצד ימין למעלה של המסך (מס' 3 בצילום המסך למטה).

  3. לחץ על קובץ functions.php תחת החלק "קבצי תבנית" כדי לטעון את הקובץ. גלול למטה עד לתחתית והדבק את קטע הקוד של Ultimate Multisite שקיבלת ממאגר GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# כיצד ליצור תוספים חובה (mu-plugins)

ל-WordPress יש תכונה שמאפשרת לך לטעון פונקציונליות מותאמת אישית בשם "תוספים חובה", או בקיצור "mu-plugins".

תוספי mu-plugins מיוחדים אלה נטענים לפני כל שאר התוספים הרגילים, ולא ניתן לבטל את הפעלתם. ברשת multisite, הקוד בתוספי mu-plugins אלה ייטען בכל האתרים בהתקנה שלך.

1\. השתמש ב-FTP או SSH כדי לגשת למערכת הקבצים של התקנת ה-WordPress שלך.

2\. בתוך תיקיית wp-content של התקנת ה-WordPress שלך, צור תיקייה חדשה בשם: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. צור קובץ PHP חדש במחשב שלך בשם wu-snippet.php באמצעות Notepad או כל עורך קוד אחר.

4\. הכנס את קטע הקוד של Ultimate Multisite שקיבלת ממאגר GitHub לתוך הקובץ ושמור אותו. תוכל גם להוסיף קוד זה בראש קטע הקוד כדי לתייג את תוסף ה-mu שלך.
