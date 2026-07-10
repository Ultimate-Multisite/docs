---
title: יכולות בונה תבניות
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# יכולות בניית תבניות: הקמה והפעלת תבניות בלוקים {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 מציג שתי יכולות עוצמתיות המאפשרות לך ליצור ולפרוס תבניות בלוקים מותאמות אישית ישירות מממשק הצ'אט.

## סקירה כללית {#overview}

היכולות **scaffold-block-theme** ו-**activate-theme** מאפשרות לסוכנים (Agents) לבצע את הפעולות הבאות:
- ליצור תבניות בלוקים שלמות, מוכנות לייצור, בהתבסס על המפרט שלך.
- להפעיל תבניות באתר שלך באופן אוטומטי, ללא התערבות ידנית.
- ליצור זהויות ויזואליות קוהרנטיות באמצעות החלטות עיצוב מודרכות.

## הקמת תבנית בלוקים (Scaffold Block Theme) {#scaffold-block-theme}

היכולת **scaffold-block-theme** יוצרת תבנית בלוקים חדשה של WordPress עם מבנה תבנית מלא, כולל:

- קובץ `theme.json` עם אסימוני עיצוב (design tokens).
- קבצי תבנית בלוקים (Block template files) עבור פריסות נפוצות.
- סגנונות ווריאציות של בלוקים מותאמים אישית.
- מטא-דאטה ותקריזות תמיכה של התבנית.

### איך להפעיל {#how-to-invoke}

בצ'אט שלך עם Superdav AI Agent, אתה יכול לבקש יצירת תבנית:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

הסוכן יבצע את הפעולות הבאות:
1. יאסוף את העדפות העיצוב שלך באמצעות שיחה.
2. יפיק את מבנה התבנית המלא.
3. ייצור את כל קבצי התבנית הנדרשים.
4. יכין את התבנית להפעלה.

### הפלט הצפוי {#expected-output}

כאשר היכולת מבוצעת בהצלחה, תראה:

- אישור שהתבנית הוקמה (scaffolded).
- שם התבנית והמיקום שלה.
- סיכום של אסימוני העיצוב שיושמו (צבעים, טיפוגרפיה, מרווחים).
- סטטוס מוכן להפעלה.

דוגמה לפלט:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## הפעלת תבנית (Activate Theme) {#activate-theme}

היכולת **activate-theme** מחליפה את האתר שלך לתבנית בלוקים שהוקמה לאחרונה או תבנית קיימת.

### איך להפעיל {#how-to-invoke-1}

לאחר הקמת תבנית, אתה יכול להפעיל אותה מיד:

```
"Activate the Modern Agency theme"
```

או להפעיל כל תבנית קיימת:

```
"Switch to the Twentytwentyfour theme"
```

### הפלט הצפוי {#expected-output-1}

כאשר ההפעלה מצליחה:

- אישור התבנית הפעילה.
- שם התבנית הקודמת (לצורך הפניה).
- כתובת האתר שבה התבנית פעילה כעת.
- כל הערות הגדרה ספציפיות לתבנית.

דוגמה לפלט:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## תהליך עבודה: הקמה והפעלה {#workflow-scaffold-and-activate}

תהליך עבודה טיפוסי משלב את שתי היכולות:

1. **בקשת יצירת תבנית**: "Create a block theme for my SaaS landing page"
2. **הסוכן מקים את התבנית**: מייצר קבצים ואסימוני עיצוב.
3. **סקירה וליטוש**: דנים בשינויים בעיצוב במידת הצורך.
4. **הפעלה**: "Activate the theme now"
5. **אימות**: מבקר באתר כדי לוודא שהעיצוב החדש פעיל.

## אסימוני עיצוב והתאמה אישית {#design-tokens-and-customization}

תבניות שהוקמו משתמשות באסימוני עיצוב של WordPress (דרך `theme.json`) עבור:

- **צבעים**: פלטת צבעים ראשית, משנית, הדגשה וניטרלית.
- **טיפוגרפיה**: משפחות גופנים, גדלים, משקלים וגובה שורה.
- **מרווחים**: קנה מידה של ריפוד (padding), שוליים (margin) ומרווחים (gap).
- **גבולות**: אסימוני רדיוס ורוחב.
- **צללים**: רמות גובה (elevation).

אסימונים אלה מרוכזים בקובץ `theme.json`, מה שהופך קל להתאים את מערכת העיצוב כולה מקובץ אחד.

## מגבלות והערות {#limitations-and-notes}

- תבניות מוקמות בנתיב `/wp-content/themes/` וחייבות לעקוב אחר קונבנציות השמות של WordPress.
- הפעלה דורשת הרשאות מתאימות באתר WordPress שלך.
- קוד PHP מותאם אישית בתבניות הוא מינימלי; השתמש בפלאגינים (plugins) לפונקציונליות מורכבת.
- תבניות בלוקים עובדות בצורה הטובה ביותר עם WordPress 5.9 ומעלה.

## פתרון תקלות {#troubleshooting}

**התבנית לא מופיעה לאחר ההקמה**
- ודא שספריית התבניות קיימת ויש לה הרשאות תקינות.
- בדוק ש-`theme.json` הוא JSON תקין.
- ודא ששם התבנית אינו מתנגש עם תבניות קיימות.

**ההפעלה נכשלת**
- אשר שיש לך הרשאות מנהל (administrator).
- בדוק שהספרייה של התבנית קריאה עבור WordPress.
- עיין ביומני השגיאות של WordPress לקבלת פרטים.

**אסימוני עיצוב אינם מיושמים**
- ודא שתחביר `theme.json` נכון.
- נקה כל פלאגין קאשינג (caching).
- בדוק שהגרסה של WordPress שלך תומכת באסימונים שאתה משתמש בהם.

## צעדים הבאים {#next-steps}

לאחר הפעלת התבנית, תוכל:
- להשתמש ביכולת **Design System Aesthetics** כדי ללטש טיפוגרפיה, צבעים ומרווחים.
- להתאים סגנונות בלוקים בודדים דרך עורך הבלוקים של WordPress.
- להוסיף CSS מותאם אישית לקובץ `style.css` של התבנית.
- ליצור תבניות בלוקים מותאמות אישית לסוגי דפים ספציפיים.
