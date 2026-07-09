---
title: Mga Abilidad sa Pagdumala sa Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Mga Abilidad sa Pagdumala sa Plugin

Ang Gratis AI Agent v1.5.0 nagdala og **7 ka abilidad sa pagdumala sa plugin** nga mahimong tawagon sa AI nga katabang panahon sa panag-istorya. Kini nga mga abilidad naghatag og programmatic nga kontrol sa mga WordPress plugin nga gi-install pinaagi sa [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Kinatibuk-ang Tan-aw sa mga Abilidad

| Abilidad | Slug | Deskripsyon |
|---|---|---|
| Ilista ang mga Plugin | `list_plugins` | Mobalik og lista sa mga plugin sa sandbox store uban sa ilang status. |
| Kuhaa ang Plugin | `get_plugin` | Mokuha og metadata ug source code alang sa espesipikong plugin pinaagi sa slug. |
| Paghimo og Plugin | `create_plugin` | Mohimo og bag-ong plugin gikan sa deskripsyon ug motipig niini sa sandbox. |
| I-update ang Plugin | `update_plugin` | Mopuli sa source code sa plugin gamit ang bag-ong bersyon. |
| Papasa ang Plugin | `delete_plugin` | Mokuha sa plugin gikan sa sandbox store. I-deactivate una. |
| I-install ang Plugin | `install_plugin` | Mo-deploy sa sandboxed plugin ngadto sa live nga WordPress plugin directory. |
| I-activate ang Plugin | `activate_plugin` | Mo-activate sa sandboxed plugin sa wp-env sandbox environment. |

## API sa Tig-install sa Plugin

Ang tig-install sa plugin maoy modumala sa mga operasyon sa file system kung mag-deploy o magkuha sa mga plugin. Pangunang mga batasan:

- **Pag-validate sa path**: Tanang plugin path gi-validate batok sa gitugot nga plugin directory sa wala pa ang bisan unsang pagsulat sa file. Ang mga pagsulay sa directory traversal isalikway.
- **Multi-file nga install**: Ang plugin mahimong naglangkob sa daghang file. Ang installer mohimo sa plugin directory ug mosulat sa tanang file nga atomic.
- **Update**: Mopuli sa kasamtangang mga file sa plugin. I-deactivate ang plugin sa wala pa magsulat aron malikayan ang partial-state nga mga sayop.
- **Delete pinaagi sa slug**: Pangitaon ang plugin directory pinaagi sa slug, i-deactivate sa tanang site, dayon kuhaon ang directory.

### Pagrehistro og Custom nga Install Handler

Makagamit ka og hook sa install lifecycle gamit ang `gratis_ai_plugin_installer_before_install` ug `gratis_ai_plugin_installer_after_install` nga mga action:

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

Ang mga abilidad girehistro pinaagi sa **plugin ecosystem registry**. Ang registry nag-map sa mga ability slug ngadto sa ilang handler classes ug nag-expose kanila sa tool dispatcher sa AI agent.

Aron magrehistro og custom nga abilidad sa pagdumala sa plugin:

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

Ang imong ability class kinahanglan mo-implement sa `Gratis_AI_Ability_Interface`:

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

## Integrasyon sa HookScanner

Ang `create_plugin` ug `update_plugin` nga mga abilidad awtomatikong mopadagan sa **HookScanner** batok sa bag-ong nahimong code. Ang HookScanner mobalik og lista sa WordPress action ug filter hooks nga girehistro sa plugin.

Aron makuha ang mga resulta sa HookScanner sa programmatic nga paagi:

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

Awtomatikong laktawan sa HookScanner ang `vendor/` ug `node_modules/` nga mga directory.

## Arkitektura sa Async Job

Ang dugay mahuman nga mga operasyon sa plugin (generate, install) ipadala isip **async jobs** nga adunay live nga pagsubay sa progreso. Ang AI chat interface mag-poll alang sa progreso ug mag-stream sa mga update sa status ngadto sa user:

1. **Dispatch** — ang abilidad mohimo og async job ug mobalik og job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — ang mga tunga-tungang mensahe sa progreso iduso ngadto sa chat thread.
4. **Complete** — ang kataposang resulta (kalampusan o sayop) ibalik ug ipakita.

Aron mag-hook sa mga job lifecycle event:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
