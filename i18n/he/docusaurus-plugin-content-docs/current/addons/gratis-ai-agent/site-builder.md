---
title: תזמיון בונה אתרים גרסה 2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# מתזמן בניית אתרים v2

מתזמן בניית אתרים v2 (שנוסף ב-Gratis AI Agent v1.4.0) הוא המנוע שמפעיל יצירת אתרים מרובת שלבים. כשאתה מבקש מהאייג'נט "לבנות אתר מסעדה" או "ליצור פורטפוליו עם בלוג", המתזמן מפרק את המטרה ברמה הגבוהה הזו ל**תוכנית** מובנית, מגלה אילו תוספים נדרשים כדי להשלים אותה, מבצע כל שלב ברצף, עוקב אחר ההתקדמות ומצליח להתאושש משגיאות באופן אוטונומי.

---

## איך זה עובד

### 1. יצירת תוכנית (Plan Generation)

כאשר האייג'נט מקבל הנחיית בניית אתר, הוא קורא ליכולת `create_site_plan` כדי לייצר **תוכנית אתר** בפורמט JSON. התוכנית מתארת:

- **מטרה (Goal)** — מה האתר המוגמר אמור לעשות.
- **שלבים (Phases)** — קבוצות שלבים מסודרים (לדוגמה: _הגדרה_, _סוגי תוכן_, _עיצוב_, _תוכן_).
- **צעדים (Steps)** — קריאות יכולת (ability) בודדות בתוך כל שלב.
- **דרישות תוספים (Plugin requirements)** — תוספים שחייבים להיות פעילים כדי ששלבים מסוימים ירוצו.
- **תוכניות גיבוי (Fallbacks)** — צעדים חלופיים אם שלב ראשי נכשל.

**דוגמה לתוכנית (מקוטעת)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. גילוי תוספים (Plugin Discovery)

לפני שהביצוע מתחיל, המתזמן סורק את `plugin_requirements` של התוכנית ומוודא אילו תוספים כבר פעילים. עבור תוספים חסרים, הוא:

1. מחפש ברישום באמצעות `recommend_plugin` את ההתאמה הטובה ביותר.
2. מבקש מהאייג'נט לאשר את ההמלצה.
3. מפעיל התקנה אם אושר (או אם ההתקנה האוטומטית מופעלת בהגדרות).

כשלים בגילוי תוספים אינם קריטיים — המתזמן מסמן את השלבים המושפעים כ־`skipped` (נדלג עליהם) וממשיך עם שאר התוכנית.

### 3. ביצוע תוכנית (Plan Execution)

המתזמן קורא ל־`execute_site_plan` עם מזהה התוכנית. הביצוע מתבצע שלב אחר שלב, שלב אחר שלב:

- **הפניות של צעדים** (`__ref:`): צעדים יכולים להפנות לפלט של צעדים קודמים. בדוגמה לעיל, `__ref:create_menu.menu_id` מומר ל־`menu_id` שהוחזר מהשלב `create_menu`.
- **שלבים מקבילים (Parallel steps)**: צעדים באותו שלב שאין ביניהם תלויות נשלחים במקביל כאשר הדגל `parallel` מוגדר.
- **פקיעת זמן של צעד (Step timeout)**: לכל צעד יש פקיעת זמן אישית (ברירת מחדל: הגדרת `Ability Timeout`). צעד שפקע בזמן מסומן כ־`failed` והתוכנית ממשיכה.

### 4. מעקב אחר התקדמות (Progress Tracking)

הקרא ל־`get_plan_progress` בכל עת כדי לבדוק את סטטוס הביצוע:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

משתמשי WP-CLI יכולים לעקוב אחר ההתקדמות באמצעות:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. התאוששות משגיאות (Error Recovery)

כאשר צעד נכשל, המתזמן בודק אם קיימת **תוכנית גיבוי (fallback)** שהוגדרה בתוכנית:

- **תוכנית גיבוי זמינה (Fallback available)**: מנסים מיד את שלב הגיבוי. אם הוא מצליח, הביצוע ממשיך. אם גם הוא נכשל, הצעד מסומן כ־`failed` והביצוע ממשיך עם הצעד הבא.
- **אין תוכנית גיבוי (No fallback)**: הצעד מסומן כ־`failed`. צעדים שאינם קריטיים נדלגים עליהם; צעדים קריטיים (מסומנים כ־`required: true`) עוצרים את השלב הנוכחי ומפעילים ניסיון התאוששות ברמת השלב.

האייג'נט מדווח על כל הכשלים בסיכום התוכנית הסופי ועשוי להציע צעדי תיקון ידניים עבור שגיאות שאינן ניתנות להתאוששות.

---

## יכולות תוכנית אתר (Site Plan Abilities)

### `create_site_plan`

מייצר תוכנית אתר מובנית מתיאור מטרה בשפה טבעית.

**פרמטרים**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | תיאור בשפה טבעית של אתר האתר הרצוי |
| `style` | string | No | העדפת סגנון ויזואלי: `minimal`, `bold`, `professional`, `playful`. ברירת מחדל: האייג'נט בוחר בהתבסס על המטרה |
| `plugins` | array | No | סלוגים של תוספים להכללה בתוכנית. המתזמן מוסיף תוספים נדרשים אוטומטית. |
| `dry_run` | boolean | No | אם `true`, מחזיר את תוכנית ה-JSON ללא שמירה או ביצוע שלה. ברירת מחדל `false` |

**מחזיר** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

מתחיל בביצוע תוכנית אתר שנוצרה קודם לכן.

**פרמטרים**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | מזהה התוכנית לביצוע |
| `auto_install_plugins` | boolean | No | אם `true`, מתקין אוטומטית תוספים נדרשים ללא אישור. ברירת מחדל `false` |
| `max_retries` | integer | No | מספר הניסיונות לביצוע צעד שנכשל לפני המעבר להמשך. ברירת מחדל `1` |

**מחזיר** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

מחזיר את סטטוס הביצוע הנוכחי של תוכנית אתר.

**פרמטרים**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | מזהה התוכנית לבדיקה |

**מחזיר** אובייקט ההתקדמות המתואר ב[מעקב אחר התקדמות](#4-מעקב-אחר-התקדמות) לעיל.

---

### `handle_plan_error`

פותר ידנית צעד שנכשל וממשיך את ביצוע התוכנית מהצעד הבא. השתמש בכלי זה כאשר ההתאוששות האוטומטית לא הייתה אפשרית ואתה רוצה להתערב.

**פרמטרים**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | מזהה התוכנית |
| `step_id` | string | Yes | מזהה הצעד שנכשל |
| `resolution` | string | Yes | אחד מ־`skip` (נדלג והמשך), `retry` (מנסה שוב מיד), או `mark_done` (מטפל כאילו הצליח בלי להריץ מחדש) |

**מחזיר** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## השוואה בין v1 ל-v2

| Feature | v1 | v2 |
|---|---|---|
| תוכניות מרובות שלבים | לא | כן |
| הפניות פלט של צעדים (`__ref:`) | לא | כן |
| גילוי תוספים | ידני | אוטומטי |
| API למעקב התקדמות | לא | כן |
| התאוששות משגיאות | כשל והפסק | תוכנית גיבוי + המשך |
| ביצוע שלבים מקבילים | לא | כן (אופציונלי לפי שלב) |
| פקודות תוכנית WP-CLI | לא | כן |
| אינטגרציית Benchmark | לא | כן (`q-restaurant-website`) |

---

## פקודות תוכנית WP-CLI

### `wp gratis-ai-agent plan create`

מייצר תוכנית אתר מתיאור מטרה.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

מבצע תוכנית שנוצרה קודם לכן.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

מציג את ההתקדמות הנוכחית עבור תוכנית שמבוצעת או הושלמה.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

מציג את כל תוכניות האתר (ממתינות, בהתקדמות, ומושלמות).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

מאפס תוכנית שנכשלה למצב `pending` כדי שניתן יהיה להריץ אותה מחדש מההתחלה.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
