---
title: "Plugin Management Abilities"
sidebar_position: 4
---

# Plugin Management Abilities

Gratis AI Agent v1.5.0 ships with **7 plugin management abilities** that the AI assistant can invoke during a conversation. These abilities provide programmatic control over WordPress plugins installed through the [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Abilities Overview

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | Returns a list of plugins in the sandbox store with their status. |
| Get Plugin | `get_plugin` | Retrieves metadata and source code for a specific plugin by slug. |
| Create Plugin | `create_plugin` | Generates a new plugin from a description and stores it in the sandbox. |
| Update Plugin | `update_plugin` | Replaces a plugin's source code with a new version. |
| Delete Plugin | `delete_plugin` | Removes a plugin from the sandbox store. Deactivates first. |
| Install Plugin | `install_plugin` | Deploys a sandboxed plugin to the live WordPress plugin directory. |
| Activate Plugin | `activate_plugin` | Activates a sandboxed plugin in the wp-env sandbox environment. |

## Plugin Installer API

The plugin installer handles file system operations when deploying or removing plugins. Key behaviours:

- **Path validation**: All plugin paths are validated against the allowed plugin directory before any file write. Directory traversal attempts are rejected.
- **Multi-file install**: A plugin may consist of multiple files. The installer creates the plugin directory and writes all files atomically.
- **Update**: Replaces existing plugin files. Deactivates the plugin before writing to avoid partial-state errors.
- **Delete by slug**: Locates the plugin directory by slug, deactivates across all sites, then removes the directory.

### Registering a Custom Install Handler

You can hook into the install lifecycle using the `gratis_ai_plugin_installer_before_install` and `gratis_ai_plugin_installer_after_install` actions:

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

## Ecosystem Registry

Abilities are registered through the **plugin ecosystem registry**. The registry maps ability slugs to their handler classes and exposes them to the AI agent's tool dispatcher.

To register a custom plugin management ability:

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

Your ability class must implement the `Gratis_AI_Ability_Interface`:

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

## HookScanner Integration

The `create_plugin` and `update_plugin` abilities automatically run the **HookScanner** against newly generated code. HookScanner returns a list of WordPress action and filter hooks registered by the plugin.

To retrieve HookScanner results programmatically:

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

HookScanner skips `vendor/` and `node_modules/` directories automatically.

## Async Job Architecture

Long-running plugin operations (generate, install) are dispatched as **async jobs** with live progress tracking. The AI chat interface polls for progress and streams status updates to the user:

1. **Dispatch** — the ability creates an async job and returns a job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — intermediate progress messages are pushed to the chat thread.
4. **Complete** — the final result (success or error) is returned and displayed.

To hook into job lifecycle events:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
