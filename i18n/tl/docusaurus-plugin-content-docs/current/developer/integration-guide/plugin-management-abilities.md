---
title: Mga Kakayahan sa Pamamahala ng Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Mga Kakayahan sa Pamamahala ng Plugin {#plugin-management-abilities}

Ang Gratis AI Agent v1.5.0 ay may kasamang **7 kakayahan sa pamamahala ng plugin** na maaaring tawagin ng AI assistant habang nasa isang pag-uusap. Nagbibigay ang mga kakayahang ito ng programmatic na kontrol sa mga WordPress plugin na naka-install sa pamamagitan ng [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Pangkalahatang-ideya ng mga Kakayahan {#abilities-overview}

| Kakayahan | Slug | Paglalarawan |
|---|---|---|
| Ilista ang mga Plugin | `list_plugins` | Nagbabalik ng listahan ng mga plugin sa sandbox store kasama ang kanilang status. |
| Kunin ang Plugin | `get_plugin` | Kinukuha ang metadata at source code para sa isang partikular na plugin ayon sa slug. |
| Gumawa ng Plugin | `create_plugin` | Gumagawa ng bagong plugin mula sa isang paglalarawan at iniimbak ito sa sandbox. |
| I-update ang Plugin | `update_plugin` | Pinapalitan ang source code ng isang plugin ng bagong bersyon. |
| Tanggalin ang Plugin | `delete_plugin` | Inaalis ang isang plugin mula sa sandbox store. Dina-deactivate muna. |
| I-install ang Plugin | `install_plugin` | Nagde-deploy ng sandboxed plugin sa live WordPress plugin directory. |
| I-activate ang Plugin | `activate_plugin` | Ina-activate ang sandboxed plugin sa wp-env sandbox environment. |

## Plugin Installer API {#plugin-installer-api}

Pinangangasiwaan ng plugin installer ang mga operasyon sa file system kapag nagde-deploy o nag-aalis ng mga plugin. Mahahalagang gawi:

- **Pagpapatunay ng path**: Lahat ng plugin path ay pinapatunayan laban sa pinahihintulutang plugin directory bago ang anumang pagsulat ng file. Tinatanggihan ang mga pagtatangkang directory traversal.
- **Pag-install ng maraming file**: Maaaring binubuo ang isang plugin ng maraming file. Lumilikha ang installer ng plugin directory at isinusulat ang lahat ng file nang atomically.
- **Update**: Pinapalitan ang umiiral na mga file ng plugin. Dina-deactivate ang plugin bago magsulat upang maiwasan ang mga partial-state error.
- **Pagtanggal ayon sa slug**: Hinahanap ang plugin directory ayon sa slug, dina-deactivate sa lahat ng site, pagkatapos ay inaalis ang directory.

### Pagrehistro ng Custom na Install Handler {#registering-a-custom-install-handler}

Maaari kang mag-hook sa install lifecycle gamit ang mga action na `gratis_ai_plugin_installer_before_install` at `gratis_ai_plugin_installer_after_install`:

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

Ang mga kakayahan ay nirerehistro sa pamamagitan ng **plugin ecosystem registry**. Imamina-map ng registry ang mga ability slug sa kanilang mga handler class at inilalantad ang mga ito sa tool dispatcher ng AI agent.

Upang magrehistro ng custom na kakayahan sa pamamahala ng plugin:

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

Dapat i-implement ng iyong ability class ang `Gratis_AI_Ability_Interface`:

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

Awtomatikong pinapatakbo ng mga kakayahang `create_plugin` at `update_plugin` ang **HookScanner** laban sa bagong nabuong code. Nagbabalik ang HookScanner ng listahan ng mga WordPress action at filter hook na nirerehistro ng plugin.

Upang makuha ang mga resulta ng HookScanner sa programmatic na paraan:

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

Awtomatikong nilalaktawan ng HookScanner ang mga directory na `vendor/` at `node_modules/`.

## Arkitektura ng Async Job {#async-job-architecture}

Ang mga matagalang operasyon ng plugin (pag-generate, pag-install) ay ipinapadala bilang **async jobs** na may live na pagsubaybay sa progreso. Nagpo-poll ang AI chat interface para sa progreso at nag-stream ng mga update ng status sa user:

1. **Dispatch** — lumilikha ang kakayahan ng async job at nagbabalik ng job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — itinutulak ang mga intermediate na mensahe ng progreso sa chat thread.
4. **Kumpleto** — ibinabalik at ipinapakita ang huling resulta (tagumpay o error).

Upang mag-hook sa mga event ng job lifecycle:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
