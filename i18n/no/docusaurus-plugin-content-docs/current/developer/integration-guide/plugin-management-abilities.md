---
title: Funksjonalitet for plugin-administrasjon
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities

Gratis AI Agent v1.5.0 kommer med **7 plugin management abilities** som AI-assistenten kan kalle på under en samtale. Disse abilities gir programmatisk kontroll over WordPress-plugins installert gjennom [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | Returnerer en liste over plugins i sandbox-butikken med deres status. |
| Get Plugin | `get_plugin` | Henter metadata og kildekode for et spesifikt plugin etter slug. |
| Create Plugin | `create_plugin` | Genererer et nytt plugin fra en beskrivelse og lagrer det i sandboxen. |
| Update Plugin | `update_plugin` | Erstatter et plugins kildekode med en ny versjon. |
| Delete Plugin | `delete_plugin` | Fjerner et plugin fra sandbox-butikken. Deaktiverer først. |
| Install Plugin | `install_plugin` | Utplasserer et sandbokset plugin til det live WordPress plugin-direktoriet. |
| Activate Plugin | `activate_plugin` | Aktiverer et sandbokset plugin i wp-env sandbox-miljøet. |

## Plugin Installer API {#plugin-installer-api}

Plugin-installatoren håndterer filsystemoperasjoner når den utplasserer eller fjerner plugins. Viktige atferdsmønstre:

- **Path validation**: Alle plugin-stier valideres mot det tillatte plugin-direktoriet før noen filskriving. Forsøk på katalogkryssing blir avvist.
- **Multi-file install**: Et plugin kan bestå av flere filer. Installatoren oppretter plugin-direktoriet og skriver alle filene atomisk.
- **Update**: Erstatter eksisterende plugin-filer. Deaktiverer pluginet før skriving for å unngå feil ved delvis tilstand.
- **Delete by slug**: Lokaliserer plugin-direktoriet etter slug, deaktiverer på tvers av alle nettsteder, og fjerner deretter katalogen.

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

Du kan koble deg til installasjonslivssyklusen ved å bruke handlingene `gratis_ai_plugin_installer_before_install` og `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: pluginets katalognavn
    // $files: assosiativ array av relativ sti => filinnhold
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

Abilities registreres gjennom **plugin ecosystem registry**. Registryet mapper ability slugs til deres handler-klasser og eksponerer dem for AI-agentens verktøy-dispatcher.

For å registrere en tilpasset plugin management ability:

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

Ability-klassen din må implementere `Gratis_AI_Ability_Interface`:

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

`create_plugin` og `update_plugin` abilities kjører automatisk **HookScanner** mot nylig generert kode. HookScanner returnerer en liste over WordPress action- og filter-hooks registrert av pluginet.

For å hente HookScanner-resultater programmatisk:

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

HookScanner hopper automatisk over `vendor/` og `node_modules/` kataloger.

## Async Job Architecture {#async-job-architecture}

Langvarige plugin-operasjoner (generering, installasjon) sendes ut som **async jobs** med sanntidsprogresstracking. AI-chatgrensesnittet spør etter fremdrift og strømmer statusoppdateringer til brukeren:

1. **Dispatch** — abilityen oppretter en async job og returnerer et job-ID.
2. **Poll** — agenten spør `gratis_ai_job_status($job_id)` hvert 2. sekund.
3. **Stream** — mellomliggende fremdriftsmeldinger sendes til chat-tråden.
4. **Complete** — det endelige resultatet (suksess eller feil) returneres og vises.

For å koble seg til job-livssyklushendelser:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
