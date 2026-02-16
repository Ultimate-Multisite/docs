---
title: שגיאת קובץ Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# שגיאה בהתקנת קובץ Sunrise

קובץ sunrise.php הוא קובץ מיוחד ש-WordPress מחפש בזמן האתחול שלו. כדי ש-WordPress יוכל לזהות את קובץ sunrise.php, הוא צריך להיות ממוקם בתוך **תיקיית wp-content**.

כאשר מפעילים את Ultimate Multisite ועוברים דרך אשף ההגדרות כמו זה שמופיע בצילום המסך, Ultimate Multisite מנסה להעתיק את קובץ sunrise.php שלנו לתיקיית wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ברוב המקרים, אנחנו מצליחים להעתיק את הקובץ בהצלחה והכל עובד. עם זאת, אם משהו לא מוגדר כראוי (הרשאות תיקיות, למשל), ייתכן שתיתקלו במצב שבו Ultimate Multisite לא מצליח להעתיק את הקובץ.

אם תקראו את הודעת השגיאה ש-Ultimo מציג, תראו שזה בדיוק מה שקרה כאן: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

כדי לתקן את זה, פשוט העתיקו את קובץ sunrise.php מתוך תיקיית התוסף wp-ultimo והדביקו אותו בתיקיית wp-content שלכם. לאחר שתעשו זאת, רעננו את דף האשף והבדיקות אמורות לעבור.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> בכל מקרה, כדאי לבצע בדיקה כללית של הרשאות התיקיות שלכם כדי להימנע מבעיות בעתיד (לא רק עם Ultimate Multisite אלא גם עם תוספים וערכות עיצוב אחרות).

**כלי בדיקת התקינות** שמובנה ב-WordPress (ניתן לגשת אליו דרך **לוח הבקרה של האתר הראשי > כלים > בדיקת תקינות**) יכול להודיע לכם אם יש לכם הרשאות תיקיות מוגדרות לערכים שעלולים לגרום לבעיות עם WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
