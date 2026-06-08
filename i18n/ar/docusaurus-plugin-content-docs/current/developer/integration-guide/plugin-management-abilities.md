---
title: قدرات إدارة الإضافات
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# إمكانيات إدارة الإضافات

تأتي أداة Gratis AI Agent v1.5.0 مزودة بـ **7 إمكانيات لإدارة الإضافات** يمكن للمساعد الذكي استدعاؤها أثناء المحادثة. توفر هذه الإمكانيات تحكمًا برمجيًا في إضافات WordPress المثبتة عبر [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## نظرة عامة على الإمكانيات

| الإمكانية | Slug | الوصف |
|---|---|---|
| List Plugins | `list_plugins` | تُرجع قائمة بالإضافات الموجودة في متجر بيئة الاختبار (sandbox store) وحالتها. |
| Get Plugin | `get_plugin` | تسترجع البيانات الوصفية وشفرة المصدر لإضافة معينة باستخدام الـ slug الخاص بها. |
| Create Plugin | `create_plugin` | تُنشئ إضافة جديدة من وصف معين وتخزنها في بيئة الاختبار. |
| Update Plugin | `update_plugin` | تستبدل شفرة مصدر الإضافة بإصدار جديد. |
| Delete Plugin | `delete_plugin` | تزيل إضافة من متجر بيئة الاختبار. تقوم أولاً بتعطيلها. |
| Install Plugin | `install_plugin` | تنشر إضافة معزولة في دليل إضافات WordPress النشط. |
| Activate Plugin | `activate_plugin` | تُفعّل إضافة معزولة في بيئة عمل sandbox الخاصة بـ wp-env. |

## واجهة برمجة تطبيقات مُثبِّت الإضافات (Plugin Installer API)

يتولى مُثبِّت الإضافات التعامل مع عمليات نظام الملفات عند نشر الإضافات أو إزالتها. السلوكيات الرئيسية:

- **التحقق من المسار (Path validation)**: يتم التحقق من جميع مسارات الإضافات مقابل دليل الإضافات المسموح به قبل أي عملية كتابة للملفات. ويتم رفض محاولات اجتياز الدليل (Directory traversal).
- **تثبيت ملفات متعددة (Multi-file install)**: قد تتكون الإضافة من ملفات متعددة. يقوم المُثبِّت بإنشاء دليل الإضافة وكتابة جميع الملفات بشكل ذري (atomically).
- **التحديث (Update)**: يستبدل ملفات الإضافة الموجودة. ويقوم بتعطيل الإضافة قبل الكتابة لتجنب أخطاء الحالة الجزئية.
- **الحذف بواسطة الـ slug**: يحدد دليل الإضافة باستخدام الـ slug، ويقوم بتعطيلها عبر جميع المواقع، ثم يزيل الدليل.

### تسجيل مُعالج تثبيت مخصص (Custom Install Handler)

يمكنك ربط دورة حياة التثبيت باستخدام الإجراءات (actions) التالية: `gratis_ai_plugin_installer_before_install` و `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: اسم دليل الإضافة
    // $files: مصفوفة ترابطية (associative array) من المسار النسبي => محتوى الملف
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## سجل النظام البيئي (Ecosystem Registry)

يتم تسجيل الإمكانيات عبر **سجل إمكانيات الإضافات (plugin ecosystem registry)**. يقوم هذا السجل بربط إمكانيات الـ slugs الخاصة بالإضافات بفئات المعالجة (handler classes) الخاصة بها، ويُعرّيها لموزع الأدوات الخاص بالوكيل الذكي (AI agent's tool dispatcher).

لتسجيل إمكانية إدارة إضافات مخصصة:

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

يجب أن تطبق فئة الإمكانية الخاصة بك واجهة `Gratis_AI_Ability_Interface`:

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

## دمج ماسح الخطافات (HookScanner Integration)

تقوم إمكانيتا `create_plugin` و `update_plugin` بتشغيل **HookScanner** تلقائيًا على الشفرة المُنشأة حديثًا. يُرجع HookScanner قائمة بخطافات الإجراءات (action hooks) وفلاتر (filter hooks) الخاصة بـ WordPress التي سجلتها الإضافة.

لاسترداد نتائج HookScanner برمجيًا:

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

يتخطى HookScanner أدلة `vendor/` و `node_modules/` تلقائيًا.

## هيكلية المهام غير المتزامنة (Async Job Architecture)

يتم إرسال عمليات الإضافات طويلة الأمد (التوليد، التثبيت) كـ **مهام غير متزامنة (async jobs)** مع تتبع حي للتقدم. يقوم واجهة الدردشة بالذكاء الاصطناعي بالاستعلام عن التقدم ويُرسل تحديثات الحالة للمستخدم:

1. **الإرسال (Dispatch)** — تنشئ الإمكانية مهمة غير متزامنة وتُرجع مُعرف المهمة (job ID).
2. **الاستعلام (Poll)** — يستعلم الوكيل عن `gratis_ai_job_status($job_id)` كل ثانيتين.
3. **البث (Stream)** — يتم دفع رسائل التقدم الوسيطة إلى خيط الدردشة.
4. **الإكمال (Complete)** — يتم إرجاع النتيجة النهائية (نجاح أو خطأ) وعرضها.

للربط بأحداث دورة حياة المهمة:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
