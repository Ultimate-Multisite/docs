---
title: Muligheder for pluginhåndtering
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin-administrationsfunktioner

Gratis AI Agent v1.5.0 leveres med **7 plugin-administrationsfunktioner**, som AI-assistenten kan kalde under en samtale. Disse funktioner giver programmatisk kontrol over WordPress plugins installeret via [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Oversigt over funktioner

| Funktion | Slug | Beskrivelse |
|---|---|---|
| Vis Plugins | `list_plugins` | Returnerer en liste over plugins i sandbox-lageret med deres status. |
| Hent Plugin | `get_plugin` | Henter metadata og kildekode for et specifikt plugin via slug. |
| Opret Plugin | `create_plugin` | Genererer et nyt plugin ud fra en beskrivelse og gemmer det i sandboxen. |
| Opdater Plugin | `update_plugin` | Erstatter et plugins kildekode med en ny version. |
| Slet Plugin | `delete_plugin` | Fjerner et plugin fra sandbox-lageret. Deaktiverer først. |
| Installer Plugin | `install_plugin` | Udruller et sandboxet plugin til den live WordPress plugin-mappe. |
| Aktivér Plugin | `activate_plugin` | Aktiverer et sandboxet plugin i wp-env sandbox-miljøet. |

## Plugin Installer API

Plugin-installationsprogrammet håndterer filsystemoperationer ved udrulning eller fjernelse af plugins. Centrale adfærdsmønstre:

- **Stivalidering**: Alle plugin-stier valideres mod den tilladte plugin-mappe før nogen filskrivning. Forsøg på directory traversal afvises.
- **Installation med flere filer**: Et plugin kan bestå af flere filer. Installationsprogrammet opretter plugin-mappen og skriver alle filer atomisk.
- **Opdatering**: Erstatter eksisterende plugin-filer. Deaktiverer pluginet før skrivning for at undgå fejl med delvis tilstand.
- **Slet efter slug**: Finder plugin-mappen efter slug, deaktiverer på tværs af alle sites og fjerner derefter mappen.

### Registrering af en brugerdefineret installationshåndtering

Du kan hooke ind i installationslivscyklussen ved hjælp af `gratis_ai_plugin_installer_before_install`- og `gratis_ai_plugin_installer_after_install`-handlingerne:

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

## Økosystemregister

Funktioner registreres gennem **plugin-økosystemregisteret**. Registeret mapper funktions-slugs til deres handler-klasser og eksponerer dem for AI-agentens værktøjsdispatcher.

For at registrere en brugerdefineret plugin-administrationsfunktion:

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

Din funktionsklasse skal implementere `Gratis_AI_Ability_Interface`:

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

## HookScanner-integration

Funktionerne `create_plugin` og `update_plugin` kører automatisk **HookScanner** mod nyligt genereret kode. HookScanner returnerer en liste over WordPress action- og filter-hooks, der er registreret af pluginet.

For at hente HookScanner-resultater programmatisk:

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

HookScanner springer automatisk mapperne `vendor/` og `node_modules/` over.

## Arkitektur for async jobs

Langvarige plugin-operationer (generering, installation) afsendes som **async jobs** med live statussporing. AI-chatgrænsefladen poller efter status og streamer statusopdateringer til brugeren:

1. **Afsendelse** — funktionen opretter et async job og returnerer et job-ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — mellemliggende statusbeskeder sendes til chat-tråden.
4. **Fuldførelse** — det endelige resultat (succes eller fejl) returneres og vises.

For at hooke ind i joblivscyklushændelser:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
