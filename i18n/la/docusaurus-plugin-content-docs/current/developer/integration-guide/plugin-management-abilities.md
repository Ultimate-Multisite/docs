---
title: Facultates administrationis pluginorum
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Facultates Administrationis Additamentorum

Gratis AI Agent v1.5.0 venit cum **7 facultatibus administrationis additamentorum** quas adiutor AI in colloquio invocare potest. Hae facultates regimen programmaticum praebent super additamenta WordPress instituta per [Systema Conditoris Additamentorum et Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Conspectus Facultatum {#abilities-overview}

| Facultas | Slug | Descriptio |
|---|---|---|
| Enumera Additamenta | `list_plugins` | Reddit indicem additamentorum in repositorio sandbox cum statu eorum. |
| Accipe Additamentum | `get_plugin` | Recuperat metadata et codicem fontis additamenti certi per slug. |
| Crea Additamentum | `create_plugin` | Generat novum additamentum ex descriptione et illud in sandbox reponit. |
| Renova Additamentum | `update_plugin` | Substituit codicem fontis additamenti nova versione. |
| Dele Additamentum | `delete_plugin` | Removet additamentum e repositorio sandbox. Prius deactivat. |
| Instrue Additamentum | `install_plugin` | Disponit additamentum sandbox ad directorium additamentorum WordPress vivum. |
| Activa Additamentum | `activate_plugin` | Activat additamentum sandbox in ambitu sandbox wp-env. |

## API Institutoris Additamentorum {#plugin-installer-api}

Institutor additamentorum operationes systematis fasciculorum tractat cum additamenta disponuntur aut removentur. Mores principales:

- **Validatio semitae**: Omnes semitae additamentorum contra directorium additamentorum permissum validantur ante ullam scripturam fasciculi. Conatus traversal directorii reiciuntur.
- **Institutio plurium fasciculorum**: Additamentum ex pluribus fasciculis constare potest. Institutor directorium additamenti creat et omnes fasciculos atomice scribit.
- **Renovatio**: Substituit fasciculos additamenti existentes. Additamentum ante scripturam deactivat, ut errores status partialis vitentur.
- **Deletio per slug**: Directorium additamenti per slug invenit, per omnes situs deactivat, deinde directorium removet.

### Registrare Gestorem Institutionis Consuetum {#registering-a-custom-install-handler}

Potes in cyclum vitae institutionis inseri utens actionibus `gratis_ai_plugin_installer_before_install` et `gratis_ai_plugin_installer_after_install`:

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

## Registrum Ecosystematis {#ecosystem-registry}

Facultates per **registrum ecosystematis additamentorum** registrantur. Registrum slug facultatum ad classes gestorum earum refert et eas distributori instrumentorum agentis AI exponit.

Ad facultatem administrationis additamentorum consuetam registrandam:

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

Classis facultatis tuae debet interface `Gratis_AI_Ability_Interface` efficere:

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

## Integratio HookScanner {#hookscanner-integration}

Facultates `create_plugin` et `update_plugin` automatice currunt **HookScanner** contra codicem nuper generatum. HookScanner reddit indicem actionum WordPress et hamorum filtrorum ab additamento registratorum.

Ad eventus HookScanner programmatice recuperandos:

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

HookScanner directoria `vendor/` et `node_modules/` automatice praeterit.

## Architectura Operum Async {#async-job-architecture}

Operationes additamentorum diuturnae (generare, instituere) mittuntur ut **opera async** cum vestigatione progressus viva. Interfacies colloquii AI progressum percontatur et renovationes status ad usorem flumine transmittit:

1. **Missio** — facultas opus async creat et ID operis reddit.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Flumen** — nuntii progressus intermedii ad filum colloquii propelluntur.
4. **Perfectio** — eventus finalis (successus aut error) redditur et ostenditur.

Ad inserendum in eventus cycli vitae operis:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
