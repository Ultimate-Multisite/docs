---
title: پلاگ ان مینجمنٹ کی صلاحیتیں
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities (پلاگ ان مینجمنٹ کی صلاحیتیں)

Gratis AI Agent v1.5.0 کے ساتھ **7 پلاگ ان مینجمنٹ کی صلاحیتیں** (plugin management abilities) آتی ہیں جنہیں AI اسسٹنٹ بات چیت کے دوران استعمال کر سکتا ہے۔ یہ صلاحیتیں [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) کے ذریعے انسٹال کردہ WordPress پلاگ انز پر پروگرامنگ کے ذریعے کنٹرول فراہم کرتی ہیں۔

## Abilities Overview (صلاحیتوں کا جائزہ) {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | ساند باکس سٹور میں موجود پلاگ انز کی فہرست ان کی اسٹیٹس کے ساتھ واپس کرتا ہے۔ |
| Get Plugin | `get_plugin` | سلگ (slug) کے ذریعے کسی مخصوص پلاگ ان کا میٹا ڈیٹا اور سورس کوڈ حاصل کرتا ہے۔ |
| Create Plugin | `create_plugin` | ایک تفصیل (description) سے نیا پلاگ ان تیار کرتا ہے اور اسے ساند باکس میں محفوظ کر دیتا ہے۔ |
| Update Plugin | `update_plugin` | پلاگ ان کے سورس کوڈ کو نئے ورژن سے بدل دیتا ہے۔ |
| Delete Plugin | `delete_plugin` | ساند باکس سٹور سے پلاگ ان کو ہٹا دیتا ہے۔ پہلے اسے غیر فعال (deactivate) کرتا ہے۔ |
| Install Plugin | `install_plugin` | ایک ساند باکس پلاگ ان کو لائیو WordPress پلاگ ان ڈائریکٹری میں تعینات (deploy) کرتا ہے۔ |
| Activate Plugin | `activate_plugin` | wp-env ساند باکس ماحول میں ایک ساند باکس پلاگ ان کو فعال (activate) کرتا ہے۔ |

## Plugin Installer API (پلاگ ان انسٹالر API) {#plugin-installer-api}

پلاگ ان انسٹالر پلاگ انز کو تعینات (deploy) کرتے وقت یا ہٹاتے وقت فائل سسٹم آپریشنز کو سنبھالتا ہے۔ اہم خصوصیات یہ ہیں:

- **Path validation (راستے کی تصدیق):** کوئی بھی فائل لکھنے سے پہلے تمام پلاگ ان راستوں (paths) کو اجازت یافتہ پلاگ ان ڈائریکٹری کے خلاف تصدیق کیا جاتا ہے۔ ڈائریکٹری ٹریورس کرنے کی کوششوں کو مسترد کر دیا جاتا ہے۔
- **Multi-file install (متعدد فائلوں کی انسٹالیشن):** ایک پلاگ ان میں متعدد فائلیں ہو سکتی ہیں۔ انسٹالر پلاگ ان کی ڈائریکٹری بناتا ہے اور تمام فائلوں کو ایک ہی وقت میں (atomically) لکھتا ہے۔
- **Update (اپ ڈیٹ):** موجودہ پلاگ ان فائلوں کو تبدیل کرتا ہے۔ جزوی حالت کی غلطیوں (partial-state errors) سے بچنے کے لیے لکھنے سے پہلے پلاگ ان کو غیر فعال کر دیتا ہے۔
- **Delete by slug (سلگ کے ذریعے حذف کرنا):** سلگ کے ذریعے پلاگ ان کی ڈائریکٹری تلاش کرتا ہے، تمام سائٹس پر اسے غیر فعال کرتا ہے، اور پھر ڈائریکٹری کو ہٹا دیتا ہے۔

### Registering a Custom Install Handler (کسٹم انسٹال ہینڈلر رجسٹر کرنا) {#registering-a-custom-install-handler}

آپ `gratis_ai_plugin_installer_before_install` اور `gratis_ai_plugin_installer_after_install` ایکشنز کا استعمال کرتے ہوئے انسٹال لائف سائیکل میں hook کر سکتے ہیں:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: the plugin's directory name
    // $files: associative array of relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry (ایکو سسٹم رجسٹری) {#ecosystem-registry}

صلاحیتیں **پلاگ ان ایکو سسٹم رجسٹری** کے ذریعے رجسٹر کی جاتی ہیں۔ یہ رجسٹری ایبیلٹی سلگ کو ان کے ہینڈلر کلاسز سے جوڑتی ہے اور انہیں AI ایجنٹ کے ٹول ڈسپچر کے لیے دستیاب کرتی ہے۔

کسی کسٹم پلاگ ان مینجمنٹ ایبیلٹی کو رجسٹر کرنے کے لیے:

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

آپ کی ایبیلٹی کلاس کو `Gratis_AI_Ability_Interface` کو امپلیمنٹ کرنا ضروری ہے:

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

## HookScanner Integration (ہوک اسکینر انٹیگریشن) {#hookscanner-integration}

`create_plugin` اور `update_plugin` ایبیلٹیز خود بخود نئے تیار کردہ کوڈ پر **HookScanner** چلاتے ہیں۔ HookScanner پلاگ ان کے ذریعے رجسٹر کیے گئے WordPress ایکشن اور فلٹر hooks کی فہرست واپس کرتا ہے۔

HookScanner کے نتائج کو پروگرامنگ کے ذریعے حاصل کرنے کے لیے:

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

HookScanner خود بخود `vendor/` اور `node_modules/` ڈائریکٹریز کو چھوڑ دیتا ہے۔

## Async Job Architecture (ایسنک جاب آرکیٹیکچر) {#async-job-architecture}

لمبے عرصے تک چلنے والے پلاگ ان آپریشنز (جیسے تیار کرنا، انسٹال کرنا) کو **ایسنک جابز** کے طور پر بھیجا جاتا ہے جس میں لائیو پروجریش ٹریکنگ ہوتی ہے۔ AI چیٹ انٹرفیس پروجریش کے لیے پول کرتا ہے اور صارف کو اسٹیٹس اپ ڈیٹس بھیجتا ہے:

1. **Dispatch (بھیجنا):** ایبیلٹی ایک ایسنک جاب بناتی ہے اور ایک جاب ID واپس کرتی ہے۔
2. **Poll (پول کرنا):** ایجنٹ ہر 2 سیکنڈ میں `gratis_ai_job_status($job_id)` کو پول کرتا ہے۔
3. **Stream (بہہ):** بیچ کے پروجریش پیغامات چیٹ تھریڈ میں بھیجے جاتے ہیں۔
4. **Complete (مکمل):** حتمی نتیجہ (کامیابی یا غلطی) واپس کیا جاتا ہے اور دکھایا جاتا ہے۔

جاب لائف سائیکل ایونٹس میں hook کرنے کے لیے:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
