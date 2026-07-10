---
title: העברת מצב צד שלישי
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# הגירה למצב צד שלישי (Third-Party Mode Migration) {#third-party-mode-migration}

Superdav AI Agent v1.12.0 משנה את אופן הטיפול ביכולות של צד שלישי (third-party abilities). **מצב צד שלישי כעת מוגדר כברירת מחדל ל"אוטומטי" (auto)**, מה שמאפשר אינטגרציה מובנית עם WordPress Abilities API בגרסה WordPress 7.0 ומעלה, ללא צורך בהגדרות ידניות.

## מה השתנה? {#what-changed}

### לפני v1.12.0 {#before-v1120}

יכולות צד שלישי דרשו הגדרה ידנית:

- היית צריך להפעיל במפורש את "מצב צד שלישי" (third-party mode)
- היכולות נטענו ממנגנון רישום (registry) מותאם אישית
- האינטגרציה עם WordPress Abilities API הייתה אופציונלית
- מצב מיושן (Legacy mode) היה ברירת המחדל

### אחרי v1.12.0 {#after-v1120}

יכולות צד שלישי עובדות באופן אוטומטי:

- מצב צד שלישי מוגדר כברירת מחדל ל-"אוטומטי" (auto)
- היכולות משתלבות באופן מובנה עם WordPress Abilities API
- אין צורך בהגדרות ידניות ב-WordPress 7.0 ומעלה
- מצב מיושן (Legacy mode) עדיין זמין עבור גרסאות WordPress ישנות יותר

## מי מושפע? {#who-is-affected}

### התקנות חדשות (WordPress 7.0 ומעלה) {#new-installations-wordpress-70}

**אין צורך בפעולה.** מצב צד שלישי מוגדר אוטומטית ל-"אוטומטי" (auto), והיכולות עובדות מהקופסה.

### התקנות קיימות {#existing-installations}

**ההגדרות שלך נשמרות.** אם השתמשת ב:

- **מצב מיושן (Legacy mode)**: אתה נשאר במצב מיושן (אין שינוי)
- **מצב צד שלישי ידני (Manual third-party mode)**: אתה נשאר במצב ידני (אין שינוי)
- **מצב אוטומטי (Auto mode)**: אתה ממשיך עם מצב אוטומטי (אין שינוי)

### גרסאות WordPress לפני 7.0 {#wordpress-versions-before-70}

**המצב המיושן (Legacy mode) עדיין זמין.** אם אתה משתמש ב-WordPress 6.x או קודם לכן:

- מצב צד שלישי מוגדר כברירת מחדל ל-"מיושן" (legacy)
- אתה יכול להפעיל ידנית את מצב צד שלישי אם תרצה
- שדרג ל-WordPress 7.0 ומעלה כדי להשתמש ב-Abilities API המובנה

## הבנת המצבים (Understanding the Modes) {#understanding-the-modes}

### מצב אוטומטי (Auto Mode) (ברירת המחדל החדשה) {#auto-mode-new-default}

**מצב אוטומטי** משתמש באינטגרציה מובנית עם WordPress Abilities API:

- היכולות נרשמות באמצעות Hooks של WordPress
- תאימות מלאה עם WordPress 7.0+ Abilities API
- גילוי אוטומטי של יכולות צד שלישי
- אין צורך בהגדרות ידניות

**מתי להשתמש**: WordPress 7.0 ומעלה עם יכולות צד שלישי

### מצב ידני (Manual Mode) {#manual-mode}

**מצב ידני** דורש הגדרה מפורשת:

- אתה מציין אילו יכולות צד שלישי לטעון
- שימושי לבדיקות או לטעינת יכולות סלקטיבית
- דורש עריכת קבצי תצורה
- שליטה רבה יותר, אבל יותר הגדרה

**מתי להשתמש**: בדיקות, טעינת יכולות סלקטיבית, או תצורות מותאמות אישית

### מצב מיושן (Legacy Mode) {#legacy-mode}

**מצב מיושן** משתמש במערכת הישנה ליכולות צד שלישי:

- מנגנון רישום יכולות מותאם אישית (לא WordPress Abilities API)
- תואם לאחור לגרסאות WordPress ישנות יותר
- ללא אינטגרציה מובנית עם WordPress
- מיושן (Deprecated) אך עדיין נתמך

