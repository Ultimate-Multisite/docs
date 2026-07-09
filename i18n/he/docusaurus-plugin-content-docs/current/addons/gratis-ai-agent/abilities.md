---
title: מדריך עזר ליכולות
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# הפניית יכולות

יכולות הן הפעולות האטומיות ש־Gratis AI Agent יכול להפעיל בהתקנת WordPress שלך. כל יכולת היא מחלקת PHP רשומה שחושפת סכמת JSON — הסוכן קורא את הסכמה הזו בזמן ריצה כדי להבין אילו פרמטרים נדרשים ומה היכולת מחזירה.

עמוד זה מתעד את כל היכולות שמגיעות עם Gratis AI Agent v1.9.0.

---

## סוגי פוסטים מותאמים אישית

יכולות אלה מנהלות סוגי פוסטים מותאמים אישית (CPTs) שנרשמו דרך הסוכן. הרישומים נשמרים בטבלת האפשרויות של WordPress כך שהם שורדים השבתה והפעלה מחדש של plugin.

### `register_post_type`

רושמת סוג פוסט מותאם אישית חדש.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מפתח סוג הפוסט (עד 20 תווים, ללא אותיות רישיות, ללא רווחים) |
| `singular_label` | string | כן | שם יחיד קריא לבני אדם, למשל `Portfolio Item` |
| `plural_label` | string | כן | שם רבים קריא לבני אדם, למשל `Portfolio Items` |
| `public` | boolean | לא | האם סוג הפוסט נגיש לציבור. ברירת מחדל `true` |
| `supports` | array | לא | תכונות לתמיכה: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. ברירת מחדל `["title","editor"]` |
| `has_archive` | boolean | לא | האם עמוד ארכיון לסוג הפוסט מופעל. ברירת מחדל `false` |
| `menu_icon` | string | לא | מחלקת Dashicons או URL עבור סמל תפריט הניהול. ברירת מחדל `"dashicons-admin-post"` |
| `rewrite_slug` | string | לא | slug של URL עבור סוג הפוסט. ברירת המחדל היא `slug` |

**דוגמה**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**מחזיר** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

מחזירה את כל סוגי הפוסטים המותאמים אישית שנרשמו על ידי הסוכן.

**פרמטרים** — אין

**מחזיר**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

מבטלת רישום של סוג פוסט מותאם אישית שנרשם בעבר על ידי הסוכן. פוסטים קיימים מסוג זה נשארים במסד הנתונים אך אינם נגישים עוד דרך סוג הפוסט.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מפתח סוג הפוסט להסרה |

**מחזיר** `{ "success": true, "slug": "portfolio" }`

---

## טקסונומיות מותאמות אישית

יכולות אלה מנהלות טקסונומיות מותאמות אישית. כמו CPTs, רישומי טקסונומיה נשמרים.

### `register_taxonomy`

רושמת טקסונומיה מותאמת אישית חדשה.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מפתח הטקסונומיה (עד 32 תווים) |
| `singular_label` | string | כן | שם יחיד קריא לבני אדם, למשל `Project Category` |
| `plural_label` | string | כן | שם רבים קריא לבני אדם, למשל `Project Categories` |
| `post_types` | array | כן | slugs של סוגי פוסטים שאליהם יש לצרף את הטקסונומיה הזו |
| `hierarchical` | boolean | לא | `true` עבור סגנון קטגוריה, `false` עבור סגנון תגית. ברירת מחדל `true` |
| `public` | boolean | לא | האם מונחים נגישים לציבור. ברירת מחדל `true` |
| `rewrite_slug` | string | לא | slug של URL עבור הטקסונומיה. ברירת המחדל היא `slug` |

**דוגמה**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**מחזיר** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

מחזירה את כל הטקסונומיות המותאמות אישית שנרשמו על ידי הסוכן.

**פרמטרים** — אין

**מחזיר**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

מבטלת רישום של טקסונומיה מותאמת אישית שנרשמה בעבר על ידי הסוכן.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מפתח הטקסונומיה להסרה |

**מחזיר** `{ "success": true, "slug": "project-category" }`

---

## מערכת עיצוב

יכולות מערכת העיצוב משנות את ההצגה החזותית של אתר ה־WordPress — החל מ־CSS מותאם אישית ועד תבניות בלוקים ולוגו האתר.

### `inject_custom_css`

