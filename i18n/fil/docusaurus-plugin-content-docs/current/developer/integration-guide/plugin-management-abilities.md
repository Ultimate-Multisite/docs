---
title: Kakayahan sa Pamamahala ng Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities {#plugin-management-abilities}

Ang Gratis AI Agent v1.5.0 ay may kasamang **7 plugin management abilities** na maaaring gamitin ng AI assistant habang nag-uusap. Ang mga abilities na ito ay nagbibigay ng programmatic control sa mga WordPress plugin na naka-install sa pamamagitan ng [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | Nagbabalik ng listahan ng mga plugin sa sandbox store kasama ang kanilang status. |
| Get Plugin | `get_plugin` | Kukuha ng metadata at source code para sa isang specific na plugin gamit ang slug nito. |
| Create Plugin | `create_plugin` | Gumagawa ng bagong plugin mula sa isang description at iniimbak ito sa sandbox. |
| Update Plugin | `update_plugin` | Pinapalitan ang source code ng plugin ng bagong bersyon. |
| Delete Plugin | `delete_plugin` | Tinatanggal ang isang plugin mula sa sandbox store. Una itong dine-deactivate. |
| Install Plugin | `install_plugin` | Ipinapalabas (deploys) ang isang sandboxed plugin sa live WordPress plugin directory. |
| Activate Plugin | `activate_plugin` | Ina-activate ang isang sandboxed plugin sa wp-env sandbox environment. |

## Plugin Installer API {#plugin-installer-api}

Ang plugin installer naman ang humahawak sa mga operasyon sa file system kapag nagde-deploy o nagtatanggal ng mga plugin. Mga pangunahing pag-uugali nito:

- **Path validation**: Lahat ng plugin path ay sinusuri (validated) laban sa pinapayagang plugin directory bago mag-write ng anumang file. Hindi papayagan ang mga pagtatangka na mag-traverse ng directory.
- **Multi-file install**: Ang isang plugin ay maaaring binubuo ng maraming files. Ang installer ay gumagawa ng plugin directory at nagsusulat ng lahat ng files nang sabay-sabay (atomically).
- **Update**: Pinapalitan ang umiiral na plugin files. Dine-deactivate muna ang plugin bago magsulat para maiwasan ang mga error dahil sa partial-state.
- **Delete by slug**: Hinahanap ang plugin directory gamit ang slug, dine-deactivate ito sa lahat ng sites, at pagkatapos ay tinatanggal ang directory.

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

Maaari kang mag-hook sa install lifecycle gamit ang `gratis_ai_plugin_installer_before_install` at `gratis_ai_plugin_installer_after_install` actions:

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

Ang mga abilities ay ire-register sa pamamagitan ng **plugin ecosystem registry**. Ini-ma-map ng registry ang ability slugs sa kanilang handler classes at ipinapakita ang mga ito sa tool dispatcher ng AI agent.

Para mag-register ng custom plugin management ability:

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

Ang iyong ability class ay dapat mag-implement ng `Gratis_AI_Ability_Interface`:

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

Ang mga abilities na `create_plugin` at `update_plugin` ay awtomatikong nagpapatakbo ng **HookScanner** laban sa mga bagong nabuong code. Ang HookScanner ay nagbabalik ng listahan ng WordPress action at filter hooks na na-register ng plugin.

Para makuha ang mga resulta ng HookScanner sa pamamagitan ng code:

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

Awtomatikong nilalaktawan (skips) ng HookScanner ang mga directory na `vendor/` at `node_modules/`.

## Async Job Architecture {#async-job-architecture}

Ang mga matagal na operasyon sa plugin (pag-generate, pag-install) ay ipinapadala bilang **async jobs** na may live progress tracking. Ang AI chat interface ay nagpa-poll para sa progress at nag-s-stream ng status updates sa user:

1. **Dispatch** — ang ability ay gumagawa ng async job at nagbabalik ng job ID.
2. **Poll** — ang agent ay nagpa-poll sa `gratis_ai_job_status($job_id)` kada 2 segundo.
3. **Stream** — ang mga intermediate progress messages ay ipinapadala sa chat thread.
4. **Complete** — ang final result (success o error) ay ibinabalik at ipinapakita.

Para mag-hook sa job lifecycle events:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
