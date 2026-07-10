---
title: প্লাগইন ব্যবস্থাপনা ক্ষমতা
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities {#plugin-management-abilities}

Gratis AI Agent v1.5.0-এ **৭টি plugin management abilities** রয়েছে যা AI assistant কথোপকথনের সময় ব্যবহার করতে পারে। এই abilities গুলো [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox)-এর মাধ্যমে ইনস্টল করা WordPress plugins-এর উপর প্রোগ্রাম্যাটিক নিয়ন্ত্রণ প্রদান করে।

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | sandbox স্টোরে থাকা plugins-এর একটি তালিকা এবং তাদের স্ট্যাটাস ফিরিয়ে দেয়। |
| Get Plugin | `get_plugin` | slug ব্যবহার করে একটি নির্দিষ্ট plugin-এর মেটাডেটা এবং সোর্স কোড পুনরুদ্ধার করে। |
| Create Plugin | `create_plugin` | একটি বিবরণ (description) থেকে একটি নতুন plugin তৈরি করে এবং সেটি sandbox-এ সংরক্ষণ করে। |
| Update Plugin | `update_plugin` | একটি plugin-এর সোর্স কোডকে নতুন ভার্সন দিয়ে প্রতিস্থাপন করে। |
| Delete Plugin | `delete_plugin` | sandbox স্টোর থেকে একটি plugin সরিয়ে দেয়। প্রথমে সেটি deactivate করে। |
| Install Plugin | `install_plugin` | একটি sandboxed plugin কে লাইভ WordPress plugin ডিরেক্টরিতে স্থাপন (deploy) করে। |
| Activate Plugin | `activate_plugin` | wp-env sandbox environment-এ একটি sandboxed plugin activate করে। |

## Plugin Installer API {#plugin-installer-api}

plugin ইনস্টলার যখন plugins স্থাপন (deploy) বা সরিয়ে দেয়, তখন এটি file system operation পরিচালনা করে। এর মূল বৈশিষ্ট্যগুলো হলো:

- **Path validation**: কোনো ফাইল লেখার আগে সমস্ত plugin path অনুমোদিত plugin directory-এর সাথে যাচাই (validate) করা হয়। Directory traversal করার চেষ্টাগুলো বাতিল (reject) করে দেওয়া হয়।
- **Multi-file install**: একটি plugin একাধিক ফাইল নিয়ে গঠিত হতে পারে। ইনস্টলার plugin ডিরেক্টরি তৈরি করে এবং সমস্ত ফাইলকে একবারে (atomically) লিখে দেয়।
- **Update**: বিদ্যমান plugin ফাইলগুলো প্রতিস্থাপন করে। আংশিক-অবস্থায় (partial-state) ত্রুটি এড়াতে লেখার আগে plugin-টিকে deactivate করে।
- **Delete by slug**: slug ব্যবহার করে plugin ডিরেক্টরি খুঁজে বের করে, সব সাইট থেকে সেটি deactivate করে, এবং তারপর ডিরেক্টরিটি সরিয়ে দেয়।

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

আপনি `gratis_ai_plugin_installer_before_install` এবং `gratis_ai_plugin_installer_after_install` actions ব্যবহার করে install lifecycle-এ hook করতে পারেন:

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

## Ecosystem Registry {#ecosystem-registry}

Abilities গুলো **plugin ecosystem registry** এর মাধ্যমে রেজিস্টার করা হয়। এই registry ability slug গুলোকে তাদের handler class-এর সাথে ম্যাপ করে এবং সেগুলোকে AI agent-এর tool dispatcher-এর কাছে উন্মুক্ত করে।

একটি কাস্টম plugin management ability রেজিস্টার করতে:

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

আপনার ability class-কে অবশ্যই `Gratis_AI_Ability_Interface` ইমপ্লিমেন্ট করতে হবে:

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

`create_plugin` এবং `update_plugin` abilities স্বয়ংক্রিয়ভাবে নতুন তৈরি হওয়া কোডের উপর **HookScanner** চালায়। HookScanner plugin দ্বারা রেজিস্টার করা WordPress action এবং filter hook-গুলোর একটি তালিকা ফিরিয়ে দেয়।

প্রোগ্রাম্যাটিক উপায়ে HookScanner ফলাফল পুনরুদ্ধার করতে:

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

HookScanner স্বয়ংক্রিয়ভাবে `vendor/` এবং `node_modules/` ডিরেক্টরিগুলো এড়িয়ে যায়।

## Async Job Architecture {#async-job-architecture}

দীর্ঘ সময় ধরে চলা plugin অপারেশনগুলো (generate, install) **async jobs** হিসেবে ডিসপ্যাচ করা হয় এবং এগুলোর লাইভ প্রোগ্রেস ট্র্যাকিং থাকে। AI chat interface প্রোগ্রেসের জন্য poll করে এবং ব্যবহারকারীকে স্ট্যাটাস আপডেট স্ট্রিম করে:

1. **Dispatch** — ability টি একটি async job তৈরি করে এবং একটি job ID ফিরিয়ে দেয়।
2. **Poll** — agent প্রতি ২ সেকেন্ডে `gratis_ai_job_status($job_id)` কল করে।
3. **Stream** — মধ্যবর্তী প্রোগ্রেস মেসেজগুলো chat thread-এ পুশ করা হয়।
4. **Complete** — চূড়ান্ত ফলাফল (সফলতা বা ত্রুটি) ফিরিয়ে দেওয়া হয় এবং তা দেখানো হয়।

Job lifecycle ইভেন্টগুলোতে hook করতে:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
