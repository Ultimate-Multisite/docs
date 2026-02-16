---
title: מעבר מ-V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# מעבר מגרסה 1

## Ultimate Multisite עבר ממשפחת הגרסאות המקורית 1.x למשפחת הגרסאות 2.x.

Ultimate Multisite גרסה 2.0 ומעלה היא כתיבה מחדש מלאה של הקוד, מה שאומר שכמעט אין קוד משותף בין הגרסה הישנה לחדשה. לכן, כשמשדרגים מ-1.x ל-2.x, הנתונים שלכם יצטרכו לעבור המרה לפורמט שהגרסאות החדשות מבינות.

למזלכם, Ultimate Multisite 2.0+ **מגיע עם כלי מיגרציה מובנה** בליבה, שמסוגל לזהות נתונים מהגרסה הישנה ולהמיר אותם לפורמט החדש. המיגרציה הזו מתרחשת במהלך **אשף ההתקנה** של גרסה 2.0+.

שיעור זה מסביר איך כלי המיגרציה עובד, מה לעשות במקרים של כשל, ואיך לפתור בעיות שעלולות להתעורר במהלך התהליך.

_**חשוב: לפני שמתחילים לשדרג מגרסה 1.x לגרסה 2.0, וודאו שיצרתם גיבוי של מסד הנתונים של האתר**_

## צעדים ראשונים

הצעד הראשון הוא להוריד את קובץ ה-.zip של התוסף ולהתקין את גרסה 2.0 בלוח הניהול של הרשת שלכם.

לאחר ש[תתקינו ותפעילו את גרסה 2.0](../getting-started/installing-ultimate-multisite.md), המערכת תזהה אוטומטית שה-Multisite שלכם רץ על הגרסה הישנה ותראו הודעה זו בראש עמוד התוסף.

_**הערה:** אם מותקן אצלכם Ultimate Multisite 1.x ב-Multisite, תהיה לכם אפשרות להחליף את התוסף בגרסה שזה עתה הורדתם. לחצו על **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

העמוד הבא יראה לכם אילו תוספים נלווים (add-ons) ישנים מותקנים יחד עם גרסה 1.x. יהיו שם הוראות האם הגרסה שאתם משתמשים בה תואמת לגרסה 2.0 או שתצטרכו להתקין גרסה משודרגת של התוסף הנלווה לאחר המיגרציה.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

כשאתם מוכנים להמשיך, תוכלו ללחוץ על הכפתור שאומר **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

זה יביא אתכם לעמוד אשף ההתקנה עם כמה הודעות פתיחה. פשוט לחצו על **Get Started** כדי לעבור לעמוד הבא.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

לאחר לחיצה על **Get Started**, תועברו לעמוד בדיקות טרום-התקנה. זה יראה לכם את מידע המערכת שלכם ואת התקנת WordPress ויגיד לכם אם הם עומדים ב**דרישות של Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

הצעד הבא הוא להזין את מפתח הרישיון של Ultimate Multisite ולהפעיל את התוסף. זה יבטיח שכל התכונות, כולל תוספים נלווים, יהיו זמינות באתר שלכם.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

לאחר הזנת המפתח, לחצו על **Agree & Activate**.

לאחר הפעלת הרישיון, תוכלו להתחיל את ההתקנה עצמה על ידי לחיצה על **Install** בעמוד הבא. זה ייצור אוטומטית את הקבצים ומסד הנתונים הנדרשים כדי שגרסה 2.0 תפעל.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## עכשיו, המיגרציה

לכלי המיגרציה יש תכונת בטיחות מובנית שבודקת את כל ה-multisite שלכם כדי לוודא שכל הנתונים של Ultimate Multisite יכולים לעבור מיגרציה ללא בעיות. לחצו על כפתור **Run Check** כדי להתחיל את התהליך.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

לאחר הרצת הבדיקה, יש שתי אפשרויות: התוצאה יכולה להיות **עם** שגיאה או **בלי שגיאה**.

### עם שגיאה

אם מופיעה הודעת שגיאה, תצטרכו לפנות לצוות התמיכה שלנו כדי שיוכלו לעזור לכם לתקן את השגיאה. וודאו ש**אתם מצרפים את לוג השגיאות** כשאתם פותחים פנייה. תוכלו להוריד את הלוג או ללחוץ על הקישור שאומר contact our support team. זה יפתח את חלון העזרה בצד ימין של העמוד עם השדות ממולאים מראש עבורכם, כולל לוגים של השגיאות בתיאור.

_**מכיוון שהמערכת מצאה שגיאה, לא תוכלו להמשיך במיגרציה לגרסה 2.0. תוכלו לחזור לגרסה 1.x כדי להמשיך להפעיל את הרשת עד שהשגיאה תתוקן.**_

### בלי שגיאה

אם המערכת לא מוצאת שגיאות, תראו הודעת הצלחה וכפתור **Migrate** בתחתית שיאפשר לכם להמשיך עם המיגרציה. בעמוד זה תקבלו תזכורת ליצור גיבוי של מסד הנתונים לפני שממשיכים, מה שאנחנו ממליצים עליו בחום. לחצו על **Migrate** אם כבר יש לכם גיבוי.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

וזה הכל!

תוכלו להמשיך להריץ את אשף ההתקנה כדי לעדכן את הלוגו שלכם ודברים נוספים ברשת, או להתחיל לנווט בתפריט של Ultimate Multisite גרסה 2.0 ובממשק החדש שלו. קדימה, תהנו.
