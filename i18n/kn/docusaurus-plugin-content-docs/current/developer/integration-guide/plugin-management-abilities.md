---
title: ಪ್ಲಗ್ಇನ್ ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳು
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities (ಪ್ಲಗ್ಇನ್ ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳು) {#plugin-management-abilities}

Gratis AI Agent v1.5.0 ರಲ್ಲಿ **7 प्लगइन् ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳು** (plugin management abilities) ಸೇರಿವೆ. ಈ ಸಾಮರ್ಥ್ಯಗಳನ್ನು AI ಸಹಾಯಕನು ಸಂಭಾಷಣೆಯ ಸಮಯದಲ್ಲಿ ಬಳಸಬಹುದು. ಈ ಸಾಮರ್ಥ್ಯಗಳು [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) ಮೂಲಕ ಸ್ಥಾಪಿಸಲಾದ WordPress प्लगइन्‌ಗಳ ಮೇಲೆ ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ ನಿಯಂತ್ರಣವನ್ನು ಒದಗಿಸುತ್ತವೆ.

## Abilities Overview (ಸಾಮರ್ಥ್ಯಗಳ ಅವಲೋಕನ) {#abilities-overview}

| Ability (ಸಾಮರ್ಥ್ಯ) | Slug | Description (ವಿವರಣೆ) |
|---|---|---|
| List Plugins (ಪ್ಲಗ್ಇನ್‌ಗಳನ್ನು ಪಟ್ಟಿಮಾಡು) | `list_plugins` | ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಸ್ಟೋರ್‌ನಲ್ಲಿರುವ प्लगइन्‌ಗಳ ಪಟ್ಟಿಯನ್ನು ಮತ್ತು ಅವುಗಳ ಸ್ಥಿತಿಯನ್ನು (status) ಮರಳಿ ನೀಡುತ್ತದೆ. |
| Get Plugin (ಪ್ಲಗ್ಇನ್ ಪಡೆಯು) | `get_plugin` | ಒಂದು ನಿರ್ದಿಷ್ಟ प्लगइನ್‌ನ slug ಮೂಲಕ ಅದರ ಮೆಟಾಡೇಟಾ ಮತ್ತು ಮೂಲ ಕೋಡ್ ಅನ್ನು ಪಡೆಯುತ್ತದೆ. |
| Create Plugin (ಪ್ಲಗ್ಇನ್ ರಚಿಸು) | `create_plugin` | ವಿವರಣೆಯ ಆಧಾರದ ಮೇಲೆ ಹೊಸ प्लगइನ್ ಅನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಅದನ್ನು ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ. |
| Update Plugin (ಪ್ಲಗ್ಇನ್ ನವೀಕರಿಸು) | `update_plugin` | प्लगइನ್‌ನ ಮೂಲ ಕೋಡ್ ಅನ್ನು ಹೊಸ ಆವೃತ್ತಿಯೊಂದಿಗೆ ಬದಲಾಯಿಸುತ್ತದೆ. |
| Delete Plugin (ಪ್ಲगइನ್ ಅಳಿಸು) | `delete_plugin` | ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಸ್ಟೋರ್‌ನಿಂದ प्लगइನ್ ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ. ಮೊದಲು ಅದನ್ನು ಡಿакಟಿವೇಟ್ ಮಾಡುತ್ತದೆ. |
| Install Plugin (ಪ್ಲಗ್इನ್ ಅಳವಡಿಸು) | `install_plugin` | ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿರುವ प्लगइನ್ ಅನ್ನು ಲೈವ್ WordPress प्लगइನ್ ಡೈರೆಕ್ಟರಿಗೆ ನಿಯೋಜಿಸುತ್ತದೆ (deploy). |
| Activate Plugin (ಪ್ಲಗ್इನ್ ಸಕ್ರಿಯಗೊಳಿಸು) | `activate_plugin` | wp-env ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಪರಿಸರದಲ್ಲಿ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ प्लगइನ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ. |

## Plugin Installer API (ಪ್ಲಗ್इನ್ ಇನ್‌ಸ್ಟಾಲರ್ API) {#plugin-installer-api}

ಪ್ಲಗ್इನ್‌ಗಳನ್ನು ನಿಯೋಜಿಸುವಾಗ ಅಥವಾ ತೆಗೆದುಹಾಕುವಾಗ प्लगइನ್ ಇನ್‌ಸ್ಟಾಲರ್ ಫೈಲ್ ಸಿسٹم ಆಪರೇಷನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. ಪ್ರಮುಖ ಕಾರ್ಯಗಳು:

- **Path validation (ಮಾರ್ಗ ಪರಿಶೀಲನೆ)**: ಯಾವುದೇ ಫೈಲ್ ಬರವಣಿಗೆಯ ಮೊದಲು ಎಲ್ಲಾ प्लगइನ್ ಮಾರ್ಗಗಳನ್ನು (paths) ಅನುಮತಿಸಲಾದ प्लगइನ್ ಡೈರೆಕ್ಟರಿಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಡೈರೆಕ್ಟರಿ ಟ್ರಾವೆರ್ಸಲ್ ಪ್ರಯತ್ನಗಳನ್ನು ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ.
- **Multi-file install (ಬಹು-ಫೈಲ್ ಅಳವಡಿಕೆ)**: ಒಂದು प्लगइನ್ ಅನೇಕ ಫೈಲ್‌ಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು. ಇನ್‌ಸ್ಟಾಲರ್ प्लगइನ್ ಡೈರೆಕ್ಟರಿಯನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಎಲ್ಲಾ ಫೈಲ್‌ಗಳನ್ನು ಏಕಕಾಲೀನವಾಗಿ (atomically) ಬರೆಯುತ್ತದೆ.
- **Update (ನವೀಕರಣ)**: ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ प्लगइನ್ ಫೈಲ್‌ಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ. ಭಾಗಶಃ-ಸ್ಥಿತಿ ದೋಷಗಳನ್ನು (partial-state errors) ತಪ್ಪಿಸಲು ಬರೆಯುವ ಮೊದಲು प्लगइನ್ ಅನ್ನು ಡಿакಟಿವೇಟ್ ಮಾಡುತ್ತದೆ.
- **Delete by slug (slug ಮೂಲಕ ಅಳಿಸುವಿಕೆ)**: slug ಮೂಲಕ प्लगइನ್ ಡೈರೆಕ್ಟರಿಯನ್ನು ಹುಡುಕುತ್ತದೆ, ಎಲ್ಲಾ সাইಟ್‌ಗಳಲ್ಲಿ ಡಿакಟಿವೇಟ್ ಮಾಡುತ್ತದೆ, ನಂತರ ಡೈರೆಕ್ಟರಿಯನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.

### Registering a Custom Install Handler (ಕಸ್ಟಮ್ ಇನ್‌ಸ್ಟಾಲ್ ಹ್ಯಾಂಡಲರ್ ನೋಂದಣಿ) {#registering-a-custom-install-handler}

ನೀವು `gratis_ai_plugin_installer_before_install` ಮತ್ತು `gratis_ai_plugin_installer_after_install` ಆಕ್ಷನ್‌ಗಳನ್ನು ಬಳಸಿ ಇನ್‌ಸ್ಟಾಲ್ life cycle ಗೆ hook ಮಾಡಬಹುದು:

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

## Ecosystem Registry (ಪರಿಸರ ದಾಖಲೆ) {#ecosystem-registry}

ಸಾಮರ್ಥ್ಯಗಳನ್ನು **ಪ್ಲಗ್इನ್ ಪರಿಸರ ದಾಖಲೆ (plugin ecosystem registry)** ಮೂಲಕ ನೋಂದಾಯಿಸಲಾಗುತ್ತದೆ. ಈ ದಾಖಲೆಯು ಸಾಮರ್ಥ್ಯ slug ಗಳನ್ನು ಅವುಗಳ ಹ್ಯಾಂಡಲರ್ class ಗಳಿಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಅವುಗಳನ್ನು AI ಏಜೆಂಟ್‌ನ ಟೂಲ್ ಡಿಸ್ಪ್ಯಾಚರ್‌ಗೆ ಒದಗಿಸುತ್ತದೆ.

ಕಸ್ಟಮ್ प्लगइನ್ ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯವನ್ನು ನೋಂದಾಯಿಸಲು:

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

ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ class ಗೆ `Gratis_AI_Ability_Interface` ಅನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸಬೇಕು:

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

## HookScanner Integration (HookScanner ಏಕೀಕರಣ) {#hookscanner-integration}

`create_plugin` ಮತ್ತು `update_plugin` ಸಾಮರ್ಥ್ಯಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ **HookScanner** ಅನ್ನು ಹೊಸದಾಗಿ ರಚಿಸಿದ ಕೋಡ್‌ಗಳ ವಿರುದ್ಧ ಚಲಾಯಿಸುತ್ತವೆ. प्लगइನ್‌ನಿಂದ ನೋಂದಾಯಿಸಲಾದ WordPress ಆಕ್ಷನ್ ಮತ್ತು ಫಿಲ್ಟರ್ hook ಗಳನ್ನು HookScanner ಮರಳಿ ನೀಡುತ್ತದೆ.

HookScanner ಫಲಿತಾಂಶಗಳನ್ನು ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ ಆಗಿ ಪಡೆಯಲು:

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

HookScanner ಸ್ವಯಂಚಾಲಿತವಾಗಿ `vendor/` ಮತ್ತು `node_modules/` ಡೈರೆಕ್ಟರಿಗಳನ್ನು ಬಿಟ್ಟುಬಿಡುತ್ತದೆ.

## Async Job Architecture (ಅಸिंಕ್ರಣ ಕಾರ್ಯ ವಿನ್ಯಾಸ) {#async-job-architecture}

ದೀರ್ಘಾವಧಿಯ प्लगइನ್ ಕಾರ್ಯಾಚರಣೆಗಳು (ರಚಿಸುವುದು, ಅಳವಡಿಸುವುದು) ಲೈವ್ ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ **ಅಸिंಕ್ರಣ ಕಾರ್ಯಗಳಾಗಿ (async jobs)** ವಿತರಿಸಲ್ಪಡುತ್ತವೆ. AI ಚಾಟ್ ಇಂಟರ್‌ಫೇಸ್ ಪ್ರಗತಿಗಾಗಿ ಪೋಲ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಬಳಕೆದಾರರಿಗೆ ಸ್ಥಿತಿ ನವೀಕರಣಗಳನ್ನು ಸ್ಟ್ರೀಮ್ ಮಾಡುತ್ತದೆ:

1. **Dispatch (ವಿತರಿಸುವುದು)** — ಸಾಮರ್ಥ್ಯವು ಒಂದು ಅಸिंಕ್ರಣ ಕಾರ್ಯವನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಒಂದು ಜ๊อบ ID ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.
2. **Poll (ಪೋಲ್ ಮಾಡುವುದು)** — ಏಜೆಂಟ್ ಪ್ರತಿ 2 ಸೆಕೆಂಡ್‌ಗಳಿಗೆ `gratis_ai_job_status($job_id)` ಅನ್ನು ಪೋಲ್ ಮಾಡುತ್ತದೆ.
3. **Stream (ಸ್ಟ್ರೀಮ್)** — ಮಧ್ಯಂತರ ಪ್ರಗತಿ ಸಂದೇಶಗಳನ್ನು ಚಾಟ್ ಥ್ರೆಡ್‌ಗೆ ಪುಶ್ ಮಾಡಲಾಗುತ್ತದೆ.
4. **Complete (ಪೂರ್ಣಗೊಳಿಸುವುದು)** — ಅಂತಿಮ ಫಲಿತಾಂಶ (ಯಶಸ್ಸು ಅಥವಾ ದೋಷ) ಮರಳಿ ನೀಡப்பட்டு ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

ಜ๊อบ life cycle ಘಟನೆಗಳಿಗೆ hook ಮಾಡಲು:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
