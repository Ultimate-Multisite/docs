---
title: הגדרת קבוע Sunrise ב-Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# הגדרת קבוע Sunrise כ-true ב-Closte

חלק מספקי האחסון נועלים את קובץ wp-config.php מסיבות אבטחה. המשמעות היא ש-Ultimate Multisite לא יכול לערוך את הקובץ באופן אוטומטי כדי להוסיף את הקבועים הנדרשים לפעולה תקינה של מיפוי דומיינים ותכונות נוספות. Closte הוא אחד מספקי האחסון הללו.

עם זאת, Closte מציעה דרך להוסיף קבועים לקובץ wp-config.php בצורה מאובטחת. פשוט עקבו אחר השלבים הבאים:

## בלוח הבקרה של Closte

ראשית, [התחברו לחשבון Closte שלכם](https://app.closte.com/), לחצו על פריט התפריט Sites, ואז לחצו על הקישור Dashboard של האתר שאתם עובדים עליו כרגע:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

יופיעו בפניכם מספר פריטי תפריט חדשים בצד שמאל של המסך. נווטו לדף **Settings** באמצעות תפריט זה:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

לאחר מכן, בדף **Settings**, מצאו את הלשונית WP-Config, ואז את השדה "Additional wp-config.php content" בלשונית זו:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

בהקשר של התקנת Ultimate Multisite, תצטרכו להוסיף את קבוע sunrise לשדה זה. פשוט הוסיפו שורה חדשה והדביקו את השורה הבאה. לאחר מכן, לחצו על כפתור **Save All**.

define('SUNRISE', true);

זהו, סיימתם. חזרו לאשף ההתקנה של Ultimate Multisite ורעננו את הדף כדי להמשיך בתהליך.
