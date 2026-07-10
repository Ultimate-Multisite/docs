---
title: תפריטי אירוח
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# תפריטי אירוח {#hospitality-menus}

תכונת **תפריטי אירוח** מאפשרת ל-Theme Builder ליצור ולהטמיע דפי תפריט מובנים למזון ולמשקאות ישירות באתר ה-WordPress שלכם.

## סקירה כללית {#overview}

כעת, Theme Builder יכול ליצור דפי תפריט מקצועיים ומובנים לעסקים בתחום האירוח, כולל מסעדות, בתי קפה, ברים ושירותי קייטרינג. תפריטים אלה משולבים באופן מלא בעיצוב האתר שלכם וניתנים לעדכון וניהול בקלות.

## סוגי אירוח נתמכים {#supported-hospitality-types}

- **מסעדות** — תפריטי ארוחות מלאים
- **בתי קפה** — תפריטי קפה ומאכל קל
- **ברים ולונג'ים** — תפריטי משקאות ומאקשים
- **מאפיות** — תפריטי מאפים וטוסטים
- **שירותי קייטרינג** — אפשרויות תפריט לאירועים
- **Food Trucks** — תפריטי שירות מזון נייד
- **מבשלות וכרמי יין** — תפריטי משקאות עם תיאורים

## מבנה התפריט {#menu-structure}

### קטגוריות תפריט {#menu-categories}

התפריטים מאורגנים לקטגוריות:

- **מטעמים** — מנות ראשונות ומנות קטנות
- **מנות עיקריות** — המנות המרכזיות
- **תוספות** — מלווים וירקות
- **קינוחים** — ממתקים מתוקים
- **משקאות** — שתייה (אלכוהולי ולא אלכוהולי)
- **מיוחדים** — מנות מיוחדות יומיות או עונתיות

### פורמט פריט תפריט {#menu-item-format}

