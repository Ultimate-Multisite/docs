---
title: Amakhono Okuphatha ama-Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Amakhono Okuphatha Ama-plugin

Gratis AI Agent v1.5.0 iza **namakhono angu-7 okuphatha ama-plugin** umsizi we-AI angawasebenzisa phakathi nengxoxo. Lawa makhono ahlinzeka ngokulawula kohlelo ama-plugin e-WordPress afakwe nge-[Uhlelo Lokwakha Ama-plugin ne-Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Uhlolojikelele Lwamakhono {#abilities-overview}

| Ikhono | Slug | Incazelo |
|---|---|---|
| Faka Ohlwini Ama-plugin | `list_plugins` | Ibuyisa uhlu lwama-plugin esitolo se-sandbox nesimo sawo. |
| Thola I-plugin | `get_plugin` | Ilanda imethadatha nekhodi yomthombo ye-plugin ethile nge-slug. |
| Dala I-plugin | `create_plugin` | Ikhiqiza i-plugin entsha kusuka encazelweni bese iyigcina ku-sandbox. |
| Buyekeza I-plugin | `update_plugin` | Ishintsha ikhodi yomthombo ye-plugin ngenguqulo entsha. |
| Susa I-plugin | `delete_plugin` | Isusa i-plugin esitolo se-sandbox. Iyikhubaza kuqala. |
| Faka I-plugin | `install_plugin` | Ithumela i-plugin ese-sandbox ohlwini lwama-plugin e-WordPress aphilayo. |
| Vula I-plugin | `activate_plugin` | Ivula i-plugin ese-sandbox endaweni ye-sandbox ye-wp-env. |

## I-API Yokufaka Ama-plugin {#plugin-installer-api}

Isifaki se-plugin siphatha imisebenzi yesistimu yamafayela lapho kuthunyelwa noma kususwa ama-plugin. Ukuziphatha okubalulekile:

- **Ukuqinisekiswa kwendlela**: Zonke izindlela zama-plugin ziqinisekiswa ngokuqhathaniswa nohlu lwama-plugin oluvunyelwe ngaphambi kwanoma yikuphi ukubhala ifayela. Imizamo yokuhamba phakathi kwezinhla iyenqatshwa.
- **Ukufaka amafayela amaningi**: I-plugin ingase ibe namafayela amaningi. Isifaki sidala uhla lwe-plugin bese sibhala wonke amafayela ngendlela ye-atomic.
- **Ukubuyekeza**: Kushintsha amafayela e-plugin akhona. Kukhubaza i-plugin ngaphambi kokubhala ukuze kugwenywe amaphutha esimo esingaphelele.
- **Susa nge-slug**: Kuthola uhla lwe-plugin nge-slug, kukhubaze kuwo wonke amasayithi, bese kususa uhla.

### Ukubhalisa Isiphathi Sokufaka Esenziwe Ngokwezifiso {#registering-a-custom-install-handler}

Ungaxhuma emjikelezweni wokufaka usebenzisa ama-action `gratis_ai_plugin_installer_before_install` kanye `gratis_ai_plugin_installer_after_install`:

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

## Irejista Ye-ecosystem {#ecosystem-registry}

Amakhono abhaliswa nge-**rejista ye-ecosystem yama-plugin**. Irejista imephu ama-slug wamakhono emakilasini awo okuphatha futhi iwaveze ku-dispatcher yamathuluzi ye-agent ye-AI.

Ukubhalisa ikhono lokuphatha ama-plugin elenziwe ngokwezifiso:

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

Ikilasi lakho lekhono kufanele lisebenzise i-`Gratis_AI_Ability_Interface`:

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

## Ukuhlanganiswa kwe-HookScanner {#hookscanner-integration}

Amakhono `create_plugin` kanye `update_plugin` asebenzisa ngokuzenzakalelayo i-**HookScanner** ekhodini esanda kukhiqizwa. I-HookScanner ibuyisa uhlu lwama-hook e-action nama-filter e-WordPress abhaliswe yi-plugin.

Ukulanda imiphumela ye-HookScanner ngendlela yohlelo:

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

I-HookScanner yeqa ngokuzenzakalelayo izinhla ze-`vendor/` kanye `node_modules/`.

## Ukwakhiwa Kwemisebenzi ye-Async {#async-job-architecture}

Imisebenzi yama-plugin ethatha isikhathi eside (ukukhiqiza, ukufaka) ithunyelwa njenge-**misebenzi ye-async** enokulandelela inqubekelaphambili bukhoma. Isixhumi sengxoxo ye-AI sihlola inqubekelaphambili bese sisakaza izibuyekezo zesimo kumsebenzisi:

1. **Thumela** — ikhono lidala umsebenzi we-async bese libuyisa i-ID yomsebenzi.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Sakaza** — imilayezo yenqubekelaphambili ephakathi iyaphushwa kuchungechunge lwengxoxo.
4. **Qedela** — umphumela wokugcina (impumelelo noma iphutha) uyabuyiswa futhi uboniswe.

Ukuxhuma emicimbini yomjikelezo wempilo womsebenzi:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
