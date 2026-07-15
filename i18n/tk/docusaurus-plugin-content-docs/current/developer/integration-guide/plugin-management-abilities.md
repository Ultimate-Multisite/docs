---
title: Pluginleri dolandyrmak mümkinçilikleri
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin dolandyryş mümkinçilikleri

Gratis AI Agent v1.5.0 söhbet wagtynda AI kömekçisiniň çagyryp bilýän **7 plugin dolandyryş mümkinçiligi** bilen gelýär. Bu mümkinçilikler [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) arkaly gurnalan WordPress plugin-lerine programmalaýyn gözegçiligi üpjün edýär.

## Mümkinçilikleriň syny {#abilities-overview}

| Mümkinçilik | Slug | Düşündiriş |
|---|---|---|
| Plugin-leri sanamak | `list_plugins` | Sandbox ammaryndaky plugin-leriň sanawyny olaryň ýagdaýy bilen gaýtarýar. |
| Plugin almak | `get_plugin` | Belli bir plugin üçin slug boýunça metadata we çeşme koduny alýar. |
| Plugin döretmek | `create_plugin` | Düşündirişden täze plugin döredýär we ony sandbox-da saklaýar. |
| Plugin täzelemek | `update_plugin` | Plugin-iň çeşme koduny täze wersiýa bilen çalyşýar. |
| Plugin pozmak | `delete_plugin` | Plugin-i sandbox ammaryndan aýyrýar. Ilki bilen ony deaktiwleşdirýär. |
| Plugin gurnamak | `install_plugin` | Sandbox-daky plugin-i janly WordPress plugin katalogyna ýerleşdirýär. |
| Plugin aktiwleşdirmek | `activate_plugin` | Sandbox-daky plugin-i wp-env sandbox gurşawynda aktiwleşdirýär. |

## Plugin Installer API {#plugin-installer-api}

Plugin installer plugin-leri ýerleşdirende ýa-da aýyranda faýl ulgamy amallaryny dolandyrýar. Esasy özüni alyp baryşlar:

- **Ýol barlagy**: Islendik faýl ýazylmazdan öň ähli plugin ýollary rugsat berlen plugin katalogy bilen deňeşdirilip barlanýar. Katalogdan çykmaga synanyşyklar ret edilýär.
- **Köp faýlly gurnama**: Plugin birnäçe faýldan ybarat bolup biler. Installer plugin katalogyny döredýär we ähli faýllary atomlaýyn ýazýar.
- **Täzeleme**: Bar bolan plugin faýllaryny çalyşýar. Bölekleýin ýagdaý ýalňyşlyklaryndan gaça durmak üçin ýazmazdan öň plugin-i deaktiwleşdirýär.
- **Slug boýunça pozmak**: Plugin katalogyny slug boýunça tapýar, ähli saýtlarda deaktiwleşdirýär, soňra katalogy aýyrýar.

### Ýörite gurnama işledijisini bellige almak {#registering-a-custom-install-handler}

Gurnama ýaşaýyş aýlawyna `gratis_ai_plugin_installer_before_install` we `gratis_ai_plugin_installer_after_install` hereketleri arkaly birikdirip bilersiňiz:

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

## Ekoulgam registri {#ecosystem-registry}

Mümkinçilikler **plugin ekoulgam registri** arkaly bellige alynýar. Registr mümkinçilik slug-laryny olaryň işlediji klaslaryna baglaýar we olary AI agent-iň gural paýlaýjysyna açýar.

Ýörite plugin dolandyryş mümkinçiligini bellige almak üçin:

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

Siziň mümkinçilik klasyňyz `Gratis_AI_Ability_Interface`-i durmuşa geçirmeli:

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

## HookScanner integrasiýasy {#hookscanner-integration}

`create_plugin` we `update_plugin` mümkinçilikleri täze döredilen koda garşy awtomatik **HookScanner** işledýär. HookScanner plugin tarapyndan bellige alnan WordPress action we filter hook-larynyň sanawyny gaýtarýar.

HookScanner netijelerini programmalaýyn almak üçin:

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

HookScanner `vendor/` we `node_modules/` kataloglaryny awtomatik geçirip goýberýär.

## Async iş arhitekturasy {#async-job-architecture}

Uzak dowam edýän plugin amallary (döretmek, gurnamak) janly ösüş yzarlamasy bilen **async işler** hökmünde ugradylyp iberilýär. AI chat interfeýsi ösüş üçin soraglap durýar we ýagdaý täzelenmelerini ulanyja akdyrýar:

1. **Ugratmak** — mümkinçilik async iş döredýär we iş ID-sini gaýtarýar.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Akdyrmak** — aralyk ösüş habarlary chat sapagyna iberilýär.
4. **Tamamlamak** — ahyrky netije (üstünlik ýa-da ýalňyşlyk) gaýtarylýar we görkezilýär.

Iş ýaşaýyş aýlawy wakalaryna birikmek üçin:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
