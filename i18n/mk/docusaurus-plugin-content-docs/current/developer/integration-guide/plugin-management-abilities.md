---
title: Способности за управување со приклучоци
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Способности за управување со plugin

Gratis AI Agent v1.5.0 доаѓа со **7 способности за управување со plugin** што AI асистентот може да ги повика за време на разговор. Овие способности обезбедуваат програмска контрола врз WordPress plugin-и инсталирани преку [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Преглед на способности {#abilities-overview}

| Способност | Slug | Опис |
|---|---|---|
| Листај plugin-и | `list_plugins` | Враќа листа на plugin-и во sandbox складиштето со нивниот статус. |
| Земи plugin | `get_plugin` | Презема метаподатоци и изворен код за конкретен plugin според slug. |
| Креирај plugin | `create_plugin` | Генерира нов plugin од опис и го складира во sandbox. |
| Ажурирај plugin | `update_plugin` | Го заменува изворниот код на plugin со нова верзија. |
| Избриши plugin | `delete_plugin` | Отстранува plugin од sandbox складиштето. Прво го деактивира. |
| Инсталирај plugin | `install_plugin` | Распоредува sandbox plugin во живиот WordPress plugin директориум. |
| Активирај plugin | `activate_plugin` | Активира sandbox plugin во wp-env sandbox околината. |

## API за инсталирање plugin-и {#plugin-installer-api}

Инсталаторот на plugin-и управува со операции на датотечниот систем при распоредување или отстранување plugin-и. Клучни однесувања:

- **Валидација на патека**: Сите патеки на plugin-и се валидираат во однос на дозволениот plugin директориум пред какво било запишување датотека. Обидите за премин низ директориуми се одбиваат.
- **Инсталација со повеќе датотеки**: Plugin може да се состои од повеќе датотеки. Инсталаторот го креира plugin директориумот и ги запишува сите датотеки атомски.
- **Ажурирање**: Ги заменува постојните plugin датотеки. Го деактивира plugin пред запишување за да избегне грешки со делумна состојба.
- **Бришење според slug**: Го лоцира plugin директориумот според slug, деактивира на сите сајтови, потоа го отстранува директориумот.

### Регистрирање приспособен обработувач за инсталација {#registering-a-custom-install-handler}

Можете да се поврзете во животниот циклус на инсталација користејќи ги акциите `gratis_ai_plugin_installer_before_install` и `gratis_ai_plugin_installer_after_install`:

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

## Регистар на екосистемот {#ecosystem-registry}

Способностите се регистрираат преку **регистарот на plugin екосистемот**. Регистарот ги мапира slug-овите на способности со нивните класи-обработувачи и ги изложува на диспечерот на алатки на AI агентот.

За да регистрирате приспособена способност за управување со plugin:

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

Вашата класа за способност мора да го имплементира `Gratis_AI_Ability_Interface`:

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

## Интеграција со HookScanner {#hookscanner-integration}

Способностите `create_plugin` и `update_plugin` автоматски го извршуваат **HookScanner** врз новогенерираниот код. HookScanner враќа листа на WordPress action и filter hooks регистрирани од plugin-от.

За програмски да ги преземете резултатите од HookScanner:

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

HookScanner автоматски ги прескокнува директориумите `vendor/` и `node_modules/`.

## Архитектура на асинхрони задачи {#async-job-architecture}

Долготрајните plugin операции (генерирање, инсталација) се испраќаат како **асинхрони задачи** со следење на напредокот во живо. AI chat интерфејсот анкетира за напредок и стримува ажурирања на статусот до корисникот:

1. **Испраќање** — способноста креира асинхрона задача и враќа ID на задача.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Стрим** — меѓуфазните пораки за напредок се туркаат во chat нишката.
4. **Завршување** — финалниот резултат (успех или грешка) се враќа и прикажува.

За да се поврзете во настаните од животниот циклус на задачата:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
