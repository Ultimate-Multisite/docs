---
title: ਪਲੱਗਇਨ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥਾਵਾਂ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# ਪਲੱਗਇਨ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥਾਵਾਂ

Gratis AI Agent v1.5.0 **7 ਪਲੱਗਇਨ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥਾਵਾਂ** ਨਾਲ ਆਉਂਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਨੂੰ AI ਅਸਿਸਟੈਂਟ ਗੱਲਬਾਤ ਦੌਰਾਨ ਵਰਤ ਸਕਦਾ ਹੈ। ਇਹ ਸਮਰੱਥਾਵਾਂ [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) ਰਾਹੀਂ ਇੰਸਟਾਲ ਕੀਤੇ ਗਏ WordPress ਪਲੱਗਇਨ 'ਤੇ ਪ੍ਰੋਗਰਾਮੈਟਿਕ ਕੰਟਰੋਲ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।

## ਸਮਰੱਥਾਵਾਂ ਦਾ ਸੰਖੇਪ ਵੇਰਵਾ {#abilities-overview}

| ਸਮਰੱਥਾ | Slug | ਵੇਰਵਾ |
|---|---|---|
| ਪਲੱਗਇਨ ਸੂਚੀਬੱਧ ਕਰਨਾ | `list_plugins` | ਸੈਂਡਬਾਕਸ ਸਟੋਰ ਵਿੱਚ ਸਥਿਤੀ ਦੇ ਨਾਲ ਪਲੱਗਇਨਾਂ ਦੀ ਸੂਚੀ ਵਾਪਸ ਕਰਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਪ੍ਰਾਪਤ ਕਰਨਾ | `get_plugin` | slug ਰਾਹੀਂ ਇੱਕ ਖਾਸ ਪਲੱਗਇਨ ਲਈ ਮੈਟਾਡੇਟਾ ਅਤੇ ਸੋਰਸ ਕੋਡ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਬਣਾਉਣਾ | `create_plugin` | ਇੱਕ ਵੇਰਵਾ (description) ਤੋਂ ਇੱਕ ਨਵਾਂ ਪਲੱਗਇਨ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਇਸਨੂੰ ਸੈਂਡਬਾਕਸ ਵਿੱਚ ਸਟੋਰ ਕਰਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਅਪਡੇਟ ਕਰਨਾ | `update_plugin` | ਪਲੱਗਇਨ ਦੇ ਸੋਰਸ ਕੋਡ ਨੂੰ ਨਵੇਂ ਵਰਜ਼ਨ ਨਾਲ ਬਦਲਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਮਿਟਾਉਣਾ | `delete_plugin` | ਸੈਂਡਬਾਕਸ ਸਟੋਰ ਤੋਂ ਪਲੱਗਇਨ ਹਟਾਉਂਦਾ ਹੈ। ਪਹਿਲਾਂ ਡੀਐਕਟਿਵੇਟ ਕਰਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਇੰਸਟਾਲ ਕਰਨਾ | `install_plugin` | ਇੱਕ ਸੈਂਡਬਾਕਸਡ ਪਲੱਗਇਨ ਨੂੰ ਲਾਈਵ WordPress ਪਲੱਗਇਨ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਡਿਪਲॉय ਕਰਦਾ ਹੈ। |
| ਪਲੱਗਇਨ ਐਕਟਿਵੇਟ ਕਰਨਾ | `activate_plugin` | wp-env ਸੈਂਡਬਾਕਸ ਐਨਵਾਇਰਨਮੈਂਟ ਵਿੱਚ ਇੱਕ ਸੈਂਡਬਾਕਸਡ ਪਲੱਗਇਨ ਨੂੰ ਐਕਟਿਵੇਟ ਕਰਦਾ ਹੈ। |

## ਪਲੱਗਇਨ ਇੰਸਟਾਲਰ API {#plugin-installer-api}

ਪਲੱਗਇਨ ਇੰਸਟਾਲਰ ਪਲੱਗਇਨਾਂ ਨੂੰ ਡਿਪਲॉय ਜਾਂ ਹਟਾਉਣ ਵੇਲੇ ਫਾਈਲ ਸਿਸਟਮ ਆਪਰੇਸ਼ਨਾਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ। ਮੁੱਖ ਕੰਮ:

- **Path validation**: ਕੋਈ ਵੀ ਫਾਈਲ ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਸਾਰੇ ਪਲੱਗਇਨ ਪਾਥਾਂ ਨੂੰ允许 ਪਲੱਗਇਨ ਡਾਇਰੈਕਟਰੀ ਦੇ ਖਿਲਾਫ ਵੈਲੀਡੇਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਡਾਇਰੈਕਟਰੀ ਟ੍ਰਾਵਰਸਲ ਕੋਸ਼ਿਸ਼ਾਂ ਨੂੰ ਰੱਦ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।
- **Multi-file install**: ਇੱਕ ਪਲੱਗਇਨ ਵਿੱਚ ਕਈ ਫਾਈਲਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਇੰਸਟਾਲਰ ਪਲੱਗਇਨ ਡਾਇਰੈਕਟਰੀ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਸਾਰੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਇੱਕੋ ਵਾਰ (atomically) ਲਿਖਦਾ ਹੈ।
- **Update**: ਮੌਜੂਦਾ ਪਲੱਗਇਨ ਫਾਈਲਾਂ ਨੂੰ ਬਦਲਦਾ ਹੈ। ਅਧੂਰੇ-ਸਟੇਟ (partial-state) ਦੀਆਂ ਗਲਤੀਆਂ ਤੋਂ ਬਚਣ ਲਈ ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਪਲੱਗਇਨ ਨੂੰ ਡੀਐਕਟਿਵੇਟ ਕਰਦਾ ਹੈ।
- **Delete by slug**: slug ਰਾਹੀਂ ਪਲੱਗਇਨ ਡਾਇਰੈਕਟਰੀ ਲੱਭਦਾ ਹੈ, ਸਾਰੇ ਸਾਈਟਾਂ 'ਤੇ ਡੀਐਕਟਿਵੇਟ ਕਰਦਾ ਹੈ, ਅਤੇ ਫਿਰ ਡਾਇਰੈਕਟਰੀ ਹਟਾ ਦਿੰਦਾ ਹੈ।

