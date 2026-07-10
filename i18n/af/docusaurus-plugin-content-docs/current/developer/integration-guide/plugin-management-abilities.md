---
title: Plugin Bestuurvermoë명
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Vermoghede vir Plugin Bestuur {#plugin-management-abilities}

Gratis AI Agent v1.5.0 kom met **7 vermoghede vir plugin bestuur** wat die AI-assistent tydens 'n gesprek kan aanroep. Hierdie vermoghede bied programmeerbare beheer oor WordPress-plugins wat deur die [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) geïnstalleer word.

## Oorsig van Vermoghede {#abilities-overview}

| Vermoë | Slug | Beskrywing |
|---|---|---|
| List Plugins | `list_plugins` | Gee 'n lys van plugins in die sandbox-winkel met hul status. |
| Get Plugin | `get_plugin` | Haal metadata en bronkode vir 'n spesifieke plugin volgens slug. |
| Create Plugin | `create_plugin` | Genereer 'n nuwe plugin uit 'n beskrywing en stoor dit in die sandbox. |
| Update Plugin | `update_plugin` | Vervang die bronkode van 'n plugin met 'n nuwe weergawe. |
| Delete Plugin | `delete_plugin` | Verwyder 'n plugin uit die sandbox-winkel. Deaktiveer eers. |
| Install Plugin | `install_plugin` | Implementeer 'n sandboks-plugin na die lewendige WordPress plugin-direktorie. |
| Activate Plugin | `activate_plugin` | Aktiveer 'n sandboks-plugin in die wp-env sandbox-omgewing. |

## Plugin Installer API {#plugin-installer-api}

Die plugin installer hanteer lêerstelseloperasies wanneer plugins geïmplementeer of verwyder word. Belangrike gedragspunte:

- **Padvalidering**: Alle plugin-paaie word gevalideer teen die toegelate plugin-direktorie voordat enige lêer geskryf word. Pogings tot direkorie-traversal word geweier.
- **Meerdere-bestand installasie**: 'n Plugin kan bestaan uit verskeie lêers. Die installer skep die plugin-direktorie en skryf al die lêers atomies.
- **Opdateer**: Vervang bestaande plugin-lêers. Deaktiveer die plugin voordat geskryf word om gedeeltelike-toestandfoute te vermy.
- **Verwyder volgens slug**: Lokaliseer die plugin-direktorie volgens slug, deaktiveer oor alle webtuistes, en verwyder dan die direkorie.

### Registreer 'n Pasgemaakte Installasie Handler {#registering-a-custom-install-handler}

U kan hook in op die installasiewerklewe met die `gratis_ai_plugin_installer_before_install` en `gratis_ai_plugin_installer_after_install` aksies:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: die plugin se direkorie naam
    // $files: assosiatiewe array van relatiewe pad => lêerinhoud
    error_log("Installeer plugin: {$slug} met " . count($files) . " lêers.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} suksesvol geïnstalleer.");
    }
}, 10, 2);
```

## Ekosisteem Register {#ecosystem-registry}

Vermoghede word geregistreer deur die **plugin ekosisteem register**. Die register pas vermoë-slugs by hul handler-klasse en stel dit bloot aan die AI-agent se tool-dispatcher.

Om 'n pasgemaakte plugin bestuur vermoë te registreer:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Pasgemaakte Vermoë',
        'description' => 'Doen iets nuttigs met plugins.',
    ];
    return $abilities;
});
```

U vermoëklas moet die `Gratis_AI_Ability_Interface` implementeer:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Doen iets nuttigs met plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Die plugin slug om op te werk.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... u implementering ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner Integrasie {#hookscanner-integration}

Die `create_plugin` en `update_plugin` vermoë kan outomaties die **HookScanner** teen nuut gegenereerde kode uitvoer. HookScanner keer 'n lys van WordPress aksie- en filter-hooks wat deur die plugin geregistreer word.

Om HookScanner-resultate programmeermatig te haal:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Aksie: {$hook['hook']} — terugroepfunksie: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — terugroepfunksie: {$hook['callback']}\n";
}
```

HookScanner skip outomaties `vendor/` en `node_modules/` direkories.

## Asyn Job Argitektuur {#async-job-architecture}

Langlopende plugin-operasies (genereer, installeer) word as **asyn jobs** met lewendige vordering-opsporing gestuur. Die AI-klets-koppelvlak vra voortdurend na vordering en stroom statusopdaterings na die gebruiker:

1. **Stuur** — die vermoë skep 'n asyn job en keer 'n job-ID terug.
2. **Vra** — die agent vra elke 2 sekondes na `gratis_ai_job_status($job_id)`.
3. **Stroom** — tussenliggende vorderingsboodskappe word na die kletsdraad gestuur.
4. **Voltooi** — die finale resultaat (sukses of fout) word teruggegee en vertoon.

Om in job-lewe-siklus gebeurtenisse te hook:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} gestart vir vermoë: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} voltooi. Sukses: " . ($result['success'] ? 'ja' : 'nee'));
}, 10, 2);
```
