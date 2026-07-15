---
title: Плагиннар белән идарә итү мөмкинлекләре
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Плагиннар белән идарә итү мөмкинлекләре

Gratis AI Agent v1.5.0 сөйләшү вакытында ЯИ ярдәмчесе чакыра ала торган **плагиннар белән идарә итүнең 7 мөмкинлеге** белән килә. Бу мөмкинлекләр [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) аша урнаштырылган WordPress плагиннары өстеннән программалы контроль бирә.

## Мөмкинлекләр күзәтүе {#abilities-overview}

| Мөмкинлек | Слаг | Тасвирлама |
|---|---|---|
| Плагиннарны күрсәтү | `list_plugins` | Сандбокс саклагычындагы плагиннар исемлеген аларның статусы белән кайтара. |
| Плагинны алу | `get_plugin` | Билгеле бер плагин өчен метамәгълүматны һәм чыганак кодын слаг буенча ала. |
| Плагин булдыру | `create_plugin` | Тасвирламадан яңа плагин ясый һәм аны сандбокста саклый. |
| Плагинны яңарту | `update_plugin` | Плагинның чыганак кодын яңа версия белән алыштыра. |
| Плагинны бетерү | `delete_plugin` | Плагинны сандбокс саклагычыннан бетерә. Башта деактивацияли. |
| Плагинны урнаштыру | `install_plugin` | Сандбокстагы плагинны тере WordPress плагиннар каталогына урнаштыра. |
| Плагинны активлаштыру | `activate_plugin` | Сандбокстагы плагинны wp-env сандбокс мохитендә активлаштыра. |

## Плагин урнаштыручы API {#plugin-installer-api}

Плагин урнаштыручы плагиннарны урнаштырганда яки бетергәндә файл системасы гамәлләрен башкара. Төп үз-үзен тотышлар:

- **Юлны тикшерү**: Барлык плагин юллары теләсә нинди файл язу алдыннан рөхсәт ителгән плагин каталогына каршы тикшерелә. Каталог аша үтеп керү омтылышлары кире кагыла.
- **Күп файллы урнаштыру**: Плагин берничә файлдан торырга мөмкин. Урнаштыручы плагин каталогын булдыра һәм барлык файлларны атомар рәвештә яза.
- **Яңарту**: Булган плагин файлларын алыштыра. Өлешчә халәт хаталарын булдырмас өчен, язу алдыннан плагинны деактивацияли.
- **Слаг буенча бетерү**: Плагин каталогын слаг буенча таба, барлык сайтларда деактивацияли, аннары каталогны бетерә.

### Махсус урнаштыру эшкәрткечен теркәү {#registering-a-custom-install-handler}

Урнаштыруның яшәү циклына `gratis_ai_plugin_installer_before_install` һәм `gratis_ai_plugin_installer_after_install` гамәлләре ярдәмендә тоташа аласыз:

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

## Экосистема реестры {#ecosystem-registry}

Мөмкинлекләр **плагин экосистемасы реестры** аша теркәлә. Реестр мөмкинлек слагларын аларның эшкәрткеч классларына бәйли һәм аларны ЯИ агентының корал диспетчерына ача.

Махсус плагин идарәсе мөмкинлеген теркәү өчен:

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

Сезнең мөмкинлек классы `Gratis_AI_Ability_Interface` гамәлгә ашырырга тиеш:

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

## HookScanner интеграциясе {#hookscanner-integration}

`create_plugin` һәм `update_plugin` мөмкинлекләре яңа ясалган кодка автомат рәвештә **HookScanner** эшләтә. HookScanner плагин тарафыннан теркәлгән WordPress гамәл һәм фильтр элмәкләре исемлеген кайтара.

HookScanner нәтиҗәләрен программалы рәвештә алу өчен:

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

HookScanner `vendor/` һәм `node_modules/` каталогларын автомат рәвештә үткәреп җибәрә.

## Асинхрон эшләр архитектурасы {#async-job-architecture}

Озак дәвамлы плагин гамәлләре (ясау, урнаштыру) тере прогресс күзәтүе белән **асинхрон эшләр** буларак җибәрелә. ЯИ чат интерфейсы прогрессны сораштыра һәм статус яңартуларын кулланучыга агым итеп күрсәтә:

1. **Җибәрү** — мөмкинлек асинхрон эш булдыра һәм эш ID кайтара.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Агым** — арадаш прогресс хәбәрләре чат җебенә җибәрелә.
4. **Тәмамлау** — соңгы нәтиҗә (уңыш яки хата) кайтарыла һәм күрсәтелә.

Эшнең яшәү циклы вакыйгаларына тоташу өчен:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
