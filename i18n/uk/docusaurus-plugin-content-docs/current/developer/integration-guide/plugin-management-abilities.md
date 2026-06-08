---
title: Здібності керування плагінами
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Можливості керування плагінами

Gratis AI Agent v1.5.0 має **7 можливостей керування плагінами**, які AI-асистент може викликати під час розмови. Ці можливості забезпечують програмний контроль над плагінами WordPress, встановленими через [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Огляд можливостей

| Можливість | Slug | Опис |
|---|---|---|
| List Plugins | `list_plugins` | Повертає список плагінів у sandbox-магазині зі статусом. |
| Get Plugin | `get_plugin` | Отримує метадані та вихідний код для конкретного плагіна за slug. |
| Create Plugin | `create_plugin` | Генерує новий плагін на основі опису та зберігає його в sandbox. |
| Update Plugin | `update_plugin` | Замінює вихідний код плагіна новою версією. |
| Delete Plugin | `delete_plugin` | Видаляє плагін із sandbox-магазину. Спочатку деактивує. |
| Install Plugin | `install_plugin` | Розгортає плагін із sandbox у живий каталог плагінів WordPress. |
| Activate Plugin | `activate_plugin` | Активує плагін із sandbox у середовищі wp-env sandbox. |

## API для встановлення плагінів

Плагін-інсталятор обробляє операції з файловою системою під час розгортання або видалення плагінів. Основні особливості:

- **Валідація шляху**: Усі шляхи плагінів валідуються на відповідність дозволеному каталогу плагінів перед будь-яким записом файлів. Спроби обходу каталогу відхиляються.
- **Встановлення кількох файлів**: Плагін може складатися з кількох файлів. Інсталятор створює каталог плагіна та записує всі файли атомарно.
- **Оновлення**: Замінює існуючі файли плагіна. Деактивує плагін перед записом, щоб уникнути помилок часткового стану.
- **Видалення за slug**: Знаходить каталог плагіна за slug, деактивує його на всіх сайтах, а потім видаляє каталог.

### Реєстрація користувацького обробника встановлення

Ви можете підключитися до життєвого циклу встановлення, використовуючи дії `gratis_ai_plugin_installer_before_install` та `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: ім'я каталогу плагіна
    // $files: асоціативний масив відносний шлях => вміст файлу
    error_log("Встановлення плагіна: {$slug} з " . count($files) . " файлами.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Плагін {$slug} успішно встановлено.");
    }
}, 10, 2);
```

## Реєстр екосистеми

Можливості реєструються через **реєстр екосистеми плагінів**. Реєстр зіставляє slug можливостей з їхніми класами-обробниками та надає їх диспетчеру інструментів AI-агента.

Щоб зареєструвати власну можливість керування плагінами:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Моя користувацька можливість',
        'description' => 'Виконує щось корисне з плагінами.',
    ];
    return $abilities;
});
```

Ваш клас можливості повинен реалізувати `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Виконує щось корисне з плагінами.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug плагіна, над яким потрібно працювати.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... ваша реалізація ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Інтеграція HookScanner

Можливості `create_plugin` та `update_plugin` автоматично запускають **HookScanner** для щойно згенерованого коду. HookScanner повертає список action та filter хуків WordPress, зареєстрованих плагіном.

Щоб програмно отримати результати HookScanner:

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

HookScanner автоматично ігнорує каталоги `vendor/` та `node_modules/`.

## Архітектура асинхронних завдань

Довготривалі операції з плагінами (генерація, встановлення) надсилаються як **асинхронні завдання** з відстеженням прогресу в реальному часі. Інтерфейс чату AI опитує статус і передає користувачеві оновлення статусу:

1. **Dispatch (Надсилання)** — можливість створює асинхронне завдання та повертає ID завдання.
2. **Poll (Опитування)** — агент опитує `gratis_ai_job_status($job_id)` кожні 2 секунди.
3. **Stream (Потік)** — проміжні повідомлення про прогрес надсилаються в чат-потік.
4. **Complete (Завершення)** — повертається та відображається кінцевий результат (успіх чи помилка).

Щоб підключитися до подій життєвого циклу завдань:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Завдання {$job_id} розпочато для можливості: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Завдання {$job_id} завершено. Успіх: " . ($result['success'] ? 'так' : 'ні'));
}, 10, 2);
```