מוסיפה CSS ל־`<head>` של האתר באמצעות `wp_add_inline_style`. ה־CSS נשמר באפשרות `gratis_ai_agent_custom_css` ומוסר מהתור בצורה נקייה כאשר היכולת מאופסת.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `css` | string | כן | CSS תקין להזרקה |
| `label` | string | לא | תווית קריאה לבני אדם עבור בלוק CSS זה, לשימוש ביומני ניפוי שגיאות. ברירת מחדל `"agent-injected"` |
| `replace` | boolean | לא | אם `true`, מחליף את כל ה־CSS שהוזרק בעבר. ברירת מחדל `false` (מוסיף לסוף) |

**דוגמה**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**מחזיר** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

רושמת תבנית בלוקים לשימוש חוזר בספריית התבניות של WordPress.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מזהה תבנית, למשל `gratis/hero-dark` |
| `title` | string | כן | שם תבנית קריא לבני אדם שמוצג בעורך |
| `content` | string | כן | סימון בלוקים מסודר בסריאליזציה (HTML) עבור התבנית |
| `categories` | array | לא | slugs של קטגוריות תבנית, למשל `["featured", "hero"]` |
| `description` | string | לא | תיאור קצר שמוצג בבורר התבניות |
| `keywords` | array | לא | מילות מפתח לחיפוש |

**מחזיר** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

מציגה את כל תבניות הבלוקים שנרשמו על ידי הסוכן.

**פרמטרים** — אין

**מחזיר**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo`

מגדיר את לוגו האתר של WordPress למזהה קובץ מצורף נתון או לכתובת URL של תמונה מרוחקת. כאשר מסופקת כתובת URL, התמונה יורדת ומיובאת אל ספריית המדיה.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `attachment_id` | integer | לא | מזהה של קובץ מצורף קיים בספריית המדיה |
| `url` | string | לא | כתובת URL של תמונה מרוחקת לייבוא ולהגדרה כלוגו |

יש לספק אחד מבין `attachment_id` או `url`.

**מחזיר** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

מחיל ערכת צבע/טיפוגרפיה מוגדרת מראש בעלת שם על `theme.json` (או `global-styles`) של ערכת העיצוב הפעילה. הערכות המוגדרות מראש הן חבילות שנאצרו ומתוחזקות על ידי צוות Gratis AI Agent.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `preset` | string | כן | שם הערכה המוגדרת מראש, למשל `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | לא | אם `true`, מזג עם ערכים קיימים במקום להחליף. ברירת המחדל היא `false` |

**ערכות מוגדרות מראש זמינות**

| ערכה מוגדרת מראש | תיאור |
|---|---|
| `minimal-dark` | רקע כמעט שחור, טקסט לבן, צבע הדגשה יחיד |
| `warm-editorial` | רקע חמים בגוון אוף-וייט, כותרות סריפיות, צבעי הדגשה אדמתיים |
| `corporate-blue` | פלטת כחול נייבי ולבן עם טיפוגרפיה מקצועית |
| `vibrant-startup` | גרדיאנטים בהירים, פינות מעוגלות, כתב סנס-סריפי מודרני |
| `classic-blog` | גוונים אפורים ניטרליים, גובה שורה נוח, מרווחי פריסה מסורתיים |

**מחזיר** `{ "success": true, "preset": "minimal-dark" }`

---

## סגנונות גלובליים

יכולות סגנונות גלובליים קוראות וכותבות ערכי theme.json דרך API הסגנונות הגלובליים של WordPress, ומשפיעות על כל הבלוקים והתבניות בכל האתר.

### `get_global_styles`

מחזיר את תצורת הסגנונות הגלובליים הנוכחית.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `path` | string | לא | מצביע JSON לערך מסוים, למשל `/color/palette` או `/typography/fontSizes`. מחזיר את האובייקט כולו אם הושמט. |

**מחזיר** את אובייקט הסגנונות הגלובליים המלא או את הערך ב-`path`.

---

### `set_global_styles`

מעדכן ערך אחד או יותר בתצורת הסגנונות הגלובליים.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `path` | string | כן | מצביע JSON לערך שיש להגדיר, למשל `/color/palette` |
| `value` | any | כן | הערך החדש |

**דוגמה** — הוספת צבע לפלטה

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**מחזיר** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

מאפס את כל שינויי הסגנונות הגלובליים שהוחלו על ידי הסוכן, ומשחזר את ברירות המחדל של ערכת העיצוב.

**פרמטרים** — אין

**מחזיר** `{ "success": true }`

---

## תפריטי ניווט

יכולות תפריט ניווט יוצרות ומנהלות תפריטי ניווט של WordPress ואת הפריטים שלהם.

### `create_menu`

