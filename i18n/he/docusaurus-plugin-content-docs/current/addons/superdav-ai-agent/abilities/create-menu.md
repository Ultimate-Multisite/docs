---
title: צור תפריט
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# יצירת תפריט

יכולת **יצירת תפריט** יוצרת תפריטי ניווט של WordPress ותומכת בתיוג ניווט נפרד מטקסט המאפיין את העמוד.

## סקירה כללית {#overview}

יכולת זו מרחיבה את פונקציונליות יצירת התפריטים הסטנדרטית על ידי הוספת האפשרות לציין פרמטר `navigation_label`. זה מאפשר לך ליצור תפריטים שבהם התווית המוצגת בניווט שונה מטקסט העמוד, ומעניק גמישות רבה יותר במבנה האתר ובחוויית המשתמש.

## פרמטרים {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | שם התפריט, לדוגמה: `Primary Navigation` |
| `location` | string | No | מיקום התבנית (Theme location) אליו יש להקצות תפריט זה, לדוגמה: `primary` |
| `navigation_label` | string | No | התווית שיוצג בניווט (שונה מטקסט העמוד) |

## ערך מוחזר (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## תווית ניווט מול טקסט עמוד {#navigation-label-vs-page-title}

הפרמטר `navigation_label` מאפשר לך להפריד בין שם התפריט הפנימי לבין התווית המוצגת למשתמשים:

- **`name`** — מזהה התפריט הפנימי שבו משתמש WordPress (לדוגמה: "Primary Navigation")
- **`navigation_label`** — התווית המוצגת למבקרים באתר בניווט (לדוגמה: "Main Menu")

זה שימושי כאשר:
- אמנויות הניסוח הפנימיות שלך שונות מהתוויות הנראות למשתמשים
- אתה רוצה תווית קצרה יותר בניווט מאשר בלוח הניהול
- אתה צריך לתמוך במספר שפות עם אורכי תווית שונים
- אתה בונה תפריטים לאזורים גיאוגרפיים או קבוצות משתמשים ספציפיות

## דוגמאות שימוש {#usage-examples}

### דוגמה 1: תפריט פשוט עם תווית ניווט {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### דוגמה 2: תפריט למיקום תבנית ספציפי {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## אינטגרציה עם Theme Builder {#integration-with-theme-builder}

כאשר משתמשים ב-Theme Builder, יכולת יצירת התפריט:

1. מזהה אוטומטית את מיקומי התפריט הזמינים בתבנית
2. יוצרת תפריטים עם תווית ניווט מתאימה לעיצוב שלך
3. מקצה תפריטים למיקומי התבנית הנכונים
4. תומכת בהוספת פריטי תפריט לאחר היצירה

## יכולות קשורות {#related-abilities}

- **`add_menu_item`** — הוספת פריטים לתפריט קיים
- **`update_menu`** — שינוי שם תפריט או הקצאתו מחדש למיקום תבנית
- **`delete_menu`** — הסרת תפריט מהאתר שלך

## שיטות עבודה מומלצות {#best-practices}

- **השתמש בתוויות ניווט ברורות** — שמור על תווית תמציתית ותיאורית עבור המשתמשים
- **התאם מיקומי תבנית** — הקצה תפריטים למיקום התבנית הנכון להצגה תקינה
- **תכנן את מבנה התפריט** — החלט על ההיררכיה של התפריט לפני יצירת הפריטים
- **בדוק תגובתיות** — ודא שהתפריטים מוצגים כראוי במכשירים ניידים
- **הקם תווית מקומית** — השתמש בתוויות ניווט שונות עבור גרסאות שפה שונות

## מגבלות {#limitations}

- תווית הניווט היא להצגה בלבד; ה-`name` הפנימי עדיין משמש לזיהוי ב-WordPress
- תמיכת תבניות משתנה; לא כל התבניות תומכות בכל מיקומי התפריט
- יש להוסיף פריטי תפריט בנפרד לאחר יצירת התפריט
- שינוי תווית הניווט דורש עדכון של התפריט כולו

## יכולות קשורות {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — יצירת לוגואים לכותרת האתר שלך
- [Validate Palette Contrast](./validate-palette-contrast.md) — וידוא סכמות צבע נגישות
