---
title: قىستۇرما باشقۇرۇش ئىقتىدارلىرى
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# قىستۇرما باشقۇرۇش ئىقتىدارلىرى {#plugin-management-abilities}

Gratis AI Agent v1.5.0 سۆھبەت جەريانىدا AI ياردەمچىسى چاقىرالايدىغان **7 قىستۇرما باشقۇرۇش ئىقتىدارى** بىلەن تەمىنلەيدۇ. بۇ ئىقتىدارلار [قىستۇرما قۇرغۇچ ۋە قۇم ساندۇقى سىستېمىسى](../../user-guide/administration/plugin-builder-and-sandbox) ئارقىلىق ئورنىتىلغان WordPress قىستۇرمىلىرىنى پروگرامما ئارقىلىق كونترول قىلىشنى تەمىنلەيدۇ.

## ئىقتىدارلار ئومۇمىي كۆرۈنۈشى {#abilities-overview}

| ئىقتىدار | Slug | چۈشەندۈرۈش |
|---|---|---|
| قىستۇرمىلارنى تىزىش | `list_plugins` | قۇم ساندۇقى ساقلىغۇچىسىدىكى قىستۇرمىلارنىڭ ھالىتى بىلەن بىللە تىزىملىكىنى قايتۇرىدۇ. |
| قىستۇرمىنى ئېلىش | `get_plugin` | بەلگىلەنگەن قىستۇرمىنىڭ مېتاسانلىق مەلۇماتلىرى ۋە مەنبە كودىنى slug ئارقىلىق ئېلىپ كېلىدۇ. |
| قىستۇرما قۇرۇش | `create_plugin` | چۈشەندۈرۈشتىن يېڭى قىستۇرما ھاسىل قىلىپ، ئۇنى قۇم ساندۇقىغا ساقلايدۇ. |
| قىستۇرمىنى يېڭىلاش | `update_plugin` | قىستۇرمىنىڭ مەنبە كودىنى يېڭى نەشرى بىلەن ئالماشتۇرىدۇ. |
| قىستۇرمىنى ئۆچۈرۈش | `delete_plugin` | قۇم ساندۇقى ساقلىغۇچىسىدىن بىر قىستۇرمىنى چىقىرىۋېتىدۇ. ئالدى بىلەن ئاكتىپسىزلايدۇ. |
| قىستۇرمىنى ئورنىتىش | `install_plugin` | قۇم ساندۇقىدىكى قىستۇرمىنى جانلىق WordPress قىستۇرما مۇندەرىجىسىگە ئورۇنلاشتۇرىدۇ. |
| قىستۇرمىنى ئاكتىپلاش | `activate_plugin` | قۇم ساندۇقىدىكى قىستۇرمىنى wp-env قۇم ساندۇقى مۇھىتىدا ئاكتىپلايدۇ. |

## قىستۇرما ئورناتقۇچ API {#plugin-installer-api}

قىستۇرما ئورناتقۇچ قىستۇرمىلارنى ئورۇنلاشتۇرغاندا ياكى چىقىرىۋەتكەندە ھۆججەت سىستېمىسى مەشغۇلاتلىرىنى بىر تەرەپ قىلىدۇ. مۇھىم ھەرىكەتلەر:

- **يولنى دەلىللەش**: ھەر قانداق ھۆججەت يېزىشتىن بۇرۇن بارلىق قىستۇرما يوللىرى رۇخسەت قىلىنغان قىستۇرما مۇندەرىجىسىگە قارىتا دەلىللىنىدۇ. مۇندەرىجە ھالقىش ئۇرۇنۇشلىرى رەت قىلىنىدۇ.
- **كۆپ ھۆججەتلىك ئورنىتىش**: بىر قىستۇرما بىر قانچە ھۆججەتتىن تەركىب تاپىشى مۇمكىن. ئورناتقۇچ قىستۇرما مۇندەرىجىسىنى قۇرۇپ، بارلىق ھۆججەتلەرنى ئاتوملۇق ھالدا يازىدۇ.
- **يېڭىلاش**: مەۋجۇت قىستۇرما ھۆججەتلىرىنى ئالماشتۇرىدۇ. قىسمەن ھالەت خاتالىقلىرىدىن ساقلىنىش ئۈچۈن يېزىشتىن بۇرۇن قىستۇرمىنى ئاكتىپسىزلايدۇ.
- **slug ئارقىلىق ئۆچۈرۈش**: قىستۇرما مۇندەرىجىسىنى slug ئارقىلىق تاپىدۇ، بارلىق بېكەتلەردە ئاكتىپسىزلايدۇ، ئاندىن مۇندەرىجىنى ئۆچۈرىدۇ.

