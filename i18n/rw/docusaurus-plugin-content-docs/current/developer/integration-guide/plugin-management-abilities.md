---
title: Ubushobozi bwo Gucunga Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Ubushobozi bwo Gucunga Imigereka {#plugin-management-abilities}

Gratis AI Agent v1.5.0 izana **ubushobozi 7 bwo gucunga imigereka** umufasha wa AI ashobora gukoresha mu kiganiro. Ubu bushobozi butanga igenzura rishingiye kuri porogaramu ku migereka ya WordPress yashyizweho binyuze muri [Sisitemu yo Kubaka Imigereka na Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Incamake y'Ubushobozi {#abilities-overview}

| Ubushobozi | Slug | Ibisobanuro |
|---|---|---|
| Tondeka Imigereka | `list_plugins` | Isubiza urutonde rw'imigereka iri mu bubiko bwa sandbox hamwe n'imiterere yayo. |
| Bona Umugereka | `get_plugin` | Izana metadata na code y'inkomoko by'umugereka runaka hakoreshejwe slug. |
| Rema Umugereka | `create_plugin` | Ikora umugereka mushya uhereye ku bisobanuro ikawubika muri sandbox. |
| Vugurura Umugereka | `update_plugin` | Isimbuza code y'inkomoko y'umugereka verisiyo nshya. |
| Siba Umugereka | `delete_plugin` | Ikuraho umugereka mu bubiko bwa sandbox. Ibanza kuwuhagarika. |
| Shyiraho Umugereka | `install_plugin` | Ishyira umugereka wo muri sandbox mu bubiko bw'imigereka bwa WordPress bukora. |
| Koresha Umugereka | `activate_plugin` | Ikoresha umugereka wo muri sandbox mu bidukikije bya sandbox bya wp-env. |

## API yo Gushyiraho Umugereka {#plugin-installer-api}

Ishyiraho ry'umugereka rikemura ibikorwa bya sisitemu y'amadosiye igihe hashyirwaho cyangwa hakurwaho imigereka. Imyitwarire y'ingenzi:

- **Kugenzura inzira**: Inzira zose z'imigereka zigenzurwa zigereranywa n'ububiko bw'imigereka bwemewe mbere y'uko dosiye iyo ari yo yose yandikwa. Igerageza ryo kunyura mu bubiko ritwaje amayeri rirangwa.
- **Gushyiraho amadosiye menshi**: Umugereka ushobora kuba ugizwe n'amadosiye menshi. Ishyiraho rirema ububiko bw'umugereka rikandika amadosiye yose mu buryo bwa atomike.
- **Kuvugurura**: Isimbuza amadosiye y'umugereka asanzwe. Ihagarika umugereka mbere yo kwandika kugira ngo hirindwe amakosa y'imiterere ituzuye.
- **Gusiba hakoreshejwe slug**: Ishaka ububiko bw'umugereka hakoreshejwe slug, ikawuhagarika ku mbuga zose, hanyuma igakuraho ubwo bubiko.

### Kwiyandikisha Handler Yihariye yo Gushyiraho {#registering-a-custom-install-handler}

Ushobora kwinjira mu ruzinduko rw'ishyiraho ukoresheje ibikorwa bya `gratis_ai_plugin_installer_before_install` na `gratis_ai_plugin_installer_after_install`:

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

## Registry y'Ekosistemu {#ecosystem-registry}

Ubushobozi bwandikishwa binyuze muri **registry y'ekosistemu y'imigereka**. Registry ihuza slugs z'ubushobozi n'ibyiciro bya handler byabwo kandi ikabwereka dispatcher y'ibikoresho ya AI agent.

Kugira ngo wandikishe ubushobozi bwihariye bwo gucunga imigereka:

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

Icyiciro cy'ubushobozi bwawe kigomba gushyira mu bikorwa `Gratis_AI_Ability_Interface`:

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

## Ihuzabikorwa rya HookScanner {#hookscanner-integration}

Ubushobozi bwa `create_plugin` na `update_plugin` buhita bukoresha **HookScanner** kuri code nshya yakozwe. HookScanner isubiza urutonde rwa WordPress action na filter hooks zanditswe n'umugereka.

Kuzana ibisubizo bya HookScanner ukoresheje porogaramu:

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

HookScanner yirengagiza ububiko bwa `vendor/` na `node_modules/` mu buryo bwikora.

## Imiterere y'Imirimo ya Async {#async-job-architecture}

Ibikorwa by'imigereka bifata igihe kirekire (gukora, gushyiraho) byoherezwa nka **imirimo ya async** ifite ikurikirana ry'iterambere ririho. Imigaragarire y'ibiganiro bya AI ibaza iterambere kenshi kandi ikohereza ivugururwa ry'imiterere ku mukoresha:

1. **Kohereza** — ubushobozi burema umurimo wa async bukagarura job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Gusakaza** — ubutumwa bw'iterambere bwo hagati bwoherezwa mu murongo w'ikiganiro.
4. **Kurangiza** — igisubizo cya nyuma (intsinzi cyangwa ikosa) kigarurwa kandi kikerekanwa.

Kugira ngo winjire mu byabaye mu ruzinduko rw'umurimo:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
