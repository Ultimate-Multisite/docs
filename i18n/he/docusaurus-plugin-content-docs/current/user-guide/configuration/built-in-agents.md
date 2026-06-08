---
title: סוכנים מובנים
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# סוכנים מובנים

Gratis AI Agent v1.9.0 מגיע עם חמישה סוכנים מובנים, שכל אחד מהם מוגדר מראש עם מערך כלים ממוקד, הנחיה מערכתית מותאמת, והצעות התחלה שמתאימות למשימות נפוצות בתחום זה. המעבר בין סוכנים משנה את היכולות של המساعد ואת אופן התגובה שלו — בלי שתידרש ממך כל הגדרה.

## מהו סוכן (Agent)?

כל סוכן הוא פרופיל הגדרה עם שם, המשלב בין:

- **כלים (Tools)** — היכולות שהסוכן רשאי להפעיל (לדוגמה: לכותב תוכן יש גישה ליכולות יצירת פוסטים; לסטודיו עיצוב יש גישה ליכולות CSS ו-theme.json).
- **הנחיה מערכתית (System prompt)** — הוראות שמגדירות את הטון, סדרי העדיפויות והמגבלות של הסוכן.
- **הצעות (Suggestions)** — הנחיות מוגמרות שמוצגות בממשק הצ'אט כדי לעזור לך להתחיל במהירות.

## גישה לבחירת הסוכן (Agent Picker)

1. פתח את הפאנל **Gratis AI Agent** בסרגל הצד של לוח המחוונים של WordPress.
2. לחץ על **אייקון הסוכן** בפינה השמאלית העליונה של כותרת הצ'אט (האייקון משתנה כדי לשקף את הסוכן הפעיל).
3. **בוחר הסוכן (Agent Picker)** נפתח כמעליית טבלה-טופס. כל סוכן מופיע עם האייקון, השם והתיאור הקצר שלו.
4. לחץ על שורת סוכן כדי להפעיל אותו. כותרת הצ'אט מתעדכנת מיד.

אתה יכול גם להחליף סוכנים במהלך השיחה — ההנחיה המערכתית של הסוכן החדש נכנסת לתוקף מההודעה הבאה.

## חמשת הסוכנים המובנים

### Content Writer (כותב תוכן)

**מיקוד:** יצירה ועריכה של פוסטים, עמודים וטפסי יצירת קשר.

**כלים זמינים:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**מה שהוא עושה טוב:**
- ניסוח ופרסום פוסטים לבלוג ממסגרת או ראשי פרקים.
- יצירת אצוות של דפי נחיתה לאתר חדש.
- בניית טפסי יצירת קשר ופנייה.
- הגדרת תמונות ממוקדות לפוסטים ממקור URL או חיפוש.

**הצעות התחלה:**
- *כתוב פוסט לבלוג באורך 500 מילים על היתרונות של WordPress multisite.*
- *צור עמוד "אודות", עמוד "שירותים" ועמוד "יצירת קשר" ופרסם אותם.*
- *הוסף טופס פניית הזמנות לעמוד יצירת הקשר.*

---

### Site Builder (בונה אתרים)

**מיקוד:** יצירת אתר מקצה לקצה מתוך הנחיה אחת.

**כלים זמינים:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**מה שהוא עושה טוב:**
- יצירת תוכנית בנייה מרובת-שלבים עבור סוג עסקי שתואר.
- ביצוע כל שלב באופן אוטונומי — מבנה, תוכן, ניווט, עיצוב.
- התאוששות משגיאות באמצע התהליך מבלי לדרוש התערבות ידנית.
- התקנת תוספים מומלצים כחלק מהבנייה.
- יצירת טפסי יצירת קשר ישירות מממשק הצ'אט (Superdav AI Agent v1.10.0+).

**הצעות התחלה:**
- *בנה אתר פורטפוליו צילום עם סוג פוסט גלריה, עמוד הזמנות וטופס יצירת קשר.*
- *צור אתר מסעדה עם תפריט מקוון, שעות פתיחה וטופס פניית הזמנות שולחן.*
- *הגדר אתר ייעוץ פרילנס עם עמודי שירות, קטע פורטפוליו ובלוג.*
- *הוסף טופס יצירת קשר לעמוד יצירת הקשר באמצעות בונה האתר.*

---

### Design Studio (סטודיו עיצוב)

**מיקוד:** התאמה אישית ויזואלית — צבעים, טיפוגרפיה, CSS ודפוסי בלוקים.

**כלים זמינים:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**מה שהוא עושה טוב:**
- יישום תבניות נושא (presets) מוגדרות (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- כוונון עדין של טיפוגרפיה גלובלית ופלטות צבעים דרך theme.json.
- הזרקת CSS מותאם אישית עבור דרישות מותג ספציפיות.
- לקיחת צילום מסך של עמוד ובדיקתו מבחינת בעיות עיצוב.

**הצעות התחלה:**
- *הפעל את התבנית warm-editorial ואז הגדר את הצבע הראשי ל-#2d6a4f.*
- *קח צילום מסך של דף הבית וספר לי מה היית משפר.*
- *צור דפוס בלוק הגיבור (hero block) שניתן לשימוש חוזר עם רקע תמונה מלא וכותרת ממוקדת.*

---

### Plugin Manager (מנהל תוספים)

**מיקוד:** גילוי, התקנה וניהול תוספי WordPress.

**כלים זמינים:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**מה שהוא עושה טוב:**
- המלצה על התוסף הטוב ביותר עבור מקרה שימוש שתואר.
- התקנת חבילות יכולות (ability packs) מהרישום.
- גלישה בקטלוג היכולות הזמין לפי קטגוריה.

**הצעות התחלה:**
- *מהו התוסף הטוב ביותר למשפחת מנויים (membership directory)?*
- *התקן את חבילת היכולות של WooCommerce.*
- *הצג לי את כל חבילות היכולות הזמינות למסחר אלקטרוני.*

---

### Support Assistant (מساعد תמיכה)

**מיקוד:** מענה על שאלות לגבי תוכן האתר, הגדרות וקונפיגורציה של WordPress.

**כלים זמינים:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**מה שהוא עושה טוב:**
- בדיקת הגדרות ואופציות נוכחיות של האתר.
- הסבר אילו סוגי פוסטים, טקסונומיות ותפריטים מוגדרים באתר.
- מענה על שאלות מסוג "מה עושה ההגדרה הזו?" על ידי קריאת ערכים חיים.
- שמש כמעטפת אבחון קריאה בלבד לפני ביצוע שינויים.

**הצעות התחלה:**
- *אילו תוספים והגדרות פעילים כרגע באתר הזה?*
- *רשום את כל סוגי הפוסטים המותאמים אישית שנרשמו באתר.*
- *אילו תפריטי ניווט קיימים והיכן הם מוגדרים?*

---

## התאמה אישית של סוכנים

כל סוכן מובנה יכול להיות מורחב או מוחלף באמצעות ה-filter `gratis_ai_agent_agents`.

### הוספת הנחיה מערכתית מותאמת אישית לסוכן קיים

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### רישום סוכן חדש

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

הסוכן החדש מופיע ב-Agent Picker מיד לאחר הרצת ה-filter.

### הסרת סוכן מובנה

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
