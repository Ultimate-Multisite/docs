---
title: Kuthekera Koyang'anira Ma Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kuthekera Koyang'anira Mapulogalamu Owonjezera

Gratis AI Agent v1.5.0 imabwera ndi **kuthekera 7 koyang'anira mapulogalamu owonjezera** komwe wothandizira wa AI angayambitse pa zokambirana. Kuthekera kumeneku kumapereka ulamuliro wa mapulogalamu pa mapulogalamu owonjezera a WordPress omwe aikidwa kudzera mu [Dongosolo Lopangira Mapulogalamu Owonjezera ndi Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Chidule cha Kuthekera

| Kuthekera | Slug | Kufotokozera |
|---|---|---|
| Lembani Mapulogalamu Owonjezera | `list_plugins` | Imabweza mndandanda wa mapulogalamu owonjezera omwe ali mu sitolo ya sandbox limodzi ndi momwe alili. |
| Pezani Pulogalamu Yowonjezera | `get_plugin` | Imatenga metadata ndi source code ya pulogalamu yowonjezera inayake pogwiritsa ntchito slug. |
| Pangani Pulogalamu Yowonjezera | `create_plugin` | Imapanga pulogalamu yowonjezera yatsopano kuchokera ku kufotokozera ndipo imaisunga mu sandbox. |
| Sinthani Pulogalamu Yowonjezera | `update_plugin` | Imalowetsa source code ya pulogalamu yowonjezera ndi mtundu watsopano. |
| Chotsani Pulogalamu Yowonjezera | `delete_plugin` | Imachotsa pulogalamu yowonjezera ku sitolo ya sandbox. Imayimitsa kaye. |
| Ikani Pulogalamu Yowonjezera | `install_plugin` | Imatumiza pulogalamu yowonjezera ya mu sandbox ku directory ya mapulogalamu owonjezera a WordPress omwe akugwira ntchito. |
| Yambitsani Pulogalamu Yowonjezera | `activate_plugin` | Imayambitsa pulogalamu yowonjezera ya mu sandbox m'malo a wp-env sandbox. |

## API Yoikira Mapulogalamu Owonjezera

Woikira mapulogalamu owonjezera amasamalira ntchito za file system pamene akutumiza kapena kuchotsa mapulogalamu owonjezera. Makhalidwe ofunika:

- **Kutsimikizira path**: Ma path onse a mapulogalamu owonjezera amatsimikiziridwa motsutsana ndi directory ya mapulogalamu owonjezera yololedwa musanalembe fayilo iliyonse. Zoyesayesa zodutsa ma directory zimakanidwa.
- **Kuyika mafayilo angapo**: Pulogalamu yowonjezera ikhoza kukhala ndi mafayilo angapo. Woikira amapanga directory ya pulogalamu yowonjezera ndipo amalemba mafayilo onse mwadongosolo limodzi.
- **Kusintha**: Imalowetsa mafayilo a pulogalamu yowonjezera omwe alipo. Imayimitsa pulogalamu yowonjezera musanalembe kuti mupewe zolakwika za mkhalidwe wosakwanira.
- **Kuchotsa pogwiritsa ntchito slug**: Imapeza directory ya pulogalamu yowonjezera pogwiritsa ntchito slug, imayimitsa pa masaiti onse, kenako imachotsa directory.

### Kulembetsa Wosamalira Kuyika Wanu

Mutha kulumikizana ndi lifecycle ya kuyika pogwiritsa ntchito ma action a `gratis_ai_plugin_installer_before_install` ndi `gratis_ai_plugin_installer_after_install`:

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

## Registry ya Ecosystem

Kuthekera kumalembetsedwa kudzera mu **registry ya ecosystem ya mapulogalamu owonjezera**. Registry imalumikiza ma slug a kuthekera ndi ma class awo osamalira ndipo imawawonetsa ku tool dispatcher ya agent wa AI.

Kuti mulembetse kuthekera kwanu koyang'anira mapulogalamu owonjezera:

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

Class ya kuthekera kwanu iyenera kukhazikitsa `Gratis_AI_Ability_Interface`:

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

## Kuphatikizana kwa HookScanner

Kuthekera kwa `create_plugin` ndi `update_plugin` kumayendetsa **HookScanner** mwadzidzidzi pa code yomwe yangopangidwa kumene. HookScanner imabweza mndandanda wa ma hook a action ndi filter a WordPress omwe alembetsedwa ndi pulogalamu yowonjezera.

Kuti mutenge zotsatira za HookScanner mwa mapulogalamu:

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

HookScanner imadumpha ma directory a `vendor/` ndi `node_modules/` mwadzidzidzi.

## Kamangidwe ka Ntchito za Async

Ntchito za mapulogalamu owonjezera zomwe zimatenga nthawi yaitali (kupanga, kuyika) zimatumizidwa ngati **ntchito za async** zokhala ndi kutsatira patsogolo pompopompo. Chat interface ya AI imafufuza patsogolo ndipo imatumiza zosintha za mkhalidwe kwa wogwiritsa ntchito:

1. **Kutumiza** — kuthekera kumapanga ntchito ya async ndipo kumabweza ID ya ntchito.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Kutsitsa uthenga** — mauthenga apakati a kupita patsogolo amakankhidwira ku thread ya chat.
4. **Kumaliza** — zotsatira zomaliza (kupambana kapena cholakwika) zimabwezedwa ndi kuwonetsedwa.

Kuti mulumikizane ndi zochitika za lifecycle ya ntchito:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
