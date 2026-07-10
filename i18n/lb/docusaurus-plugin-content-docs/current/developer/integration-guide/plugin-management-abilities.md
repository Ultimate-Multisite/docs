---
title: Plugin-Verwaltungsfäegkeeten
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin-Verwaltungsfäegkeeten {#plugin-management-abilities}

Gratis AI Agent v1.5.0 kënnt mat **7 Plugin-Verwaltungsfäegkeeten**, déi de KI-Assistent wärend engem Gespréich opruffe kann. Dës Fäegkeete bidden programmatesch Kontroll iwwer WordPress-Pluginnen, déi iwwer de [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) installéiert goufen.

## Iwwersiicht vun de Fäegkeeten {#abilities-overview}

| Fäegkeet | Slug | Beschreiwung |
|---|---|---|
| Pluginnen oplëschten | `list_plugins` | Gëtt eng Lëscht vu Pluginnen am Sandbox-Store mat hirem Status zeréck. |
| Plugin ofruffen | `get_plugin` | Rufft Metadaten a Quellcode fir e spezifesche Plugin per Slug of. |
| Plugin erstellen | `create_plugin` | Generéiert en neie Plugin aus enger Beschreiwung a späichert en an der Sandbox. |
| Plugin aktualiséieren | `update_plugin` | Ersetzt de Quellcode vun engem Plugin duerch eng nei Versioun. |
| Plugin läschen | `delete_plugin` | Entfernt e Plugin aus dem Sandbox-Store. Deaktivéiert en als éischt. |
| Plugin installéieren | `install_plugin` | Setzt e sandboxéierte Plugin an de live WordPress-Plugin-Verzeechnes aus. |
| Plugin aktivéieren | `activate_plugin` | Aktivéiert e sandboxéierte Plugin an der wp-env-Sandbox-Ëmgebung. |

## Plugin-Installateur-API {#plugin-installer-api}

De Plugin-Installateur behandelt Dateisystem-Operatiounen beim Aussetzen oder Entferne vu Pluginnen. Wichteg Verhalensweisen:

- **Wee-Validatioun**: All Plugin-Weeër gi géint den erlaabte Plugin-Verzeechnes validéiert, ier eng Datei geschriwwe gëtt. Versich mat Directory Traversal ginn ofgeleent.
- **Multi-Datei-Installatioun**: E Plugin kann aus méi Dateie bestoen. Den Installateur erstellt de Plugin-Verzeechnes a schreift all Dateien atomar.
- **Aktualiséierung**: Ersetzt bestoend Plugin-Dateien. Deaktivéiert de Plugin virum Schreiwen, fir Feeler duerch en deelweisen Zoustand ze vermeiden.
- **Läsche per Slug**: Fënnt de Plugin-Verzeechnes per Slug, deaktivéiert iwwer all Siten, an entfernt duerno de Verzeechnes.

### E personaliséierten Installatiouns-Handler registréieren {#registering-a-custom-install-handler}

Dir kënnt Iech an de Installatiouns-Liewenszyklus andocken, andeems Dir d'Aktiounen `gratis_ai_plugin_installer_before_install` an `gratis_ai_plugin_installer_after_install` benotzt:

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

## Ökosystem-Registry {#ecosystem-registry}

Fäegkeete ginn iwwer d'**Plugin-Ökosystem-Registry** registréiert. D'Registry verknëppt Fäegkeets-Slugs mat hire Handler-Klassen a mécht se fir den Tool-Dispatcher vum KI-Agent disponibel.

Fir eng personaliséiert Plugin-Verwaltungsfäegkeet ze registréieren:

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

Är Fäegkeetsklass muss den `Gratis_AI_Ability_Interface` implementéieren:

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

## HookScanner-Integratioun {#hookscanner-integration}

D'Fäegkeeten `create_plugin` an `update_plugin` lafen automatesch de **HookScanner** géint nei generéierte Code. HookScanner gëtt eng Lëscht vu WordPress-Action- a Filter-Hooks zeréck, déi vum Plugin registréiert goufen.

Fir HookScanner-Resultater programmatesch ofzeruffen:

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

HookScanner iwwerspréngt automatesch `vendor/`- an `node_modules/`-Verzeechnesser.

## Async-Job-Architektur {#async-job-architecture}

Laang lafend Plugin-Operatiounen (generéieren, installéieren) ginn als **asynchron Aarbechten** mat Live-Fortschrëttsverfollegung verschéckt. D'KI-Chat-Interface freet de Fortschrëtt periodesch of a streamt Statusaktualiséierungen un de Benotzer:

1. **Verschécken** — d'Fäegkeet erstellt eng asynchron Aarbecht a gëtt eng Job-ID zeréck.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Streamen** — tëschentlech Fortschrëttsmeldunge ginn an de Chat-Thread gedréckt.
4. **Ofschléissen** — dat definitivt Resultat (Succès oder Feeler) gëtt zeréckginn an ugewisen.

Fir Iech an Eventer vum Job-Liewenszyklus anzedocken:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
