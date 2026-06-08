---
title: قابلیت‌های مدیریت افزونه
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# قابلیت‌های مدیریت پلاگین

Gratis AI Agent v1.5.0 با **۷ قابلیت مدیریت پلاگین** عرضه می‌شود که دستیار هوش مصنوعی می‌تواند در طول مکالمه از آن‌ها استفاده کند. این قابلیت‌ها کنترل برنامه‌ریزی شده‌ای بر پلاگین‌های نصب شده از طریق [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) فراهم می‌کنند.

## نمای کلی قابلیت‌ها

| قابلیت | Slug | توضیحات |
|---|---|---|
| لیست پلاگین‌ها | `list_plugins` | لیستی از پلاگین‌های موجود در فروشگاه ساندباکس به همراه وضعیت آن‌ها را برمی‌گرداند. |
| دریافت پلاگین | `get_plugin` | متادیتا و کد منبع یک پلاگین خاص را بر اساس slug آن بازیابی می‌کند. |
| ایجاد پلاگین | `create_plugin` | پلاگین جدیدی را از یک توضیحات تولید کرده و آن را در ساندباکس ذخیره می‌کند. |
| به‌روزرسانی پلاگین | `update_plugin` | کد منبع یک پلاگین را با نسخه جدیدی جایگزین می‌کند. |
| حذف پلاگین | `delete_plugin` | یک پلاگین را از فروشگاه ساندباکس حذف می‌کند. ابتدا آن را غیرفعال می‌کند. |
| نصب پلاگین | `install_plugin` | یک پلاگین ساندباکس شده را در دایرکتوری پلاگین زنده WordPress مستقر می‌کند. |
| فعال‌سازی پلاگین | `activate_plugin` | یک پلاگین ساندباکس شده را در محیط ساندباکس wp-env فعال می‌کند. |

## API نصب پلاگین

نصب‌کننده پلاگین (plugin installer) عملیات فایل سیستمی را هنگام استقرار یا حذف پلاگین‌ها انجام می‌دهد. رفتارهای کلیدی آن عبارتند از:

- **اعتبارسنجی مسیر (Path validation)**: قبل از هرگونه نوشتن فایل، تمام مسیرهای پلاگین‌ها در برابر دایرکتوری پلاگین مجاز اعتبارسنجی می‌شوند. تلاش برای پیمایش دایرکتوری (Directory traversal) رد می‌شود.
- **نصب چندفایلی (Multi-file install)**: یک پلاگین ممکن است شامل چندین فایل باشد. نصب‌کننده دایرکتوری پلاگین را ایجاد کرده و تمام فایل‌ها را به صورت اتمیک (atomically) می‌نویسد.
- **به‌روزرسانی (Update)**: فایل‌های پلاگین موجود را جایگزین می‌کند. برای جلوگیری از خطاهای حالت ناقص، قبل از نوشتن، پلاگین را غیرفعال می‌کند.
- **حذف بر اساس slug**: دایرکتوری پلاگین را با استفاده از slug پیدا کرده، آن را در تمام سایت‌ها غیرفعال می‌کند، و سپس دایرکتوری را حذف می‌کند.

### ثبت یک هندلر نصب سفارشی

شما می‌توانید با استفاده از اکشن‌های `gratis_ai_plugin_installer_before_install` و `gratis_ai_plugin_installer_after_install`، در چرخه حیات نصب (install lifecycle) قلاب (hook) بزنید:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: نام دایرکتوری پلاگین
    // $files: آرایه انجمنی از مسیر نسبی => محتوای فایل
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## رجیستری اکوسیستم (Ecosystem Registry)

قابلیت‌ها از طریق **رجیستری اکوسیستم پلاگین** ثبت می‌شوند. این رجیستری، slugهای قابلیت‌ها را به کلاس‌های هندلر (handler classes) نگاشت کرده و آن‌ها را در دیسپچر ابزار (tool dispatcher) دستیار هوش مصنوعی در دسترس قرار می‌دهد.

برای ثبت یک قابلیت مدیریت پلاگین سفارشی:

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

کلاس قابلیت شما باید `Gratis_AI_Ability_Interface` را پیاده‌سازی کند:

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

## ادغام HookScanner

قابلیت‌های `create_plugin` و `update_plugin` به طور خودکار **HookScanner** را روی کدهای تولید شده جدید اجرا می‌کنند. HookScanner لیستی از اکشن‌ها (actions) و فیلترهای (filters) هوک وردپرس که توسط پلاگین ثبت شده‌اند را برمی‌گرداند.

برای بازیابی نتایج HookScanner به صورت برنامه‌ریزی شده:

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

HookScanner به طور خودکار دایرکتوری‌های `vendor/` و `node_modules/` را نادیده می‌گیرد.

## معماری Job ناهمزمان (Async Job Architecture)

عملیات‌های پلاگین طولانی‌مدت (تولید، نصب) به عنوان **Job ناهمزمان (async jobs)** با ردیابی پیشرفت زنده ارسال می‌شوند. رابط چت هوش مصنوعی برای پیشرفت مانیتورینگ (poll) کرده و به‌روزرسانی‌های وضعیت را به کاربر استریم می‌کند:

۱. **ارسال (Dispatch)** — قابلیت یک Job ناهمزمان ایجاد کرده و یک شناسه Job را برمی‌گرداند.
۲. **پرس‌وجو (Poll)** — عامل هر ۲ ثانیه `gratis_ai_job_status($job_id)` را مانیتور می‌کند.
۳. **استریم (Stream)** — پیام‌های پیشرفت میانی به رشته چت پاش می‌شوند.
۴. **تکمیل (Complete)** — نتیجه نهایی (موفقیت یا خطا) برگردانده و نمایش داده می‌شود.

برای قلاب زدن به رویدادهای چرخه حیات Job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
