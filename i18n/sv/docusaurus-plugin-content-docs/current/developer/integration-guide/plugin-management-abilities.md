---
title: Funktionalitet för hantering av plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities

Gratis AI Agent v1.5.0 kommer med **7 plugin management abilities** som AI-assistenten kan anropa under ett samtal. Dessa abilities ger programmeringskontroll över WordPress-plugins som är installerade via [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | Returnerar en lista över plugins i sandbox-butiken tillsammans med deras status. |
| Get Plugin | `get_plugin` | Hämtar metadata och källkod för ett specifikt plugin via slug. |
| Create Plugin | `create_plugin` | Genererar ett nytt plugin från en beskrivning och lagrar det i sandboxen. |
| Update Plugin | `update_plugin` | Ersätter ett plugins källkod med en ny version. |
| Delete Plugin | `delete_plugin` | Tar bort ett plugin från sandbox-butiken. Avaktiverar först. |
| Install Plugin | `install_plugin` | Deployar ett sandboxed plugin till det live WordPress plugin-katalogen. |
| Activate Plugin | `activate_plugin` | Aktiverar ett sandboxed plugin i wp-env sandbox-miljön. |

## Plugin Installer API {#plugin-installer-api}

Plugin-installatorn hanterar filsystemoperationer när den deployar eller tar bort plugins. Viktiga beteenden:

- **Path validation**: Alla plugin-sökvägar valideras mot den tillåtna plugin-katalogen innan någon filskrivning sker. Försök till katalogtraversal avvisas.
- **Multi-file install**: Ett plugin kan bestå av flera filer. Installatorn skapar plugin-katalogen och skriver alla filer atomärt.
- **Update**: Ersätter befintliga plugin-filer. Avaktiverar pluginet innan skrivning för att undvika fel relaterade till ofullständigt tillstånd.
- **Delete by slug**: Lokaliserar plugin-katalogen via slug, avaktiverar över alla sites, och tar sedan bort katalogen.

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

Du kan haka på installationslivscykeln med actionerna `gratis_ai_plugin_installer_before_install` och `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: pluginets katalognamn
    // $files: associerat array av relativ sökväg => filinnehåll
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

Abilities registreras via **plugin ecosystem registry**. Registret mappar ability slugs till deras handler-klasser och exponerar dem för AI-agentens tool dispatcher.

För att registrera en anpassad plugin management ability:

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

Din ability-klass måste implementera `Gratis_AI_Ability_Interface`:

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

Abilities för `create_plugin` och `update_plugin` kör automatiskt **HookScanner** mot nyskapad kod. HookScanner returnerar en lista över WordPress action- och filter-hooks som pluginet registrerat.

För att hämta HookScanner-resultat programmeringsmässigt:

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

HookScanner hoppar automatiskt över `vendor/` och `node_modules/` katalogerna.

## Async Job Architecture {#async-job-architecture}

Långvariga plugin-operationer (generera, installera) skickas ut som **async jobs** med live progress-spårning. AI-chattgränssnittet poll:ar efter framsteg och strömmar statusuppdateringar till användaren:

1. **Dispatch** — ability skapar ett async job och returnerar ett job ID.
2. **Poll** — agenten poll:ar `gratis_ai_job_status($job_id)` var 2:a sekund.
3. **Stream** — mellanliggande framstegsmeddelanden skickas till chatt-tråden.
4. **Complete** — det slutgiltiga resultatet (framgång eller fel) returneras och visas.

För att haka på job-livscykelhändelser:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
