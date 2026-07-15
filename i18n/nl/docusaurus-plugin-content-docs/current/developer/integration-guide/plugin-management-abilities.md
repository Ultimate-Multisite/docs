---
title: Plugin Beheermogelijkheden
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Functionaliteiten voor Pluginbeheer

Gratis AI Agent v1.5.0 wordt geleverd met **7 functionaliteiten voor pluginbeheer** die de AI-assistent tijdens een gesprek kan aanroepen. Deze functionaliteiten bieden programmeerbare controle over WordPress plugins die zijn geïnstalleerd via de [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Overzicht van Functionaliteiten {#abilities-overview}

| Functionaliteit | Slug | Beschrijving |
|---|---|---|
| List Plugins | `list_plugins` | Geeft een lijst terug van plugins in de sandbox-winkel met hun status. |
| Get Plugin | `get_plugin` | Haalt metadata en broncode op voor een specifieke plugin op basis van de slug. |
| Create Plugin | `create_plugin` | Genereert een nieuwe plugin op basis van een beschrijving en slaat deze op in de sandbox. |
| Update Plugin | `update_plugin` | Vervangt de broncode van een plugin met een nieuwe versie. |
| Delete Plugin | `delete_plugin` | Verwijdert een plugin uit de sandbox-winkel. Deactiveert eerst. |
| Install Plugin | `install_plugin` | Deployt een gesandboxte plugin naar de live WordPress plugin-map. |
| Activate Plugin | `activate_plugin` | Activeert een gesandboxte plugin in de wp-env sandbox-omgeving. |

## Plugin Installer API {#plugin-installer-api}

De plugin installer beheert bestandsysteemoperaties bij het deployen of verwijderen van plugins. Belangrijkste gedragingen:

- **Padvalidatie**: Alle plugin-paden worden gevalideerd tegen de toegestane plugin-map voordat er enige bestandschrijving plaatsvindt. Pogingen tot directory traversal worden geweigerd.
- **Meerdere bestanden installeren**: Een plugin kan bestaan uit meerdere bestanden. De installer creëert de plugin-map en schrijft alle bestanden in één keer (atomisch).
- **Update**: Vervangt bestaande pluginbestanden. Deactiveert de plugin voordat deze wordt geschreven om fouten door gedeeltelijke staat te voorkomen.
- **Verwijderen op basis van slug**: Lokaliseert de plugin-map op basis van de slug, deactiveert deze op alle sites, en verwijdert vervolgens de map.

### Een Aangepaste Installatie Handler Registreren {#registering-a-custom-install-handler}

U kunt zich aansluiten bij de installatielifecycle met behulp van de acties `gratis_ai_plugin_installer_before_install` en `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: de naam van de plugin-map
    // $files: associatief array van relatief pad => bestandsinhoud
    error_log("Installeer plugin: {$slug} met " . count($files) . " bestanden.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} succesvol geïnstalleerd.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

Functionaliteiten worden geregistreerd via de **plugin ecosystem registry**. De registry koppelt ability slugs aan hun handler classes en maakt deze beschikbaar voor de tool dispatcher van de AI-agent.

Om een aangepaste pluginbeheerfunctionaliteit te registreren:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Mijn Aangepaste Functionaliteit',
        'description' => 'Doet iets nuttigs met plugins.',
    ];
    return $abilities;
});
```

Uw functionaliteitsklasse moet de `Gratis_AI_Ability_Interface` implementeren:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Doet iets nuttigs met plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'De plugin slug waarop gehandeld moet worden.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... uw implementatie ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner Integratie {#hookscanner-integration}

De functionaliteiten `create_plugin` en `update_plugin` voeren automatisch de **HookScanner** uit op de nieuw gegenereerde code. HookScanner retourneert een lijst van WordPress actie- en filterhooks die door de plugin zijn geregistreerd.

Om de HookScanner-resultaten programmeerbaar op te halen:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Actie: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner slaat automatisch de `vendor/` en `node_modules/` mappen over.

## Async Job Architectuur {#async-job-architecture}

Langlopende pluginoperaties (genereren, installeren) worden als **async jobs** verstuurd met live voortgangsmonitoring. De AI chatinterface vraagt periodiek naar de voortgang en stuurt statusupdates naar de gebruiker:

1. **Dispatch** — de functionaliteit creëert een async job en retourneert een job ID.
2. **Poll** — de agent vraagt elke 2 seconden naar `gratis_ai_job_status($job_id)`.
3. **Stream** — tussentijdse voortgangsberichten worden naar de chatdraad gestuurd.
4. **Complete** — het definitieve resultaat (succes of fout) wordt geretourneerd en weergegeven.

Om u aan te sluiten bij job lifecycle events:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} gestart voor functionaliteit: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} voltooid. Succes: " . ($result['success'] ? 'ja' : 'nee'));
}, 10, 2);
```
