---
title: יכולות ניהול תוספים
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# יכולות ניהול תוספים

Gratis AI Agent v1.5.0 מגיע עם **7 יכולות ניהול תוספים** שהעוזרת ה-AI יכולה להפעיל במהלך שיחה. יכולות אלה מספקות שליטה תכנותית על תוספי WordPress המותקנים דרך [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## סקירה כללית של היכולות {#abilities-overview}

| יכולת | Slug | תיאור |
|---|---|---|
| List Plugins | `list_plugins` | מציג רשימה של תוספים המאוחסנים בסנדבוקס, יחד עם סטטוסם. |
| Get Plugin | `get_plugin` | שולף מטא-דאטה וקוד מקור עבור תוסף ספציפי לפי ה-slug שלו. |
| Create Plugin | `create_plugin` | יוצר תוסף חדש מתיאור ומאחסן אותו בסנדבוקס. |
| Update Plugin | `update_plugin` | מחליף את קוד המקור של תוסף בגרסה חדשה. |
| Delete Plugin | `delete_plugin` | מסיר תוסף מהסנדבוקס. מבטל את ההפעלה קודם כל. |
| Install Plugin | `install_plugin` | פורס תוסף שנמצא בסנדבוקס לתיקיית התוספים האמיתית של WordPress. |
| Activate Plugin | `activate_plugin` | מפעיל תוסף שנמצא בסנדבוקס בסביבת ה-wp-env. |

## Plugin Installer API {#plugin-installer-api}

מנגנון התקנת התוספים מטפל בפעולות על מערכת הקבצים בעת פריסה או הסרה של תוספים. ההתנהגויות המרכזיות כוללות:

- **אימות נתיב (Path validation)**: כל נתיבי התוספים מאומתים מול ספריית התוספים המותרת לפני כל כתיבה לקובץ. ניסיונות מעבר ספרייה נדחים.
- **התקנת מספר קבצים (Multi-file install)**: תוסף עשוי להורכב ממספר קבצים. המותקן יוצר את ספריית התוסף וכותב את כל הקבצים באופן אטומי.
- **עדכון (Update)**: מחליף קבצי תוסף קיימים. הוא מבטל את התוסף לפני הכתיבה כדי למנוע שגיאות של מצב חלקי.
- **מחיקה לפי slug**: מזהה את ספריית התוסף לפי ה-slug, מבטל את ההפעלה בכל האתרים, ואז מסיר את התיקייה.

### רישום מנגנון התקנה מותאם אישית {#registering-a-custom-install-handler}

ניתן להתחבר למחזור חיי ההתקנה באמצעות הפעולות `gratis_ai_plugin_installer_before_install` ו-`gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: שם התיקייה של התוסף
    // $files: מערך אסוציאטיבי של נתיב יחסי => תוכן קובץ
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

היכולות נרשמות דרך **מנגנון רישום האקוסיסטם של התוספים (plugin ecosystem registry)**. המנגנון ממפה את ה-slugs של היכולות למחלקות המטפלות בהן ומציג אותן למפצל הכלים של ה-AI agent.

כדי לרשום יכולת ניהול תוספים מותאמת אישית:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

המחלקה של היכולת שלך חייבת ליישם את הממשק `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner Integration {#hookscanner-integration}

היכולות `create_plugin` ו-`update_plugin` מריצות אוטומטית את **HookScanner** על הקוד שנוצר. HookScanner מחזיר רשימה של Hooks (פעולות ופילטרים) של WordPress שנרשמו על ידי התוסף.

כדי לשלוף את תוצאות HookScanner באופן תכנותי:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner מדלג אוטומטית על התיקיות `vendor/` ו-`node_modules/`.

## Async Job Architecture {#async-job-architecture}

פעולות תוספים ארוכות הריצה (יצירה, התקנה) נשלחות כ**משימות אסינכרוניות (async jobs)** עם מעקב אחר ההתקדמות בזמן אמת. ממשק הצ'אט של ה-AI מבצע Polling אחר ההתקדמות ומזרים עדכוני סטטוס למשתמש:

1. **Dispatch (שליחה)** — היכולת יוצרת משימה אסינכרונית ומחזירה מזהה משימה (job ID).
2. **Poll (בדיקה)** — המנהל מבצע Polling ל־`gratis_ai_job_status($job_id)` כל 2 שניות.
3. **Stream (זרם)** — הודעות התקדמות ביניים נשלחות לתוך תדידת הצ'אט.
4. **Complete (השלמה)** — התוצאה הסופית (הצלחה או שגיאה) מוחזרת ומוצגת.

כדי להתחבר לאירועי מחזור חיי המשימה:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
