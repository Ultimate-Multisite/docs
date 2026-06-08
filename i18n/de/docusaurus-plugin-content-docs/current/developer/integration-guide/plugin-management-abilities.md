---
title: Fähigkeiten im Plugin-Management
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities

Gratis AI Agent v1.5.0 verfügt über **7 Plugin-Management-Fähigkeiten**, die der KI-Assistent während eines Gesprächs aufrufen kann. Diese Fähigkeiten ermöglichen eine programmatische Steuerung der WordPress-Plugins, die über das [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) installiert werden.

## Abilities Overview

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | Gibt eine Liste der Plugins im Sandbox-Store mit deren Status zurück. |
| Get Plugin | `get_plugin` | Ruft Metadaten und den Quellcode für ein bestimmtes Plugin anhand des Slugs ab. |
| Create Plugin | `create_plugin` | Generiert ein neues Plugin anhand einer Beschreibung und speichert es im Sandbox-Bereich. |
| Update Plugin | `update_plugin` | Ersetzt den Quellcode eines Plugins durch eine neue Version. |
| Delete Plugin | `delete_plugin` | Entfernt ein Plugin aus dem Sandbox-Store. Deaktiviert zuerst. |
| Install Plugin | `install_plugin` | Setzt ein sandboxed Plugin im Live-WordPress-Plugin-Verzeichnis ein. |
| Activate Plugin | `activate_plugin` | Aktiviert ein sandboxed Plugin in der wp-env Sandbox-Umgebung. |

## Plugin Installer API

Der Plugin Installer übernimmt Dateisystemoperationen beim Bereitstellen oder Entfernen von Plugins. Wichtige Verhaltensweisen:

- **Pfadvalidierung**: Alle Plugin-Pfade werden vor jeglichem Schreibvorgang gegen das erlaubte Plugin-Verzeichnis validiert. Versuche der Verzeichnisdurchquerung werden abgelehnt.
- **Multi-File-Installation**: Ein Plugin kann aus mehreren Dateien bestehen. Der Installer erstellt das Plugin-Verzeichnis und schreibt alle Dateien atomar.
- **Update**: Ersetzt bestehende Plugin-Dateien. Deaktiviert das Plugin, bevor geschrieben wird, um Fehler durch teilweisen Zustand zu vermeiden.
- **Löschen nach Slug**: Lokalisiert das Plugin-Verzeichnis anhand des Slugs, deaktiviert es auf allen Sites und entfernt dann das Verzeichnis.

### Registering a Custom Install Handler

Sie können den Install-Lebenszyklus mithilfe der Actions `gratis_ai_plugin_installer_before_install` und `gratis_ai_plugin_installer_after_install` abfangen:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: der Verzeichnisname des Plugins
    // $files: assoziatives Array von relativem Pfad => Dateiinhalt
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry

Die Abilities werden über das **Plugin Ecosystem Registry** registriert. Das Registry verknüpft Ability-Slugs mit ihren Handler-Klassen und stellt sie dem Tool-Dispatcher des AI-Agenten zur Verfügung.

Um eine benutzerdefinierte Plugin-Management-Ability zu registrieren:

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

Ihre Ability-Klasse muss die `Gratis_AI_Ability_Interface` implementieren:

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

## HookScanner Integration

Die Abilities `create_plugin` und `update_plugin` führen automatisch den **HookScanner** gegen den neu generierten Code durch. HookScanner gibt eine Liste der von dem Plugin registrierten WordPress-Aktionen und Filter-Hooks zurück.

Um die HookScanner-Ergebnisse programmatisch abzurufen:

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

HookScanner überspringt automatisch die Verzeichnisse `vendor/` und `node_modules/`.

## Async Job Architecture

Langlaufende Plugin-Operationen (Generieren, Installieren) werden als **async jobs** mit Live-Fortschrittsverfolgung verarbeitet. Die AI-Chat-Oberfläche fragt regelmäßig nach dem Fortschritt ab und sendet Status-Updates an den Benutzer:

1. **Dispatch** — die Ability erstellt einen async Job und gibt eine Job-ID zurück.
2. **Poll** — der Agent fragt alle 2 Sekunden `gratis_ai_job_status($job_id)` ab.
3. **Stream** — Zwischenfortschrittsmitteilungen werden in den Chat-Thread gepusht.
4. **Complete** — das endgültige Ergebnis (Erfolg oder Fehler) wird zurückgegeben und angezeigt.

Um sich in den Job-Lebenszyklus-Events einzuhängen:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
