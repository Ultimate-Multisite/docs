---
title: പ്ലഗിൻ മാനേജ്‌മെന്റ് കഴിവുകൾ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities {#plugin-management-abilities}

Gratis AI Agent v1.5.0-ൽ **7 plugin management abilities** ഉൾപ്പെടുത്തിയിട്ടുണ്ട്. സംഭാഷണത്തിനിടയിൽ AI അസിസ്റ്റന്റിന് ഉപയോഗിക്കാൻ കഴിയുന്ന കഴിവുകളാണിവ. ഈ കഴിവുകൾ [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) വഴി ഇൻസ്റ്റാൾ ചെയ്തിട്ടുള്ള WordPress plugins-ന്മേൽ പ്രോഗ്രാമിംഗ് നിയന്ത്രണം നൽകുന്നു.

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | സാൻഡ്‌ബോക്സ് സ്റ്റോറിലുള്ള plugins-ന്റെ ലിസ്റ്റും അവയുടെ സ്റ്റാറ്റസും ഇത് നൽകുന്നു. |
| Get Plugin | `get_plugin` | ഒരു പ്രത്യേക plugin-ന്റെ slug ഉപയോഗിച്ച് അതിന്റെ മെറ്റാഡാറ്റയും സോഴ്സ് കോഡും ഇത് എടുക്കുന്നു. |
| Create Plugin | `create_plugin` | ഒരു വിവരണത്തിൽ നിന്ന് പുതിയ plugin ഉണ്ടാക്കുകയും അത് സാൻഡ്‌ബോക്സിൽ സ്റ്റോർ ചെയ്യുകയും ചെയ്യുന്നു. |
| Update Plugin | `update_plugin` | ഒരു plugin-ന്റെ സോഴ്സ് കോഡ് പുതിയ പതിപ്പിലേക്ക് മാറ്റിസ്ഥാപിക്കുന്നു. |
| Delete Plugin | `delete_plugin` | സാൻഡ്‌ബോക്സ് സ്റ്റോറിൽ നിന്ന് ഒരു plugin നീക്കം ചെയ്യുന്നു. ആദ്യം അത് deactivate ചെയ്യും. |
| Install Plugin | `install_plugin` | സാൻഡ്‌ബോക്സിൽ ഉള്ള ഒരു plugin ലൈവ് WordPress plugin directory-യിലേക്ക് വിന്യസിക്കുന്നു (deploy). |
| Activate Plugin | `activate_plugin` | wp-env സാൻഡ്‌ബോക്സ് എൻവയോൺമെന്റിൽ ഒരു സാൻഡ്‌ബോക്സ്ഡ് plugin activate ചെയ്യുന്നു. |

## Plugin Installer API {#plugin-installer-api}

plugins വിന്യസിക്കുമ്പോഴോ നീക്കം ചെയ്യുമ്പോഴോ ഫയൽ സിസ്റ്റം ഓപ്പറേഷനുകൾ കൈകാര്യം ചെയ്യുന്നത് plugin installer ആണ്. പ്രധാനപ്പെട്ട കാര്യങ്ങൾ ഇവയാണ്:

- **Path validation**: ഏതെങ്കിലും ഫയൽ എഴുതുന്നതിന് മുമ്പ് എല്ലാ plugin path-ഉം അനുവദനീയമായ plugin directory-മായി താരതമ്യം ചെയ്ത് സാധൂകരിക്കുന്നു. Directory traversal ശ്രമങ്ങൾ തള്ളിക്കളയുന്നു.
- **Multi-file install**: ഒരു plugin ഒന്നിലധികം ഫയലുകൾ ഉൾക്കൊള്ളാൻ സാധ്യതയുണ്ട്. ഇൻസ്റ്റാളർ plugin directory ഉണ്ടാക്കുകയും എല്ലാ ഫയലുകളും ആറ്റോമികമായി (atomically) എഴുതുകയും ചെയ്യുന്നു.
- **Update**: നിലവിലുള്ള plugin ഫയലുകൾ മാറ്റിസ്ഥാപിക്കുന്നു. ഭാഗികമായ സ്റ്റേറ്റ് എററുകൾ ഒഴിവാക്കാൻ എഴുതുന്നതിന് മുമ്പ് plugin deactivate ചെയ്യുന്നു.
- **Delete by slug**: slug ഉപയോഗിച്ച് plugin directory കണ്ടെത്തുന്നു, എല്ലാ സൈറ്റുകളിലും അത് deactivate ചെയ്യുന്നു, അതിനുശേഷം directory നീക്കം ചെയ്യുന്നു.

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` ഉം `gratis_ai_plugin_installer_after_install` ഉം actions ഉപയോഗിച്ച് നിങ്ങൾക്ക് install lifecycle-ൽ hook ചെയ്യാൻ കഴിയും:

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

**plugin ecosystem registry** വഴിയാണ് കഴിവുകൾ (abilities) രജിസ്റ്റർ ചെയ്യുന്നത്. ഈ registry, ability slugs-നെ അവയുടെ handler classes-മായി മാപ്പ് ചെയ്യുകയും അവ AI agent-ന്റെ tool dispatcher-ന് മുന്നിൽ ലഭ്യമാക്കുകയും ചെയ്യുന്നു.

ഒരു കസ്റ്റം plugin management ability രജിസ്റ്റർ ചെയ്യാൻ:

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

നിങ്ങളുടെ ability class-ന് `Gratis_AI_Ability_Interface` നടപ്പിലാക്കേണ്ടതുണ്ട്:

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

പുതിയതായി സൃഷ്ടിക്കപ്പെടുന്ന കോഡിന്മേൽ `create_plugin` ഉം `update_plugin` ഉം abilities ഓട്ടോമാറ്റിക്കായി **HookScanner** പ്രവർത്തിപ്പിക്കുന്നു. plugin-ൽ രജിസ്റ്റർ ചെയ്തിട്ടുള്ള WordPress action, filter hooks എന്നിവയുടെ ലിസ്റ്റ് HookScanner നൽകുന്നു.

HookScanner ഫലങ്ങൾ പ്രോഗ്രാമാറ്റിക്കായി എടുക്കാൻ:

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

HookScanner ഓട്ടോമാറ്റിക്കായി `vendor/` ഉം `node_modules/` ഉം directories ഒഴിവാക്കുന്നു.

## Async Job Architecture {#async-job-architecture}

കൂടുതൽ സമയം എടുക്കുന്ന plugin ഓപ്പറേഷനുകൾ (ഉണ്ടാക്കൽ, ഇൻസ്റ്റാൾ ചെയ്യൽ) **async jobs** ആയി വിതരണം ചെയ്യപ്പെടുകയും ലൈവ് പ്രോഗ്രസ് ട്രാക്കിംഗ് നൽകുകയും ചെയ്യുന്നു. AI chat interface പ്രോഗ്രസ് പോൾ ചെയ്യുകയും സ്റ്റാറ്റസ് അപ്ഡേറ്റുകൾ ഉപയോക്താവിന് സ്ട്രീം ചെയ്യുകയും ചെയ്യുന്നു:

1. **Dispatch** — ability ഒരു async job സൃഷ്ടിക്കുകയും ഒരു job ID തിരികെ നൽകുകയും ചെയ്യുന്നു.
2. **Poll** — agent ഓരോ 2 സെക്കൻഡിലും `gratis_ai_job_status($job_id)` പോൾ ചെയ്യുന്നു.
3. **Stream** — ഇടയിലുള്ള പ്രോഗ്രസ് സന്ദേശങ്ങൾ chat thread-ലേക്ക് push ചെയ്യപ്പെടുന്നു.
4. **Complete** — അന്തിമ ഫലം (വിജയം അല്ലെങ്കിൽ പിശക്) തിരികെ നൽകുകയും പ്രദർശിപ്പിക്കുകയും ചെയ്യുന്നു.

Job lifecycle events-ൽ hook ചെയ്യാൻ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
