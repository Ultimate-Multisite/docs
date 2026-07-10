---
title: প্লাগইন ব্যৱস্থাপনা ক্ষমতা
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities (প্লাগইন ব্যৱস্থাপনা ক্ষমতা) {#plugin-management-abilities}

Gratis AI Agent v1.5.0 ত **৭টা প্লাগইন ব্যৱস্থাপনা ক্ষমতা** (plugin management abilities) অন্তৰ্ভুক্ত কৰা হৈছে, যিবোৰ AI সহায়কজনে কথোপকথনৰ সময়ত ব্যৱহাৰ কৰিব পাৰে। এই ক্ষমতাসমূহে [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) মাজেৰে স্থাপন কৰা WordPress প্লাগইনসমূহৰ ওপৰত প্ৰগ্ৰামমেটিক নিয়ন্ত্ৰণ প্ৰদান কৰে।

## Abilities Overview (ক্ষমতাৰ এক ঝলকে) {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | sandbox store-ত থকা প্লাগইনসমূহৰ তালিকা আৰু তেওঁলোকৰ স্থিতি (status) প্ৰদান কৰে। |
| Get Plugin | `get_plugin` | slug অনুসৰি এটা নিৰ্দিষ্ট প্লাগইনৰ মেটাডেটা (metadata) আৰু সৰ্বোচ্চ কোড (source code) পুনৰুদ্ধাৰ কৰে। |
| Create Plugin | `create_plugin` | এটা বৰ্ণনাৰ পৰা এটা নতুন প্লাগইন সৃষ্টি কৰে আৰু ইয়াক sandbox ত সংৰক্ষণ কৰে। |
| Update Plugin | `update_plugin` | এটা প্লাগইনৰ সৰ্বোচ্চ কোডক নতুন সংস্কৰণৰে সলনি কৰে। |
| Delete Plugin | `delete_plugin` | sandbox storeৰ পৰা এটা প্লাগইন আঁতৰাই দিয়ে। প্ৰথমে ইয়াক নিষ্ক্ৰিয় (deactivate) কৰে। |
| Install Plugin | `install_plugin` | এটা sandboxed প্লাগইনক লাইভ WordPress প্লাগইন ডাইৰেক্টৰীত স্থাপন কৰে। |
| Activate Plugin | `activate_plugin` | wp-env sandbox environment ত এটা sandboxed প্লাগইনক সক্রিয় কৰে। |

## Plugin Installer API (প্লাগইন স্থাপনকাৰী API) {#plugin-installer-api}

প্লাগইন স্থাপন কৰোঁতে বা আঁতৰাই নিদিয়ে, প্লাগইন স্থাপনকাৰীয়ে (plugin installer) ফাইল সিস্টেমৰ কাৰ্যকলাপসমূহ ব্যৱস্থাপনা কৰে। ইয়াৰ মূল কাৰ্যকলাপসমূহ হ'ল:

- **Path validation (পথ বৈধতা):** কোনো ফাইল লিখাৰ আগতে সকলো প্লাগইন পথক (plugin paths) অনুমোদিত প্লাগইন ডাইৰেক্টৰীৰ সৈতে বৈধ কৰা হয়। Directory traversal কৰাৰ প্ৰয়াসসমূহ নাকচ কৰা হয়।
- **Multi-file install (বহু-ফাইল স্থাপন):** এটা প্লাগইনৰ বহু ফাইল থাকিব পাৰে। স্থাপনকাৰীয়ে প্লাগইন ডাইৰেক্টৰীটো সৃষ্টি কৰে আৰু সকলো ফাইল একotropically (atomically) লিখি দিয়ে।
- **Update (আপডেট):** বিদ্যমান প্লাগইন ফাইলসমূহক সলনি কৰে। আংশিক-স্থিতিৰ ভুল (partial-state errors) এৰাই চলিবলৈ ফাইল লিখাৰ আগতে প্লাগইনক নিষ্ক্ৰিয় কৰা হয়।
- **Delete by slug (slug অনুসৰি আঁতৰোৱা):** slug অনুসৰি প্লাগইন ডাইৰেক্টৰীটো বিচাৰে, সকলো স্থানত (all sites) ইয়াক নিষ্ক্ৰিয় কৰে, আৰু তাৰ পিছত ডাইৰেক্টৰীটো আঁতৰাই দিয়ে।

### Registering a Custom Install Handler (এটা কাস্টম স্থাপনকাৰী যোগ কৰা) {#registering-a-custom-install-handler}

আপুনি `gratis_ai_plugin_installer_before_install` আৰু `gratis_ai_plugin_installer_after_install` actions ব্যৱহাৰ কৰি install lifecycle ত hook কৰিব পাৰে:

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

## Ecosystem Registry (প্ৰকৃতিৰ ৰেজিষ্ট্ৰী) {#ecosystem-registry}

Ability সমূহ **plugin ecosystem registry** মাজেৰে register কৰা হয়। এই registry ले ability slug সমূহক তেওঁলোকৰ handler class লগত ম্যাপ কৰে আৰু AI agent-ৰ tool dispatcher-লৈ প্ৰকাশ কৰে।

এটা কাস্টম প্লাগইন ব্যৱস্থাপনা ability register কৰিবলৈ:

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

আপোনাৰ ability class-এ `Gratis_AI_Ability_Interface` implement কৰিব লাগিব:

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

## HookScanner Integration (HookScanner সংহতি) {#hookscanner-integration}

`create_plugin` আৰু `update_plugin` ability সমূহ স্বয়ংক্রিয়ভাৱে নতুনকৈ সৃষ্টি কৰা কোডৰ ওপৰত **HookScanner** চলাই দিয়ে। HookScanner-এ প্লাগইনৰ দ্বাৰা register কৰা WordPress action আৰু filter hook সমূহৰ তালিকা দিয়ে।

HookScanner ফলাফল প্ৰগ্ৰামমেটিকভাৱে পুনৰুদ্ধাৰ কৰিবলৈ:

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

HookScanner স্বয়ংক্রিয়ভাৱে `vendor/` আৰু `node_modules/` ডাইৰেক্টৰীসমূহ এৰি দিয়ে।

## Async Job Architecture (অ্যাসিঙ্ক Job স্থাপত্য) {#async-job-architecture}

দীৰ্ঘ সময় ধৰি চলা প্লাগইন কাৰ্যকলাপসমূহ (সৃষ্টি কৰা, স্থাপন কৰা) লাইভ প্ৰগ্ৰেছ Tracing লৈ **async jobs** হিচাপে প্ৰেণত কৰা হয়। AI chat interface-এ প্ৰগ্ৰেছৰ বাবে poll কৰে আৰু status update সমূহ ব্যৱহাৰকাৰীক stream কৰে:

1. **Dispatch (প্ৰেণত কৰা):** ability-এ এটা async job সৃষ্টি কৰে আৰু এটা job ID ঘূৰাই দিয়ে।
2. **Poll (প্ৰহৰ):** agent-এ প্ৰতি ২ ছেকেণ্ডৰ মূৰেৰে `gratis_ai_job_status($job_id)` poll কৰে।
3. **Stream (স্ৰেণালী):** মধ্যবর্তী প্ৰগ্ৰেছ বাৰ্তা (intermediate progress messages) chat thread লৈ পঠোৱা হয়।
4. **Complete (সম্পূৰ্ণ):** চূড়ান্ত ফলাফল (সফলতা বা ভুল) ঘূৰাই দিয়ে আৰু প্ৰদৰ্শিত হয়।

Job lifecycle event সমূহলৈ hook কৰিবলৈ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
