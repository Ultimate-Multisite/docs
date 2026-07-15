---
title: Abilità di Gestione dei Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Funzionalità di Gestione dei Plugin

Gratis AI Agent v1.5.0 include **7 funzionalità di gestione dei plugin** che l'assistente AI può utilizzare durante una conversazione. Queste funzionalità forniscono un controllo programmatico sui plugin WordPress installati tramite il [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Panoramica delle Funzionalità {#abilities-overview}

| Funzionalità | Slug | Descrizione |
|---|---|---|
| List Plugins | `list_plugins` | Restituisce un elenco dei plugin presenti nello store sandbox con il loro stato. |
| Get Plugin | `get_plugin` | Recupera i metadati e il codice sorgente di un plugin specifico tramite slug. |
| Create Plugin | `create_plugin` | Genera un nuovo plugin da una descrizione e lo memorizza nello sandbox. |
| Update Plugin | `update_plugin` | Sostituisce il codice sorgente di un plugin con una nuova versione. |
| Delete Plugin | `delete_plugin` | Rimuove un plugin dallo store sandbox. Disattiva prima. |
| Install Plugin | `install_plugin` | Distribuisce un plugin sandboxed nella directory dei plugin live di WordPress. |
| Activate Plugin | `activate_plugin` | Attiva un plugin sandboxed nell'ambiente sandbox di wp-env. |

## API per l'Installazione dei Plugin {#plugin-installer-api}

L'installer dei plugin gestisce le operazioni sul file system quando si distribuiscono o si rimuovono i plugin. I comportamenti chiave sono:

- **Validazione del percorso**: Tutti i percorsi dei plugin vengono validati rispetto alla directory plugin consentita prima di qualsiasi scrittura di file. I tentativi di attraversamento di directory vengono rifiutati.
- **Installazione multi-file**: Un plugin può essere composto da più file. L'installer crea la directory del plugin e scrive tutti i file in modo atomico.
- **Aggiornamento**: Sostituisce i file del plugin esistenti. Disattiva il plugin prima di scrivere per evitare errori di stato parziale.
- **Eliminazione tramite slug**: Trova la directory del plugin tramite slug, lo disattiva su tutti i siti e poi rimuove la directory.

### Registrare un Handler di Installazione Personalizzato {#registering-a-custom-install-handler}

È possibile agganciarsi al ciclo di vita dell'installazione utilizzando le azioni `gratis_ai_plugin_installer_before_install` e `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: il nome della directory del plugin
    // $files: array associativo di percorso relativo => contenuto del file
    error_log("Installazione plugin: {$slug} con " . count($files) . " file.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installato con successo.");
    }
}, 10, 2);
```

## Registro dell'Ecosistema {#ecosystem-registry}

Le funzionalità vengono registrate tramite il **plugin ecosystem registry**. Il registro mappa gli slug delle funzionalità alle rispettive classi handler ed espone queste classi al tool dispatcher dell'agente AI.

Per registrare una funzionalità di gestione dei plugin personalizzata:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Funzionalità Personalizzata',
        'description' => 'Fa qualcosa di utile con i plugin.',
    ];
    return $abilities;
});
```

La tua classe funzionalità deve implementare l'`Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Fa qualcosa di utile con i plugin.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Lo slug del plugin su cui operare.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... la tua implementazione ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integrazione HookScanner {#hookscanner-integration}

Le funzionalità `create_plugin` e `update_plugin` eseguono automaticamente **HookScanner** sul codice appena generato. HookScanner restituisce un elenco di hook di azione e filtro di WordPress registrati dal plugin.

Per recuperare i risultati di HookScanner in modo programmatico:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Azione: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filtro: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner salta automaticamente le directory `vendor/` e `node_modules/`.

## Architettura dei Job Asincroni {#async-job-architecture}

Le operazioni sui plugin che richiedono molto tempo (generazione, installazione) vengono inviate come **job asincroni** con tracciamento dello stato in tempo reale. L'interfaccia chat AI interroga lo stato di avanzamento e invia aggiornamenti allo stato all'utente:

1. **Dispatch** — la funzionalità crea un job asincrono e restituisce un ID del job.
2. **Poll** — l'agente interroga `gratis_ai_job_status($job_id)` ogni 2 secondi.
3. **Stream** — i messaggi di avanzamento intermedi vengono inviati nel thread di chat.
4. **Complete** — il risultato finale (successo o errore) viene restituito e visualizzato.

Per agganciarsi agli eventi del ciclo di vita del job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} avviato per funzionalità: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completato. Successo: " . ($result['success'] ? 'sì' : 'no'));
}, 10, 2);
```
