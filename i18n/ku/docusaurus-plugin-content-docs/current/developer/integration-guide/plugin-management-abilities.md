---
title: Şiyanên Rêvebirina Pêvekan
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Şiyanên Rêvebirina Pêvekan

Gratis AI Agent v1.5.0 bi **7 şiyanên rêvebirina pêvekan** tê ku arîkarê AI dikare di dema sohbetê de wan bi kar bîne. Ev şiyan kontrola bi bernameyî li ser pêvekên WordPress ku bi rêya [Pergala Avakerê Pêvekê û Sandbox](../../user-guide/administration/plugin-builder-and-sandbox) hatine sazkirin peyda dikin.

## Kurteya Şiyanan {#abilities-overview}

| Şiyan | Slug | Danasîn |
|---|---|---|
| Lîsteya Pêvekan | `list_plugins` | Lîsteyek ji pêvekên di depoya sandbox de bi rewşa wan vedigerîne. |
| Pêvekê Bîne | `get_plugin` | Metadata û koda çavkaniyê ya pêvekeke diyar bi slug distîne. |
| Pêvekê Biafirîne | `create_plugin` | Ji danasînekê pêvekeke nû çêdike û wê di sandbox de diparêze. |
| Pêvekê Nû Bike | `update_plugin` | Koda çavkaniyê ya pêvekê bi guhertoyeke nû diguherîne. |
| Pêvekê Jê Bibe | `delete_plugin` | Pêvekê ji depoya sandbox radike. Pêşî wê neçalak dike. |
| Pêvekê Saz Bike | `install_plugin` | Pêvekeke sandboxkirî di pelrêça zindî ya pêvekên WordPress de belav dike. |
| Pêvekê Çalak Bike | `activate_plugin` | Pêvekeke sandboxkirî di jîngeha sandbox a wp-env de çalak dike. |

## API ya Sazkerê Pêvekê {#plugin-installer-api}

Sazkerê pêvekê dema belavkirin an rakirina pêvekan karên pergala pelan birêve dibe. Reftarên sereke:

- **Piştrastkirina rêçikan**: Hemû rêçikên pêvekan berî her nivîsandina pelê li dijî pelrêça destûrdar a pêvekan têne piştrastkirin. Hewldanên derbasbûna peldankê têne redkirin.
- **Sazkirina pir-pelî**: Pêvek dikare ji çend pelan pêk were. Sazker pelrêça pêvekê çêdike û hemû pelan bi awayek atomî dinivîse.
- **Nûkirin**: Pelên pêvekê yên heyî diguherîne. Berî nivîsandinê pêvekê neçalak dike da ku xeletiyên rewşa nîvçe neçêbin.
- **Jêbirin bi slug**: Pelrêça pêvekê bi slug dibîne, li ser hemû malperan neçalak dike, paşê pelrêçê radike.

### Tomarkirina Destkarê Sazkirinê yê Taybet {#registering-a-custom-install-handler}

Tu dikarî bi karanên `gratis_ai_plugin_installer_before_install` û `gratis_ai_plugin_installer_after_install` xwe bi çerxa sazkirinê ve girê bidî:

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

## Tomara Ekosîstemê {#ecosystem-registry}

Şiyan bi rêya **tomara ekosîstema pêvekan** têne tomarkirin. Tomar slugên şiyanan bi polên destkarên wan ve girê dide û wan ji belavkerê amûrên agentê AI re eşkere dike.

Ji bo tomarkirina şiyaneke taybet a rêvebirina pêvekan:

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

Pola şiyana te divê `Gratis_AI_Ability_Interface` bicîh bîne:

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

## Yekbûna HookScanner {#hookscanner-integration}

Şiyanên `create_plugin` û `update_plugin` bi xweberî **HookScanner** li dijî koda nû hatî çêkirin dimeşînin. HookScanner lîsteyek ji hookên çalakî û filter ên WordPress ku ji aliyê pêvekê ve hatine tomarkirin vedigerîne.

Ji bo standina encamên HookScanner bi awayekî bernameyî:

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

HookScanner pelrêçên `vendor/` û `node_modules/` bi xweberî derbas dike.

## Avahiya Karên Async {#async-job-architecture}

Karên pêvekan ên demdirêj (çêkirin, sazkirin) wek **karên async** bi şopandina pêşveçûna zindî têne şandin. Rûyê sohbetê yê AI ji bo pêşveçûnê kontrol dike û nûkirinên rewşê ji bikarhêner re diherikîne:

1. **Şandin** — şiyan karekî async çêdike û nasnameya karê vedigerîne.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Herikandin** — peyamên navîn ên pêşveçûnê têne şandin nav mijara sohbetê.
4. **Qedandin** — encama dawî (serkeftin an xeletî) tê vegerandin û nîşandan.

Ji bo girêdana bi bûyerên çerxa jiyana karê:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
