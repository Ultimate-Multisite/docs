---
title: Aftësitë e menaxhimit të shtojcave
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Aftësitë e Menaxhimit të Plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 vjen me **7 aftësi të menaxhimit të plugin** që asistenti AI mund t’i thërrasë gjatë një bisede. Këto aftësi ofrojnë kontroll programatik mbi plugin-et WordPress të instaluara përmes [Sistemit Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Përmbledhje e Aftësive {#abilities-overview}

| Aftësia | Slug | Përshkrimi |
|---|---|---|
| Listo Plugin-et | `list_plugins` | Kthen një listë plugin-esh në ruajtjen sandbox me statusin e tyre. |
| Merr Plugin | `get_plugin` | Merr metadata dhe kodin burimor për një plugin specifik sipas slug. |
| Krijo Plugin | `create_plugin` | Gjeneron një plugin të ri nga një përshkrim dhe e ruan në sandbox. |
| Përditëso Plugin | `update_plugin` | Zëvendëson kodin burimor të një plugin-i me një version të ri. |
| Fshi Plugin | `delete_plugin` | Heq një plugin nga ruajtja sandbox. E çaktivizon së pari. |
| Instalo Plugin | `install_plugin` | Vendos një plugin të sandbox-uar në direktoriumin live të plugin-eve WordPress. |
| Aktivizo Plugin | `activate_plugin` | Aktivizon një plugin të sandbox-uar në mjedisin sandbox wp-env. |

## Plugin Installer API {#plugin-installer-api}

Instaluesi i plugin-eve trajton operacionet e sistemit të skedarëve gjatë vendosjes ose heqjes së plugin-eve. Sjelljet kryesore:

- **Validimi i shtegut**: Të gjitha shtigjet e plugin-eve validen kundrejt direktoriumit të lejuar të plugin-eve përpara çdo shkrimi skedari. Përpjekjet për kalim direktoriumesh refuzohen.
- **Instalim me shumë skedarë**: Një plugin mund të përbëhet nga disa skedarë. Instaluesi krijon direktoriumin e plugin-it dhe shkruan të gjithë skedarët në mënyrë atomike.
- **Përditësim**: Zëvendëson skedarët ekzistues të plugin-it. Çaktivizon plugin-in përpara shkrimit për të shmangur gabimet e gjendjes së pjesshme.
- **Fshirje sipas slug**: Gjen direktoriumin e plugin-it sipas slug, e çaktivizon në të gjitha site-et, pastaj heq direktoriumin.

### Regjistrimi i një Trajtuesi të Personalizuar Instalimi {#registering-a-custom-install-handler}

Mund të lidheni me ciklin jetësor të instalimit duke përdorur veprimet `gratis_ai_plugin_installer_before_install` dhe `gratis_ai_plugin_installer_after_install`:

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

## Regjistri i Ekosistemit {#ecosystem-registry}

Aftësitë regjistrohen përmes **regjistrit të ekosistemit të plugin-eve**. Regjistri lidh slug-et e aftësive me klasat e tyre trajtuese dhe i ekspozon ato te shpërndarësi i mjeteve i AI agent.

Për të regjistruar një aftësi të personalizuar të menaxhimit të plugin:

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

Klasa juaj e aftësisë duhet të implementojë `Gratis_AI_Ability_Interface`:

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

## Integrimi me HookScanner {#hookscanner-integration}

Aftësitë `create_plugin` dhe `update_plugin` ekzekutojnë automatikisht **HookScanner** mbi kodin e sapogjeneruar. HookScanner kthen një listë të hook-eve të veprimeve dhe filtrave WordPress të regjistruara nga plugin-i.

Për të marrë rezultatet e HookScanner në mënyrë programatike:

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

HookScanner anashkalon automatikisht direktoriumet `vendor/` dhe `node_modules/`.

## Arkitektura e Punëve Async {#async-job-architecture}

Operacionet e plugin-eve që zgjasin shumë (gjenerim, instalim) dërgohen si **punë async** me ndjekje të progresit në kohë reale. Ndërfaqja e chat-it AI kontrollon periodikisht progresin dhe transmeton përditësime statusi te përdoruesi:

1. **Dërgimi** — aftësia krijon një punë async dhe kthen një ID pune.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Transmetimi** — mesazhet e ndërmjetme të progresit shtyhen në rrjedhën e chat-it.
4. **Përfundimi** — rezultati final (sukses ose gabim) kthehet dhe shfaqet.

Për t’u lidhur me ngjarjet e ciklit jetësor të punës:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
