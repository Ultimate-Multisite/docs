---
title: Kapaċitajiet ta’ Ġestjoni tal-Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kapaċitajiet ta' Ġestjoni tal-Plugins

Gratis AI Agent v1.5.0 jiġi b'**7 kapaċitajiet ta' ġestjoni tal-plugins** li l-assistent AI jista' jsejjaħ waqt konverżazzjoni. Dawn il-kapaċitajiet jipprovdu kontroll programmatiku fuq plugins ta' WordPress installati permezz tas-[Sistema Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Ħarsa Ġenerali lejn il-Kapaċitajiet {#abilities-overview}

| Kapaċità | Slug | Deskrizzjoni |
|---|---|---|
| Elenka l-Plugins | `list_plugins` | Jirritorna lista ta' plugins fil-maħżen sandbox bl-istatus tagħhom. |
| Ikseb Plugin | `get_plugin` | Jiġbed metadata u kodiċi sors għal plugin speċifiku skont slug. |
| Oħloq Plugin | `create_plugin` | Jiġġenera plugin ġdid minn deskrizzjoni u jaħżnu fis-sandbox. |
| Aġġorna Plugin | `update_plugin` | Jissostitwixxi l-kodiċi sors ta' plugin b'verżjoni ġdida. |
| Ħassar Plugin | `delete_plugin` | Ineħħi plugin mill-maħżen sandbox. Jiddiżattivah l-ewwel. |
| Installa Plugin | `install_plugin` | Jiskjera plugin sandboxed fid-direttorju tal-plugins live ta' WordPress. |
| Attiva Plugin | `activate_plugin` | Jattiva plugin sandboxed fl-ambjent sandbox wp-env. |

## API tal-Installatur tal-Plugins {#plugin-installer-api}

L-installatur tal-plugins jimmaniġġja operazzjonijiet tas-sistema tal-fajls meta jiskjera jew ineħħi plugins. Imġiba ewlenija:

- **Validazzjoni tal-path**: Il-paths kollha tal-plugins jiġu vvalidati kontra d-direttorju tal-plugins permess qabel kwalunkwe kitba ta' fajl. Tentattivi ta' directory traversal jiġu miċħuda.
- **Installazzjoni b'ħafna fajls**: Plugin jista' jikkonsisti f'ħafna fajls. L-installatur joħloq id-direttorju tal-plugin u jikteb il-fajls kollha b'mod atomiku.
- **Aġġornament**: Jissostitwixxi fajls eżistenti tal-plugin. Jiddiżattiva l-plugin qabel il-kitba biex jiġu evitati żbalji ta' stat parzjali.
- **Tħassir skont slug**: Isib id-direttorju tal-plugin skont slug, jiddiżattiva fuq is-siti kollha, imbagħad ineħħi d-direttorju.

### Reġistrazzjoni ta' Handler ta' Installazzjoni Personalizzat {#registering-a-custom-install-handler}

Tista' tidħol fiċ-ċiklu tal-ħajja tal-installazzjoni billi tuża l-azzjonijiet `gratis_ai_plugin_installer_before_install` u `gratis_ai_plugin_installer_after_install`:

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

## Reġistru tal-Ekosistema {#ecosystem-registry}

Il-kapaċitajiet jiġu rreġistrati permezz tar-**reġistru tal-ekosistema tal-plugins**. Ir-reġistru jimmappja slugs tal-kapaċitajiet mal-classes tal-handlers tagħhom u jesponihom lid-dispatcher tal-għodod tal-aġent AI.

Biex tirreġistra kapaċità personalizzata ta' ġestjoni tal-plugins:

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

Il-class tal-kapaċità tiegħek trid timplimenta l-`Gratis_AI_Ability_Interface`:

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

## Integrazzjoni ma' HookScanner {#hookscanner-integration}

Il-kapaċitajiet `create_plugin` u `update_plugin` iħaddmu awtomatikament il-**HookScanner** kontra kodiċi ġġenerat ġdid. HookScanner jirritorna lista ta' hooks ta' azzjoni u filtri ta' WordPress irreġistrati mill-plugin.

Biex tikseb ir-riżultati ta' HookScanner b'mod programmatiku:

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

HookScanner jaqbeż id-direttorji `vendor/` u `node_modules/` awtomatikament.

## Arkitettura ta' Xogħlijiet Asinkroniċi {#async-job-architecture}

Operazzjonijiet tal-plugins li jdumu (ġenerazzjoni, installazzjoni) jintbagħtu bħala **xogħlijiet asinkroniċi** b'intraċċar live tal-progress. L-interface taċ-chat AI jivverifika l-progress u jxandar aġġornamenti tal-istatus lill-utent:

1. **Ibgħat** — il-kapaċità toħloq xogħol asinkroniku u tirritorna ID tax-xogħol.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Xandar** — messaġġi intermedji tal-progress jiġu mbuttati fit-thread taċ-chat.
4. **Tlesti** — ir-riżultat finali (suċċess jew żball) jiġi rritornat u muri.

Biex tidħol fl-avvenimenti taċ-ċiklu tal-ħajja tax-xogħol:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