### خاس ئورنىتىش بىر تەرەپ قىلغۇچىنى تىزىملاش {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` ۋە `gratis_ai_plugin_installer_after_install` مەشغۇلاتلىرىنى ئىشلىتىپ ئورنىتىش ھايات دەۋرىگە ئۇلىنالايسىز:

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

## ئېكوسىستېما تىزىملىكى {#ecosystem-registry}

ئىقتىدارلار **قىستۇرما ئېكوسىستېما تىزىملىكى** ئارقىلىق تىزىملىنىدۇ. بۇ تىزىملىك ئىقتىدار slugلىرىنى ئۇلارنىڭ بىر تەرەپ قىلغۇچى كلاسلىرىغا خەرىتىلەپ، ئۇلارنى AI ۋاكالەتچىسىنىڭ قورال تارقاتقۇچىسىغا ئاشكارىلايدۇ.

خاس قىستۇرما باشقۇرۇش ئىقتىدارىنى تىزىملاش ئۈچۈن:

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

ئىقتىدار كلاسسىڭىز `Gratis_AI_Ability_Interface` نى ئەمەلگە ئاشۇرۇشى كېرەك:

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

## HookScanner بىرلەشتۈرۈشى {#hookscanner-integration}

`create_plugin` ۋە `update_plugin` ئىقتىدارلىرى يېڭى ھاسىل قىلىنغان كودقا قارىتا **HookScanner** نى ئاپتوماتىك ئىجرا قىلىدۇ. HookScanner قىستۇرما تىزىملىغان WordPress ھەرىكەت ۋە سۈزگۈچ hookلىرىنىڭ تىزىملىكىنى قايتۇرىدۇ.

HookScanner نەتىجىلىرىنى پروگرامما ئارقىلىق ئېلىش ئۈچۈن:

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

HookScanner `vendor/` ۋە `node_modules/` مۇندەرىجىلىرىنى ئاپتوماتىك ئاتلاپ ئۆتىدۇ.

## ئاسىنخرون ۋەزىپە قۇرۇلمىسى {#async-job-architecture}

ئۇزاق داۋاملىشىدىغان قىستۇرما مەشغۇلاتلىرى (ھاسىل قىلىش، ئورنىتىش) جانلىق ئىلگىرىلەش ئىز قوغلاش بىلەن **ئاسىنخرون ۋەزىپىلەر** سۈپىتىدە تارقىتىلىدۇ. AI پاراڭلىشىش ئارايۈزى ئىلگىرىلەشنى تەكشۈرۈپ، ھالەت يېڭىلانمىلىرىنى ئىشلەتكۈچىگە ئېقىم شەكلىدە يوللايدۇ:

1. **تارقىتىش** — ئىقتىدار ئاسىنخرون ۋەزىپە قۇرۇپ، ۋەزىپە IDسىنى قايتۇرىدۇ.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **ئېقىم** — ئارىلىق ئىلگىرىلەش ئۇچۇرلىرى پاراڭ تېمىسىغا ئىتتىرىلىدۇ.
4. **تاماملاش** — ئاخىرقى نەتىجە (مۇۋەپپەقىيەت ياكى خاتالىق) قايتۇرۇلۇپ كۆرسىتىلىدۇ.

ۋەزىپە ھايات دەۋرى پائالىيەتلىرىگە ئۇلىنىش ئۈچۈن:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