יוצר תפריט ניווט חדש של WordPress.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `name` | string | כן | שם התפריט, למשל `Primary Navigation` |
| `location` | string | לא | מיקום בערכת העיצוב שיש להקצות אליו תפריט זה, למשל `primary` |

**מחזיר** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

משנה שם של תפריט או מקצה אותו מחדש למיקום בערכת העיצוב.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `menu_id` | integer | כן | מזהה התפריט לעדכון |
| `name` | string | לא | שם תפריט חדש |
| `location` | string | לא | מיקום בערכת העיצוב להקצאה או להקצאה מחדש |

**מחזיר** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

מוסיף פריט לתפריט ניווט קיים.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `menu_id` | integer | כן | מזהה תפריט היעד |
| `type` | string | כן | סוג הפריט: `custom`, `post_type`, או `taxonomy` |
| `title` | string | לא | תווית עבור פריט התפריט (נדרשת עבור סוג `custom`) |
| `url` | string | לא | כתובת URL עבור פריטי `custom` |
| `object_id` | integer | לא | מזהה פוסט או מזהה מונח עבור פריטי `post_type`/`taxonomy` |
| `parent_id` | integer | לא | מזהה פריט תפריט שתחתיו יש לקנן פריט זה |
| `position` | integer | לא | מיקום מבוסס אפס בתפריט |

**מחזיר** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

מסיר פריט מתפריט ניווט.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `item_id` | integer | כן | מזהה פריט התפריט להסרה |

**מחזיר** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

מציג את כל תפריטי הניווט של WordPress, כולל המיקומים בערכת העיצוב שהוקצו להם.

**פרמטרים** — אין

**מחזיר**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## ניהול אפשרויות

יכולות אפשרויות קוראות וכותבות אפשרויות WordPress דרך `get_option` / `update_option`. רשימת חסימה בטיחותית מובנית מונעת שינוי מקרי של הגדרות קריטיות.

### `get_option`

קורא אפשרות WordPress.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `option_name` | string | כן | מפתח האפשרות, למשל `blogname` |

**מחזיר** `{ "option_name": "blogname", "value": "My Site" }`

מחזיר שגיאה אם `option_name` נמצא ברשימת החסימה הבטיחותית.

---

### `set_option`

כותב אפשרות WordPress.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `option_name` | string | כן | מפתח האפשרות |
| `value` | any | כן | הערך החדש (מסודר אוטומטית עבור מערכים/אובייקטים) |
| `autoload` | string | לא | `"yes"` או `"no"`. ברירת המחדל משמרת את הגדרת autoload הקיימת |

מחזיר שגיאה אם `option_name` נמצא ברשימת החסימה לבטיחות.

**מחזיר** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

מוחק אפשרות WordPress.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `option_name` | string | כן | מפתח האפשרות למחיקה |

מחזיר שגיאה אם `option_name` נמצא ברשימת החסימה לבטיחות.

**מחזיר** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

מציג אפשרויות WordPress שתואמות לתבנית.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `pattern` | string | לא | תבנית SQL LIKE לסינון שמות אפשרויות, למשל `gratis_%`. מחזיר את כל האפשרויות אם הושמט (השתמש בזהירות במסדי נתונים גדולים). |
| `limit` | integer | לא | מספר תוצאות מרבי. ברירת מחדל `50`, מקסימום `500` |

**מחזיר**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ניהול תוכן

יכולות ניהול תוכן יוצרות ועורכות פוסטים ועמודים של WordPress. מזהי פוסטים מוחזרים כדי ששלבים עוקבים בתוכניות מרובות יכולות יוכלו להפנות לתוכן שנוצר.

### `create_post`

יוצר פוסט WordPress חדש, עמוד, או רשומת סוג פוסט מותאם אישית.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `title` | string | כן | כותרת הפוסט |
| `content` | string | לא | גוף הפוסט — מקבל טקסט רגיל, HTML, או סימון בלוקים מסודר בסדרה |
| `status` | string | לא | `draft`, `publish`, `pending`, `private`. ברירת מחדל `draft` |
| `post_type` | string | לא | מזהה סוג פוסט, למשל `post`, `page`, או כל CPT רשום. ברירת מחדל `post` |
| `excerpt` | string | לא | תקציר קצר שמוצג בארכיונים ובתוצאות חיפוש |
| `categories` | array | לא | מערך של שמות קטגוריות או מזהים להקצאה |
| `tags` | array | לא | מערך של שמות תגיות או מזהים להקצאה |
| `author` | integer | לא | מזהה משתמש WordPress להגדרה כמחבר הפוסט. ברירת המחדל היא המשתמש הנוכחי |
| `date` | string | לא | תאריך פרסום בפורמט ISO 8601, למשל `2026-05-01T09:00:00` |
| `page_template` | string | לא | קובץ תבנית להקצאה לפוסט או לעמוד הזה, למשל `page-full-width.php`. רלוונטי רק כאשר `post_type` הוא `page` או CPT שתומך בתבניות עמוד. |