**מתי להשתמש**: WordPress 6.x או קודם לכן, או כשאתה זקוק לתאימות מיושנת

## בדיקת המצב הנוכחי שלך {#checking-your-current-mode}

### דרך לוח הניהול (Admin Panel) {#via-admin-panel}

1. עבור אל **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. חפש את ההגדרה **Third-Party Mode**
3. תראה את המצב הנוכחי שלך ואפשרויות לשינוי

### דרך הקוד {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', או 'legacy'
```

## שינוי המצב שלך {#changing-your-mode}

### מעבר למצב אוטומטי (Switch to Auto Mode) {#switch-to-auto-mode}

אם אתה ב-WordPress 7.0 ומעלה ורוצה להשתמש במצב אוטומטי:

1. עבור אל **Superdav AI Agent** → **Settings**
2. מצא את **Third-Party Mode**
3. בחר **Auto (WordPress Abilities API)**
4. לחץ על **Save**

Superdav AI Agent יגלה ויירשם אוטומטית את יכולות צד שלישי.

### מעבר למצב ידני (Switch to Manual Mode) {#switch-to-manual-mode}

אם אתה רוצה לשלוט ידנית אילו יכולות נטענות:

1. עבור אל **Superdav AI Agent** → **Settings**
2. מצא את **Third-Party Mode**
3. בחר **Manual**
4. לחץ על **Save**
5. ערוך את קובץ התצורה שלך כדי לציין אילו יכולות לטעון

### מעבר למצב מיושן (Switch to Legacy Mode) {#switch-to-legacy-mode}

אם אתה זקוק לתאימות מיושנת:

1. עבור אל **Superdav AI Agent** → **Settings**
2. מצא את **Third-Party Mode**
3. בחר **Legacy**
4. לחץ על **Save**

## יתרונות מצב אוטומטי (Benefits of Auto Mode) {#benefits-of-auto-mode}

### גילוי אוטומטי (Automatic Discovery) {#automatic-discovery}

יכולות נגלים אוטומטית מ:

- תוספים מותקנים
- ערכת נושא פעילה
- תוספי Must-use
- תוספי Drop-in

אין צורך ברישום ידני.

### אינטגרציה מובנית (Native Integration) {#native-integration}

היכולות משתלבות עם WordPress Abilities API:

- עקביות עם ליבת WordPress
- עובד עם לוח הניהול של WordPress
- תואם לתוספים אחרים המשתמשים ב-Abilities API
- עמיד לעתיד ככל ש-WordPress מתפתח

### ניהול פשוט (Simplified Management) {#simplified-management}

- אין קבצי תצורה לערוך
- אין רישום יכולות ידני
- בקרות נראותות של יכולות (Ability Visibility) עובדות אוטומטית
- הודעות מנהל (Admin notices) מתריעות לך על יכולות שלא סווגו

### ביצועים טובים יותר (Better Performance) {#better-performance}

- היכולות ממאוחסנות (cached)
- נטענות עצלנית (Lazy-loaded) לפי הצורך
- מותאם ל-WordPress 7.0 ומעלה

## נתיב ההגירה (Migration Path) {#migration-path}

### אם אתה ב-WordPress 6.x {#if-youre-on-wordpress-6x}

1. **שדרג ל-WordPress 7.0 ומעלה** (כשתהיה מוכן)
2. **עדכן את Superdav AI Agent** לגרסה v1.12.0 ומעלה
3. **שנה את מצב צד שלישי ל-"אוטומטי" (Auto)** (אופציונלי; מצב מיושן עדיין עובד)
4. **סקור את נראות היכולות** כדי להבטיח בקרות גישה מתאימות

### אם אתה ב-WordPress 7.0 ומעלה {#if-youre-on-wordpress-70}

1. **עדכן את Superdav AI Agent** לגרסה v1.12.0 ומעלה
2. **אמת כי מצב צד שלישי מוגדר ל-"אוטומטי" (Auto)** (הוא אמור להיות ברירת המחדל)
3. **סקור את נראות היכולות** כדי להבטיח בקרות גישה מתאימות
4. **בדוק את יכולות צד שלישי** כדי לאשר שהן עובדות

## פתרון תקלות (Troubleshooting) {#troubleshooting}

### היכולות לא נטענות במצב אוטומטי {#abilities-arent-loading-in-auto-mode}

- ודא שאתה ב-WordPress 7.0 ומעלה
- בדוק שמצב צד שלישי מוגדר ל-"אוטומטי" (Auto)
- ודא שהתוסף המספק את היכולת פעיל
- בדוק את יומני השגיאות של WordPress עבור שגיאות רישום

### אני רוצה לשמור על מצב מיושן (Legacy mode) {#i-want-to-keep-legacy-mode}

- עבור אל **Settings** → **Third-Party Mode**
- בחר **Legacy**
- לחץ על **Save**
- מצב מיושן ימשיך לעבוד

### היכולות המותאמות אישית שלי לא מופיעות {#my-custom-abilities-arent-showing}

- ודא שהן נרשמות באמצעות Hooks של WordPress
- בדוק שהן מיישמות את Abilities API כראוי
- סקור את יומני השגיאות של WordPress
- השתמש בדף המנהל **Ability Visibility** כדי לראות את כל היכולות שנרשמו

### אני מקבל הודעות "יכולת שלא סווגה" (unclassified ability) {#im-getting-unclassified-ability-notices}

- זה נורמלי ליכולות צד שלישי חדשות
- סקור וסווג אותן בהודעת המנהל
- ראה את **Ability Visibility** לפרטים על הסיווג

## תאימות לאחור (Backward Compatibility) {#backward-compatibility}

### תצורות קיימות {#existing-configurations}

אם יש לך תצורות יכולות צד שלישי קיימות:

- **מצב מיושן (Legacy mode)**: התצורה שלך ממשיכה לעבוד
- **מצב ידני (Manual mode)**: התצורה שלך ממשיכה לעבוד
- **מצב אוטומטי (Auto mode)**: התצורה שלך מתעלמת (מצב אוטומטי לוקח את השליטה)

כדי לשמור על התצורה המותאמת אישית שלך, הישאר במצב ידני או מיושן.

### ציר ההפחתה (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: מצבי מיושן וידני עדיין נתמכים במלואם
- **v1.13.0+**: מצב מיושן עשוי להציג הודעות הפחתה
- **v2.0.0**: מצב מיושן עלול להוסר (TBD)

## שיטות עבודה מומלצות (Best Practices) {#best-practices}

### להתקנות חדשות {#for-new-installations}

- השתמש במצב אוטומטי (זה ברירת המחדל)
- תן ל-Superdav AI Agent לגלות יכולות אוטומטית
- השתמש ב-Ability Visibility כדי לשלוט בגישה

### להתקנות קיימות {#for-existing-installations}

- שדרג ל-WordPress 7.0 ומעלה כשזה אפשרי
- עבור למצב אוטומטי לניהול פשוט יותר
- סקור וסווג יכולות באמצעות Ability Visibility

### ליכולות מותאמות אישית {#for-custom-abilities}

- רשום יכולות באמצעות Hooks של WordPress (Abilities API)
- הימנע ממנגנוני רישום יכולות מותאמים אישית
- בדוק ב-WordPress 7.0 ומעלה עם מצב אוטומטי

## צעדים הבאים (Next Steps) {#next-steps}

1. **בדוק את גרסת ה-WordPress שלך**: ודא שאתה ב-7.0 ומעלה עבור מצב אוטומטי
2. **סקור את מצב צד שלישי שלך**: עבור אל Settings ובדוק את המצב הנוכחי שלך
3. **עדכן במידת הצורך**: עבור למצב אוטומטי אם אתה ב-WordPress 7.0 ומעלה
4. **סווג יכולות**: סקור וסווג כל יכולת שלא סווגה
5. **בדוק**: ודא שיכולות צד שלישי עובדות כראוי

## נושאים קשורים (Related Topics) {#related-topics}

- **Ability Visibility**: שלוט אילו יכולות חשופות היכן
- **WordPress Abilities API**: למד על רישום יכולות מובנה של WordPress
- **Third-Party Ability Development**: צור יכולות שעובדות עם מצב אוטומטי
