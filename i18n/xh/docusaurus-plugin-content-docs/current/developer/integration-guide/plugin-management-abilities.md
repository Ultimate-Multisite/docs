---
title: Izakhono zoLawulo lweePlugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Izakhono Zolawulo Lwe-plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 iza **nezakhono ezi-7 zolawulo lwe-plugin** ezinokubizwa ngumncedisi we-AI ngexesha lencoko. Ezi zakhono zinika ulawulo lwenkqubo phezu kwee-plugin ze-WordPress ezifakwe nge-[Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Isishwankathelo Sezakhono {#abilities-overview}

| Isakhono | Slug | Inkcazo |
|---|---|---|
| Dwelisa ii-Plugin | `list_plugins` | Ibuyisa uluhlu lwee-plugin kwindawo yokugcina ye-sandbox kunye nesimo sazo. |
| Fumana i-Plugin | `get_plugin` | Ifumana imetadata kunye nekhowudi yomthombo ye-plugin ethile nge-slug. |
| Yenza i-Plugin | `create_plugin` | Ivelisa i-plugin entsha ukusuka kwinkcazo ize iyigcine kwi-sandbox. |
| Hlaziya i-Plugin | `update_plugin` | Itshintsha ikhowudi yomthombo ye-plugin ngenguqulelo entsha. |
| Cima i-Plugin | `delete_plugin` | Isusa i-plugin kwindawo yokugcina ye-sandbox. Iyenza ingasebenzi kuqala. |
| Faka i-Plugin | `install_plugin` | Ithumela i-plugin ekwi-sandbox kulawulo lwe-plugin ye-WordPress ephilayo. |
| Vula i-Plugin | `activate_plugin` | Ivula i-plugin ekwi-sandbox kwindawo ye-sandbox ye-wp-env. |

## Plugin Installer API {#plugin-installer-api}

Umfaki we-plugin ulawula imisebenzi yesixokelelwano seefayile xa kuthunyelwa okanye kususwa ii-plugin. Iindlela zokuziphatha eziphambili:

- **Ukuqinisekiswa kwendlela**: Zonke iindlela zee-plugin ziqinisekiswa ngokuchasene nolawulo lwe-plugin oluvunyelweyo ngaphambi kwalo naluphi na ubhalo lwefayile. Iinzame zokunqumla ulawulo ziyaliwa.
- **Ufakelo lweefayile ezininzi**: I-plugin inokubandakanya iifayile ezininzi. Umfaki wenza ulawulo lwe-plugin aze abhale zonke iifayile ngendlela ye-atomic.
- **Uhlaziyo**: Itshintsha iifayile ezikhoyo ze-plugin. Iyenza ingasebenzi i-plugin ngaphambi kokubhala ukuze kuthintelwe iimpazamo zesimo esingaphelelanga.
- **Ukucima nge-slug**: Ifumana ulawulo lwe-plugin nge-slug, iyenza ingasebenzi kuzo zonke iisayithi, emva koko isuse ulawulo.

### Ukubhalisa i-Handler Yokufaka Eyenzelwe Wena {#registering-a-custom-install-handler}

Ungangena kumjikelo wobomi bofakelo usebenzisa iintshukumo ze-`gratis_ai_plugin_installer_before_install` kunye ne-`gratis_ai_plugin_installer_after_install`:

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

## Ecosystem Registry {#ecosystem-registry}

Izakhono zibhaliswa nge-**plugin ecosystem registry**. I-registry idibanisa ii-slug zezakhono neeklasi zee-handler zazo kwaye iziveze kwi-tool dispatcher ye-AI agent.

Ukubhalisa isakhono solawulo lwe-plugin esenzelwe wena:

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

Iklasi yakho yesakhono kufuneka iphumeze i-`Gratis_AI_Ability_Interface`:

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

## Udibaniso lwe-HookScanner {#hookscanner-integration}

Izakhono ze-`create_plugin` kunye ne-`update_plugin` ziqhuba ngokuzenzekelayo i-**HookScanner** ngokuchasene nekhowudi esandul’ ukuveliswa. HookScanner ibuyisa uluhlu lweehook ze-action kunye ne-filter ze-WordPress ezibhaliswe yi-plugin.

Ukufumana iziphumo ze-HookScanner ngenkqubo:

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

HookScanner itsiba ngokuzenzekelayo oovimba bolawulo be-`vendor/` kunye ne-`node_modules/`.

## Uyilo Lwemisebenzi ye-Async {#async-job-architecture}

Imisebenzi ye-plugin ethatha ixesha elide (ukuvelisa, ukufaka) ithunyelwa njenge-**misebenzi ye-async** enokulandelwa kwenkqubela ephilayo. Ujongano lwengxoxo lwe-AI luhlola inkqubela kwaye lusasaze uhlaziyo lwesimo kumsebenzisi:

1. **Thumela** — isakhono senza umsebenzi we-async size sibuyise i-ID yomsebenzi.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Sasaza** — imiyalezo yenkqubela ephakathi ityhalelwa kumsonto wengxoxo.
4. **Gqiba** — isiphumo sokugqibela (impumelelo okanye impazamo) siyabuyiswa size siboniswe.

Ukungena kwiziganeko zomjikelo wobomi bomsebenzi:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