**דוגמה**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**מחזיר** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

מעדכן פוסט או עמוד WordPress קיים.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `post_id` | integer | כן | מזהה הפוסט לעדכון |
| `title` | string | לא | כותרת פוסט חדשה |
| `content` | string | לא | גוף פוסט חדש |
| `status` | string | לא | סטטוס חדש: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | לא | תקציר חדש |
| `categories` | array | לא | החלף את רשימת הקטגוריות המלאה במערך זה של שמות או מזהים |
| `tags` | array | לא | החלף את רשימת התגיות המלאה במערך זה של שמות או מזהים |
| `page_template` | string | לא | קובץ תבנית חדש להקצאה לפוסט או לעמוד הזה, למשל `page-full-width.php`. העבר מחרוזת ריקה כדי להסיר את הקצאת התבנית ולחזור לברירת המחדל של התבנית. |

**דוגמה** — שנה תבנית לאחר היצירה

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**מחזיר** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

יוצר מספר פוסטים בקריאת יכולת יחידה, ומצמצם סבבי תקשורת במהלך בניית אתרים או ייבוא תוכן בכמות גדולה. הפוסטים נוצרים ברצף; אם אחד נכשל, האחרים ממשיכים והכשל מדווח במערך התוצאות.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `posts` | array | כן | מערך של אובייקטי פוסט, שכל אחד מקבל את אותם פרמטרים כמו `create_post` |
| `stop_on_error` | boolean | לא | אם `true`, הפסק עיבוד לאחר הכשל הראשון. ברירת מחדל `false` |

**דוגמה**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**מחזיר**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

מקצה תמונה ראשית (תמונה ממוזערת של פוסט) לפוסט או לעמוד קיים. מקבל מזהה קובץ מצורף קיים מספריית המדיה או URL של תמונה מרוחקת; כאשר מסופק URL, התמונה מורדת ומיובאת אוטומטית.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `post_id` | integer | כן | מזהה הפוסט או העמוד לעדכון |
| `attachment_id` | integer | לא | מזהה של קובץ מצורף קיים מספריית המדיה |
| `url` | string | לא | URL של תמונה מרוחקת לייבוא ולהגדרה כתמונה הראשית |
| `alt_text` | string | לא | טקסט חלופי להחלה על הקובץ המצורף אם הוא מיובא מ-URL |

יש לספק אחד מבין `attachment_id` או `url`.

**מחזיר** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

יוצר טופס יצירת קשר באמצעות תוסף הטפסים הפעיל (Contact Form 7, WPForms, Fluent Forms, או Gravity Forms, בהתאם למה שמותקן). מחזיר shortcode שניתן להטמיע בכל פוסט או עמוד.

**פרמטרים**

| פרמטר | Type | נדרש | תיאור |
|---|---|---|---|
| `title` | string | כן | שם הטופס שמוצג בממשק הניהול של תוסף הטפסים |
| `fields` | array | כן | רשימה מסודרת של שדות הטופס (ראו אובייקט שדה להלן) |
| `recipient` | string | לא | כתובת אימייל לקבלת שליחות. ברירת המחדל היא אימייל המנהל של WordPress |
| `subject` | string | לא | שורת נושא האימייל. תומכת במצייני המיקום `[your-name]` ו־`[your-subject]` בעת שימוש ב־Contact Form 7 |
| `confirmation_message` | string | לא | הודעה שמוצגת לאחר שליחה מוצלחת. ברירת מחדל: `"Thank you for your message. We'll be in touch soon."` |

**אובייקט שדה**

| מפתח | Type | נדרש | תיאור |
|---|---|---|---|
| `name` | string | כן | שם שדה פנימי / מפתח מכונה |
| `label` | string | כן | תווית קריאה לאדם שמוצגת בטופס |
| `type` | string | כן | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | לא | האם חובה למלא את השדה לפני השליחה. ברירת מחדל `false` |
| `options` | array | לא | אפשרויות עבור שדות `select`, `checkbox` ו־`radio` |
| `placeholder` | string | לא | טקסט מציין מיקום עבור קלטים מסוג טקסט |

**דוגמה**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**מחזיר**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## סקירה חזותית

