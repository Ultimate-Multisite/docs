---
title: Плагин удирдах боломжууд
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Удирдлагын чадварууд

Gratis AI Agent v1.5.0 нь ярианы явцад AI туслах дуудаж ашиглаж болох **plugin удирдлагын 7 чадвар**-тай ирдэг. Эдгээр чадварууд нь [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox)-ээр дамжуулан суулгасан WordPress plugin-уудыг програмчлалын аргаар удирдах боломж олгодог.

## Чадваруудын тойм

| Чадвар | Slug | Тайлбар |
|---|---|---|
| Plugin-уудыг жагсаах | `list_plugins` | Sandbox хадгалах сан дахь plugin-уудын жагсаалтыг төлөвийн хамт буцаана. |
| Plugin авах | `get_plugin` | Тодорхой plugin-ийн мета өгөгдөл болон эх кодыг slug-аар нь татаж авна. |
| Plugin үүсгэх | `create_plugin` | Тайлбараас шинэ plugin үүсгэж, sandbox-д хадгална. |
| Plugin шинэчлэх | `update_plugin` | Plugin-ийн эх кодыг шинэ хувилбараар солино. |
| Plugin устгах | `delete_plugin` | Sandbox хадгалах сангаас plugin-ийг устгана. Эхлээд идэвхгүй болгоно. |
| Plugin суулгах | `install_plugin` | Sandbox-д байгаа plugin-ийг ажиллаж буй WordPress plugin директорид байршуулна. |
| Plugin идэвхжүүлэх | `activate_plugin` | wp-env sandbox орчинд sandbox-д байгаа plugin-ийг идэвхжүүлнэ. |

## Plugin Суулгагч API

Plugin суулгагч нь plugin байршуулах эсвэл устгах үед файлын системийн үйлдлүүдийг зохицуулдаг. Гол зан төлөвүүд:

- **Замын баталгаажуулалт**: Аливаа файл бичихээс өмнө бүх plugin замыг зөвшөөрөгдсөн plugin директоритой тулгаж баталгаажуулна. Директорийн traversal хийх оролдлогуудыг татгалзана.
- **Олон файлтай суулгалт**: Plugin нь олон файлаас бүрдэж болно. Суулгагч нь plugin директорийг үүсгэж, бүх файлыг атомик байдлаар бичнэ.
- **Шинэчлэлт**: Одоо байгаа plugin файлуудыг солино. Хэсэгчилсэн төлөвийн алдаанаас зайлсхийхийн тулд бичихээс өмнө plugin-ийг идэвхгүй болгоно.
- **Slug-аар устгах**: Plugin директорийг slug-аар нь олж, бүх сайт дээр идэвхгүй болгосны дараа директорийг устгана.

### Захиалгат суулгалтын боловсруулагч бүртгэх

Та `gratis_ai_plugin_installer_before_install` болон `gratis_ai_plugin_installer_after_install` actions ашиглан суулгалтын амьдралын мөчлөгт холбогдож болно:

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

## Экосистемийн бүртгэл

Чадваруудыг **plugin экосистемийн бүртгэл**-ээр дамжуулан бүртгэдэг. Бүртгэл нь чадварын slug-уудыг тэдгээрийн handler class-уудтай холбож, AI agent-ийн хэрэгслийн dispatcher-т ил болгодог.

Захиалгат plugin удирдлагын чадвар бүртгэхийн тулд:

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

Таны чадварын class `Gratis_AI_Ability_Interface`-ийг хэрэгжүүлэх ёстой:

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

## HookScanner Интеграци

`create_plugin` болон `update_plugin` чадварууд нь шинээр үүсгэсэн код дээр **HookScanner**-ийг автоматаар ажиллуулдаг. HookScanner нь plugin-ээр бүртгэгдсэн WordPress action болон filter hook-уудын жагсаалтыг буцаадаг.

HookScanner-ийн үр дүнг програмчлалын аргаар авахын тулд:

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

HookScanner нь `vendor/` болон `node_modules/` директоруудыг автоматаар алгасдаг.

## Асинхрон ажлын архитектур

Удаан ажилладаг plugin үйлдлүүдийг (үүсгэх, суулгах) шууд явцын хяналттай **асинхрон ажлууд** болгон илгээдэг. AI чат интерфейс нь явцыг тогтмол шалгаж, төлөвийн шинэчлэлтүүдийг хэрэглэгч рүү урсгалаар дамжуулна:

1. **Илгээх** — чадвар нь асинхрон ажил үүсгэж, ажлын ID буцаана.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Урсгал** — завсрын явцын мессежүүдийг чат thread рүү түлхэнэ.
4. **Дуусгах** — эцсийн үр дүнг (амжилт эсвэл алдаа) буцааж, харуулна.

Ажлын амьдралын мөчлөгийн үйл явдлуудад холбогдохын тулд:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
