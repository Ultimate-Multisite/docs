---
title: מדריך WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent מספק משפחת פקודות `wp gratis-ai-agent` לצורך ביצוע בדיקות ביצועים (benchmarking) של המערכת, ניהול יכולות (abilities), ושליפת סטטוס המערכת מקוונטרליין. כל הפקודות דורשות WP-CLI 2.0 ומעלה.

## Installation

פקודות ה-WP-CLI נרשמות אוטומטית כאשר ה-plugin פעיל. ניתן לוודא זאת באמצעות:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

מריץ את חבילת בדיקות הביצועים של יכולות המערכת (Agent Capabilities benchmark suite) — אוסף של פרומפטים מורכבים ורב-שלביים המפעילים את כל מגוון היכולות. השתמש בכלי זה כדי להעריך את ביצועי המודל, להשוות ספקי AI שונים, או לאמת חבילות יכולות לפני פריסה בסביבת הייצור.

### Synopsis

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options

| Option | Description |
|---|---|
| `--question=<id>` | הפעלת שאלה בודדת לבדיקה לפי מזהה, במקום כל החבילה המלאה |
| `--provider=<provider>` | דריסה של ספק ה-AI המוגדר להרצה זו (לדוגמה: `anthropic`, `openai`) |
| `--model=<model>` | דריסה של המודל המוגדר להרצה זו (לדוגמה: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | פורמט פלט: `table` (ברירת מחדל), `json`, `csv` |
| `--save` | שמירת תוצאות הבדיקה במסד הנתונים לצורך השוואה היסטורית |

### Examples

הפעלת חבילת הבדיקות המלאה עם ספק ומודל הנוכחיים:

```bash
wp gratis-ai-agent benchmark
```

הפעלת שאלה בודדת (`q-restaurant-website`) והפלט כ-JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

הפעלה מול מודל ספציפי ושמירת התוצאות:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output

הבדיקה מפיקה שורה אחת לכל שאלה עם העמודות הבאות:

| Column | Description |
|---|---|
| `ID` | מזהה השאלה |
| `Description` | סיכום קצר של תרחיש הבדיקה |
| `Score` | מעבר/כישלון או ציון מספרי (0–100) |
| `Abilities Used` | רשימה מופרדת בפסיקים של היכולות שנקראו |
| `Tokens` | סך הטוקנים שנצרכו |
| `Duration` | זמן שעון בשניות |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions

החבילה ברירת המחדל כוללת:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | יצירת Custom Post Type (CPT) פורטפוליו עם טקסונומיה של קטגוריות פרויקטים והרשמה לתבנית בלוק |
| `q-restaurant-website` | בניית אתר מסעדה מלא עם CPT למენი, טופס הזמנות וניווט |
| `q-dark-mode-theme` | יישום תבנית עיצוב Dark Mode והזרקת צבעי מותג |
| `q-nav-builder` | יצירת תפריט ניווט ראשי בן ארבעה פריטים עם תפריט נפתח מקונן |
| `q-options-roundtrip` | קריאה, שינוי ושחזור של מערך אפשרויות (options) של WordPress |
| `q-ability-install` | גילוי והתקנת חבילת היכולות המתאימה ביותר למקרה שימוש שפורט |

ניתן להירשם לשאלות נוספות באמצעות ה-filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities`

מנהל יכולות וחבילות יכולות מותקנות.

### `wp gratis-ai-agent abilities list`

מציג את כל היכולות הרשומות, המקור שלהן (ליבה או חבילה), והסטטוס הנוכחי שלהן.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | פורמט פלט: `table` (ברירת מחדל), `json`, `csv` |

**Example output**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

מוריד ומפעיל חבילת יכולות מהרישום.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | ה-slug של חבילת היכולות, לדוגמה: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

מכבה יכולת ספציפית מבלי להסיר את החבילה. שימושי להגבלת היקף פעולות המערכת באתר נתון.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

מאפשר מחדש יכולת שהוכיבה בעבר.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

מציג את תצורת המערכת הנוכחית ואת סטטוס החיבור.

```bash
wp gratis-ai-agent status
```

**Example output**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

מציג פעילות עדכנית של המערכת מיומן ה-debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | הצגת N רשומות יומן אחרונות. ברירת מחדל `50` |
| `--level=<level>` | סינון לפי רמה: `info`, `warning`, `error` |
| `--ability=<ability>` | סינון לפי שם היכולת |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

מאפס את מצב המערכת: מנקה CSS שהוזרק, מסיר CPTs וטקסונומיות שנרשמו על ידי המערכת, מאפס סגנונות גלובליים ומרוקן את מטמון האפשרויות של המערכת. אינו מסיר את ה-plugin או את ההגדרות שלו.

```bash
wp gratis-ai-agent reset [--yes]
```

הוסף `--yes` כדי לדלג על הודעת האישור.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

כל הפקודות יוצאות עם הקוד `0` בהצלחה. קודי יציאה שאינם אפס:

| Code | Meaning |
|---|---|
| `1` | שגיאה כללית (ראה הודעת שגיאה) |
| `2` | כשל בחיבור לספק (Provider connectivity failure) |
| `3` | יכולת לא נמצאה (Ability not found) |
| `4` | שאלה לבדיקה לא נמצאה (Benchmark question not found) |