יכולות סקירה חזותית מאפשרות לסוכן ללכוד צילומי מסך של עמודים חיים ולנתח אותם, וכך לאפשר סקירת עיצוב אוטונומית, השוואות לפני/אחרי ובדיקות רגרסיה חזותית ללא צורך בתוסף דפדפן כלשהו.

### `capture_screenshot`

לוכד צילום מסך של עמוד WordPress בכתובת URL נתונה באמצעות דפדפן ללא ממשק גרפי בצד השרת. התמונה נשמרת בספריית המדיה ומוחזרת כתובת URL של CDN.

**פרמטרים**

| פרמטר | Type | נדרש | תיאור |
|---|---|---|---|
| `url` | string | כן | כתובת URL מלאה של העמוד לצילום מסך, למשל `https://example.com/about/` |
| `width` | integer | לא | רוחב אזור התצוגה בפיקסלים. ברירת מחדל `1280` |
| `height` | integer | לא | גובה אזור התצוגה בפיקסלים. ברירת מחדל `800` |
| `full_page` | boolean | לא | לכידת העמוד המלא הניתן לגלילה במקום אזור התצוגה בלבד. ברירת מחדל `false` |
| `delay_ms` | integer | לא | מספר מילישניות להמתנה לאחר טעינת העמוד לפני הלכידה, שימושי לתוכן מונפש. ברירת מחדל `500` |
| `label` | string | לא | תווית קריאה לאדם הנשמרת עם הקובץ המצורף בספריית המדיה |

**מחזיר**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

מקבל שני צילומי מסך ומחזיר ציון הבדל חזותי וכן תמונת הבדל שמדגישה אזורים שהשתנו. שימושי לאישור ששינוי עיצוב הניב את התוצאה הצפויה או לזיהוי רגרסיות לא מכוונות.

**פרמטרים**

| פרמטר | Type | נדרש | תיאור |
|---|---|---|---|
| `before_url` | string | כן | כתובת URL של העמוד ללכידה כמצב "לפני" |
| `after_url` | string | כן | כתובת URL של העמוד ללכידה כמצב "אחרי". יכולה להיות אותה כתובת URL אם משווים לאורך זמן |
| `width` | integer | לא | רוחב אזור התצוגה עבור שתי הלכידות. ברירת מחדל `1280` |
| `threshold` | float | לא | סף הבדל פיקסלים (0.0–1.0). פיקסלים בתוך סבילות זו נחשבים ללא שינוי. ברירת מחדל `0.1` |

**מחזיר**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` של `0.0` פירושו שאין שינוי גלוי; `1.0` פירושו שכל פיקסל השתנה.

---

### `review_page_design`

לוכד צילום מסך של עמוד ושולח אותו למודל השפה לניתוח חזותי. מחזיר הערכה מובנית המכסה פריסה, טיפוגרפיה, שימוש בצבעים ושיקולי נגישות.

**פרמטרים**

| פרמטר | Type | נדרש | תיאור |
|---|---|---|---|
| `url` | string | כן | כתובת URL מלאה של העמוד לסקירה |
| `focus` | string | לא | רשימה מופרדת בפסיקים של תחומי סקירה להדגשה: `layout`, `typography`, `colour`, `accessibility`, `mobile`. ברירת מחדל: כל התחומים |
| `width` | integer | לא | רוחב אזור התצוגה. ברירת מחדל `1280` |

**מחזיר**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## יכולות ניתנות להתקנה

מרשם היכולות הניתנות להתקנה מאפשר להרחיב את הסוכן עם חבילות יכולות נוספות המופצות כתוספי WordPress. כל חבילה רושמת יכולת אחת או יותר באמצעות API היכולות הסטנדרטי.

### `list_available_abilities`

מחזיר את הקטלוג של חבילות יכולות הזמינות להתקנה מהמרשם.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `category` | string | לא | סינון לפי קטגוריה: `ecommerce`, `seo`, `media`, `social`, `developer` |

**מחזיר**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

מוריד ומפעיל חבילת יכולת מהרישום.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `slug` | string | כן | מזהה slug של plugin של חבילת יכולת |

**מחזיר** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

מתשאל את רישום היכולות כדי למצוא את ה-plugin הטוב ביותר עבור מקרה שימוש מתואר, ובאופן אופציונלי מתקין אותו.

**פרמטרים**

| פרמטר | סוג | נדרש | תיאור |
|---|---|---|---|
| `description` | string | כן | תיאור בשפה טבעית של הפונקציונליות הרצויה |
| `install` | boolean | לא | אם `true`, מתקין מיד את ה-plugin המומלץ. ברירת המחדל היא `false` |

**דוגמה**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**מחזיר**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
