---
title: Возможности управления плагинами
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Возможности управления плагинами {#plugin-management-abilities}

Gratis AI Agent v1.5.0 включает **7 возможностей управления плагинами**, которые ассистент может вызвать во время разговора. Эти возможности обеспечивают программный контроль над плагинами WordPress, установленными через [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Обзор возможностей {#abilities-overview}

| Возможность | Slug | Описание |
|---|---|---|
| List Plugins | `list_plugins` | Возвращает список плагинов в хранилище песочницы со статусом. |
| Get Plugin | `get_plugin` | Получает метаданные и исходный код конкретного плагина по слагу. |
| Create Plugin | `create_plugin` | Генерирует новый плагин по описанию и сохраняет его в песочницу. |
| Update Plugin | `update_plugin` | Заменяет исходный код плагина новой версией. |
| Delete Plugin | `delete_plugin` | Удаляет плагин из хранилища песочницы. Сначала деактивирует. |
| Install Plugin | `install_plugin` | Развертывает плагин из песочницы в реальную директорию плагинов WordPress. |
| Activate Plugin | `activate_plugin` | Активирует плагин из песочницы в среде песочницы wp-env. |

## API установщика плагинов {#plugin-installer-api}

Установщик плагинов обрабатывает операции с файловой системой при развертывании или удалении плагинов. Основные особенности:

- **Проверка путей**: Все пути к плагинам проверяются на соответствие разрешенной директории плагинов до любой записи файлов. Попытки обхода директорий отклоняются.
- **Установка из нескольких файлов**: Плагин может состоять из нескольких файлов. Установщик создает директорию плагина и записывает все файлы атомарно.
- **Обновление**: Заменяет существующие файлы плагина. Деактивирует плагин перед записью, чтобы избежать ошибок частичного состояния.
- **Удаление по слагу**: Находит директорию плагина по слагу, деактивирует его на всех сайтах, а затем удаляет директорию.

### Регистрация пользовательского обработчика установки {#registering-a-custom-install-handler}

Вы можете подключиться к жизненному циклу установки, используя действия `gratis_ai_plugin_installer_before_install` и `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: имя директории плагина
    // $files: ассоциативный массив относительный путь => содержимое файла
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Реестр экосистемы {#ecosystem-registry}

Возможности регистрируются через **реестр экосистемы плагинов**. Реестр сопоставляет слоги возможностей с их обработчиками-классами и предоставляет их диспетчеру инструментов AI-агента.

Чтобы зарегистрировать собственную возможность управления плагинами:

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

Ваш класс возможности должен реализовывать `Gratis_AI_Ability_Interface`:

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

## Интеграция с HookScanner {#hookscanner-integration}

Возможности `create_plugin` и `update_plugin` автоматически запускают **HookScanner** для только что сгенерированного кода. HookScanner возвращает список действий (actions) и фильтров (filters) WordPress, зарегистрированных плагином.

Чтобы программно получить результаты HookScanner:

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

HookScanner автоматически пропускает директории `vendor/` и `node_modules/`.

## Архитектура асинхронных задач {#async-job-architecture}

Длительные операции с плагинами (генерация, установка) отправляются как **асинхронные задачи** с отслеживанием прогресса в реальном времени. Интерфейс чата AI опрашивает статус и передает пользователю обновления статуса:

1. **Отправка (Dispatch)** — возможность создает асинхронную задачу и возвращает ID задачи.
2. **Опрос (Poll)** — агент опрашивает `gratis_ai_job_status($job_id)` каждые 2 секунды.
3. **Потоковая передача (Stream)** — промежуточные сообщения о прогрессе передаются в ветку чата.
4. **Завершение (Complete)** — возвращается и отображается окончательный результат (успех или ошибка).

Чтобы подключиться к событиям жизненного цикла задач:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