### ਇੱਕ ਕਸਟਮ ਇੰਸਟਾਲ ਹੈਂਡਲਰ ਰਜਿਸਟਰ ਕਰਨਾ {#registering-a-custom-install-handler}

ਤੁਸੀਂ `gratis_ai_plugin_installer_before_install` ਅਤੇ `gratis_ai_plugin_installer_after_install` ਐਕਸ਼ਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੰਸਟਾਲ ਲਾਈਫਸਾਈਕਲ ਵਿੱਚ ਹੂਕ ਕਰ ਸਕਦੇ ਹੋ:

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

ਸਮਰੱਥਾਵਾਂ **ਪਲੱਗਇਨ ਇਕੋਸਿਸਟਮ ਰਜਿਸਟਰੀ** ਰਾਹੀਂ ਰਜਿਸਟਰ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਹ ਰਜਿਸਟਰੀ ਸਮਰੱਥਾ slug ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਹੈਂਡਲਰ ਕਲਾਸਾਂ ਨਾਲ ਜੋੜਦੀ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ AI agent ਦੇ ਟੂਲ ਡਿਸਪੈਚਰ ਕੋਲ ਖੋਲ੍ਹਦੀ ਹੈ।

ਇੱਕ ਕਸਟਮ ਪਲੱਗਇਨ ਪ੍ਰਬੰਧਨ ਸਮਰੱਥਾ ਰਜਿਸਟਰ ਕਰਨ ਲਈ:

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

ਤੁਹਾਡੀ ਸਮਰੱਥਾ ਕਲਾਸ ਨੂੰ `Gratis_AI_Ability_Interface` ਨੂੰ ਲਾਗੂ ਕਰਨਾ ਪਵੇਗਾ:

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

`create_plugin` ਅਤੇ `update_plugin` ਸਮਰੱਥਾਵਾਂ ਆਪਣੇ ਆਪ ਨਵੇਂ ਬਣਾਏ ਗਏ ਕੋਡ 'ਤੇ **HookScanner** ਚਲਾਉਂਦੀਆਂ ਹਨ। HookScanner ਪਲੱਗਇਨ ਦੁਆਰਾ ਰਜਿਸਟਰ ਕੀਤੇ WordPress ਐਕਸ਼ਨ ਅਤੇ ਫਿਲਟਰ ਹੂਕਾਂ ਦੀ ਸੂਚੀ ਵਾਪਸ ਕਰਦਾ ਹੈ।

HookScanner ਨਤੀਜੇ ਪ੍ਰੋਗਰਾਮੈਟਿਕ ਤੌਰ 'ਤੇ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ:

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

HookScanner ਆਪਣੇ ਆਪ `vendor/` ਅਤੇ `node_modules/` ਡਾਇਰੈਕਟਰੀਆਂ ਨੂੰ ਛੱਡ ਦਿੰਦਾ ਹੈ।

## Async Job Architecture {#async-job-architecture}

ਲੰਬੇ ਸਮੇਂ ਤੱਕ ਚੱਲਣ ਵਾਲੇ ਪਲੱਗਇਨ ਆਪਰੇਸ਼ਨਾਂ (ਬਣਾਉਣਾ, ਇੰਸਟਾਲ ਕਰਨਾ) ਨੂੰ ਲਾਈਵ ਪ੍ਰੋਗਰੈਸ ਟ੍ਰੈਕਿੰਗ ਨਾਲ **ਐਸਿੰਕ ਜੌਬਸ** ਵਜੋਂ ਡਿਸਪੈਚ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। AI ਚੈਟ ਇੰਟਰਫੇਸ ਪ੍ਰੋਗਰੈਸ ਲਈ ਪੁੱਛਦਾ ਹੈ ਅਤੇ ਸਟੇਟਸ ਅਪਡੇਟਸ ਨੂੰ ਯੂਜ਼ਰ ਤੱਕ ਸਟ੍ਰੀਮ ਕਰਦਾ ਹੈ:

1. **Dispatch** — ਸਮਰੱਥਾ ਇੱਕ ਐਸਿੰਕ ਜੌਬ ਬਣਾਉਂਦੀ ਹੈ ਅਤੇ ਇੱਕ ਜੌਬ ID ਵਾਪਸ ਕਰਦੀ ਹੈ।
2. **Poll** — agent ਹਰ 2 ਸੈਕਿੰਡ ਬਾਅਦ `gratis_ai_job_status($job_id)` ਨੂੰ ਪੁੱਛਦਾ ਹੈ।
3. **Stream** — ਵਿਚਕਾਰਲੇ ਪ੍ਰੋਗਰੈਸ ਮੈਸੇਜ ਚੈਟ ਥ੍ਰੈਡ ਵਿੱਚ ਪਾਏ ਜਾਂਦੇ ਹਨ।
4. **Complete** — ਅੰਤਿਮ ਨਤੀਜਾ (ਸਫਲਤਾ ਜਾਂ ਗਲਤੀ) ਵਾਪਸ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।

ਜੌਬ ਲਾਈਫਸਾਈਕਲ ਘਟਨਾਵਾਂ ਵਿੱਚ ਹੂਕ ਕਰਨ ਲਈ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
