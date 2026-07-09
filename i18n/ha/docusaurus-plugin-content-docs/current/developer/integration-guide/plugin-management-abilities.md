---
title: Ƙwarewar Gudanar da Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Ƙwarewar Sarrafa Plugin

Gratis AI Agent v1.5.0 yana zuwa da **ƙwarewar sarrafa plugin guda 7** da mataimakin AI zai iya kira yayin tattaunawa. Waɗannan ƙwarewa suna ba da ikon sarrafawa ta hanyar shirye-shirye kan WordPress plugins da aka girka ta hanyar [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Bayanin Ƙwarewa

| Ƙwarewa | Slug | Bayani |
|---|---|---|
| Jera Plugins | `list_plugins` | Yana dawo da jerin plugins a cikin ma’ajiyar sandbox tare da matsayinsu. |
| Samo Plugin | `get_plugin` | Yana ɗauko metadata da lambar tushe don takamaiman plugin ta slug. |
| Ƙirƙiri Plugin | `create_plugin` | Yana samar da sabon plugin daga bayani kuma yana adana shi a cikin sandbox. |
| Sabunta Plugin | `update_plugin` | Yana maye gurbin lambar tushe ta plugin da sabon sigar. |
| Goge Plugin | `delete_plugin` | Yana cire plugin daga ma’ajiyar sandbox. Yana kashe shi da farko. |
| Girka Plugin | `install_plugin` | Yana tura plugin na sandbox zuwa kundin plugin na WordPress kai tsaye. |
| Kunna Plugin | `activate_plugin` | Yana kunna plugin na sandbox a cikin muhallin sandbox na wp-env. |

## Plugin Installer API

Mai girka plugin yana kula da ayyukan tsarin fayil lokacin tura ko cire plugins. Muhimman halaye:

- **Tabbatar da hanya**: Ana tabbatar da duk hanyoyin plugin bisa kundin plugin da aka yarda da shi kafin kowane rubutun fayil. Ana ƙin ƙoƙarin ketare kundin.
- **Girka mai fayil da yawa**: Plugin na iya ƙunsar fayiloli da yawa. Mai girkawa yana ƙirƙirar kundin plugin kuma yana rubuta duk fayiloli a lokaci guda.
- **Sabuntawa**: Yana maye gurbin fayilolin plugin da ke akwai. Yana kashe plugin kafin rubutawa don kauce wa kurakuran yanayi na ɓangare.
- **Goge ta slug**: Yana gano kundin plugin ta slug, yana kashewa a duk shafuka, sannan ya cire kundin.

### Rijistar Mai Sarrafa Girka na Musamman

Za ka iya haɗawa da zagayen rayuwar girkawa ta amfani da ayyukan `gratis_ai_plugin_installer_before_install` da `gratis_ai_plugin_installer_after_install`:

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

## Rijistar Tsarin Muhalli

Ana rijistar ƙwarewa ta hanyar **rijistar tsarin muhalli na plugin**. Rijistar tana haɗa slug na ƙwarewa da ajin masu sarrafa su kuma tana fallasa su ga mai rarraba kayan aikin AI agent.

Don rijistar ƙwarewar sarrafa plugin ta musamman:

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

Dole ne ajin ƙwarewarka ya aiwatar da `Gratis_AI_Ability_Interface`:

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

## Haɗin HookScanner

Ƙwarewar `create_plugin` da `update_plugin` suna gudanar da **HookScanner** ta atomatik a kan sabuwar lambar da aka samar. HookScanner yana dawo da jerin WordPress action da filter hooks da plugin ya yi rijista.

Don ɗauko sakamakon HookScanner ta hanyar shirye-shirye:

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

HookScanner yana tsallake kundin `vendor/` da `node_modules/` ta atomatik.

## Tsarin Async Job

Ayyukan plugin masu ɗaukar lokaci (samarwa, girkawa) ana tura su a matsayin **async jobs** tare da bin diddigin ci gaba kai tsaye. Fuskar tattaunawar AI tana tambayar ci gaba kuma tana watsa sabunta matsayi ga mai amfani:

1. **Turawa** — ƙwarewar tana ƙirƙirar async job kuma tana dawo da ID na aiki.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Watsawa** — ana tura saƙonnin ci gaba na tsaka-tsaki zuwa zaren tattaunawa.
4. **Kammalawa** — ana dawo da sakamakon ƙarshe (nasara ko kuskure) kuma a nuna shi.

Don haɗawa da abubuwan zagayen rayuwar aiki:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
