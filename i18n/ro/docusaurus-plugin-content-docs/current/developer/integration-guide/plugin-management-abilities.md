---
title: Abilități de Management al Plugin-urilor
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capabilități de Management al Plugin-urilor

Gratis AI Agent v1.5.0 vine echipat cu **7 capacități de management al plugin-urilor** pe care asistentul AI le poate apela în timpul unei conversații. Aceste capacități oferă control programatic asupra plugin-urilor WordPress instalate prin [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Prezentare Capacități

| Capacitate | Slug | Descriere |
|---|---|---|
| List Plugins | `list_plugins` | Returnează o listă de plugin-uri din magazinul sandbox, împreună cu statusul lor. |
| Get Plugin | `get_plugin` | Recuperează metadatele și codul sursă pentru un plugin specific, folosind slug-ul. |
| Create Plugin | `create_plugin` | Generează un plugin nou dintr-o descriere și îl stochează în sandbox. |
| Update Plugin | `update_plugin` | Înlocuiește codul sursă al unui plugin cu o versiune nouă. |
| Delete Plugin | `delete_plugin` | Elimină un plugin din magazinul sandbox. Dezactivează întâi. |
| Install Plugin | `install_plugin` | Implementează un plugin sandbox într-acest director de plugin-uri WordPress activ. |
| Activate Plugin | `activate_plugin` | Activează un plugin sandbox în mediul sandbox wp-env. |

## API-ul Instalatorului de Plugin-uri

Instalatorul de plugin-uri gestionează operațiunile pe sistemul de fișiere atunci când implementează sau elimină plugin-uri. Comportamentele cheie sunt:

- **Validarea căii**: Toate căile de plugin sunt validate față de directorul de plugin-uri permis înainte de orice scriere de fișiere. Tentative de traversare a directorului sunt respinse.
- **Instalare multi-fișiere**: Un plugin poate consta din mai multe fișiere. Instalatorul creează directorul plugin-ului și scrie toate fișierele atomic.
- **Actualizare**: Înlocuiește fișierele existente ale plugin-ului. Dezactivează plugin-ul înainte de a scrie pentru a evita erorile de stare parțială.
- **Ștergere după slug**: Localizează directorul plugin-ului după slug, îl dezactivează pe toate site-urile și apoi elimină directorul.

### Înregistrarea unui Handler de Instalare Personalizat

Puteți accesa ciclul de viață al instalării folosind acțiunile `gratis_ai_plugin_installer_before_install` și `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: numele directorului plugin-ului
    // $files: array asociativ de cale relativă => conținut fișier
    error_log("Instalare plugin: {$slug} cu " . count($files) . " fișiere.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin-ul {$slug} instalat cu succes.");
    }
}, 10, 2);
```

## Registrul Ecosistemului

Capabilitățile sunt înregistrate prin **registrul ecosistemului de plugin-uri**. Acest registru mapează slug-urile capacităților la clasele lor handler și le expune dispatcher-ului de instrumente al agentului AI.

Pentru a înregistra o capacitate personalizată de management al plugin-urilor:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Capacitatea Mea Personală',
        'description' => 'Face ceva util cu plugin-urile.',
    ];
    return $abilities;
});
```

Clasa dvs. de capacitate trebuie să implementeze `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Face ceva util cu plugin-urile.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug-ul plugin-ului pe care trebuie operațiune.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... implementarea dvs. ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integrarea HookScanner

Capabilitățile `create_plugin` și `update_plugin` rulează automat **HookScanner** pe codul generat. HookScanner returnează o listă de hook-uri de acțiune și filtre WordPress înregistrate de plugin.

Pentru a recupera rezultatele HookScanner programatic:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Acțiune: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filtru: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner sări automat peste directorii `vendor/` și `node_modules/`.

## Arhitectura Job-urilor Asincrone

Operațiunile lungi de rulat ale plugin-urilor (generare, instalare) sunt trimise ca **job-uri asincrone** cu urmărire a progresului în timp real. Interfața de chat AI interoghează progresul și transmite actualizări de stare utilizatorului:

1. **Dispatch (Trimis)** — capacitatea creează un job asincron și returnează un ID de job.
2. **Poll (Interogare)** — agentul interoghează `gratis_ai_job_status($job_id)` la fiecare 2 secunde.
3. **Stream (Flux)** — mesajele intermediare de progres sunt trimise în thread-ul de chat.
4. **Complete (Finalizat)** — rezultatul final (succes sau eroare) este returnat și afișat.

Pentru a accesa evenimentele ciclului de viață ale job-urilor:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job-ul {$job_id} a început pentru capacitatea: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job-ul {$job_id} a fost finalizat. Succes: " . ($result['success'] ? 'da' : 'nu'));
}, 10, 2);
```
