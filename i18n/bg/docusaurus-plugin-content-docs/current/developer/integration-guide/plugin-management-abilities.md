---
title: Способности за управление на плагини
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Способности за управление на плагини

Gratis AI Agent v1.5.0 включва **7 способности за управление на плагини**, които AI асистентът може да използва по време на разговор. Тези способности предоставят програмируем контрол върху плагините, инсталирани в WordPress чрез [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Преглед на способностите {#abilities-overview}

| Способност | Slug | Описание |
|---|---|---|
| List Plugins | `list_plugins` | Връща списък на плагините в sandbox магазина, заедно със статуса им. |
| Get Plugin | `get_plugin` | Извлича метаданни и изходен код за конкретен плагин, използвайки неговия slug. |
| Create Plugin | `create_plugin` | Генерира нов плагин въз основа на описание и го съхранява в sandbox. |
| Update Plugin | `update_plugin` | Замества изходния код на плагин с нова версия. |
| Delete Plugin | `delete_plugin` | Изтрива плагин от sandbox магазина. Първо го деактивира. |
| Install Plugin | `install_plugin` | Разполага (инсталира) плагин от sandbox в директорията на плагините на работещия WordPress. |
| Activate Plugin | `activate_plugin` | Активира плагин от sandbox в средата wp-env sandbox. |

## API за инсталиране на плагини {#plugin-installer-api}

Инсталиращият плагини обработва операции във файловата система, когато разполага или изтрива плагини. Основните му характеристики са:

- **Валидация на пътя**: Всички пътища на плагини се валидират спрямо разрешената директория за плагини, преди да се запише някакъв файл. Опитите за преминаване на директории (directory traversal) са отклонени.
- **Инсталиране на множество файлове**: Плагинът може да се състои от множество файлове. Инсталиращият създава директорията на плагина и записва всички файлове атомарно.
- **Актуализация**: Замества съществуващите файлове на плагина. Деактивира плагина преди записване, за да избегне грешки от частичен състояние.
- **Изтриване по slug**: Намира директорията на плагина по неговия slug, го деактивира във всички сайтове, след което изтрива директорията.

### Регистриране на персонализиран обработчик за инсталиране {#registering-a-custom-install-handler}

Можете да се прикрепите към цикъла на инсталиране, използвайки действията `gratis_ai_plugin_installer_before_install` и `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: име на директорията на плагина
    // $files: асоциативен масив от относителна пътека => съдържание на файла
    error_log("Инсталиране на плагин: {$slug} с " . count($files) . " файла.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Плагинът {$slug} беше инсталиран успешно.");
    }
}, 10, 2);
```

## Регистър на екосистемата {#ecosystem-registry}

Способностите се регистрират чрез **регистъра на екосистемата на плагини**. Регистърът свързва (мапира) slug-ове на способностите към техните класове обработчици и ги предоставя на диспетчъра на инструменти на AI агента.

За да регистрирате персонализирана способност за управление на плагини:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Моята персонализирана способност',
        'description' => 'Прави нещо полезно с плагини.',
    ];
    return $abilities;
});
```

Вашият клас за способност трябва да имплементира `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Прави нещо полезно с плагини.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug на плагина, върху който се работи.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... вашата имплементация ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Интеграция с HookScanner {#hookscanner-integration}

Способностите `create_plugin` и `update_plugin` автоматично изпълняват **HookScanner** върху новогенерирания код. HookScanner връща списък с WordPress действия (actions) и филтри (filters), регистрирани от плагина.

За да извлечете резултатите от HookScanner програмно:

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

HookScanner автоматично пропуска директориите `vendor/` и `node_modules/`.

## Архитектура на асинхронните задачи {#async-job-architecture}

Дългопродължителните операции с плагини (генериране, инсталиране) се изпращат като **асинхронни задачи** с проследяване на напредъка в реално време. Интерфейсът за чат на AI проверява напредъка и изпраща статуси на потребителя:

1. **Изпращане (Dispatch)** — способността създава асинхронна задача и връща ID на задачата.
2. **Проверка (Poll)** — агентът проверява `gratis_ai_job_status($job_id)` на всеки 2 секунди.
3. **Поток (Stream)** — междинните съобщения за напредъка се изпращат в чат разговора.
4. **Завършване (Complete)** — крайният резултат (успех или грешка) се връща и се показва.

За да се прикрепите към събития в цикъла на живота на задачите:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Задачата {$job_id} започна за способност: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Задачата {$job_id} приключи. Успех: " . ($result['success'] ? 'да' : 'не'));
}, 10, 2);
```
