---
title: הודעת הסרת מצב בונה האתר
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# הסרת מצב בונה אתרים (Site Builder Mode) {#site-builder-mode-removal-notice}

**מצב בונה אתרים (Site Builder mode) הוסר בגרסה Superdav AI Agent v1.12.0.** אם השתמשת במצב בונה אתרים, עליך לעבור לשימוש ב-**Setup Assistant agent** ליצירת תבניות והגדרת אתר.

## מה קרה? {#what-happened}

### מצב בונה אתרים (Site Builder Mode) (ישן) {#site-builder-mode-legacy}

מצב בונה אתרים היה ממשק מבוסס מדריך (wizard) עבור:

- יצירת אתרים מתבניות
- הגדרת הגדרות בסיסיות
- בחירת תבנית (Theme)
- הקמת תוכן ראשוני

### מה החליף אותו? {#what-replaced-it}

ה-**Setup Assistant agent** מטפל כעת בכל פונקציונליות של בונה אתרים, עם:

- הגדרה מודרכת גמישה יותר, המונחית על ידי ה-agent
- אפשרויות התאמה אישית של תבניות טובות יותר
- אינטגרציה עם תהליך ההכשרה של Theme Builder
- זיכרון site_brief קבוע עבור מפגשים עתידיים

## אם השתמשת במצב בונה אתרים {#if-you-were-using-site-builder-mode}

### האתרים שלך בטוחים {#your-sites-are-safe}

- אתרים קיימים שנוצרו במצב בונה אתרים ממשיכים לעבוד
- אין אובדן נתונים או הפרעה באתר
- אתה יכול להמשיך לנהל את האתרים שלך כרגיל

### עבור ל-Setup Assistant Agent {#migrate-to-setup-assistant-agent}

להקמת אתר חדש או לשינויי תבנית, השתמש ב-Setup Assistant agent:

```
"Help me set up a new site"
```

או

```
"Start the Theme Builder onboarding"
```

ה-Setup Assistant agent מספק את אותה פונקציונליות עם גמישות רבה יותר.

## השוואה: Site Builder מול Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| תכונה | Site Builder (הוסר) | Setup Assistant (חדש) |
|---------|----------------------|----------------------|
| שיטת הגדרה | טופס מדריך (Wizard form) | שיחת Agent |
| בחירת תבנית | תבניות מוגדרות מראש | יצירה מותאמת אישית |
| התאמה אישית | אפשרויות מוגבלות | מערכת עיצוב מלאה |
| סיכום האתר (Site brief) | לא נשמר | זיכרון קבוע |
| מפגשים עתידיים | הגדרת מחדש | שימוש ב-site_brief שנשמר |
| גמישות | תהליך קבוע | שיחה אדפטיבית |

## מעבר ל-Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### עבור אתרים חדשים {#for-new-sites}

במקום להשתמש במצב בונה אתרים:

1. בקשה: "Help me set up a new site"
2. ה-Setup Assistant agent ינחה אותך דרך:
   - מטרת האתר ומטרותיו
   - קהל היעד
   - זהות המותג
   - יצירת תבנית
   - הגדרה ראשונית

### עבור אתרים קיימים {#for-existing-sites}

אם יש לך אתר קיים שנוצר במצב בונה אתרים:

1. אתה יכול להמשיך להשתמש בו כפי שהוא
2. כדי לעדכן את התבנית, בקש: "Redesign my site"
3. ה-Setup Assistant agent יעזור לך ליצור תבנית חדשה
4. נתוני האתר שלך נשארים ללא שינוי

### עבור שינויי תבנית {#for-theme-changes}

במקום בחירת התבנית של מצב בונה אתרים:

1. בקשה: "Change my theme"
2. ה-Setup Assistant agent י:
   - ישאל על העדפות העיצוב שלך
   - יפיק תבנית מותאמת אישית
   - יפעיל אותה באתר שלך

## ההבדלים המרכזיים {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. בחר תבנית
2. בחר תבנית (Theme)
3. הגדר הגדרות בסיסיות
4. סיום
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. תאר את מטרת האתר שלך
2. הגדר את קהל היעד שלך
3. בחר העדפות עיצוב
4. ה-Agent מייצר תבנית מותאמת אישית
5. ה-Agent מפעיל את התבנית
6. סיכום האתר נשמר למפגשים עתידיים
```

## היתרונות של Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### גמישות רבה יותר {#more-flexible}

- תאר את האתר שלך בשפה טבעית
- קבל המלצות מותאמות אישית
- התאמה לצרכים הספציפיים שלך

### התאמה אישית טובה יותר {#better-customization}

- יצירת תבניות מותאמות אישית
- החלטות מערכת עיצוב
- אסימוני עיצוב (Design tokens) קבועים

### זיכרון קבוע {#persistent-memory}

- ה-site_brief שלך נשמר
- ה-agents העתידיים מבינים את האתר שלך
- אין צורך לחזור על מידע ההגדרה

### תהליך עבודה משולב {#integrated-workflow}

- הכשרת Theme Builder
- מיומנות אסתטיקת מערכת העיצוב (Design System Aesthetics skill)
- בקרות נראות (Ability Visibility controls)
- כל העבודה יחד בצורה חלקה

## פתרון תקלות {#troubleshooting}

### אני לא מוצא את מצב בונה אתרים {#i-cant-find-site-builder-mode}

מצב בונה אתרים הוסר. השתמש ב-Setup Assistant agent במקום זאת:

```
"Help me set up a new site"
```

### אני רוצה ליצור מחדש אתר מ-Site Builder {#i-want-to-recreate-a-site-from-site-builder}

אתה יכול ליצור אותו מחדש באמצעות Setup Assistant agent:

1. בקשה: "Help me set up a new site"
2. תאר את מטרת העיצוב והאתר המקורי שלך
3. ה-agent ייצור תבנית דומה
4. ה-site_brief שלך יישמר לעיון עתידי

### האתר הקיים שלי מ-Site Builder לא עובד {#my-existing-site-builder-site-isnt-working}

אתרים קיימים שנוצרו במצב בונה אתרים ממשיכים לעבוד. אם אתה נתקל בבעיות:

1. ודא שהתבנית שלך עדיין פעילה
2. ודא שה-plugins שלך מופעלים
3. בדוק את יומני שגיאות של WordPress
4. צור קשר עם התמיכה אם הבעיות נמשכות

### האם אני עדיין יכול להשתמש בתבניות הישנות של Site Builder? {#can-i-still-use-my-old-site-builder-templates}

תבניות Site Builder אינן זמינות עוד. עם זאת:

- האתרים הקיימים שלך ממשיכים לעבוד
- אתה יכול ליצור אתרים דומים באמצעות Setup Assistant agent
- ה-Setup Assistant agent מספק אפשרויות התאמה אישית רבות יותר

## צעדים הבאים {#next-steps}

1. **עבור אתרים חדשים**: השתמש ב-Setup Assistant agent
2. **עבור אתרים קיימים**: המשך להשתמש בהם כפי שהם
3. **עבור שינויי תבנית**: בקש עזרה מה-Setup Assistant agent
4. **עבור זיקוק עיצוב**: השתמש במיומנות Design System Aesthetics skill

## נושאים קשורים {#related-topics}

- **Theme Builder Onboarding**: הגדרה מודרכת לתבניות מותאמות אישית
- **Setup Assistant Agent**: הקמת אתר מונחית על ידי Agent
- **Site Specification Skill**: הגדרת מטרות וקהל היעד של האתר שלך
- **Design System Aesthetics Skill**: זיקוק הזהות הוויזואלית של האתר שלך