כל פריט תפריט כולל:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### שדות הפריט {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | שם המנה או המשקה |
| `description` | string | תיאור מפורט של הפריט |
| `price` | string | מחיר (מעוצב עם מטבע) |
| `dietary_info` | array | מאפיינים תזונתיים (טבעוני, ללא גלוטן וכו') |
| `allergens` | array | אלרגנים נפוצים (אגוזים, פירות ים וכו') |
| `availability` | string | מתי זמין (יומי, עונתי וכו') |

## יצירת תפריטי אירוח {#creating-hospitality-menus}

### שלב 1: מתן מידע על התפריט {#step-1-provide-menu-information}

ספרו ל-Theme Builder על התפריט שלכם:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### שלב 2: Theme Builder יוצר את התפריט {#step-2-theme-builder-generates-menu}

Theme Builder:

1. יוצר דף תפריט מובנה
2. מעצב אותו כך שיתאים לנושא (Theme) של האתר שלכם
3. מארגן את הפריטים לקטגוריות
4. מעצב מחירים ותיאורים
5. מוסיף מידע תזונתי ואלרגנים

### שלב 3: סקירה והתאמה אישית {#step-3-review-and-customize}

אתם יכולים:

1. לערוך פריטים ותמחור בתפריט
2. להוסיף או להסיר קטגוריות
3. לסדר מחדש פריטים בתוך הקטגוריות
4. לעדכן תיאורים ומידע תזונתי
5. להתאים את העיצוב והפריסה

## אפשרויות הצגת תפריט {#menu-display-options}

### דף תפריט מלא {#full-menu-page}

דף ייעודי המציג את התפריט המלא שלכם:

- מאורגן לפי קטגוריה
- ניתן לחיפוש ולסינון
- פריסה ידידותית להדפסה
- עיצוב מגיב למובייל

### ווידג'ט תפריט (Menu Widget) {#menu-widget}

הטמעת קטעי תפריט בדפים אחרים:

- פריטים מומלצים בדף הבית
- מיוחדים יומיים בסרגל הצד
- תפריט משקאות בדף הבר
- תצוגת קינוחים בתחתית העמוד (Footer)

### תפריט PDF {#menu-pdf}

יצירת תפריט PDF להורדה:

- עיצוב מקצועי
- איכות מוכנה להדפסה
- כולל תמונות ותיאורים
- קל לשיתוף ומייל

## מידע תזונתי ואלרגנים {#dietary-and-allergen-information}

### מאפיינים תזונתיים {#dietary-attributes}

סמון פריטים במידע תזונתי:

- **Vegan** — ללא מוצרי מן החי
- **Vegetarian** — ללא בשר
- **Gluten-Free** — בטוח למחליפי גלוטן
- **Dairy-Free** — ללא מוצרי חלב
- **Nut-Free** — ללא אגוזי מלך או בוטנים
- **Low-Carb** — פחמימות מופחתות
- **High-Protein** — עשיר בחלבון

### אזהרות אלרגנים {#allergen-warnings}

כלול אלרגנים נפוצים:

- **Nuts** — אגוזי מלך ובוטנים
- **Shellfish** — פירות ים ומינקיים
- **Fish** — כל מיני דגי
- **Dairy** — חלב ומוצרי חלב
- **Eggs** — ביצי עוף
- **Soy** — מוצרי סויה
- **Gluten** — חיטה ודגנים המכילים גלוטן
- **Sesame** — גרעיני ושמן שומשום

## ניהול תפריט {#menu-management}

### עדכון מחירים {#updating-prices}

עדכון מחירים בתפריט בקלות:

1. נווט לדף התפריט
2. לחץ על "Edit Menu"
3. עדכן מחירים עבור הפריטים
4. שמור את השינויים
5. השינויים מופיעים מיד באתר שלכם

### הוספת פריטים עונתיים {#adding-seasonal-items}

יצירת וריאציות תפריט עונתיות:

1. צור גרסה חדשה של התפריט
2. הוסף פריטים עונתיים
3. סמן פריטים כ"Seasonal"
4. קבע תאריכי זמינות
5. יוצג אוטומטית במהלך העונה

### ניהול מיוחדים {#managing-specials}

הצגת מיוחדים יומיים או שבועיים:

1. צור קטגוריה בשם "Specials"
2. הוסף פריטים עם תאריכי זמינות
3. הדגש את המיוחדים בדף הבית
4. עדכן מדי יום או מדי שבוע
5. ארכיב מיוחדים ישנים

## אינטגרציה עם Theme Builder {#integration-with-theme-builder}

כאשר משתמשים ב-Theme Builder עבור אתרי אירוח:

1. **Automatic menu detection** — מזהה אם אתם עסק מזון/משקאות
2. **Menu page creation** — יוצר דפי תפריט מקצועיים
3. **Design matching** — התפריטים תואמים לנושא (Theme) של האתר שלכם
4. **Mobile optimization** — התפריטים מוצגים יפה במובייל
5. **SEO optimization** — התפריטים ידידותיים למנועי חיפוש

## שיטות עבודה מומלצות {#best-practices}

### עיצוב תפריט {#menu-design}

- **ארגון ברור** — מבנה קטגוריות הגיוני
- **תיאורים קריאים** — מפתה ומעשיר במידע
- **תמחור עקבי** — מטבע ועיצוב ברורים
- **תמונות מקצועיות** — תמונות אוכל באיכות גבוהה
- **מרווח לבן (Whitespace)** — אל תעמיסו על הדף

### תוכן {#content}

- **תיאורים מדויקים** — תארו את הפריטים במדויק
- **הדגשת מיוחדים** — תנו למיוחדים לבלוט
- **ציון אלרגנים** — תמיד רשמו אלרגנים
- **עדכון קבוע** — שמרו מחירים ופריטים מעודכנים
- **שימוש בשפה מפתה** — תנו לפריטים להישמע טעימים

### נגישות {#accessibility}

- **גופנים קריאים** — השתמשו בפונטים ברורים וקריאים
- **ניגודיות מספקת** — ודאו שהטקסט קריא
- **תוויות תזונתיות** — סמנו בבירור אפשרויות תזונתיות
- **אזהרות אלרגנים** — הציגו אלרגנים באופן בולט
- **ידידותי למובייל** — בדקו בכל המכשירים

## דוגמאות {#examples}

### מבנה תפריט מסעדה {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### מבנה תפריט בית קפה {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## תכונות קשורות {#related-features}

- [Create Menu](../abilities/create-menu.md) — יצירת תפריטי ניווט
- [Design Direction](./design-direction.md) — התאמה אישית של עיצוב האתר שלכם
- [Discovery Interview](./discovery-interview.md) — תכנון מבנה האתר שלכם
