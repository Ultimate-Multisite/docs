---
title: تواناکانی بەڕێوەبردنی پڵاگین
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# تواناکانی بەڕێوەبردنی پێوەکراو {#plugin-management-abilities}

Gratis AI Agent v1.5.0 لەگەڵ **7 توانای بەڕێوەبردنی پێوەکراو** دێت کە یارمەتیدەری AI دەتوانێت لە کاتی گفتوگۆدا بانگیان بکات. ئەم توانایانە کۆنترۆڵی بەرنامەیی بەسەر پێوەکراوەکانی WordPress دابین دەکەن کە لە ڕێگەی [سیستەمی دروستکەری پێوەکراو و Sandbox](../../user-guide/administration/plugin-builder-and-sandbox) دامەزراون.

## پوختەی تواناکان {#abilities-overview}

| توانایی | Slug | وەسف |
|---|---|---|
| لیستی پێوەکراوەکان | `list_plugins` | لیستێک لە پێوەکراوەکان لە کۆگای sandbox لەگەڵ دۆخیان دەگەڕێنێتەوە. |
| وەرگرتنی پێوەکراو | `get_plugin` | metadata و کۆدی سەرچاوە بۆ پێوەکراوێکی دیاریکراو بە slug وەردەگرێت. |
| دروستکردنی پێوەکراو | `create_plugin` | پێوەکراوێکی نوێ لە وەسفێکەوە دروست دەکات و لە sandbox هەڵیدەگرێت. |
| نوێکردنەوەی پێوەکراو | `update_plugin` | کۆدی سەرچاوەی پێوەکراوێک بە وەشانێکی نوێ دەگۆڕێت. |
| سڕینەوەی پێوەکراو | `delete_plugin` | پێوەکراوێک لە کۆگای sandbox دەسڕێتەوە. سەرەتا ناچالاکی دەکات. |
| دامەزراندنی پێوەکراو | `install_plugin` | پێوەکراوێکی sandbox کراو دەخاتە ناو بوخچەی زیندووی پێوەکراوەکانی WordPress. |
| چالاککردنی پێوەکراو | `activate_plugin` | پێوەکراوێکی sandbox کراو لە ژینگەی sandbox ـی wp-env چالاک دەکات. |

## API ـی دامەزرێنەری پێوەکراو {#plugin-installer-api}

دامەزرێنەری پێوەکراو مامەڵە لەگەڵ کردارەکانی سیستەمی فایل دەکات کاتێک پێوەکراوەکان دادەمەزرێنرێن یان لادەبرێن. ڕەفتارە سەرەکییەکان:

- **پشتڕاستکردنەوەی ڕێڕەو**: هەموو ڕێڕەوەکانی پێوەکراو پێش هەر نووسینێکی فایل بەرامبەر بوخچەی ڕێپێدراوی پێوەکراو پشتڕاست دەکرێنەوە. هەوڵەکانی تێپەڕاندنی بوخچە ڕەت دەکرێنەوە.
- **دامەزراندنی چەند-فایلی**: پێوەکراوێک لەوانەیە لە چەند فایلێک پێک بێت. دامەزرێنەر بوخچەی پێوەکراوەکە دروست دەکات و هەموو فایلەکان بە شێوەی atomic دەنووسێت.
- **نوێکردنەوە**: فایلە هەبووەکانی پێوەکراو دەگۆڕێت. پێش نووسین پێوەکراوەکە ناچالاک دەکات بۆ ئەوەی هەڵەکانی دۆخی نیمچە ڕوونەدات.
- **سڕینەوە بە slug**: بوخچەی پێوەکراوەکە بە slug دەدۆزێتەوە، لە هەموو ماڵپەڕەکان ناچالاکی دەکات، پاشان بوخچەکە لادەبات.

### تۆمارکردنی مامەڵەکەری دامەزراندنی تایبەتمەند {#registering-a-custom-install-handler}

دەتوانیت بە بەکارهێنانی action ـەکانی `gratis_ai_plugin_installer_before_install` و `gratis_ai_plugin_installer_after_install` بچیتە ناو چرخی ژیانی دامەزراندن:

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

## تۆماری ژینگە {#ecosystem-registry}

تواناکان لە ڕێگەی **تۆماری ژینگەی پێوەکراو** تۆمار دەکرێن. تۆمارەکە slug ـەکانی توانایی دەبەستێتەوە بە پۆلەکانی مامەڵەکەریان و بۆ دابەشکەری ئامرازەکانی agent ـی AI دەرخستیان دەکات.

بۆ تۆمارکردنی توانایەکی تایبەتمەندی بەڕێوەبردنی پێوەکراو:

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

پۆلی تواناکەت دەبێت `Gratis_AI_Ability_Interface` جێبەجێ بکات:

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

## یەکگرتنی HookScanner {#hookscanner-integration}

تواناکانی `create_plugin` و `update_plugin` بە شێوەی خودکار **HookScanner** لەسەر کۆدی تازە دروستکراو دەخەنە کار. HookScanner لیستێک لە hook ـەکانی action و filter ـی WordPress دەگەڕێنێتەوە کە لەلایەن پێوەکراوەکەوە تۆمار کراون.

بۆ وەرگرتنی ئەنجامەکانی HookScanner بە شێوەی بەرنامەیی:

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

HookScanner بە شێوەی خودکار بوخچەکانی `vendor/` و `node_modules/` تێدەپەڕێنێت.

## پێکهاتەی کاری ناهاوکات {#async-job-architecture}

کردارە درێژخایەنەکانی پێوەکراو (دروستکردن، دامەزراندن) وەک **کارە ناهاوکاتەکان** لەگەڵ بەدواداچوونی پێشکەوتنی زیندوو دەنێردرێن. ڕووکاری چاتی AI بۆ پێشکەوتن هەڵدەسەنگێنێت و نوێکارییەکانی دۆخ بۆ بەکارهێنەر stream دەکات:

1. **ناردن** — تواناکە کارێکی ناهاوکات دروست دەکات و ناسنامەی کار دەگەڕێنێتەوە.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — پەیامە ناوەندییەکانی پێشکەوتن دەخرێنە ناو بەندە گفتوگۆکە.
4. **تەواوبوون** — ئەنجامی کۆتایی (سەرکەوتن یان هەڵە) دەگەڕێنرێتەوە و پیشان دەدرێت.

بۆ چوونە ناو ڕووداوەکانی چرخی ژیانی کار:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
