---
title: Kapabloj pri mastrumado de kromprogramoj
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kapabloj pri Administrado de Kromprogramoj {#plugin-management-abilities}

Gratis AI Agent v1.5.0 liveriĝas kun **7 kapabloj pri administrado de kromprogramoj**, kiujn la AI-asistanto povas alvoki dum konversacio. Tiuj kapabloj provizas programeblan kontrolon super WordPress-kromprogramoj instalitaj per la [Kromprograma Konstruilo kaj Sablokesta Sistemo](../../user-guide/administration/plugin-builder-and-sandbox).

## Superrigardo de Kapabloj {#abilities-overview}

| Kapablo | Slug | Priskribo |
|---|---|---|
| Listigi Kromprogramojn | `list_plugins` | Redonas liston de kromprogramoj en la sablokesta deponejo kun ilia stato. |
| Akiri Kromprogramon | `get_plugin` | Elprenas metadatumojn kaj fontkodon por specifa kromprogramo laŭ slug. |
| Krei Kromprogramon | `create_plugin` | Generas novan kromprogramon el priskribo kaj konservas ĝin en la sablokesto. |
| Ĝisdatigi Kromprogramon | `update_plugin` | Anstataŭigas la fontkodon de kromprogramo per nova versio. |
| Forigi Kromprogramon | `delete_plugin` | Forigas kromprogramon el la sablokesta deponejo. Unue malaktivigas ĝin. |
| Instali Kromprogramon | `install_plugin` | Deplojas sablokestitan kromprogramon al la viva WordPress-kromprograma dosierujo. |
| Aktivigi Kromprogramon | `activate_plugin` | Aktivigas sablokestitan kromprogramon en la wp-env-sablokesta medio. |

## API de Kromprograma Instalilo {#plugin-installer-api}

La kromprograma instalilo pritraktas operaciojn de la dosiersistemo dum deplojado aŭ forigado de kromprogramoj. Ĉefaj kondutoj:

- **Validigo de vojoj**: Ĉiuj kromprogramaj vojoj estas validigitaj kontraŭ la permesita kromprograma dosierujo antaŭ ajna dosierskribo. Provoj pri dosieruja transiro estas rifuzitaj.
- **Plurdosiera instalado**: Kromprogramo povas konsisti el pluraj dosieroj. La instalilo kreas la kromprograman dosierujon kaj skribas ĉiujn dosierojn atome.
- **Ĝisdatigo**: Anstataŭigas ekzistantajn kromprogramajn dosierojn. Malaktivigas la kromprogramon antaŭ skribado por eviti erarojn de parta stato.
- **Forigo laŭ slug**: Trovas la kromprograman dosierujon laŭ slug, malaktivigas tra ĉiuj retejoj, poste forigas la dosierujon.

### Registri Propran Instalan Pritraktilon {#registering-a-custom-install-handler}

Vi povas konektiĝi al la instala vivciklo uzante la agojn `gratis_ai_plugin_installer_before_install` kaj `gratis_ai_plugin_installer_after_install`:

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

## Ekosistema Registro {#ecosystem-registry}

Kapabloj estas registritaj per la **kromprograma ekosistema registro**. La registro mapas kapablajn slug-ojn al iliaj pritraktilaj klasoj kaj eksponas ilin al la ila distribuanto de la AI-agento.

Por registri propran kapablon pri administrado de kromprogramoj:

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

Via kapabla klaso devas efektivigi la `Gratis_AI_Ability_Interface`:

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

## HookScanner-Integriĝo {#hookscanner-integration}

La kapabloj `create_plugin` kaj `update_plugin` aŭtomate rulas **HookScanner** kontraŭ nove generita kodo. HookScanner redonas liston de WordPress-agaj kaj filtrilaj hokoj registritaj de la kromprogramo.

Por elpreni HookScanner-rezultojn programe:

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

HookScanner aŭtomate preterlasas dosierujojn `vendor/` kaj `node_modules/`.

## Arkitekturo de Nesinkronaj Laboroj {#async-job-architecture}

Longdaŭraj kromprogramaj operacioj (generi, instali) estas senditaj kiel **nesinkronaj laboroj** kun viva progresospurado. La AI-babila interfaco enketas pri progreso kaj fluigas statusajn ĝisdatigojn al la uzanto:

1. **Sendi** — la kapablo kreas nesinkronan laboron kaj redonas laboran ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Fluigi** — mezaj progresaj mesaĝoj estas puŝitaj al la babilfadeno.
4. **Kompletigi** — la fina rezulto (sukceso aŭ eraro) estas redonita kaj montrata.

Por konektiĝi al eventoj de la labora vivciklo:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
