---
title: Uwezo wa Usimamizi wa Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Uwezo wa Kusimamia Plugins

Gratis AI Agent v1.5.0 inakuja na **uwezo 7 wa kusimamia plugins** ambavyo msaidizi wa AI anaweza kuzitumia wakati wa mazungumzo. Uwezo huu unatoa udhibiti wa ki-programu juu ya plugins za WordPress zilizosakinishwa kupitia [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Muhtasari wa Uwezo

| Uwezo | Slug | Maelezo |
|---|---|---|
| List Plugins | `list_plugins` | Inarudisha orodha ya plugins katika sandboxed store pamoja na hali zao. |
| Get Plugin | `get_plugin` | Inachukua data za meta na source code za plugin maalum kwa kutumia slug. |
| Create Plugin | `create_plugin` | Inatengeneza plugin mpya kutoka kwa maelezo na kuihifadhi katika sandbox. |
| Update Plugin | `update_plugin` | Inabadilisha source code ya plugin na kutoa toleo jipya. |
| Delete Plugin | `delete_plugin` | Inatoa plugin kutoka sandboxed store. Kwanza inazisimamisha (deactivates). |
| Install Plugin | `install_plugin` | Inapanga plugin iliyo katika sandbox hadi kwenye directory halisi ya plugins ya WordPress. |
| Activate Plugin | `activate_plugin` | Inasimamisha (activates) plugin iliyo katika sandbox ndani ya mazingira ya sandbox ya wp-env. |

## Plugin Installer API

Plugin installer inashughulikia shughuli za mfumo wa faili wakati wa kupanga au kuondoa plugins. Tabia kuu ni:

- **Path validation**: Njia zote za plugins zinathibitishwa dhidi ya directory halali ya plugins kabla ya kuandika faili lolote. Jaribio la kuvuka directories (directory traversal) linakataliwa.
- **Multi-file install**: Plugin inaweza kuundwa na faili nyingi. Installer inaunda directory ya plugin na kuandika faili zote kwa wakati mmoja (atomically).
- **Update**: Inabadilisha faili za plugin zilizopo. Inasimamisha plugin kabla ya kuandika ili kuepuka makosa ya hali nusu.
- **Delete by slug**: Inatafuta directory ya plugin kwa kutumia slug, inazisimamisha kwenye sites zote, kisha inafuta directory hiyo.

### Kusajili Handler ya Usakinishaji Maalum

Unaweza kuunganisha (hook) katika mzunguko wa usakinishaji kwa kutumia actions za `gratis_ai_plugin_installer_before_install` na `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: jina la directory ya plugin
    // $files: array ya associative ya njia ya relative => maudhui ya faili
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry

Uwezo (Abilities) unajisajili kupitia **plugin ecosystem registry**. Registry inahusisha ability slugs na class za kushughulikia (handler classes) na kuzifunika kwa tool dispatcher ya AI agent.

Ili usajili uwezo wa usimamizi wa plugins maalum:

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

Class yako ya uwezo lazima itekeleze `Gratis_AI_Ability_Interface`:

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

Uwezo wa `create_plugin` na `update_plugin` hufanya **HookScanner** kiotomatiki dhidi ya code iliyoanzishwa. HookScanner inarudisha orodha ya action na filter hooks za WordPress zilizosajiliwa na plugin.

Ili kupata matokeo ya HookScanner kwa ki-programu:

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

HookScanner inapuuza directories za `vendor/` na `node_modules/` kiotomatiki.

## Async Job Architecture

Operesheni ndefu za plugins (kutengeneza, kupanga) zinatolewa kama **async jobs** na kufuatilia maendeleo kwa wakati halisi. Kiolesura cha chat cha AI kinatafuta maendeleo (polls) na kutiririsha (streams) masasisho ya hali kwa mtumiaji:

1. **Dispatch** — uwezo unaunda async job na kurudisha job ID.
2. **Poll** — agent anatafuta hali ya `gratis_ai_job_status($job_id)` kila baada ya sekunde 2.
3. **Stream** — ujumbe wa maendeleo ya kati unatumiwa kwenye thread ya chat.
4. **Complete** — matokeo ya mwisho (kufanikiwa au makosa) yanarudishwa na kuonyeshwa.

Ili kuunganisha (hook) katika matukio ya job lifecycle:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
